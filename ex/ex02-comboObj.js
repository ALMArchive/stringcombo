import StringCombo from "../stringcombo.js";

// Construction
const strCom = new StringCombo();

// String Combo Object
const obj1 = {};

// Data Property
obj1.data = [["a","b"], ["e", "f"]]; // Array of arrays of strings to combine on

// Relators Property
obj1.relators = [""]; // Array of string relators to insert between string combos

// Combinators Property
obj1.combinators = ["."]; // Array of string combinators representing ways to combine strings

// Joiner Property
obj1.joiner = ", "; // Joiner string used to join the final array of string combinations

// Call the comb function with the combo object to get back the combinated string
let out = strCom.comb(obj1);
console.log(out); // ab, ef
