module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "websitedb"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "root"),
        schema: "public",
      },
      options: {},
    },
  },
});
