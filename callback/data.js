let employees = [
    { id: 101, name: "sushma", sal: 45000 },
    { id: 102, name: "santosh", sal: 55000 }
]
let createEmployee = (emp,data) => {
    setTimeout(() => {
        employees.push(emp)
        data()
    },3000)
}
let get_Employees = () => {
    setTimeout(() => {
        let ro = ""
        employees.forEach((employee) => {
            ro = ro+ `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.sal}</td>
                            </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = ro
    },1000)
}

createEmployee({ id: 103, name: "sandeep", sal: 65000 },get_Employees);