<h1 align="center">Project Name - TODO List
</h1>
<!-- ABOUT THE PROJECT -->

## About The Project
This a small project created to learn JavaScript concepts. In this project i learn about array and loops with DOM manuplation.

Demo Video - 


https://github.com/onlyVishesh/Learning-WebD/assets/121187728/5bbaa06d-017c-4669-a77a-72c866d92288







### Built With

This project is build using - 

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 


## Concepts Used

## Arrays and Loops

This folder contain a to do list project which is based on the concepts of arrays and loops

### Arrays

array is a collection of values or variables

Syntax - `const array_name = [item1, item2, ...];`

##### Array Methods

1.  Array length - The length property returns the length (size) of an array:<br>

    Example

    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"]; <br>
    let size = fruits.length;<br>
    ```

    Result

    ```javascript
    4;
    ```

2.  Array push() - The push() method adds a new element to an array (at the end):<br>

    Example

    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
    fruits.push("Kiwi");
    ```

    Result

    ```javascript
    ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    ```

3.  Array pop() - The pop() method removes the last element from an array:<br>

    Example

    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
    fruits.pop();
    ```

    Result

    ```javascript
    ["Banana", "Orange", "Apple"];
    ```

4.  Array shift() - The shift() method removes the first array element and "shifts" all other elements to a lower index:<br>

    Example

    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
    fruits.shift();
    ```

    Result

    ```javascript
    ["Orange", "Apple", "Mango"];
    ```

5.  Array unshift() - The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:<br>

    Example

    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
    fruits.unshift("Lemon");
    ```

    Result

    ```javascript
    ["Lemon", "Banana", "Orange", "Apple", "Mango"];
    ```

6.  Array join() - The join() method also joins all array elements into a string:<br>

    Example

    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
    document.getElementById("demo").innerHTML = fruits.join(" * ");
    ```

    Result

    ```javascript
    Banana * Orange * Apple * Mango;
    ```

7.  Array delete() - Array elements can be deleted using the JavaScript operator delete:<br>

    Example

    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];<br>
    delete fruits[2];
    ```

    Result

    ```javascript
    ["Banana", "Orange", "Mango"];
    ```

8.  Array concat() - The concat() method creates a new array by merging (concatenating) existing arrays:<br>

    Example

    ```javascript
    const myGirls = ["Cecilie", "Lone"];<br>
    const myBoys = ["Emil", "Tobias", "Linus"];<br>
    const myChildren = myGirls.concat(myBoys);<br>
    ```

    Result

    ```javascript
    ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];
    ```

### Loops

Loops can execute a block of code a number of times.

##### For loop

The for statement creates a loop with 3 optional expressions:

```javascript
for (expression 1; expression 2; expression 3) {
// code block to be executed
}
```

Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.

1. for in
   The JavaScript for in statement loops through the properties of an Object:<br>

    Syntax

    ```javascript
    for (key in object) {
        // code block to be executed
    }
    ```

    Example

    ```javascript
    const person = { fname: "John", lname: "Doe", age: 25 };

    let txt = "";
    for (let x in person) {
        txt += person[x] + " ";
    }

    console.log(text);
    ```

    Result

    ```javascript
    John Doe 25
    ```

2. for of
   The JavaScript for of statement loops through the values of an iterable object.<br>

    Syntax

    ```javascript
    for (variable of iterable) {
        // code block to be executed
    }
    ```

    Example

    ```javascript
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
        text += x + "\n";
    }
    console.log(text);
    ```

    Result

    ```javascript
    BMW;
    Volvo;
    Mini;
    ```

##### While loop

The while loop loops through a block of code as long as a specified condition is true.<br>

Syntax

```javascript
while (condition) {
    // code block to be executed
}
```

Example

```javascript
while (i < 10) {
    text += "The number is " + i + "\n";
    i++;
}
console.log(text);
```

Result

```javascript
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
```

##### While loop

The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. <br>

Syntax

```javascript
do {
    // code block to be executed
} while (condition);
```

Example

```javascript
do {
    text += "The number is " + i + "\n";
    i++;
} while (i < 10);
console.log(text);
```

Result

```javascript
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
```
