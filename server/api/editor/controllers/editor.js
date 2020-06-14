"use strict";

const og = require("open-graph");

/**
 * A set of functions called "actions" for `editor`
 */

const ogPromisify = (url) =>
  new Promise((res, rej) => {
    og(url, function (err, meta) {
      return meta ? res(meta) : rej(err);
    });
  });

module.exports = {
  getLink: async (ctx) => {
    const { url } = ctx.query;

    return ogPromisify(url)
      .then((meta) => {
        return {
          success: 1,
          meta,
        };
      })
      .catch((err) => {
        console.log(err);

        return {
          success: 0,
          meta: {},
        };
      });
  },
};
