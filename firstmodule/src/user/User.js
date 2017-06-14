'use strict';
const validatorJS = require('validator.js');
const is = validatorJS.Assert;
const validator = validatorJS.validator();

module.exports = class User {
  constructor(firstName, lastName, email) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }

  toString() {
    return `First name: ${this._firstName}, last name: ${this._lastName}, email: ${this.email}`;
  }

  set email(email) {
    let valid = validator.validate(email, [ is.email() ] );
    if(typeof valid === 'boolean' && valid) {
      this._email = email;
    } else {
      throw new Error('Invalid email adress');
    }
  }

  get email() {
    return this._email;
  }
}
