'use strict';
const User = require('../user/User');

module.exports = class Employee extends User {
  constructor(firstName, lastName, email, id) {
    super(firstName, lastName, email);
    this._id = id;
  }

  toString() {
    return `${super.toString()}, id: ${this._id}`;
  }
}
