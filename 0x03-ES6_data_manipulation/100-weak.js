const weakMap = new WeakMap();

const limit = 5;

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= limit) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
 