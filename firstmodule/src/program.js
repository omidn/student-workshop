const Admin = require('./admin/admin');

let admin = new Admin('Omid', 'NJ', 'o.najaee@gmail.com', 'hellokitty');


console.log(admin.getPassword());
console.log(admin.toString());


