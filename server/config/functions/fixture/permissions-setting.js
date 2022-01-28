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

module.exports = setDefaultPermissions;
