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

const faker = require("faker");

/**
 * If strapi doesn't have any admins we create
 * them programmatically.
 */
const adminCreation = async () => {
  const userParams = {
    username: process.env.DEV_USER || "admin",
    password: process.env.DEV_PASS || "admin",
    firstname: process.env.DEV_USER || "Admin",
    lastname: process.env.DEV_USER || "Admin",
    email: process.env.DEV_EMAIL || "admin@test.test",
    blocked: false,
    isActive: true,
  };
  const admins = await strapi.query("user", "admin").find();

  if (!admins.length) {
    try {
      const originalPassword = userParams.password;
      let userRole = await strapi
        .query("role", "admin")
        .findOne({ code: "strapi-super-admin" });
      if (!userRole) {
        userRole = await strapi.query("role", "admin").create({
          name: "Super Admin",
          code: "strapi-super-admin",
          description:
            "Super Admins can access and manage all features and settings.",
        });
      }
      userParams.roles = [userRole.id];
      userParams.password = await strapi.admin.services.auth.hashPassword(
        originalPassword
      );
      await strapi.query("user", "admin").create({
        ...userParams,
      });
      strapi.log.info("Admin account was successfully created.");
      strapi.log.info(`Email: ${userParams.email}`);
      strapi.log.info(`Password: ${originalPassword}`);
    } catch (error) {
      strapi.log.error(
        `Couldn't create Admin account during bootstrap: `,
        error
      );
    }
  }
};

const findPublicRole = async () => {
  const result = await strapi
    .query("role", "users-permissions")
    .findOne({ type: "public" });
  return result;
};

/**
 * Enable all operations with models for public users.
 */
const setDefaultPermissions = async () => {
  const role = await findPublicRole();
  const permissions = await strapi
    .query("permission", "users-permissions")
    .find({ type: "application", role: role.id });
  await Promise.all(
    permissions.map((p) =>
      strapi
        .query("permission", "users-permissions")
        .update({ id: p.id }, { enabled: true })
    )
  );
};

const createArticles = async () => {
  for (let i = 0; i < 30; i++) {
    await strapi.services.article.create({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraphs(),
      excerpt: faker.lorem.sentence(),
    });
  }
};

module.exports = async () => {
  if (process.env.NODE_ENV === "development") {
    await adminCreation();
    await setDefaultPermissions();
    await createArticles();
  }
};
