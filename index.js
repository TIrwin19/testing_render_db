const data = {
    name: 'JD',
    age: 44
}

function handlesSomeTask(isCool){
    return new Promise((resolve, reject)=>{
        if (isCool) {
            setTimeout(()=>{
                resolve()
            }, 3000)
        } else {
            reject()
        }
    })
}

handlesSomeTask(true)
    .then(()=>{
        console.log('all good')
    })
    .then(()=>{
        console.log('all okay')
    })
    .then(()=>{
        console.log('all fine')
    })
    .catch(()=>{
        console.log('all bad')
    })








// class Promise {
//     them(cb) {
//         setTimeout(()=>{
//             cb()
//         }, 3000)
//     }

//     catch(cb) {

//     }
// }

// const prom = new Promise()

// prom.them(()=>{
//     console.log('callback called')
// })