const args = process.argv.slice(2);

const parseArgs = () => {
  const result = args.reduce(
    (res, item, index) =>
      index % 2
        ? `${res}${item}${index === args.length - 1 ? "" : ", "}`
        : `${res}${item.slice(2)} is `,
    ""
  );
  console.log(result);
};

parseArgs();
