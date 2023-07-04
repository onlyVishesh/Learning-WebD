// Object = A group of properties and methods 
// properties - what an object has 
// methods - what an object can do 
// . is used to access methods/properties


// this - refers to a particular object in which this is used
const print = (data) => console.log(data);


const phone = {
    name:"Realme 11 pro",
    network:"5G",
    processor:"1080",
    battery:"5000mah",
    price:22000,

    use : function() {
        //console.log(`You are using ${phone.name}`);
        console.log(`You are using ${this.name}`);


    },

    buy : function() {
        console.log(`Congrts You have buy ${this.name}`);
    }
}

print(phone.name)
print(`total price including tax is ${phone.price+phone.price*0.18}`)

phone.buy()





