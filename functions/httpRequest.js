const axios = require('axios');

exports.handler = async (context, event, callback) => {
  const { orderNumber } = event;

  try {
    const response = await axios.get('https://example.com/?orderNumber=' + orderNumber);

    // const { customerNumber } = response.data;
    const customerNumber = '+15555555555';

    return callback(null, customerNumber);
  } catch (error) {
    // In the event of an error, return a 500 error and the error message
    console.error(error);
    return callback(error);
  }
};

