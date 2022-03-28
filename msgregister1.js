//method of one by one require

// var regex =require('./register1.js').FirstnameRegEx;
// var regex1 =require('./register1.js').PasswordnameRegEx;
// var regex2 =require('./register1.js').EmailnameRegEx;
// var regex3 =require('./register1.js').PhonenameRegEx;

// console.log("regex ===",regex);
// console.log("regex1 ===",regex1);
// console.log("regex2 ===",regex2);
// console.log("regex3 ===",regex3);

// let nameResult = regex.test("Saurabh")
// console.log("firstname ===>",nameResult);

// let nameResult1 = regex1.test("Saurabhyeggewar2#")
// console.log("password ===>",nameResult1);

// let nameResult2 = regex2.test("Saurabhyeggewar@gmail.com")
// console.log("email ===>",nameResult2);

// let nameResult3 = regex3.test("91 9922992299")
// console.log("phonenumber ===>",nameResult3);




//method 2 import all in one require

var {FirstnameRegEx,PasswordnameRegEx,EmailnameRegEx,PhonenameRegEx} = require('./register1.js');
var regex = require('./register1.js')
console.log("my all validation is;",regex);

//geting 1st name
let regex1=regex.FirstnameRegEx.test("Saurabh");
console.log("my FirstName is :",regex1);
//password
let regex2=regex.PasswordnameRegEx.test("Saurabhyeggewar2#");
console.log("my Password is :",regex2);
//email
let regex3=regex.EmailnameRegEx.test("Saurabhyeggewar@gmail.com");
console.log("my Email is :",regex3);
//phoenumber
let regex4=regex.PhonenameRegEx.test("91 9922992299");
console.log("my phonenumber is :",regex4);