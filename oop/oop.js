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

function Employee(name,age,salary){
    this.name =name;
    this.age =age;
    this.salary =salary;
    this.getInfos = function(){console.log(`${name} ${age} ${salary}`)};

}

Employee.prototype.showInfos = function(){
    console.log(`${this.name} ${this.age} ${this.salary}`)
}


const emp1 = new Employee("Ali",26,300)
emp1.getInfos()
emp1.showInfos()
console.log(emp1)

Employee.prototype = Object.create(Person.prototype)

const emp2 = new Employee("Mehmet",45,1000,sex="male")
console.log(emp2)

