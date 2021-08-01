class Animal{

    constructor(name)
    {
        this.name = name;
    }

    eats()
    {
        console.log(this.name + ' eats food');

    }    
}
class Tiger extends Animal
{
        eats()
        {
            super.eats();
            console.log(this.name + ' eats Dears');

        }    
}

let  wildAnimalT2 = new Tiger('Tiger');
wildAnimalT2.eats();
