    // How To Execute CallBack Functions Based On Status Change 
    
    const case1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("prepared for test")
        },3000)
    })
    const case2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("should improve")
        },3000)
    })

let plan = (result) => {
    console.log(result)
    console.log("write the code")
}

let plan2 = (failed) => {
    console.log(failed)
    console.log("practice again")
}

case1.then(plan)
case2.then(plan2)
