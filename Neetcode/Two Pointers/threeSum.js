var threeSum = function(nums) {
    let result = [];
    
    for(let i = 1; i < nums.length; i++){
      let key = nums[i];
      let j = i - 1;

      while(j >= 0 && nums[j] > key){
          nums[j + 1] = nums[j];
          j--;
      }
      nums[j + 1] = key
    }
   
    for(let i = 0; i < nums.length; i++){
      if(i > 0 && nums[i] == nums[i-1]){
          continue
      }
      let [left, right] = [i + 1, nums.length - 1]
      while(left < right){
        let threeSum = nums[i] + nums[left] + nums[right]
        if(threeSum > 0){
            right--;
        }
        if(threeSum < 0){
            left++;
        }
        if(threeSum === 0){
            result.push([nums[i], nums[left], nums[right]])
            while(nums[left] === nums[left + 1]){
                left++;
            }
            while(nums[right] === nums[right - 1]){
                right--;
            }
            left++;
            right--;
        } 
      }
    }
  
  return result
  
};

console.log(threeSum([-1,0,1,2,-1,-4]))
//   let sum = firstVal + nums[left ] + nums[right]
   
//   while(left < right){
//       if(sum > 0){
//           right--;
//       }
//       if(sum < 0){
//           left++;
//       }
//       console.log('firstVal', firstVal)
//       console.log('numsleft', nums[left])
//       console.log('numsright', nums[right])
//       console.log('sum', sum)
//       if(firstVal === nums[left]){
//           left++;
//       }
//       if(sum === 0){
//           result.push([firstVal, nums[left], nums[right]])
//       }
//   }