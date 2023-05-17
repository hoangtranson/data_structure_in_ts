export const getTimeFnRun = (body: Function): number => {
  const start = performance.now();
  body();
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return end - start;
};
