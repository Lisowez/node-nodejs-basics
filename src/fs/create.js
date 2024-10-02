import * as fs from "fs/promises";
import * as path from "path";
import * as url from "url";
import checkFile from "../utils/checkFile.js";

const NAME_NEW_FILE = "fresh.txt";
const TEXT_IN_FILE = "I am fresh and young";
const TEXT_ERROR = "FS operation failed";
const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  const pathForNewFile = path.join(dirname, "files", NAME_NEW_FILE);
  if (await checkFile(pathForNewFile)) {
    throw Error(TEXT_ERROR);
  } else {
    await fs.writeFile(pathForNewFile, TEXT_IN_FILE, "utf-8");
  }
};

await create();
