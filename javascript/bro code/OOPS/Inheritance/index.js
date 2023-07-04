// Inheritance - a child class that have access of all parent class methods and properties 

class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is Eating`)
    }

    walk(){
        console.log(`This ${this.name} is Walking`)
    }

    sleep(){
        console.log(`This ${this.name} is Sleeping`)
    }
}

class Fish extends Animal {
    type = 'Vertebrate'
    name = 'Fish'

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

class Rabbit extends Animal {
    type = 'Mammal'
    name = 'Rabbit'

    walk(){
        console.log(`this ${this.name} is walking`)
    }
}

class Crow extends Animal {
    type = 'Aves'
    name =  'Crow'

    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const crow = new Crow();

console.log(rabbit.name)
console.log(rabbit.type)
rabbit.walk()

console.log(crow.name)
console.log(crow.alive)
crow.eat()

fish.swim()
fish.sleep()
