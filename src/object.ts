const user : {
    name : string,
    age: number,
    job: string,
    isStudent: boolean,
    address?: string, // Optional type
    company: 'Sysonex Inc.', // Literal type
    readonly country: string, // Readonly property (cannot change from outside of the object.)
} = {
    name: 'John',
    age: 27,
    job: 'Developer',
    isStudent: false,
    company: 'Sysonex Inc.',
    country: 'United States',
}

// Can't do it (Readonly property).
// user.country = "Bangladesh";
