/*
Algorithm used = HashMap lookup

Time Complexity Analysis = 
Iteration: The function iterates through each element of nums once, leading to 
O(n) time complexity, where n is the length of the array.
Map Operations: The has and set operations of a JavaScript Map are generally O(1) on average.
Overall, the time complexity of the twoSum function is O(n), making it efficient for large arrays.
*/

var twoSum = function(nums, target) {
    const hashMap = new Map();

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        
        if(hashMap.has(complement)){
            return [hashMap.get(complement),i]
        }

        hashMap.set(nums[i],i)
    }

    //no solution found
    return []
};