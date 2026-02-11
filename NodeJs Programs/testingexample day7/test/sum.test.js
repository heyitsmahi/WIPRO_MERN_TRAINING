const assert = require('assert');
describe("Calculator",()=>{
    it("adds two numbers",()=>{
        const sum = (a,b) => a + b;
        assert.equal(5,sum(2,3));
    });

    it("Subtracts two numbers",()=>{
        const subtract = (a,b) => a - b;
        assert.equal(5,subtract(2,7));
    });

    it("Multiplies two numbers",()=>{
        const multiply = (a,b) => a * b;
        assert.equal(5,multiply(2,7));
    });
});
