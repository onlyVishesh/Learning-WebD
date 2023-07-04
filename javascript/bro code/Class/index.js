// class - a blueprint for creating objects 
//         define what properties and method they have 
//         use a constructor for unique properties 


// defining basic properties and methods of a student to create multiple student object

class Student{
    ID = 0;
    name = '';
    Class = '';

    intro(){
        console.log(`Hi my name is ${this.name}. I am currently in ${this.Class} class`)
    }

    goToSchool(){
        console.log("Going to school");
    }

    lunch(){
        console.log("I am eating my lunch");
    }

    goToHome(){
        console.log("Going to home");
    }
}

// creating student object using class
// student1

const student1 = new Student();
student1.ID = 1234;
student1.name = 'vishesh';
student1.Class = "I dont know"


console.log(student1.ID)
student1.lunch()
console.log(student1.name)
student1.intro() 

// student2
const student2 = new Student();
student2.ID = 1334;
student2.name = 'SRK';
student2.Class = "6th"


console.log(student2.Class)
student2.lunch()
console.log(student2.name)
student2.intro() 


