class UI{
    showTotalAmount(target,total){
        target.value = total.toFixed(2)
    }
    changeHeader(firstValue,secondValue,firstOutput,secondOutput){
        firstValue.textContent = firstOutput.value
        secondValue.textContent = secondOutput.value
    }
}