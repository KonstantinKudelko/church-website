// TODO: we have to write tests for it
export const localizeDateString = (
  date,
  locale = "ru-RU",
  options = { day: "2-digit", year: "numeric", month: "long" },
) => {
  return new Date(date).toLocaleString(locale, options).slice(0, -3);
};
