let studentOne = ["umair", "noman", "marsad"];
let studentTwo = ["ali", "uzair", "tayyab"];
let studentThree = ['Asif','usman','zahid','faheem']

// console.log(studentOne);
// studentOne.push(studentTwo);
// console.log(studentOne); // [ 'umair', 'noman', 'marsad', [ 'ali', 'uzair', 'tayyab' ] ]


// let concate = studentOne.concat(studentTwo,studentThree)
// console.log(concate)

// let spread = [...studentOne,...studentTwo,...studentThree]
// console.log(spread)

// let anotherArray = [1,2,3,4,[5,6],7,[6,7,[4,5]]]
// let usableArray = anotherArray.flat(Infinity)
// console.log(usableArray)
let name = "umair"
let a = Array.from(name) // convert into  array
let b = Array.from("Abbasi")
// console.log(a)
// console.log(b)
// console.log(Array.from({name:"umair"})) // [] intresting case

let val = Array.isArray(name)
// console.log(val) // false


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))