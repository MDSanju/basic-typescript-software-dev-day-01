// Normal function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(5, 4);


// Arrow function

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}

addArrow(10, 30);


// Callback function example

const arr = [1, 3, 5, 7];

const newArray = arr.map((item: number) => item * item);


// Method example

const person: {
    name: string,
    balance: number,
    addBalance(money: number): string;
    // Method example 2 type
    // addBalance(money: number): number;
    // Method example 3 type
    // addBalance(money: number): void;
} = {
    name: "Joel",
    balance: 100,
    // Method
    addBalance(money: number) {
        const totalBalance = this.balance + money;
        return `Total Balance $${totalBalance} Dollars.`;
    }
    // Method example 2
    /*
    addBalance(money: number) {
        return this.balance + money;
    }
    */
    // Method example 3
    /*
    addBalance(money: number) {
        console.log(this.balance + money);
    }
    */
}


// Function's default parameter

const sum = (num1: number, num2: number = 14): number => {
    return num1 + num2;
}

// It needs only one parameter for using default value of the last parameter in the function above

sum(19, 6);
sum(7);


// Spread opearator

const friends = ['John', 'Bob', 'Kayel', 'Joey'];
const girlFriends = ['Alex', 'Mariya', 'Emma', 'Ally'];

friends.push(...girlFriends); // Spread opearator
console.log(friends, 'My friends');


// Rest opearator

const greetFriends = (...friends: string[]): void => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
}

greetFriends('John', 'Rock', 'Alex', 'Bob');
