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

// Relators Property
// The realtors property is an array of string relators that are added
// between successive generations, the default valid relators are those
// from CSS, "", " ", ">", "+", "~"
// ">" "+" and "~" add additional space around the relator
obj1.relators = [">"];
str = strCom.comb(obj1);
console.log(str); // a > e, b > f

obj1.relators = ["~"];
str = strCom.comb(obj1);
console.log(str); // a ~ e, b ~ f

obj1.relators = [" "];
str = strCom.comb(obj1);
console.log(str); // a e, b f
