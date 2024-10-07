import { Worker } from "worker_threads";
import * as url from "url";
import * as path from "path";
import { cpus } from "os";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const performCalculations = async () => {
  const pathWorker = path.join(dirname, "worker.js");
  let arrResult = [];
  for (let i = 0; i < cpus().length; i++) {
    arrResult.push(
      new Promise((res, rej) => {
        const worker = new Worker(pathWorker, {
          workerData: { number: 10 + i },
        });
        worker.on("message", (message) => {
          res(message);
        });
        worker.on("error", rej);
      })
    );
  }
  Promise.allSettled(arrResult).then((data) => {
    console.log(data.map((x) => x.value));
  });
};

await performCalculations();
