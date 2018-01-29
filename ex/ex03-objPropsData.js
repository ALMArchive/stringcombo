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

// Data Property
// The data property takes an array of array of strings
// The arrays are combined in order based on the other properties
// Depending on the combinator chosen, the length of the inner arrays
// may come into consideration
obj1.data = [["a","b"], ["e","f"]]; // Array of arrays of strings to combine on
let str = strCom.comb(obj1);
console.log(str); // ae, bf
