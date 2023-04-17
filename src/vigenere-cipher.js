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
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let strUp = str.toUpperCase();
    let keyUp = key.toUpperCase();
    let message = "";
    let currIndKey = 0;

    for (let i = 0; i < strUp.length; i++) {
      if (arr_EN.includes(strUp[i])) {
        let keySymbol = keyUp[currIndKey % keyUp.length];
        let keyIndex = arr_EN.indexOf(keySymbol);
        let strIndex = arr_EN.indexOf(strUp[i]);
        let encryptedIndex = (strIndex + keyIndex) % arr_EN.length;
        let encryptedSymbol = arr_EN[encryptedIndex];
        message += encryptedSymbol;
        currIndKey += 1;
      } else {
        message += strUp[i];
      }
    }

    if (this.direct) {
      return message;
    } else {
      return message.split('').reverse().join('');
    }

  }

  decrypt(encryptStr, key) {
    if (!encryptStr || !key) {
      throw new Error('Incorrect arguments!');
    }

    const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let encryptStrUp = encryptStr.toUpperCase();
    let keyUp = key.toUpperCase();
    let message = "";
    let currIndKey = 0;

    for (let i = 0; i < encryptStrUp.length; i++) {
      if (arr_EN.includes(encryptStrUp[i])) {
        const keySymbol = keyUp[currIndKey % keyUp.length];
        const keyIndex = arr_EN.indexOf(keySymbol);
        const encryptIndex = arr_EN.indexOf(encryptStrUp[i]);
        let messageIndex = (encryptIndex - keyIndex + arr_EN.length) % arr_EN.length;
        let messageSymbol = arr_EN[messageIndex];
        message += messageSymbol;
        currIndKey += 1;
      } else {
        message += encryptStrUp[i];
      }
    }

    if (this.direct) {
      return message;
    } else {
      return message.split('').reverse().join('');
    }

  }
}

module.exports = {
  VigenereCipheringMachine
};