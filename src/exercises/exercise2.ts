//Class Person implements the Iperson interface
import * as personInterface from '../interfaces/person.interface';

class Person implements personInterface.Iperson {
    name: string;
    age: number;
    email: string;

    //Constructor to initialize person details
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    //Method to display person details
    sayHello(): void {
        console.log(`Hello ${this.name}! your age is ${this.age} and email is ${this.email}`);
    }
}

//Instances of Person class and calling sayHello method to display details
const person1 = new Person('John Doe', 30, 'john.doe@email.com');
const person2 = new Person('Jane Doe', 31, 'jane.doe@email.com');

person1.sayHello();
person2.sayHello();