# StringCombo
A library used to create complex string combinations and css selectors.

```
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
```

## Installing
`npm install stringcombo`

## Main Example
Setup.
```javascript
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
```

Properties
```javascript
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
```

Combine.
```javascript
// Call the comb function with the combo object to get back the combinated string
let out = strCom.comb(obj1);
console.log(out); // ab, ef

// Can get array pre-join by calling combAr
obj1.joiner = ", ";
let ar = strCom.combAr(obj1);
console.log(ar); // ["ae","bf"]
```

Generate CSS Selectors.
```javascript
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
```

## API

### StringCombo

#### Construction
Constructor takes no parameters.
```javascript
// Construction
const strCom = new StringCombo();
```
Returns StringCombo object.

#### Methods

##### comb
comb function takes in a parameterized object and returns a combined string
```javascript
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
```
Will throw an error if data is not an array of array of strings.
Will throw an error if relators is not an array of strings from: [".","\*","x","X","dot","cart"]
Will throw an error if the length of relators is not 1 less than the length of data.
Will throw an error if combinators is not an array of strings from: ["", " ", ">", "~", "+"];
Will throw an error if the length of combinators is not 1 less than the length of data.
Will throw an error if joiner is not a string.
Returns RepRapMatches Object.

##### combAr
combAr function takes in a parameterized object and returns a combined string
```javascript
let ar = strCom.combAr(obj1);
console.log(out); // [ab, ef]
```
Same as comb.

## Scripts

#### Testing
To run mocha/chai tests.
`npm run test`

#### Examples
To run the main example.
`npm run ex`

## License
StringCombo.js is released under the MIT license.