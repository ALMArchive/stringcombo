"use strict";

const chai = require('chai');
const StringCombo = require("../stringcombo.js");

describe("StringCombo", function() {
    describe("Construction", function() {
        it('Returned object should have StringCombo Constructor', function() {
            let strCom = new StringCombo();
            chai.expect(strCom.constructor.name === "StringCombo").to.be.true;
        });
    });
    // End Describe Construction
    describe("comb", function() {
        describe("Input Validation", function() {
            describe("validateData", function() {
                it('Passing null data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: null })).to.throw(Error);
                });
                it('Passing string data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: "" })).to.throw(Error);
                });
                it('Passing number data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: 1 })).to.throw(Error);
                });
                it('Passing object data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: {} })).to.throw(Error);
                });
                it('Passing function data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: () => {} })).to.throw(Error);
                });
                it('Passing object data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: {} })).to.throw(Error);
                });
                it('Passing empty array data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [] })).to.throw(Error);
                });
                it('Passing empty array data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [] })).to.throw(Error);
                });
                it('Passing array of null data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [null, null] })).to.throw(Error);
                });
                it('Passing array of string data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: ["", ""] })).to.throw(Error);
                });
                it('Passing array of number data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [0, 0] })).to.throw(Error);
                });
                it('Passing array of object data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [{}, {}] })).to.throw(Error);
                });
                it('Passing array of function data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [() => {}, () => {}] })).to.throw(Error);
                });
                it('Passing array of empty array data property to comb does throw error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [
                            [],
                            []
                        ] })).to.throw(Error);
                });
                it('Passing array of null array data property to comb does throw error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [
                            [null],
                            [null]
                        ] })).to.throw(Error);
                });
                it('Passing array of number array data property to comb does throw error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [
                            [0],
                            [0]
                        ] })).to.throw(Error);
                });
                it('Passing array of array array data property to comb does throw error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [
                            [
                                []
                            ],
                            [
                                []
                            ]
                        ] })).to.throw(Error);
                });
                it('Passing array of object array data property to comb does throw error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [
                            [{}],
                            [{}]
                        ] })).to.throw(Error);
                });
                it('Passing array of function array data property to comb does throw error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [
                            [() => {}],
                            [() => {}]
                        ] })).to.throw(Error);
                });
                it('Passing array of string array data property to comb does throw error', function() {
                    let strCom = new StringCombo();
                    chai.expect(() => strCom.comb({ data: [
                            [""],
                            [""]
                        ] })).to.throw(Error);
                });
            });
            // End Describe validateData
            describe("validateCombo", function() {
                it('Passing valid data property and obj combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: {}
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and string combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: " "
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and number combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: 1
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of null combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: [null]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of number combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: [0]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of obj combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: [{}]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of func combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: [() => {}]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing more than 1 extra data arrays than combinators throws error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""],
                            [""]
                        ],
                        combinators: [" "]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing same number of data arrays as combinators throws error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: [" ", " "]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of string combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: [""]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and null combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: null
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and invalid combinator ^ does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: ["^"]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and invalid combinator H does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: ["H"]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and empty array combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        combinators: []
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
            });
            // End Describe validateCombo
            describe("validateRelation", function() {
                it('Passing valid data property and obj relators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: {}
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and string relators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: " "
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and number relators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: 1
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of null relators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [null]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of number relators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [0]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of obj relators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [{}]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array of func relators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [() => {}]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing more than 1 extra data arrays than relators throws error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""],
                            [""]
                        ],
                        relators: [" "]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing same number of data arrays as relators throws error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [" ", " "]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and invalid relators "*" does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: ["*"]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and invalid relators "3" does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: ["3"]
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
            });
            // End Describe validateRelation
            describe("validateJoiner", function() {
                it('Passing valid data property and number joiner does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        joiner: 3
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and object joiner does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        joiner: {}
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and array joiner does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        joiner: []
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and function joiner does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        joiner: ()=>{}
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
            });
            // End Describe General Validation
            describe("General Validation", function() {
                it('Passing valid data property, invalid relators, combinators, joiner throws Error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [],
                        combinators: [],
                        joiner: 3
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data and relators property, invalid combinators, joiner throws Error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [">"],
                        combinators: [],
                        joiner: 3
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data and combinators property, invalid relators, joiner throws Error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [],
                        combinators: ["."],
                        joiner: 3
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data and joiner property, invalid relators, combinators throws Error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [],
                        combinators: [],
                        joiner: ","
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data, relators and joiner property, invalid combinators throws Error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [">"],
                        combinators: [],
                        joiner: ","
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data, relators and combinators property, invalid joiner throws Error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [">"],
                        combinators: ["."],
                        joiner: 3
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data, joiner and combinators property, invalid relators throws Error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [""],
                            [""]
                        ],
                        relators: [],
                        combinators: ["."],
                        joiner: ","
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data, joiner, relators and combinators property does not throw Error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            ["Str1"],
                            ["Str2"]
                        ],
                        relators: [">"],
                        combinators: ["."],
                        joiner: ","
                    }
                    chai.expect(() => strCom.comb(obj)).to.not.throw(Error);
                });
            });
            // End Describe Validate Joiner
        });
        // End Describe Input Validation
        describe("Output Validation", function() {
            it('Passing in a one element data array, will join on that array alone', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"]
                    ],
                    joiner: ","
                }
                chai.expect(strCom.comb(obj)).to.equal(obj.data[0].join(obj.joiner));
            });
            it('Passing in a one element data array, will join on that array alone pt. 2', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"]
                    ],
                    joiner: "&"
                }
                chai.expect(strCom.comb(obj)).to.equal(obj.data[0].join(obj.joiner));
            });
            it('Passing in a one element data array, will join on that array alone pt. 2', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"]
                    ],
                    joiner: ",+4"
                }
                chai.expect(strCom.comb(obj)).to.equal(obj.data[0].join(obj.joiner));
            });
            it('Two data arrays, valid passins pt. 1', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"],
                        ["e","f","g"]
                    ],
                    relators: [""],
                    combinators: ["."],
                    joiner: ","
                }
                chai.expect(strCom.comb(obj)).to.equal("ae,bf,cg");
            });
            it('Two data arrays, valid passins pt. 2', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"],
                        ["e","f","g"]
                    ],
                    relators: [">"],
                    combinators: ["."],
                    joiner: ","
                }
                chai.expect(strCom.comb(obj)).to.equal("a > e,b > f,c > g");
            });
            it('Two data arrays, valid passins pt. 3', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"],
                        ["e","f","g"]
                    ],
                    relators: [">"],
                    combinators: ["."],
                    joiner: ",p "
                }
                chai.expect(strCom.comb(obj)).to.equal("a > e,p b > f,p c > g");
            });
            it('Two data arrays, valid passins pt. 3.1', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"],
                        ["e","f","g"]
                    ],
                    relators: [">"],
                    combinators: ["*"],
                    joiner: ",p "
                }
                chai.expect(strCom.comb(obj)).to.equal("a > e,p b > f,p c > g");
            });
            it('Two data arrays, valid passins pt. 4', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"],
                        ["e","f","g"]
                    ],
                    relators: ["~"],
                    combinators: ["dot"],
                    joiner: ",p "
                }
                chai.expect(strCom.comb(obj)).to.equal("a ~ e,p b ~ f,p c ~ g");
            });
            it('Two data arrays, valid passins pt. 5', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"],
                        ["e","f","g"]
                    ],
                    relators: ["~"],
                    combinators: ["dot"],
                    joiner: ",p "
                }
                chai.expect(strCom.comb(obj)).to.equal("a ~ e,p b ~ f,p c ~ g");
            });
            it('Two data arrays, valid passins pt. 6', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a"],
                        ["e","f","g"]
                    ],
                    relators: ["~"],
                    combinators: ["x"],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("a ~ e, a ~ f, a ~ g");
            });
            it('Two data arrays, valid passins pt. 7', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b"],
                        ["e","f","g"]
                    ],
                    relators: ["+"],
                    combinators: ["x"],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("a + e, a + f, a + g, b + e, b + f, b + g");
            });
            it('Two data arrays, valid passins pt. 8', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b"],
                        ["e","f","g"]
                    ],
                    relators: ["+"],
                    combinators: ["cart"],
                    joiner: "& "
                }
                chai.expect(strCom.comb(obj)).to.equal("a + e& a + f& a + g& b + e& b + f& b + g");
            });
            it('Two data arrays, valid passins pt. 9', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b"],
                        ["e","f","g"]
                    ],
                    relators: ["+"],
                    combinators: ["X"],
                    joiner: "& "
                }
                chai.expect(strCom.comb(obj)).to.equal("a + e& a + f& a + g& b + e& b + f& b + g");
            });
            it('Three data arrays, valid passins pt. 10', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"],
                        ["e","f","g"],
                        ["h","i","j"]
                    ],
                    relators: ["", ""],
                    combinators: [".", "."],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("aeh, bfi, cgj");
            });
            it('Three data arrays, valid passins pt. 11', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b","c"],
                        ["e","f","g"],
                        ["h","i","j"]
                    ],
                    relators: ["", ">"],
                    combinators: [".", "."],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("ae > h, bf > i, cg > j");
            });
            it('Three data arrays, valid passins pt. 12', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a"],
                        ["e","f","g"],
                        ["h","i","j"]
                    ],
                    relators: ["", ">"],
                    combinators: ["x", "."],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("ae > h, af > i, ag > j");
            });
            it('Three data arrays, valid passins pt. 13', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a"],
                        ["e","f"],
                        ["h","i"]
                    ],
                    relators: ["", ">"],
                    combinators: ["x", "x"],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("ae > h, ae > i, af > h, af > i");
            });
            it('Three data arrays, valid passins pt. 14', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b"],
                        ["e","f"],
                        ["h","i","j"]
                    ],
                    relators: ["", " "],
                    combinators: ["x", "x"],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("ae h, ae i, ae j, af h, af i, af j, be h, be i, be j, bf h, bf i, bf j");
            });
            it('Four data arrays, valid passins pt. 15', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b"],
                        ["e","f"],
                        ["h","i"],
                        ["j","k"]
                    ],
                    relators: ["", "", ""],
                    combinators: [".", ".", "."],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("aehj, bfik");
            });
            it('Four data arrays, valid passins pt. 16', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a"],
                        ["e"],
                        ["h","i"],
                        ["j","k"]
                    ],
                    relators: ["", "", ""],
                    combinators: ["x", "x", "x"],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("aehj, aehk, aeij, aeik");
            });
            it('Four data arrays, valid passins pt. 17', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a"],
                        ["e"],
                        ["h","i"],
                        ["j","k","l"]
                    ],
                    relators: ["", "", ">"],
                    combinators: ["x", "x", "x"],
                    joiner: ", "
                }
                chai.expect(strCom.comb(obj)).to.equal("aeh > j, aeh > k, aeh > l, aei > j, aei > k, aei > l");
            });
            it('CSS Simulation Test', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["#element"],
                        [".class"],
                        ["tag1","tag2"]
                    ],
                    relators: ["", " ",],
                    combinators: [".", "x"],
                    joiner: ",\n"
                }
                chai.expect(strCom.comb(obj)).to.equal("#element.class tag1,\n#element.class tag2");
            });
            it('CombAr returns correct array pt. 1', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a"],
                        ["e"],
                        ["h","i"],
                        ["j","k","l"]
                    ],
                    relators: ["", "", ">"],
                    combinators: ["x", "x", "x"],
                    joiner: ", "
                }
                chai.expect(Array.isArray(strCom.combAr(obj))).to.be.true;
            });
            it('CombAr returns correct array pt. 2', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ["a","b"],
                        ["e","f"],
                        ["h","i"],
                        ["j","k"]
                    ],
                    relators: ["", "", ""],
                    combinators: [".", ".", "."],
                    joiner: ", "
                }
                let ar = strCom.combAr(obj);
                let bool = (ar[0] === "aehj") && (ar[1] === "bfik");
                chai.expect(bool).to.be.true;
            });
        });
        // End Describe Output Validation
    });
    // End Describe comb
});
