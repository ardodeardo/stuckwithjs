import { log } from "../common/utilities";

interface args {
  a: number;
  b: number;
}

function sum({ a, b }: args) {
  log("[sum]");

  const result: number = a + b;

  return result;
}

export default sum;