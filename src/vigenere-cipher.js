const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  generateKeystring(message, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyLength = key.length;
    const messageLength = message.length;
    let keystring = "";
    let keyIndex = 0;
    for (let j = 0; j < messageLength; j++) {
      if (!alphabet.includes(message[j])) {
        keystring += message[j];
        continue;
      }
      keystring += key[keyIndex];
      keyIndex = (keyIndex + 1) % keyLength;
    }
    return keystring;
  }
  encrypt(message, key) {
    if (!message || !key) {// <===> message == false || key == false
      throw new Error('Incorrect arguments!');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const maxLength = message.length;

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyString = this.generateKeystring(message, key);

    for (let i = 0; i < maxLength; i++) {
      if (!alphabet.includes(keyString[i])) {
        result += keyString[i];
        continue;
      }
      let charIndex = (alphabet.indexOf(message[i]) + alphabet.indexOf(keyString[i]) + alphabet.length) % alphabet.length;
      result += alphabet[charIndex];
    }

    this.isDirect ? null : result = result.split('').reverse().join('');
    console.log(result);
    return result;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const maxLength = encryptedMessage.length;

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyString = this.generateKeystring(encryptedMessage, key);

    for (let i = 0; i < maxLength; i++) {
      if (!alphabet.includes(encryptedMessage[i])) {
        result += encryptedMessage[i];
        continue;
      }
      let decryptedCharIndex = (alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(keyString[i]) + alphabet.length) % alphabet.length;
      result += alphabet[decryptedCharIndex];
    }

    this.isDirect ? null : result = result.split('').reverse().join('');
    console.log(result);
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
