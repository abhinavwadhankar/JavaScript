
let EmpyDetails = function(name, age) {
  
    this.name = name;
    this.age = age;    
};

EmpyDetails.prototype.getName = function() {
    return this.name;
}

EmpyDetails.prototype.getAge = function() {
        
    return this.age;
}

let emp1 = new EmpyDetails('Ram','10');
console.log(emp1.getAge());
console.log(emp1.getName());