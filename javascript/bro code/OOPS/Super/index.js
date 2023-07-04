// super - Refers to the parent class
//         commonly used to invoke constructor of a parent class


class Animal{

    alive = true;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

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

    constructor(name, age, swimSpeed) {
        super(name,age)
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

class Rabbit extends Animal {
    type = 'Mammal'

    constructor(name, age, walkSpeed) {
        super(name,age)
        this.walkSpeed = walkSpeed;
    }

    walk(){
        console.log(`this ${this.name} is walking`)
    }
}

class Crow extends Animal {
    type = 'Aves'

    constructor(name, age, flySpeed) {
        super(name,age)
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit('Rabbit',1,40);
const fish = new Fish('Fish', 0.5, 10);
const crow = new Crow('Crow', 1.25, 35);

console.log(rabbit.name)
console.log(rabbit.type)
console.log(rabbit.walkSpeed)
rabbit.walk()

console.log(crow.name)
console.log(crow.alive)
crow.eat()

console.log(fish.swimSpeed)
fish.swim()
fish.sleep()
