import path from "path";

// MDX storage paths
const ROOT_DIRECTORY = process.cwd();
const BASE_DIRECTORY = path.join(ROOT_DIRECTORY, "storage");
export const ARTICLES_DIRECTORY = path.join(BASE_DIRECTORY, "articles");
