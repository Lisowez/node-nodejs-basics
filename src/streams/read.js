import { createReadStream } from "fs";
import { stdout } from "process";
import * as url from "url";
import * as path from "path";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const TARGET_FILE = "fileToRead.txt";

const read = async () => {
  const pathFile = path.join(dirname, "files", TARGET_FILE);
  const stream = createReadStream(pathFile, "utf-8");
  stream.on("data", (data) => {
    stdout.write(data);
  });
  stream.on("error", (error) => {
    throw error;
  });
};

await read();
