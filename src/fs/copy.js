import * as fs from "fs/promises";
import * as path from "path";
import * as url from "url";
import checkFile from "../utils/checkFile.js";

const NEW_FOLDER_NAME = "files_copy";
const OLD_FOLDER_NAME = "files";
const TEXT_ERROR = "FS operation failed";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  const pathForNewFolder = path.join(dirname, NEW_FOLDER_NAME);
  const pathForOldFolder = path.join(dirname, OLD_FOLDER_NAME);
  if (
    (await checkFile(pathForNewFolder)) ||
    !(await checkFile(pathForOldFolder))
  ) {
    throw Error(TEXT_ERROR);
  } else {
    await fs.mkdir(pathForNewFolder);
    const allFilesInOldFolder = await fs.readdir(pathForOldFolder);
    allFilesInOldFolder.forEach((x) => {
      fs.copyFile(
        path.join(pathForOldFolder, x),
        path.join(pathForNewFolder, x)
      );
    });
  }
};

await copy();
