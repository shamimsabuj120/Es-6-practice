const normalPerson={
    firstName:"shamim",
    lastNAme:"sabuj",
    salary:15000,
    gateFullName:function(){
        console.log(this.firstName, this.lastNAme);
    },
    billCharge:function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    }
}
normalPerson.billCharge(3000);
normalPerson.billCharge(6000);
console.log(normalPerson.salary);
console.log(normalPerson.lastNAme);