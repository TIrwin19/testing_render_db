// class Person {
//     species = 'Homosapien'

//     constructor(name, age, hobbies) {
//         this.name = name
//         this.age = age
//         this.hobbies = hobbies
//     }

//     haveBirthday() {
//         this.age++
//         console.log('Happy Birthday', this.name)
//     }

//     printBirthday() {
//         console.log(`${this.name} is ${this.age} years old.`)
//     }

//     printHobbies() {
//         console.log('\nHobbies\n----------')

//         this.hobbies.forEach((hobby) => {
//             console.log(hobby)
//         })
//     }
// }

// const jd = new Person('JD', 44, ['fishing', 'pickleball'])

// console.log(jd)
// console.log(jd.species)

// jd.haveBirthday()
// jd.printBirthday()
// jd.printHobbies()


class Phone {
    screen = true

    constructor(number, size, model, color) {
        this.number = number
        this.size = size
        this.model = model
        this.color = color
    }

    printModel(){
        console.log('Model:', 'Base')
    }
}

class iphone extends Phone {
    faceTime = true

    constructor(number, size, model, color, appleID){
        super(number, size, model, color)
        this.appleID = appleID
    }

    printModel(){
        console.log('iPhone:', this.model)
    }
}

class samsung extends Phone {
    foldable = true

    constructor(number, size, model, color, repairID){
        super(number, size, model, color)
        this.repairID = repairID
    }

}

const jdPhone = new iphone('777-777-7777', 'standard', '15', 'gray', 'ygliugliug')
const bobPhone = new iphone('777-777-7777', 'standard', '12', 'green', 'iaedportgp')
const sarahPhone = new samsung('777-777-7777', 'foldable', '23', 'blue', '123456789')

console.log(jdPhone)
console.log(bobPhone)
console.log(sarahPhone)

jd.printModel()




// function Person(name, age, hobbies) {
//     this.name = name
//     this.age = age
//     this.hobbies = hobbies
// }

// Person.sayHi = function(){
//     console.log('Hi!')
// }

// Person.prototype.species = 'Homosapien'

// Person.prototype.haveBirthday = function () {
//     this.age++
//     console.log('Happy Birthday!')
// }

// Person.prototype.printBirthday = function(){
//     console.log(`You are ${this.age} years old`)
// }

// const jd = new Person('JD', 44, ['fishing', 'pickleball'])
// const bob = new Person('Bob', 99, ['bingo', 'walks'])
// const sarah = new Person('Sarah', 28, ['Dancing', 'Climbing'])

// console.log(bob.species)
// console.log(jd)
// console.log(sarah)

// jd.haveBirthday()
// bob.haveBirthday()
// sarah.haveBirthday()

// jd.printBirthday()
// bob.printBirthday()
// sarah.printBirthday()

// Person.sayHi