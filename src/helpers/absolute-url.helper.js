import { WEBSITE_BASE_URL } from "@constants";

export const getAbsoluteUrl = (filePath) => `${WEBSITE_BASE_URL}${filePath}`;
