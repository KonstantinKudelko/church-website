/**
 * If strapi doesn't have any admins we create
 * them programmatically.
 */

const adminParams = {
  username: process.env.DEV_USER || "admin",
  password: process.env.DEV_PASS || "admin",
  firstname: process.env.DEV_USER || "Admin",
  lastname: process.env.DEV_USER || "Admin",
  email: process.env.DEV_EMAIL || "admin@test.test",
  blocked: false,
  isActive: true,
};

/**
 * If the super admin role is empty,
 * the function creates this new role.
 */
const adminRoleCreation = async () => {
  let adminRole = await strapi
    .query("role", "admin")
    .findOne({ code: "strapi-super-admin" });

  if (!adminRole) {
    adminRole = await strapi.query("role", "admin").create({
      name: "Super Admin",
      code: "strapi-super-admin",
      description:
        "Super Admins can access and manage all features and settings.",
    });
  }

  return adminRole;
};

const hashAdminPassword = async (password) => {
  const hashedPassword = await strapi.admin.services.auth.hashPassword(
    password
  );
  return hashedPassword;
};

/**
 * If the platform doesn't have any admins,
 * the function creates super admin.
 */
const adminCreation = async () => {
  const admins = await strapi.query("user", "admin").find();

  if (!admins.length) {
    try {
      const originalPassword = adminParams.password;
      const adminRole = await adminRoleCreation();
      adminParams.roles = [adminRole.id];
      adminParams.password = await hashAdminPassword(originalPassword);
      await strapi.query("user", "admin").create({
        ...adminParams,
      });

      strapi.log.info("Admin account was successfully created.");
      strapi.log.info(`Email: ${adminParams.email}`);
      strapi.log.info(`Password: ${originalPassword}`);
    } catch (error) {
      strapi.log.error(
        `Couldn't create Admin account during bootstrap: `,
        error
      );
    }
  }
};

module.exports = adminCreation;
