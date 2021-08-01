 class Car{

    constructor(name)
    {
        this.name = name;
    }

    startEngin() {
        console.log('Engine started for '+ this.name); 
    } 
    stopEngin() {
        console.log('Engine Stopped for '+ this.name); 
    } 
 }

 class Tata extends Car
 {
     constructor(name)
     {
         super(name)
     }
    topSpeed(speed)
    {
        console.log('Top speed for' + this.name + ' is '+ speed);
    }

 }

 let myCar =new Tata("Tata Nexon");

 myCar.startEngin();
 myCar.topSpeed(60);
 myCar.stopEngin(); 