const students =[
    {id:21,name:" salman khan"},
    {id:41,name: " malayam khan"},
    {id:45,name:" jahir khan"},
    {id:71,name:" rupok khan"},

];
const nameProperty=[];
for(let i=0; i<students.length; i++){
    const element = students[i];
    // console.log(element)
    const result = element.name;
    nameProperty.push(result);
}

 console.log(nameProperty);

 const result = students.map(x=> x.name);
 const ids= students.map(element=> element.id);
 const Screening = students.filter(element=> element.id>41);
 const searching = students.find(element=> element.id>41);
 console.log(result);
 console.log(ids);
 console.log(Screening);
 console.log(searching);