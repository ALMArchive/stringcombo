"use strict"

function validateData(data) {
   if(!Array.isArray(data)) throw new Error("Data property must be passed an array of arrays");
   if(data.length === 0) throw new Error("Data property cannot be empty array");
   for(const tmpAr of data) {
      if(!Array.isArray(tmpAr)) throw new Error("All entries in data array must be arrays");
      if(tmpAr.length === 0) throw Error("Arrays inside data array must not be length 0");
      for(const val of tmpAr) {
         if(typeof val != "string") throw new Error("All entries in inner data arrays must be strings.")
      }
   }
}

const validCombinators = [".","*","x","X","dot","cart"];
function validateCombinators(obj) {
   if(!obj.combinators) return;
   if(!Array.isArray(obj.combinators)) throw new Error("Combos property must be passed an array of strings");
   if(obj.combinators.length === 0) return;
   if((obj.data.length - 1) !== obj.combinators.length) throw new Error("There must be 0 or 1 fewer combinators than number of data arrays");
   for(const val of obj.combinators) {
      if(validCombinators.indexOf(val) === -1) throw new Error("Invalid combinator, valid selections: " + validCombinators.join(", "));
   }
}

const validRelators = ["", " ", ">", "~", "+"];
const printRelators = ["\"\"","\" \"",">", "~", "+"];
function validateRelators(obj) {
   if(!obj.relators) return;
   if(!Array.isArray(obj.relators)) throw new Error("Relators property must be passed an array of strings");
   if(obj.relators.length === 0) return;
   if((obj.data.length - 1) !== obj.relators.length) throw new Error("There must be 0 or 1 fewer relators than number of data arrays");
   for(const val of obj.relators) {
      if(validRelators.indexOf(val) === -1) throw new Error("Invalid relator, valid selections: " + printRelators.join(", "));
   }
}

function validateJoiner(joiner) {
   if(!joiner) return;
   if(typeof joiner != "string") throw new Error("Joiner must be a string");
}

function combinator(ar1, ar2, op, rel) {
   if(!Array.isArray(ar1)) throw new Error("First parameter to combinator must be an array of strings");
   if(!Array.isArray(ar2)) throw new Error("Second parameter to combinator must be an array of strings");
   if(validCombinators.indexOf(op) === -1) throw new Error("Invalid operator passed to combinator: " + validateCombinators.join(", "));
   if(validRelators.indexOf(rel) === -1) throw new Error("Invalid operator passed to combinator: " + printRelators.join(", "));
   if(rel !== " " && rel !== "") rel = " " + rel + " "; // Add space around operators that are not "" or " "

   let returnAr = [];
   if(op === "." || op === "*" || op === "dot") {
      if(ar1.length != ar2.length) throw new Error("Cannot use dot to combine elements of different length");
      for(let i = 0; i < ar1.length; i++) {
         returnAr.push(ar1[i] + rel + ar2[i]);
      }
   } else if(op === "x" || op === "X" || op === "cart") {
      for(let i = 0; i < ar1.length; i++) {
         for(let j = 0; j < ar2.length; j++) {
            returnAr.push(ar1[i] + rel + ar2[j]);
         }
      }
   }
   return returnAr;
}

class StringCombo {
   constructor() {
      this.comb = function(obj) {
         return this.combAr(obj).join(obj.joiner);
      }

      this.combAr = function(cObj) {
         let obj = JSON.parse(JSON.stringify(cObj));
         validateData(obj.data);
         validateCombinators(obj);
         validateRelators(obj);
         validateJoiner(obj.joiner);
         if(obj.data.length === 1) {
            return obj.data[0];
         } else {
            let returnAr = obj.data.shift();
            while(obj.data.length > 0) {
               let op  = obj.combinators.shift();
               let rel = obj.relators.shift();
               returnAr = combinator(returnAr, obj.data.shift(), op, rel);
            }
            return returnAr;
         }
      }
   }
}

module.exports = StringCombo;
