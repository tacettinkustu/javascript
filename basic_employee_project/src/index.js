import Request from "./request"

const form = document.getElementById("employee-form");
const name = document.getElementById("name");
const department = document.getElementById("department")
const salary = document.getElementById("salary")


const request = new Request;

// request.get().then(response => console.log(response))
// .catch(err => console.log(err))


// request.post({
//     name: "Ali Veli", 
//     department: "IT",
//     salary: 8000
// }).then(response => console.log(response))
// .catch(err => console.log(err))

// request.put(1,{
//     name: "Ali Veli", 
//     department: "IT",
//     salary: 8000
// }).then(response => console.log(response))
// .catch(err => console.log(err))

request.delete(5).then(response => console.log(response))
.catch(err => console.log(err))