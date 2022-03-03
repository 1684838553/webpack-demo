function getString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello word!!!')
        }, 2000)
    })
}

async function helloword() {
    const res = await getString()
    console.log(res)
}

export default helloword
