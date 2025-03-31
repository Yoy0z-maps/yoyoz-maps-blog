export const devLog = (...args: string[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
};
