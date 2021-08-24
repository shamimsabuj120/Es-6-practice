let bonus = 20;
function sum(num1, num2){
    let result =num1 + num2+ bonus;
    if(result>20){
        const mood= "happy now";
        console.log(mood);
    }
    return result;
}
const bigger= sum(4 , 5);
// console.log(mood);
 console.log(bonus);
console.log(bigger);