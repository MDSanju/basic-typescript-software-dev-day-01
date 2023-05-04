type ProgrammingLanguageType = {
    name: string;
    platform: string;
    year: number;
    isPopular?: boolean;
}

const firstLanguage: ProgrammingLanguageType = {
    name: 'C++',
    platform: 'Competitive Programming',
    year: 1979,
    isPopular: true,
}

const secondLanguage: ProgrammingLanguageType = {
    name: 'Java',
    platform: 'Mobile App Development',
    year: 1995,
    isPopular: true,
}

const thirdLanguage: ProgrammingLanguageType = {
    name: 'Python',
    platform: 'Machine Learning',
    year: 1991,
    isPopular: true,
}

const fourthLanguage: ProgrammingLanguageType = {
    name: 'PHP',
    platform: 'Web Development',
    year: 1995,
}


type CourseName = string;

const courseName: CourseName = 'Next Level Web Development';


type OperationType = (x: number, y: number) => number;


const compute = (
    num1: number,
    num2: number,
    operation: OperationType,
) => {
    return operation(num1, num2);
}

compute(8, 13, (x, y) => x + y);
compute(28, 13, (x, y) => x - y);
compute(28, 13, (x, y) => x * y);
