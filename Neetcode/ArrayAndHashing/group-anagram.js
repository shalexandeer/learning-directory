
/* 
Algorithm used = hashmap
time complexity = ()
*/

// solution 1 time complexity O(n × wlogw),
var groupAnagrams1 = function(strs) {
  const hashMap = new Map();
  for(const str of strs){
    const sorted = str.split('').sort().join('');
    if(!hashMap.has(sorted)){
      hashMap.set(sorted, [])
    }
    hashMap.get(sorted).push(str)
  }
  return Array.from(hashMap.values());
};

// solution 2 time 

const groupAnagrams2 = function(strs){
  const hashMap = new Map();

  for(let str of strs){
    // initialize count array for each character 'a' to 'z'
    const count = new Array(26).fill(0);
    // console.log(count);
    // count the frequency of each character in the string
    for(let c of str){
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++; 
    }

    //use the count array as the key
    const key = count.join('#'); //convert array to string to use as a key

    // group the anagrams
    if(!hashMap[key]) hashMap[key] = [];
    hashMap[key].push(str);

  }
  // extract the grouped anagrams
  return Object.values(hashMap)
}

// solution 3
var groupAnagrams = function(strs) {
  let myMap = new Map();
  strs.forEach((str)=>{
      let strSorted = str.split('').sort().join('');
      if(myMap.has(strSorted)){
          myMap.set(strSorted , [str, ...myMap.get(strSorted)])
      }
      else
      myMap.set(strSorted , [str])
  })
  return (Array.from(myMap.values()))
};
