const consumer = async (event) => {
  for (const record of event.Records) {
    console.log("RECORD", record);
  }
};

module.exports = {
  consumer,
};
