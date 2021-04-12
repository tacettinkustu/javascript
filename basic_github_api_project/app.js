const form = document.querySelector("#github-form");
const input = document.querySelector("#githubname");
const clear = document.querySelector("#clear-last-users");

const github = new Github();

eventlisteners();

function eventlisteners(){
    form.addEventListener("submit",getUserInformations)
}


function getUserInformations(e){
    const user = input.value.trim();
    if(user ===""){
        alert("Please insert a name")
    }else{
        github.getFromGithub(user)
        .then((response) => {
            if(response.user.message === "Not Found"){
            console.log("errorr")
            }else{
            console.log(response.user)
            }}
        
        ).catch(err=>console.error(err))
    }
    


    e.preventDefault();
}
