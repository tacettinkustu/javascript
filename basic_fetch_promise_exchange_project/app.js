const amount = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");
const output = document.querySelector("#outputResult");
const outputFirst =document.querySelector("#outputFirst");
const outputSecond = document.querySelector("outputSecond")

const currency = new Currency("USD", "TRY");
const ui = new UI();

eventListeners();

function eventListeners() {
  amount.addEventListener("input", exchangeCurrency);
  firstCurrency.addEventListener("change", changeFirstCurrency);
  secondCurrency.addEventListener("change",changeSecondCurrency);
}


function exchangeCurrency() {
  const amountValue = amount.value
  currency.exchange()
    .then((currency) => {
        const total = Number(amountValue)*Number(currency)
        ui.showTotalAmount(output,total)
        firstCurrency.textContent = outputFirst.value
        secondCurrency.textContent = outputSecond.value
    })
    .catch((err) => console.log(err));
}

function changeFirstCurrency(e){
    currency.changeFirstCurrencyValue(firstCurrency.value)
    exchangeCurrency()
}

function changeSecondCurrency(e){
    currency.changeSecondCurrencyValue(secondCurrency.value)
    exchangeCurrency()
}



