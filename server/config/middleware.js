module.exports = {
  timeout: 100,
  load: {
    before: ["responseTime", "logger", "responses", "gzip"],
    order: [],
    after: ["parser", "router"],
  },
  settings: {
    public: {
      path: "./public",
      maxAge: 60000,
    },
  },
};
