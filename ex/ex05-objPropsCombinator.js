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

// Combinators Property
// The combinators property is an array of string combinators that are used
// to determine the combination of successive generations, there are only
// two combinators, with three names each
// Cart Product: "cart", "x", "X"
// Dot Product: "dot", "*", "."
// Cart product does cartesian product, [a,b,c] X [d,e,f] = [ad,ae,af,bd,be,bf,cd,ce,cf]
// Dot product does cross/vector product, [a,b,c] * [d,e,f] = [ad,be,cf]
// The length of two arrays must match to dot product them
obj1.combinators = ["."];
str = strCom.comb(obj1);
console.log(str); // ae, bf

obj1.data = [["a","b"],["c"]];
obj1.combinators = ["."];
try {
   str = strCom.comb(obj1);
} catch(e) {
   console.log(e.message); // Cannot use dot to combine elements of different length
}

obj1.data = [["a"],["c","d"]];
obj1.combinators = ["x"];
str = strCom.comb(obj1);
console.log(str); // ac, ad
