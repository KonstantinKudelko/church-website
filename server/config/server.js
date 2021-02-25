module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      // TODO: create this variable in .env file
      secret: env("ADMIN_JWT_SECRET", "SUPER_SECRET"),
    },
  },
});
