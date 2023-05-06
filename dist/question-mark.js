"use strict";
// Ternary operator
var _a;
const age = 27;
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);
// Nullish coalescing operator
const isAuthUser = null; // It will work only for 'null' & 'undefined' value
const userName = isAuthUser !== null && isAuthUser !== void 0 ? isAuthUser : 'Guest';
console.log(userName);
const user007 = {
    name: 'John',
    age: 35,
    address: {
        city: 'California',
        road: 'Frontage Rd',
    }
};
const home = (_a = user007.address.houseNo) !== null && _a !== void 0 ? _a : 'NA'; // Default value set
console.log({ home });
