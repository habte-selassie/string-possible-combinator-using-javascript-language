str = 'abebe'
const possibleCombinations = function(str){
    let combination = [];
    for (let i = 0; i <= str.length; i++) {
     
        for (let j=i+1; j <= str.length; j++) {
            
            
            combination.push(str.slice(i,j));
        }
    }
    return combination
    }
a = str.length;
console.log(a);

console.log(possibleCombinations('abebe'));
