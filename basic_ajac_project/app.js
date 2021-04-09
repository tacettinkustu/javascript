document.getElementById("ajax").addEventListener("click",function(e){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","./employee.json",true)

    xhr.onload = function(){
        if(xhr.status == 200){
            const list = JSON.parse(xhr.responseText)
            list.forEach(function(person){
                const tbody = document.getElementById("employees")
                tbody.innerHTML += `
                    <tr>
                        <td>${person.name}</td>
                        <td>${person.department}</td>
                        <td>${person.salary}</td>
                    </tr>
                `
            })
        }
    }


    xhr.send()

    e.preventDefault();
})