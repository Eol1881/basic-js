const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === null) str = String(null);
  else if (str === undefined) str = String('');
  else if (typeof str !== 'string') str = String(str);

  if (options.addition === null) options.addition = String(null);
  else if (options.addition === undefined) options.addition = String('');
  else if (typeof options.addition !== 'string') options.addition = String(options.addition);

  let result = new Array(options.repeatTimes) || new Array(1);
  let subResult = new Array(options.additionRepeatTimes) || new Array(1);

  function fillArrays() {
    subResult.fill(options.addition, 0, options.additionRepeatTimes || 1);
    result.fill(str, 0, options.repeatTimes);
  }
  function joinArrays() {
    let subResultJoined = subResult.join(options.additionSeparator || '|');
    result = result.map(elem => elem + subResultJoined);
  }

  fillArrays();
  joinArrays();

  result = result.join(options.separator || '+');
  console.log(result);
  return result;
}

module.exports = {
  repeater
};
