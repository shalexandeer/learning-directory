
var longestConsecutive = function(nums) {
     if (nums.length === 0) {
        return 0;
    }

    let numSet = new Set(nums);

    let cnt = 1;        // Initialize a counter for the current consecutive sequence length.
    let longest = 1;    // Initialize a variable to store the maximum consecutive sequence length.

    // Step 3: Iterate through the elements of 'nums'.
    for (let num of nums) {
        cnt = 1
        // Step 4: If the current element 'num' is the start of a sequence (no 'num-1' in 'numSet'),
        if (!numSet.has(num - 1)) {
            let x = num;  // Update 'x' to the current element 'num'.
            
            // Step 5: While consecutive elements exist in 'numSet', increment 'cnt' and 'x'.
            while (numSet.has(x + 1)) {
                cnt++;
                x++;
            }
        }
        
        // Step 6: Update 'longest' with the maximum of 'longest' and 'cnt'.
        longest = Math.max(longest, cnt);
    }

    // Step 7: Return 'longest' as the result.
    return longest;
};

var longestConsecutive2 = function(nums) {
    const n = nums.length;
    
    if (n === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let cnt = 1;
    let maxi = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                cnt++;
            } else {
                maxi = Math.max(maxi, cnt);
                cnt = 1;
            }
        }
    }

    return Math.max(maxi, cnt);
};