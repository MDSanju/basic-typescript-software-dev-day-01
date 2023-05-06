"use strict";
// Nullable type example
const searchName = (value) => {
    if (value === null) {
        console.log('There is nothing to search');
    }
    else {
        let timeoutCompleted = false;
        const timeoutFnc = setTimeout(() => {
            console.log(value);
            timeoutCompleted = true;
        }, 3000);
        if (!timeoutCompleted) {
            console.log('Searching...');
        }
        else {
            console.log(timeoutFnc);
        }
    }
};
searchName('John Doe');
// Unknown type example
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`Speed is ${convertedSpeed}`);
    }
    else if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ');
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`Speed is ${convertedSpeed}`);
    }
    else {
        console.log('Wrong type');
    }
};
getMyCarSpeed(16);
getMyCarSpeed('16 kmh^-1');
getMyCarSpeed(false);
// Never type example
const errorThrow = (message) => {
    throw new Error(message);
};
errorThrow('501 Error');
