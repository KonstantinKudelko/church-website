const faker = require("faker");
const { getAuthorFileData, getArticleFileData } = require("./file-utils");

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

/**
 * As we want to add images to our entities in development mode,
 * we have to use the upload plugin from strapi
 * where we can assign some images to a particular model.
 */
const addFielsToEntry = async (
  model,
  entry,
  { files, fileField } = { files: null, fileField: null }
) => {
  if (files && !entry[fileField]) {
    await strapi.plugins.upload.services.upload.upload({
      data: {
        ref: model,
        refId: entry.id,
        field: fileField,
      },
      files,
    });
  }
};

const createEntry = async (model, entry, fileData) => {
  try {
    const createdEntry = await strapi.query(model).create(entry);
    await addFielsToEntry(model, createdEntry, fileData);
  } catch (e) {
    console.log(e);
  }
};

/**
 * As we are using Editor.js for rich text fields,
 * it requires a specific data structure for the model.
 */
const createTextData = () => {
  const body = {
    time: Date.now(),
    blocks: [
      {
        id: Math.random().toString(32),
        type: "paragraph",
        data: {
          text: faker.lorem.paragraph(),
        },
      },
    ],
  };
  return JSON.stringify(body);
};

const createArticles = async () => {
  for (let i = 0; i < 5; i++) {
    await createEntry(
      "article",
      {
        body: createTextData(),
        title: faker.lorem.sentence(),
        excerpt: faker.lorem.sentence(),
      },
      {
        files: getArticleFileData(),
        fileField: "cover",
      }
    );
  }
};

const createTags = async () => {
  for (let i = 0; i < 5; i++) {
    await createEntry("tag", {
      title: faker.lorem.sentence(),
    });
  }
};

const createAuthors = async () => {
  for (let i = 0; i < 3; i++) {
    await createEntry(
      "author",
      {
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        description: createTextData(),
        facebookUrl: faker.internet.url(),
        instagramUrl: faker.internet.url(),
      },
      {
        files: getAuthorFileData(),
        fileField: "avatar",
      }
    );
  }
};

const updateArticlesRelations = async () => {
  const articles = await strapi.services.article.find();
  const getRandomAuthorId = async () => {
    const authors = await strapi.services.author.find();
    const randomIndex = getRandomIndex(authors);
    return authors[randomIndex].id;
  };

  const tags = await strapi.services.tag.find();
  const getRandomTagsIds = () => {
    const tagsIds = tags.map((tag) => tag.id);
    const randomIndex = getRandomIndex(tagsIds);
    return tagsIds.slice(0, randomIndex);
  };

  articles.forEach(async (article) => {
    const authorId = await getRandomAuthorId();
    await strapi.services.article.update(
      { id: article.id },
      { tags: getRandomTagsIds(), author: authorId }
    );
  });
};

const createFixtureData = async () => {
  await createTags();
  await createAuthors();
  await createArticles();
  await updateArticlesRelations();
};

module.exports = createFixtureData;
