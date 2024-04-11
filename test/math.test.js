const Math = require('../lib/Math')

describe('Math Tests', () => {
    it('Should return the sum of two numbers', () => {
        const sum = Math.sum(10, 15)

        expect(sum).toBe(25)
    })

    it('Shoult return the difference of two numbers', ()=> {
        const diff = Math.diff(10, 15)

        expect(diff).toBe(-5)
    })

    it('Shout return the sum of an array', () => {
        const sum = Math.sumArray([10, 15, 3])

        expect(sum).toBe(28)
    })
}) 