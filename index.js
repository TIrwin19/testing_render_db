const {print, add} = require('./lib/studentTools.js')
// The array above = the two constants below
// const printStudents = studentTools[0]
// const addStudent = studentTools[1]

const dayjs = require('dayjs')

const studentName = process.argv[2]

if (studentName === 'print') {
    print()
    
} else {
    const date = dayjs().format('M/D/YYYY')
    add(studentName + '-' + date)
}
