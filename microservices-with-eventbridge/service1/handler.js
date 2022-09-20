const consumer = async (event) => {
  for (const record of event.Records) {
    const { detail } = JSON.parse(record.body);

    console.log(
      `Message ID: ${record.messageId}, Event Source: ${record.eventSource}`,
      detail
    );
  }
};

module.exports = {
  consumer,
};
