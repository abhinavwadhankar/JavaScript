class Employee
{
    setEmpDetails(name)
    {
        this.name = name
    }

    getEmp()
    {
        return this.name;
    }
}

let emp1 = new Employee();

emp1.setEmpDetails('Jonny');

console.log(emp1.getEmp());


