function convertBTC(number){
    let formatBTC = number.toLocaleString("en-US", {style: "currency", currency: "BTC"})
    return formatBTC;
  }
  let number = 20000000
  console.log(convertBTC(number))