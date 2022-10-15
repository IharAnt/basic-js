const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if(position <= 0 
      || Number.isNaN(position) 
      || !Number.isInteger(position) 
      || position>this.chain.length) {
        this.chain = [];
        throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(position-1, 1)
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map(c=> `( ${c} )`).join('~~');
    this.chain = [];
    return result;
  }
};

//let ff = chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();
//let f = chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
//let f1 =  chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd');
//let f2 = chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2);
//let f3 = chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);
module.exports = {
  chainMaker
};
