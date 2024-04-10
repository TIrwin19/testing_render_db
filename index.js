class Person {
    constructor(name, age, hobbies) {
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }

    haveBirthday() {
        this.age++
        console.log('Happy Birthday', this.name)
    }

    printBirthday(){
        console.log(`${this.name} is ${this.age} years old.`)
    }

    printHobbies(){
        console.log('\nHobbies\n----------')

        this.hobbies.forEach((hobby) => {
            console.log(hobby)
        })
    }
}

const jd = new Person('JD', 44, ['fishing', 'pickleball'])

console.log(jd)

jd.haveBirthday()
jd.printBirthday()
jd.printHobbies()


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