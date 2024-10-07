import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const TARGET_FILE = "fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const pathFile = path.join(dirname, "files", TARGET_FILE);
  const hash = crypto.createHash("sha256");
  const stream = fs.createReadStream(pathFile);

  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    const result = hash.digest("hex");
    console.log(result);
  });

  stream.on("error", (err) => {
    throw err;
  });
};

await calculateHash();
