// Map - object that holds key-value pairs of y datatype 

const store = new Map([
    ["key1","value1"],
    ["key2","value2"],
    ["key3","value3"],
    ["key4","value4"],

])

// To display each key-value pair

store.forEach( (value,key) => {
    console.log(`${key}: ${value}`)
});


const list = new Map([
    ["Tshirt",200],
    ["Shoes", 500],
    ["Bag", 300]
]);


// .get("key") - get value associated to the key

let shoppingCart = 0;
shoppingCart += list.get("Bag");
shoppingCart += list.get("Shoes");
console.log(shoppingCart)

// .set("key",value) - to add key-value pair

list.set("Hat",250);
list.forEach( (value,key) => {
    console.log(`${key}: ${value}`)
});

// .delete("key") - to remove key-value pair

list.delete("Tshirt");
list.forEach( (value,key) => {
    console.log(`${key}: ${value}`)
});

// .has("key") - give a boolean value

console.log(list.has("Hat"))
console.log(list.has("Tshirt"))

// .size -gives total no of pairs
 
console.log(list.size)


