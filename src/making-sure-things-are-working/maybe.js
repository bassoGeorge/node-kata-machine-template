
export function maybe(fn) {
  return function(...args) {
    if (args.some(arg => arg === null || arg === undefined)) {
      return null;
    }
    return fn(...args);
  };
}

export function add(a, b) {
  return a + b;
}

if (process.env.NODE_ENV !== "test") {
  console.log("Checking if Javascript works");
  console.log(maybe(add)(1, 2)); // 3
  console.log(maybe(add)(null, 2)); // null
}