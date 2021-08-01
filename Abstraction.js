function Employee(name, age, baseSalary) {
    
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 2000;

    let calculateFinalSalary = function () {
        let finalSal = baseSalary + monthlyBonus;
        console.log(finalSal);
    }

    this.getEmpDetails = function () {
        console.log('Name :' + this.name + ' | Age : '+this.age);
        calculateFinalSalary();
    }
} 

 
let emp1 =new Employee('Jhone',30,2000);
emp1.getEmpDetails();