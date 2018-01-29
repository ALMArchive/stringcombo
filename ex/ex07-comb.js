import StringCombo from "../stringcombo.js";

// Construction
const strCom = new StringCombo();

// String Combo Object
const obj1 = {
   data: [["a","b"], ["e", "f"]],
   relators: [""],
   combinators: ["."],
   joiner: ", "
};

// Combination performed using comb function, returns string of combinations.
obj1.joiner = ", ";
let str = strCom.comb(obj1);
console.log(str); // ae^%bf

// Can get array pre-join by calling combAr
obj1.joiner = ", ";
let ar = strCom.combAr(obj1);
console.log(ar); // ["ae","bf"]