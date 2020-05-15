"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
  const { services } = strapi;
  const authors = await services.author.find();

  if (!authors.length) {
    await services.tag.create({ title: "церковь" });
    await services.tag.create({ title: "богословие" });

    await services.author.create({
      first_name: "Евгений",
      last_name: "Бахмутский",
      facebook_url: "https://www.facebook.com/bakhmutsky",
      linkedin_url: "https://www.facebook.com/bakhmutsky",
      instagram_url: "https://www.facebook.com/bakhmutsky",
      description: "Pastor pastor pastor",
      articles: ["1"],
    });

    await services.article.create({
      title: "Церковь - это жизнь",
      body:
        "Церковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизнь",
      tags: ["1", "2"],
      author: "1",
    });
  }
};
