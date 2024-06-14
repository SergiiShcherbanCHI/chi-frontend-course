// ENUM
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function getActivity(day: Days): string {
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

const today: Days = Days.Friday;
console.log(`Today ${Days[today]} and your activity: ${getActivity(today)}`);


// GENERIC
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    printQueue(): void {
        console.log(this.items);
    }
}

const stringQueue = new Queue<string>();
stringQueue.enqueue("I love");
stringQueue.enqueue("TypeScript");
console.log(stringQueue.dequeue());
stringQueue.printQueue();

const numberQueue = new Queue<number>();
numberQueue.enqueue(22);
numberQueue.enqueue(44);
console.log(numberQueue.dequeue());
numberQueue.printQueue();


// ALIASES AND LITERAL
type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber): StringOrNumber {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    } else {
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
} catch (error) {
    console.error(error.message);
}


// INTERFACE
interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson {
    position: string;
    salary: number;
}

class Employee implements IWorker {
    name: string;
    age: number;
    position: string;
    salary: number;

    constructor(name: string, age: number, position: string, salary: number) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(newSalary: number): void {
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
} catch (error) {
    console.error(error.message);
}