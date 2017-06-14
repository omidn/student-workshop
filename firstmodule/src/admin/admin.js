'use strict';

const User = require('../user/User');
const _ = require('lodash');

module.exports = class Admin extends User {
	constructor(firstName, lastName, email, secretPassword) {
		super(firstName, lastName, email);
		this._secretPassword = secretPassword;

	}

	toString() {
		return `${super.toString()}, secretPassword: ${this.getPassword()}`;
	}
	
	getPassword() {
		return this._secretPassword.replace(/./g,'*');
	}
}
