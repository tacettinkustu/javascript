const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

addEventListener();

function addEventListener() {
  amountElement.addEventListener("input", exchangeCurrency);

  firstSelect.onchange = function () {
    currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
    ui.changeFirst();
  };

  secondSelect.onchange = function () {
    currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
    ui.changeSecond();
  };
}

function exchangeCurrency() {
  currency.changeAmount(amountElement.value);
  currency.exchange()
  .then(total => {
      ui.displayResult(total);
  })
  .catch(err => console.log(err));
}
