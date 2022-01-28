const fs = require("fs");
const path = require("path");

const getFilesizeInBytes = (filePath) => {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};

const getFileData = (filePath, mimePrefix = "image") => {
  const fileName = path.basename(filePath);
  // Parse the file metadata
  const size = getFilesizeInBytes(filePath);
  const ext = fileName.split(".").pop();
  const mimeType = `${mimePrefix}/${ext === "jpg" ? "jpeg" : ext}`;

  return {
    size,
    path: filePath,
    name: fileName,
    type: mimeType,
  };
};

const getArticleFileData = () => getFileData("public/uploads/cover-test.jpg");
const getAuthorFileData = () =>
  getFileData("public/uploads/author-avatar-test.jpg");

module.exports = { getAuthorFileData, getArticleFileData };
