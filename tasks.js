// Task 1

// const Person = {
//     name: this.name,
//     age: this.age,
//     gender: this.gender,
//     introduce: function () {
//         return `My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`;
//     },
//     changeName: function (string) { this.name = string }
// };

// Person.name = 'Slava';
// Person.age = 27;
// Person.gender = 'male';

// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.gender);
// console.log(Person.introduce());
// Person.changeName('Stas');
// console.log(Person.introduce());

// Task 2

// const Animal = {
//     name: this.name,
//     eat: function () { return `${this.name} is eating`; }
// };

// const Dog = {
//     name: this.name,
//     bark: function () { return `Dog ${this.name} is barking`; }
// }

// Dog.name = 'Layka';
// Dog.eat = Animal.eat;
// console.log(Dog.bark());
// console.log(Dog.eat());

// Task 3

// const Calculator = {
//     arg1: 5,
//     arg2: 3,
//     add() { return this.arg1 + this.arg2; },
//     subtract() { return this.arg1 - this.arg2; },
//     multiply() { return this.arg1 * this.arg2; }
// };

// const numbs = {
//     arg1: 10,
//     arg2: 3
// };

// console.log(Calculator.add());
// console.log(Calculator.subtract());
// console.log(Calculator.multiply());
// console.log('---------------');
// console.log(Calculator.add.call(numbs));
// console.log(Calculator.subtract.apply(numbs));
// console.log(Calculator.multiply.call(numbs));

// Task 4

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
//     introduce() { return `My name is ${this.name} and I'm ${this.age} years old.` };
// };

// const person = new Person('Slava', 27);
// console.log(person.introduce());

// Task 5

class BankAccount {
    static bankName;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    };
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    };
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        } else console.log(`Insufficient funds in account ${this.accountNumber}`);
    };
};

const account1 = new BankAccount('1234567890', 1000);
console.log(`New bank account was created, number is ${account1.accountNumber}, savings is ${account1.balance}`);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1301);