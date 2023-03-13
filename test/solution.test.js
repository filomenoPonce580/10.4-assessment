const findStudentByName = require("../src/solution")
const expect = require("chai").expect;

describe("findStudentByName", ()=>{
    it("finds student object based on the input name"), ()=>{
        const inputArray = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 }
        ];
        const expected = { name: "Leo Yeon-Joo", score: 8.9}
        const actual = findStudentByName(inputArray, "Leo Yeon-Joo")
        expect(actual).to.eql(expected) 
    }
    it("returns null if student is not found in array"), ()=>{
        const inputArray = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 }
        ];
        const actual = findStudentByName(inputArray, "Terry Peters")
        expect(actual).to.be.null
    }
    it("returns null if array is empty"), ()=>{
        const inputArray = [
        ];
        const actual = findStudentByName(inputArray, "Terry Peters")
        expect(actual).to.be.null
    }
})
