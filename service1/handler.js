const consumer = async (event) => {
  for (const record of event.Records) {
    console.log(JSON.stringify(record.body, null, 2));
  }
};

module.exports = {
  consumer,
};
