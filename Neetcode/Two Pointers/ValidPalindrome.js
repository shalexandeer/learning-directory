var isPalindrome = function(s) {
    const regex = /[a-zA-Z0-9]/;
    const newWord = s.toLowerCase().split('').filter(char => regex.test(char)).join('')

    if(newWord === newWord.split('').reverse().join('')) {
        return true;
    } 
    return false
};

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true