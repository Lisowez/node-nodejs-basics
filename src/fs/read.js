import * as fs from "fs/promises";
import * as path from "path";
import * as url from "url";
import checkFile from "../utils/checkFile.js";

const FILE_FOR_READ = "fileToRead.txt";
const TEXT_ERROR = "FS operation failed";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const pathFile = path.join(dirname, "files", FILE_FOR_READ);
  if (await checkFile(pathFile)) {
    const text = await fs.readFile(pathFile,{encoding:'utf-8'});
    console.log(text);
  } else {
    throw Error(TEXT_ERROR);
  }
};

await read();
