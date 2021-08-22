class Parent{
    constructor(){
        this.fatherName="shamim sabuj"
    }
}

class Child extends Parent{
    constructor(name){
        super()
        this.name=name;
    }
    gateFullName(){
        return this.name + "" + this.fatherName;
    }
}
const baby = new Child("sabuj");
const baby2 = new Child("shamim");
console.log(baby,baby2);
console.log(baby.gateFullName(), baby2.gateFullName());