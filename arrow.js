function doubleIt(num){
    return num*2;
}

const doubleIt2 = function myFunc(num){
    return num*2;
}

const doubleIt3 = num => num *2;

const doubleIt4 =(x,y) => (x+y)*2;

const doubleIt5 =()=> 5;

const bisalDoMath=(x,y)=>{
    const sum =x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(5);
console.log(result);

const result2 = doubleIt2(50);
console.log(result2);

const result3 = doubleIt3(100);
console.log(result3);

const result4 = doubleIt4(5,10)
console.log(result4);

const result5 = doubleIt5()
console.log(result5);

const result6 = bisalDoMath(10,5);
console.log(result6);