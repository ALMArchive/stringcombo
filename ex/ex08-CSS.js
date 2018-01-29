import StringCombo from "../stringcombo.js";

// Construction
const strCom = new StringCombo();

// String Combo Object
const obj1 = {
   data: [["#id1","#id2"], [".class1", ".class2"], ["a", "p"], [":active",":hover"]],
   relators: ["", "~", ""],
   combinators: [".",".","."],
   joiner: ",\n"
};
let str = strCom.comb(obj1);
console.log(str);

const obj2 = {
   data: [["#id1"], [".class1", ".class2",".class3",".class4"], ["p"], [":active"]],
   relators: ["", "~", ""],
   combinators: ["x","x","x"],
   joiner: ",\n"
};
console.log("------");
str = strCom.comb(obj2);
console.log(str);
