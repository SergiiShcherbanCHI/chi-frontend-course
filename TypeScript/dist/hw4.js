"use strict";
// ENUM
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
function getActivity(day) {
    switch (day) {
        case Days.Sunday:
            return "Free day";
        case Days.Monday:
            return "JS";
        case Days.Tuesday:
            return "PHP";
        case Days.Wednesday:
            return "Python";
        case Days.Thursday:
            return "Java";
        case Days.Friday:
            return "C++";
        case Days.Saturday:
            return "Beer";
        default:
            return "Unknown activity";
    }
}
const today = Days.Friday;
console.log(`Today ${Days[today]} and your activity: ${getActivity(today)}`);
// GENERIC
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    printQueue() {
        console.log(this.items);
    }
}
const stringQueue = new Queue();
stringQueue.enqueue("I love");
stringQueue.enqueue("TypeScript");
console.log(stringQueue.dequeue());
stringQueue.printQueue();
const numberQueue = new Queue();
numberQueue.enqueue(22);
numberQueue.enqueue(44);
console.log(numberQueue.dequeue());
numberQueue.printQueue();
function combine(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        throw new Error('Both inputs must be either strings or numbers of the same type.');
    }
}
const resultWithSting = combine("Beer: ", "Stella Artois");
console.log(resultWithSting);
const result2WithNumber = combine(687, 1365);
console.log(result2WithNumber);
try {
    const resultError = combine("Hello", 10);
    console.log(resultError);
}
catch (error) {
    console.error(error.message);
}
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('Salary must be a positive number!');
        }
        this.salary = newSalary;
    }
}
const employee = new Employee('Sergey', 33, 'Developer', 5000);
console.log(`Get salary: ${employee.getSalary()}`);
employee.setSalary(6000);
console.log(`Set salary: ${employee.getSalary()}`);
try {
    employee.setSalary(-1000);
}
catch (error) {
    console.error(error.message);
}
