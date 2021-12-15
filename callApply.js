// const normalPerson={
//     firstName:"shamim",
//     lastNAme:"sabuj",
//     salary:15000,
//     gateFullName:function(){
//         console.log(this.firstName, this.lastNAme);
//     },
//     billCharge:function(amount, tips){
//         console.log(this);
//         this.salary=this.salary-amount-tips;
//         return this.salary;
//     }
// }
// // normalPerson.billCharge(3000);
// // normalPerson.billCharge(6000);
// // console.log(normalPerson.salary);
// // console.log(normalPerson.lastNAme); 

// const heroPerson={
//     firstName:'hero',
//     lastName:'Golam',
//     salary:2500
// }
// const friendlyPerson={
//     firstName:'hero',
//     lastName:'Balam',
//     salary:2500
// }

// // normalPerson.billCharge()

// // const heroChargeBill=normalPerson.billCharge.bind(heroPerson);
// // heroChargeBill(2000)
// // heroChargeBill(200)
// // console.log(heroPerson.salary)
// // console.log(normalPerson.salary)

// // normalPerson.billCharge.call(heroPerson, 900);
// // normalPerson.billCharge.call(heroPerson, 3000);
// // console.log(heroPerson.salary)
// // normalPerson.billCharge.call(friendlyPerson, 600, 100)
// // console.log(friendlyPerson.salary)
// // console.log(normalPerson.salary) 
// normalPerson.billCharge.apply(friendlyPerson, 900,)
// console.log(friendlyPerson.salary)

class person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary = salary;
    }
}

const HeroPerson = new person('balam', 'sanam', 2500)
console.log(HeroPerson)