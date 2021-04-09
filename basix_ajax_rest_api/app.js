
document.getElementById("change").addEventListener("click",changeCurrency)

const xml = new XMLHttpRequest();

function changeCurrency(e){
    xml.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=b4b2acb2e76a0cfb4d11b48ed8610704")

    xml.onload = function(){
        if(xml.status == 200){

            const response = JSON.parse(xml.responseText)

            const TRY = response.rates.TRY
            const euro = Number(document.getElementById("amount").value)
            
            document.getElementById("tl").value = (TRY * euro).toFixed(2)
        }
    }


    xml.send()
    e.preventDefault();
}