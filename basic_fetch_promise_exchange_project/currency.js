class  Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "http://api.exchangeratesapi.io/v1/latest?access_key=b4b2acb2e76a0cfb4d11b48ed8610704";
    }

    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url)
            .then(response => response.json())
            .then(object => object.rates)
            .then(currencies => {
                const firstParity = currencies[this.firstCurrency]
                const secondParity = currencies[this.secondCurrency]
                const baseParity = Number(secondParity)/Number(firstParity)
                resolve(baseParity) 
            })
            .catch(err => reject(err))
        })
    }

    changeFirstCurrencyValue(value){
        this.firstCurrency = value;
    }

    changeSecondCurrencyValue(value){
        this.secondCurrency = value;
    }
}