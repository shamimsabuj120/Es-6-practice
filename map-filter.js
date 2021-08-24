const number =[3,4,5,6,7,8,9];
// const squares =[];
// for(let i=0; i<number.length; i++){
//     const element = number[i];
//     const result = element *element;
//     squares.push(result);

// }
// function mapping (element){
//     return element*element;
// }
//  const square = element=>element*element;
//  const square = x => x*x;
// const result = number.map(function(element, index, array){
//     // console.log(element,index,array);
//     return element*element;
// })
//  const result = number.map(x=>x*x);

// console.log(result);

const bigger = number.filter(x=> x>5);
const smaller = number.find(x => x>5);
console.log(smaller);
console.log(bigger);