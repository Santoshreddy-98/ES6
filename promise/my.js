let students = [{ Roll:201, Name: "Santosh", Result:"pass"},
{ Roll:202, Name: "Sushma",Result:"pass"}
];
let backBencher = (bench) => {
    // console.log("Test Case 123")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            flag ? resolve("Data Inserted Successfully") : reject("Not Inserted")
            students.push(bench)
            
            
        }, 1000)
    });
}
let Toppers=()=>{
    setTimeout(() => {
        let rows = ""
        students.forEach((bench) => {
            rows = rows + `<tr>
                            <td>${bench.Roll}</td>
                            <td>${bench.Name}</td>
                            <td>${bench.Result}</td>
                            </tr>`
        })
        document.getElementById("data").innerHTML = rows
    }, 2000)
}

backBencher({ Roll:203,Name:"sandeep",Result:"gotjob"},Toppers())
.then((msg) => {
        console.log(msg);
        Toppers()
    })
    .catch((err) => {
         console.log(err) 
        })