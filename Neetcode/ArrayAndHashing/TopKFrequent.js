/* 
Algorithm used = hashmap and bucket sort
time complexity O(n) 
*/

var topKFrequent = function(nums, k) {
   const count = {};
    const freq = Array.from({length: nums.length + 1}, () => []);

    // build frequency map
    nums.forEach(n => {
        count[n] = (count[n] || 0) + 1;
    })

    // bucket sort the numbers based on freqyency
    for (const n in count) {
        freq[count[n]].push(parseInt(n));
    }

    //extract the top K frequent elements
    const res = [];
    for(let i = freq.length - 1; i > 0; i--){
        for(const n of freq[i]){
            res.push(n);
            if(res.length === k){
                return res;
            }
        }
    }
    
    return res;
};