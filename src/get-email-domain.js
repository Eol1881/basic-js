const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let sliceIndex = email.lastIndexOf('@') + 1;
  console.log(sliceIndex);
  console.log(email.slice(sliceIndex));
  return email.slice(sliceIndex);
}

module.exports = {
  getEmailDomain
};
