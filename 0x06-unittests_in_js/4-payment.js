const utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalAmount = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalAmount}`);
  return totalAmount;
};
