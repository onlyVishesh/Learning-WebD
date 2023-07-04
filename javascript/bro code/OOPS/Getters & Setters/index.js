// get - binds an object property to a function
//      when that property is accessed an additional function act on it
// get needs a new name other than property name so we use _ to make it different

// set - binds an object property to a function when that property is assigned a values


class Car{

    constructor(power,fuel){
        this._fuel = fuel
        this._power = power;
    }

    get power(){
        return `${this._power}hp`;
    }

    get fuel(){
        return `${this._fuel}L`;
    }

    set fuel(value){
        if(value<50 && value>0 ){ //50 indicates max fuel can be filled
            this._fuel = value;
        }
    }
}

let car = new Car(200, 20)


console.log(car.power)

console.log(car.fuel)
car.fuel = 30
console.log(car.fuel)

