console.log("Hello I'm a promise!")

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data')
        reject('Something no no ')
    }, 1500)
    
})

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log("We have an error!" , error)
})