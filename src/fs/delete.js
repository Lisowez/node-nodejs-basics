import * as fs from "fs/promises";
import * as path from "path";
import * as url from "url";
import checkFile from "../utils/checkFile.js";

const DELETE_FILE = "fileToRemove.txt";
const TEXT_ERROR = "FS operation failed";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  const pathDeleteFile = path.join(dirname, "files", DELETE_FILE);
  if (await checkFile(pathDeleteFile)) {
    fs.rm(pathDeleteFile);
  } else {
    throw Error(TEXT_ERROR);
  }
};

await remove();
