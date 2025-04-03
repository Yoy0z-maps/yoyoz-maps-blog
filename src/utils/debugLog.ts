const logDebug = (message: string, data: unknown = null) => {
  if (process.env.NODE_ENV === "development") {
    console.log(message, data);
  }
};

export default logDebug;
