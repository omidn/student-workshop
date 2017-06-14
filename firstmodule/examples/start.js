'use strict';
const User = require('../src/user/User');
const Employee = require('../src/employee/Employee');

let employee = new Employee(
  'John',
  'Doe',
  'john.doe@gmail.com',
  4711
);
console.log(employee.toString());
