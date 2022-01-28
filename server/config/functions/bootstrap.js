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
const adminCreation = require("./fixture/admin-creation");
const createFixtureData = require("./fixture/data-creation");
const setDefaultPermissions = require("./fixture/permissions-setting");

const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup",
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
};

module.exports = async () => {
  const shouldSetDummyData =
    process.env.NODE_ENV === "development" && (await isFirstRun());

  if (shouldSetDummyData) {
    await adminCreation();
    await setDefaultPermissions();
    await createFixtureData();
  }
};
