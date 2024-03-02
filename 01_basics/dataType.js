// primitive 

// 7 types : String, Number, Boolean , null, undefined, symbol, BigInt

const score = 100
const scoreValue = 1000.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)




// Referance(Not primitive)

// Araay, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello\n")
}