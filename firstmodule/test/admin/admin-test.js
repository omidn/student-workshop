let assert = require('assert');
const Admin = require('../../src/admin/Admin');


describe('Admin', () => {

	let admin = new Admin('Omid', 'NJ', 'o.najaee@gmail.com', 'hellokitty');
	
	describe('getPassword()', () => {
		
		it('the length of the password has to be 10', () => {
			assert.equal(admin.getPassword().length, 10);
		});

		it('the method should not return any character except for *s', () => {
			assert.not(admin.getPassword().match(/[^\*]/g));
		});
	});
});
