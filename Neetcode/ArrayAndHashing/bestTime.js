var maxProfit = function(prices) {
    const length = prices.length
    let sortedPrices = [...prices]

    // sorting the array
    for(let i = 1; i < length; i++){
        let key = sortedPrices[i];
        let j = i - 1;

        while(j >= 0 && sortedPrices[j] > key){
            sortedPrices[j + 1] = sortedPrices[j]
            j--;
        }
        sortedPrices[j + 1] = key
    }

    // find min
    for(let i = 0; i < length; i++){
        let min = sortedPrices[i]
        for(let j = length - 1; i >= 0; j--){
            let max = sortedPrices[j]
            if(prices.indexOf(max) > prices.indexOf(min)){
                return max - min
            }
        }
    }

    return 0
    
};
var maxProfits = function(prices) {
  let minPrice = Infinity; // Initialize minimum price seen so far
  let maxProfit = 0;       // Keep track of maximum profit

  for (let price of prices) {
    // Update minimum price
    if (price < minPrice) {
      minPrice = price;
    }

    // Check potential profit based on current price and minimum
    if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
};

console.log(maxProfits([7,1,5,3,6,4])) // 5