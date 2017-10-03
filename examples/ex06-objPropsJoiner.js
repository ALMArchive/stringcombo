const StringCombo = require("../stringcombo.js");

// Construction
const strCom = new StringCombo();

// String Combo Object
const obj1 = {
   data: [["a","b"], ["e", "f"]],
   relators: [""],
   combinators: ["."],
   joiner: ", "
};

// Joiner Property
// The joiner property combines the final array together using .join(joiner)
obj1.joiner = "^%";
str = strCom.comb(obj1);
console.log(str); // ae^%bf
