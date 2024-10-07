import * as fs from "fs/promises";
import * as path from "path";
import * as url from "url";
import checkFile from "../utils/checkFile.js";

const TEXT_ERROR = "FS operation failed";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  const pathFolder = path.join(dirname, "files");
  if (await checkFile(pathFolder)) {
    const arrFiles = await fs.readdir(pathFolder);
    console.log(arrFiles);
  } else {
    throw Error(TEXT_ERROR);
  }
};

await list();
