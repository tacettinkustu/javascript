const obj1 = {
    name : "Tacettin",
    lastName : "Kustu",
    age : 26,
    salary : 3000,
    getFullInformation : function(){
        console.log(`${this.name} ${this.lastName} ${this.age} ${this.salary}`)
    }
}

const obj2 = {
    name : "Ali",
    lastName : "Veli",
    age : 49,
    salary : 5000,
    getFullInformation : function(){
        console.log(`${this.name} ${this.lastName} ${this.age} ${this.salary}`)
    }
}

function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Person.prototype.showInfos = function(){
    console.log(`${this.name} ${this.age} ${this.salary}`)
}


class Employee extends Person {
    constructor(name,age,sex,salary){
        super(name,age,sex);
        this.salary = salary;
    }
    getInfos(){console.log(`${this.name} ${this.age} ${this.salary}`)};
}


emp1 = new Employee("tacettin",26,"male",3000)
emp1.getInfos()
console.log(emp1)
emp1.showInfos()