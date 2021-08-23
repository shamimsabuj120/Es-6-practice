// const person = {name:'shamim sabuj', age: 23, job: 'software developer', phone:'01724304107', gfName:'praptymony', gfJob:'BCS cader', gfAge: 22, friends:['al amin', 'sohan',' moinul','himu','zisan']};
// const { friends } = {name:'shamim sabuj', age: 23, job: 'software developer', phone:'01724304107', gfName:'praptymony', gfJob:'BCS cader', gfAge: 22, friends:['al amin', 'sohan',' moinul','himu','zisan']};
// const { gfAge, job, name } =person;
// // const gfName = person.gfName;
// // const phone = person.phone;
// // const age = person.age;

// console.log(name, job, gfAge, friends);
// // console.log(gfName,phone,age,gfAge,friends);
// // console.log(gfName,phone,age, gfAge,friends);
// // console.log(gfName,phone,age, gfAge,friends);


// //  array destructure 
// const friend = ['shamim khan', 'kalam khan', 'jahir khan', 'shakil khan', 'najir khan']

// const [firstANme, secondName, ...restNAme]= friend;
// console.log(firstANme,secondName,restNAme);

// still have a problem
const complexObject={
    name:"shamim",
    age: 23,
    info:{
        address:'kola bagan',
        phone: '01724304107',
    }
};
const {phone}= complexObject.info;
console.log(phone);