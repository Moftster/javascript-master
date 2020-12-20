const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'USD'){
    const res = await fetch(`${endPoint}?base=${base}`);
    const rates = await (await res).json();
    return rates;
  }
  
  export async function convert(amount, from, to){
    //check if we have the rate to convert
    if(!ratesByBase[from]){
      console.log(`We don't have ${from} to convert ${to}. Lets go get it`);
      const rates = await fetchRates(from);
      console.log(rates);
      ratesByBase[from] = rates;
    }
      // store them for next time
      const rate = ratesByBase[from].rates[to];
      const convertedAmount = rate * amount;
      console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
      return convertedAmount;
  }

