// Write your tests here!
const findStudentByName = require("../src/solution")
const expect = require("chai").expect;

describe("findStudentByName", ()=>{
    it("finds student object based on the input name"), ()=>{
        const inputArray = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
            { name: "Jim", score: 7}
        ];
        const expected = { name: "Jim", score: 7}
        expect(findStudentByName(inputArray, "Jim")).to.eql(expected) 
    }
    it("returns null if student is not found in array"), ()=>{
        const inputArray = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
            { name: "Jim", score: 7}
        ];
        expect(findStudentByName(inputArray, "Jimbo")).to.be.null
    }
})  