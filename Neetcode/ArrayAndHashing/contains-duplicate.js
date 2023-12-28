const  containsDuplicate = function(nums) {
  let hashset = new Set();
  for (let i = 0; i < nums.length; i++) {
    if(hashset.has(nums[i])) {
      return true;
    }
    hashset.add(nums[i]);
  }
  return false;
}

const RegularSort = function(nums){
  const newArr = nums.sort((a,b) => a - b )
  for (let i = 0; i < newArr.length; i++) {
     if(nums[i] === nums[i-1]) return true;
  }
  return false;
}



console.log(RegularSort([20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 17, 19]
));