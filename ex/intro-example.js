import StringCombo from "../stringcombo.js";

// Construction
const strCom = new StringCombo();

// String Combo Object
const obj1 = {
    data: [
        ["a","b"],
        ["c","d"],
        ["e","f"]
    ],
    relators: [">","~"],
    combinators: [".","."],
    joiner: ", "
}

let out = strCom.comb(obj1);
console.log(out); // a > c ~ e, b > d ~ f