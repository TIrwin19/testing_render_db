const args = process.argv
// console.log('browser stuff', document, window)
// Get two number arguments from the user's command list (process.argv)

// const num1 = args[2]
// const num2 = args[3]

// Add those two numbers together
// console.log(Number(num1) + Number(num2))
// console.log('The sum is:', +num1 + +num2)

// console.log the sum of the two numbers



// these are the same
// function printSomething(str) {
//     console.log(str)
// }
// these are the same
// printSomething('some string')

// const sum = (num1, num2) => num1 + num2

// const add = sum(5, 20)

// console.log(add)



function printStudents(...arr){
    console.log(arr)
}

printStudents('Wes', 'Will', 'Musin', 'Vince', 'juan', 'Alice')