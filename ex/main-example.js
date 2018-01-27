const StringCombo = require("../stringcombo.js");

// Construction
const strCom = new StringCombo();

// String Combo Object
const obj1 = {
    data: [
        ["a","b"],
        ["e","f"]
    ],
    relators: [""],
    combinators: ["."],
    joiner: ", "
}

// Data Property
obj1.data = [["a","b"], ["e", "f"]]; // Array of arrays of strings to combine on

// Relators Property
obj1.relators = [""]; // Array of string relators to insert between string combos
let possibleRelators = ["", " ", ">", "~", "+"];

// Combinators Property
obj1.combinators = ["."]; // Array of string combinators representing ways to combine strings
const validCombinators = [".","*","x","X","dot","cart"];

// Joiner Property
obj1.joiner = ", "; // Joiner string used to join the final array of string combinations

// Call the comb function with the combo object to get back the combinated string
let out = strCom.comb(obj1);
console.log(out); // ab, ef

// Can get array pre-join by calling combAr
obj1.joiner = ", ";
let ar = strCom.combAr(obj1);
console.log(ar); // ["ae","bf"]

// Using StringCombo to generate css selectors
const obj2 = {
   data: [["#id1"], [".class1", ".class2",".class3",".class4"], ["p"], [":active"]],
   relators: ["", "~", ""],
   combinators: ["x","x","x"],
   joiner: ",\n"
};

str = strCom.comb(obj2); // #id1.class1 ~ p:active,
console.log(str);        // #id1.class2 ~ p:active,
                         // #id1.class3 ~ p:active,
                         // #id1.class4 ~ p:active
