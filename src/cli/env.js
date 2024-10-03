const envObject = process.env;
const FILTER_WORD = "RSS_";

const parseEnv = () => {
  const keysEnvObject = Object.keys(envObject);
  const filterKeys = keysEnvObject.filter((x) => x.startsWith(FILTER_WORD));

  const result = filterKeys.reduce(
    (res, item, index) =>
      `${res}${item}=${envObject[item]}${
        index === filterKeys.length - 1 ? "" : "; "
      }`,
    ""
  );
  console.log(result);
};

parseEnv();
