// falsy:
// false
// 0
// ""
// undefined
// null
// NaN
// truthy:
// " "
// []
// '0'
let name=12
if(name || name==0){
    console.log('this is true');
}
else{
    console.log('this is false');
}
