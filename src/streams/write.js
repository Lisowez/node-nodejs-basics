import { createWriteStream } from "fs";
import { stdin } from "process";
import * as url from "url";
import * as path from "path";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const TARGET_FILE = "fileToWrite.txt";

const write = async () => {
  const pathFile = path.join(dirname, "files", TARGET_FILE);
  stdin.on("data", (data) => {
    createWriteStream(pathFile).write(data);
  });
};

await write();
