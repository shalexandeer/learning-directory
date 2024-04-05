var productExceptSelf = function(nums) {
    let result = [];

    for(let i = 0; i < nums.length; i++){
        let multiplier = 1;
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                multiplier *= nums[j]
            }
        }
        if(multiplier === -0){
          multiplier = 0
        }
        result.push(multiplier)
    }

    return result;
};


console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]
