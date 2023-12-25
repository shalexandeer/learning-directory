var isAnagram = function(s,t){
  if(s.length !== t.length) return false;

  const charFrequency = {};

  //count character frequency in string s
  for(const char of s){
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  //substract character frequency in string t
  for(const char of t){
    if(!charFrequency[char]){
      return false;
    }
    charFrequency[char] -= 1;
  }
  
  return Object.values(charFrequency).every(count => count === 0)

}