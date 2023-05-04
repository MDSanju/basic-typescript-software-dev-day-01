"use strict";
const firstLanguage = {
    name: 'C++',
    platform: 'Competitive Programming',
    year: 1979,
    isPopular: true,
};
const secondLanguage = {
    name: 'Java',
    platform: 'Mobile App Development',
    year: 1995,
    isPopular: true,
};
const thirdLanguage = {
    name: 'Python',
    platform: 'Machine Learning',
    year: 1991,
    isPopular: true,
};
const fourthLanguage = {
    name: 'PHP',
    platform: 'Web Development',
    year: 1995,
};
const courseName = 'Next Level Web Development';
const compute = (num1, num2, operation) => {
    return operation(num1, num2);
};
compute(8, 13, (x, y) => x + y);
compute(28, 13, (x, y) => x - y);
compute(28, 13, (x, y) => x * y);
