const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  body : [],
  getLength() {
    return this.body.length;
  },
  addLink(value) {
    // if (value === null) {
    //   this.body.push(`( null )`);
    //   return this;
    // }
    // value.toString() ? this.body.push(`( ${value.toString()} )`) : this.body.push('(  )')
    // return this;
    value === undefined ? this.body.push('(  )') : this.body.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || !(Number.isInteger(position)) || position <= 0 || position >= this.body.length) {
      this.body = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.body.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.body.reverse();
    return this;
  },
  finishChain() {
    let result = this.body.join('~~');
    this.body = [];
    console.log(result);
    return result;
  }
};




module.exports = {
  chainMaker
};
