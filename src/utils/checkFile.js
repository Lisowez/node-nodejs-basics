import * as fs from "fs/promises";

export default async function checkFile(file) {
  try {
    await fs.access(file, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}
