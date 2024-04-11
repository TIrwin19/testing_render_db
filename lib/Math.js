class Math {
    static sum(a, b){
        return a + b
    }

    static diff(a, b){
        return a - b
    }

    static sumArray(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++){
            sum += arr[i]
            return sum
        }
    }
    // ^same
    static sumArray(arr){
        return arr.reduce((x, y) => x + y, 0)
    }
       
}

module.exports = Math