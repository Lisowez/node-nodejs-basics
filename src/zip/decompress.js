import * as url from "url";
import * as path from "path";
import * as zlib from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const TARGET_FILE = "fileToCompress.txt";
const ARCHIVE_FILE = "archive.gz";

const pipe = promisify(pipeline);

const decompress = async () => {
  const pathTarget = path.join(dirname, "files", TARGET_FILE);
  const pathArchive = path.join(dirname, "files", ARCHIVE_FILE);
  const zlibActive = zlib.createGunzip();
  const readStream = createReadStream(pathArchive);
  const writeStream = createWriteStream(pathTarget);
  await pipe(readStream, zlibActive, writeStream);
};

await decompress();
