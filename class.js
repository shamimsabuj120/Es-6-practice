class Student{
    constructor(sId, sNAme){
        this.id=sId;
        this.name= sNAme;
        this.school= "Adamjee Cant Public School";
    }

}

const student1 = new Student(12, "shamim");
const student2 = new Student(14, "kalam");
console.log(student1, student2);
console.log(student1.id, student2.name);