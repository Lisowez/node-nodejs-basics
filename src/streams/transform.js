import { Transform } from "stream";

const { stdin, stdout } = process;

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join("") + "\n");
    },
  });

  stdin.pipe(reverse).pipe(stdout);
};

await transform();
