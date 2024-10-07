import * as fs from "fs/promises";
import * as path from "path";
import * as url from "url";
import checkFile from "../utils/checkFile.js";

const OLD_FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";
const TEXT_ERROR = "FS operation failed";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const pathNewFile = path.join(dirname, "files", NEW_FILE_NAME);
  const pathOldFile = path.join(dirname, "files", OLD_FILE_NAME);
  if (!(await checkFile(pathNewFile)) && (await checkFile(pathOldFile))) {
    fs.rename(pathOldFile, pathNewFile);
  } else {
    throw Error(TEXT_ERROR);
  }
};

await rename();
