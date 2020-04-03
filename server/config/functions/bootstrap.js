'use strict';

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
  await strapi.services.tag.create({ title: 'церковь' });
  await strapi.services.tag.create({ title: 'богословие' });

  await strapi.services.authors.create({
    first_name: 'Евгений',
    last_name: 'Бахмутский',
    facebook_url: 'https://www.facebook.com/bakhmutsky',
    linkedin_url: 'https://www.facebook.com/bakhmutsky',
    instagram_url: 'https://www.facebook.com/bakhmutsky',
    description: 'Pastor pastor pastor',
    avatar: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/82530146_10156531989706008_1129448919923687424_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=fSdVVpwLkQEAX_cEoWT&_nc_ht=scontent-frx5-1.xx&oh=d2d0ea9c5a6f70062a128d865472b3fa&oe=5EADBD3D',
    articles: ['1']
  })

  await strapi.services.article.create({
    title: 'Церковь - это жизнь',
    body: 'Церковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизньЦерковь - это жизнь',
    cover: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/82530146_10156531989706008_1129448919923687424_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=fSdVVpwLkQEAX_cEoWT&_nc_ht=scontent-frx5-1.xx&oh=d2d0ea9c5a6f70062a128d865472b3fa&oe=5EADBD3D',
    tags: ['1', '2'],
    author: '1'
  })
};
