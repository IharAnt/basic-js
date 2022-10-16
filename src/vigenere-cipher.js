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
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor (isDirectMachine = true) {
    this.isDirectMachine = isDirectMachine;
  }

  encrypt(message, key) {
   if(!message || !key){
    throw new Error('Incorrect arguments!');
   }
   let result = '';
   message = message.toUpperCase();
   key = key.toUpperCase();
  
   for (let i = 0, n = 0; i < message.length; i++, n++) {
    if (this.alphabet.indexOf(message[i])>=0) {
      result += this.getEncryptSymbol(message[i], key[n % key.length]);
    } else {
      result += message[i];
      n--;
    }
   }
   if(!this.isDirectMachine) {
    return Array.from(result).reverse().join('');
   } else return result;

  }

  
  decrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
  
    for (let i = 0, n = 0; i < message.length; i++, n++) {
      if (this.alphabet.indexOf(message[i])>=0) {
        result += this.getDecryptSymbol(message[i], key[n % key.length]);
      } else {
        result += message[i];
        n--;
      }
    }
    if(!this.isDirectMachine) {
      return Array.from(result).reverse().join('');
    } else return result;
  }

  getMod(n, m) {
    return ((n % m) + m) % m;
  }

  getEncryptSymbol(symbol, key) {
   let p = symbol.charCodeAt(0);
   let k = key.charCodeAt(0);
   let c = this.getMod(p + k, 26) + 65;
   return String.fromCharCode(c);
  }

  getDecryptSymbol(symbol, key) {
   let c = symbol.charCodeAt(0);
   let k = key.charCodeAt(0);
   let p = this.getMod(c - k, 26) + 65;
   return String.fromCharCode(p);
  }

}

const directMachine = new VigenereCipheringMachine(false);

let ff = directMachine.encrypt('cryptography', 'verylongkeyword');
let f = directMachine.decrypt('XVPNECTXKTFU', 'verylongkeyword');

module.exports = {
  VigenereCipheringMachine
};
