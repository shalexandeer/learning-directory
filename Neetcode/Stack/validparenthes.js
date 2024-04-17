/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let open = []
    for(let i = 0; i < s.length; i++){
      if(s[i] == '(' || s[i] == '{' || s[i] == '['){
        open.push(s[i])
      }
      
      
      if(s[i] == ')'){
        if(open[open.length - 1] == '('){
                open.pop()
            }
        }
        
        if(s[i] == '}'){
            if(open[open.length - 1] == '{'){
                open.pop()
            }else{
                return false
            }
        }
        
        if(s[i] == ']'){
            if(open[open.length - 1] == '['){
                open.pop()
            }
        }
    }
    return open.length == 0

};

console.log(isValid("([}}])")) // true