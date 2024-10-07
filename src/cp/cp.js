import { spawn } from "child_process";
import * as path from "path";
import * as url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  const pathScript = path.join(dirname, "files", "script.js");
  spawn("node", [pathScript, ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });
};

spawnChildProcess([0, 2, 4]);
