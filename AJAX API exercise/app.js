document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest;
    xhr.open("GET", "https://api.exchangeratesapi.io/latest");
    
    xhr.onload = function () {
        if(this.status){
            const response = JSON.parse(this.responseText);
            const rate = response.rates.USD;
            const amount = Number(document.getElementById("amount").value);

            document.getElementById("usd").value = amount*rate;
        }
    }  
    xhr.send();
}
