import { parentPort, workerData } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const result = { data: null, status: null };
  try {
    const resultOfFibonacci = nthFibonacci(workerData.number);
    result.data = resultOfFibonacci;
    result.status = "resolved";
  } catch (error) {
    result.status = "error";
  }
  parentPort.postMessage(result);
};

sendResult();
