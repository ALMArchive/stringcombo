'use strict';

import chai from 'chai';
import StringCombo from '../stringcombo.js';

describe('StringCombo', function() {
    describe('Construction', function() {
        it('Returned object should have StringCombo Constructor', function() {
            let strCom = new StringCombo();
            chai.expect(strCom.constructor.name === 'StringCombo').to.be.true;
        });
    });
    // End Describe Construction
    describe('comb', function() {
        describe('Input Validation', function() {
            describe('validateData', function() {
                it('Passing null data property to comb throws error', function() {
                    let strCom = new StringCombo();
                    const vals = [null, '', 1, {}, () => {}, []];
                    vals.map(e => chai.expect(() => strCom.comb({ data: e })).to.throw(Error));
                    vals.map(e => chai.expect(() => strCom.comb({ data: [e, e] })).to.throw(Error));
                    vals.map(e => chai.expect(() => strCom.comb({ data: [[e], [e]] })).to.throw(Error));
                });
            })
            // End Describe validateData
            describe('validateCombo', function() {
                it('Passing valid data property and obj combinators property does throw error', function() {
                    const vals = [{}, ' ', '', 1, null, '^', 'H', [], [null], [0], [{}], [() => {}], [' ']];
                    let strCom = new StringCombo();
                    vals.map(e => {
                        const obj = {
                            data: [
                                [''],
                                ['']
                            ],
                            combinators: e
                        }
                        chai.expect(() => strCom.comb(obj)).to.throw(Error);
                    })
                });
                it('Passing more than 1 extra data arrays than combinators throws error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [''],
                            [''],
                            ['']
                        ],
                        combinators: [' ']
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing same number of data arrays as combinators throws error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [''],
                            ['']
                        ],
                        combinators: [' ', ' ']
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and null combinators property does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [''],
                            ['']
                        ],
                        combinators: null
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
            });
            // End Describe validateCombo
            describe('validateRelation', function() {
                it('Passing valid data property and obj relators property does throw error', function() {
                    let strCom = new StringCombo();
                    const vals = [{}, ' ', 1, [null], [0], [{}], [() => {}], [' ']];
                    vals.map(e => {
                      const obj = {
                        data: [
                          [''],
                          ['']
                        ],
                        relators: e
                      }
                      chai.expect(() => strCom.comb(obj)).to.throw(Error);
                    })
                });
                it('Passing same number of data arrays as relators throws error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [''],
                            ['']
                        ],
                        relators: [' ', ' ']
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and invalid relators "*" does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [''],
                            ['']
                        ],
                        relators: ['*']
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
                it('Passing valid data property and invalid relators "3" does throw error', function() {
                    let strCom = new StringCombo();
                    const obj = {
                        data: [
                            [''],
                            ['']
                        ],
                        relators: ['3']
                    }
                    chai.expect(() => strCom.comb(obj)).to.throw(Error);
                });
            });
            // End Describe validateRelation
            describe('validateJoiner', function() {
                it('Passing valid data property and number joiner does throw error', function() {
                    let strCom = new StringCombo();
                    const vals = [3, {}, [], () => {}];
                    vals.map(e => {
                        const obj = {
                            data: [
                                [''],
                                ['']
                            ],
                            joiner: e
                        }
                        chai.expect(() => strCom.comb(obj)).to.throw(Error);
                    })
                });
            });
            // End Describe General Validation
            describe('General Validation', function() {
                it('Passing valid data property, invalid relators, combinators, joiner throws Error', function() {
                    let strCom = new StringCombo();
                    const vals = [{ rel: [], comb: [], join: 3},
                                  { rel: ['>'], comb: [], join: 3},
                                  { rel: [], comb: ['.'], join: 3},
                                  { rel: [], comb: [], join: ',' },
                                  { rel: '>', comb: [], join: ',' },
                                  { rel: '>', comb: ['.'], join: 3 },
                                  { rel: [], comb: ['.'], join: ',' },
                                  { rel: '>', comb: ['.'], join: ',' }];
                    vals.map(e => {
                        const obj = {
                            data: [
                                [''],
                                ['']
                            ],
                            relators: e.rel,
                            combinators: e.comb,
                            joiner: e.join
                        }
                        chai.expect(() => strCom.comb(obj)).to.throw(Error);
                    });
                });
            });
            // End Describe Validate Joiner
        });
        // End Describe Input Validation
        describe('Output Validation', function() {
            it('Passing in a one element data array, will join on that array alone', function() {
                let strCom = new StringCombo();
                const vals = [',', '&', ',+4'];
                vals.map(e => {
                    const obj = {
                        data: [
                            ['a', 'b', 'c']
                        ],
                        joiner: e
                    }
                    chai.expect(strCom.comb(obj)).to.equal(obj.data[0].join(obj.joiner));
                })
            });
            it('Two data arrays, valid passins pt. 1', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b','c'],
                        ['e','f','g']
                    ],
                    relators: [''],
                    combinators: ['.'],
                    joiner: ','
                }
                chai.expect(strCom.comb(obj)).to.equal('ae,bf,cg');
            });
            it('Two data arrays, valid passins pt. 2', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b','c'],
                        ['e','f','g']
                    ],
                    relators: ['>'],
                    combinators: ['.'],
                    joiner: ','
                }
                chai.expect(strCom.comb(obj)).to.equal('a > e,b > f,c > g');
            });
            it('Two data arrays, valid passins pt. 3', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b','c'],
                        ['e','f','g']
                    ],
                    relators: ['>'],
                    combinators: ['.'],
                    joiner: ',p '
                }
                chai.expect(strCom.comb(obj)).to.equal('a > e,p b > f,p c > g');
            });
            it('Two data arrays, valid passins pt. 3.1', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b','c'],
                        ['e','f','g']
                    ],
                    relators: ['>'],
                    combinators: ['*'],
                    joiner: ',p '
                }
                chai.expect(strCom.comb(obj)).to.equal('a > e,p b > f,p c > g');
            });
            it('Two data arrays, valid passins pt. 4', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b','c'],
                        ['e','f','g']
                    ],
                    relators: ['~'],
                    combinators: ['dot'],
                    joiner: ',p '
                }
                chai.expect(strCom.comb(obj)).to.equal('a ~ e,p b ~ f,p c ~ g');
            });
            it('Two data arrays, valid passins pt. 5', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b','c'],
                        ['e','f','g']
                    ],
                    relators: ['~'],
                    combinators: ['dot'],
                    joiner: ',p '
                }
                chai.expect(strCom.comb(obj)).to.equal('a ~ e,p b ~ f,p c ~ g');
            });
            it('Two data arrays, valid passins pt. 6', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a'],
                        ['e','f','g']
                    ],
                    relators: ['~'],
                    combinators: ['x'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('a ~ e, a ~ f, a ~ g');
            });
            it('Two data arrays, valid passins pt. 7', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b'],
                        ['e','f','g']
                    ],
                    relators: ['+'],
                    combinators: ['x'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('a + e, a + f, a + g, b + e, b + f, b + g');
            });
            it('Two data arrays, valid passins pt. 8', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b'],
                        ['e','f','g']
                    ],
                    relators: ['+'],
                    combinators: ['cart'],
                    joiner: '& '
                }
                chai.expect(strCom.comb(obj)).to.equal('a + e& a + f& a + g& b + e& b + f& b + g');
            });
            it('Two data arrays, valid passins pt. 9', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b'],
                        ['e','f','g']
                    ],
                    relators: ['+'],
                    combinators: ['X'],
                    joiner: '& '
                }
                chai.expect(strCom.comb(obj)).to.equal('a + e& a + f& a + g& b + e& b + f& b + g');
            });
            it('Three data arrays, valid passins pt. 10', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b','c'],
                        ['e','f','g'],
                        ['h','i','j']
                    ],
                    relators: ['', ''],
                    combinators: ['.', '.'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('aeh, bfi, cgj');
            });
            it('Three data arrays, valid passins pt. 11', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b','c'],
                        ['e','f','g'],
                        ['h','i','j']
                    ],
                    relators: ['', '>'],
                    combinators: ['.', '.'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('ae > h, bf > i, cg > j');
            });
            it('Three data arrays, valid passins pt. 12', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a'],
                        ['e','f','g'],
                        ['h','i','j']
                    ],
                    relators: ['', '>'],
                    combinators: ['x', '.'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('ae > h, af > i, ag > j');
            });
            it('Three data arrays, valid passins pt. 13', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a'],
                        ['e','f'],
                        ['h','i']
                    ],
                    relators: ['', '>'],
                    combinators: ['x', 'x'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('ae > h, ae > i, af > h, af > i');
            });
            it('Three data arrays, valid passins pt. 14', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b'],
                        ['e','f'],
                        ['h','i','j']
                    ],
                    relators: ['', ' '],
                    combinators: ['x', 'x'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('ae h, ae i, ae j, af h, af i, af j, be h, be i, be j, bf h, bf i, bf j');
            });
            it('Four data arrays, valid passins pt. 15', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b'],
                        ['e','f'],
                        ['h','i'],
                        ['j','k']
                    ],
                    relators: ['', '', ''],
                    combinators: ['.', '.', '.'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('aehj, bfik');
            });
            it('Four data arrays, valid passins pt. 16', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a'],
                        ['e'],
                        ['h','i'],
                        ['j','k']
                    ],
                    relators: ['', '', ''],
                    combinators: ['x', 'x', 'x'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('aehj, aehk, aeij, aeik');
            });
            it('Four data arrays, valid passins pt. 17', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a'],
                        ['e'],
                        ['h','i'],
                        ['j','k','l']
                    ],
                    relators: ['', '', '>'],
                    combinators: ['x', 'x', 'x'],
                    joiner: ', '
                }
                chai.expect(strCom.comb(obj)).to.equal('aeh > j, aeh > k, aeh > l, aei > j, aei > k, aei > l');
            });
            it('CSS Simulation Test', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['#element'],
                        ['.class'],
                        ['tag1','tag2']
                    ],
                    relators: ['', ' ',],
                    combinators: ['.', 'x'],
                    joiner: ',\n'
                }
                chai.expect(strCom.comb(obj)).to.equal('#element.class tag1,\n#element.class tag2');
            });
            it('CombAr returns correct array pt. 1', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a'],
                        ['e'],
                        ['h','i'],
                        ['j','k','l']
                    ],
                    relators: ['', '', '>'],
                    combinators: ['x', 'x', 'x'],
                    joiner: ', '
                }
                chai.expect(Array.isArray(strCom.combAr(obj))).to.be.true;
            });
            it('CombAr returns correct array pt. 2', function() {
                let strCom = new StringCombo();
                const obj = {
                    data: [
                        ['a','b'],
                        ['e','f'],
                        ['h','i'],
                        ['j','k']
                    ],
                    relators: ['', '', ''],
                    combinators: ['.', '.', '.'],
                    joiner: ', '
                }
                let ar = strCom.combAr(obj);
                let bool = (ar[0] === 'aehj') && (ar[1] === 'bfik');
                chai.expect(bool).to.be.true;
            });
        });
        // End Describe Output Validation
    });
    // End Describe comb
});
