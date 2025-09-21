// Ternary operator

const age: number = 27;

const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// Nullish coalescing operator

const isAuthUser = null; // It will work only for 'null' & 'undefined' value
const userName = isAuthUser ?? "Guest";

console.log(userName);

//

type UserType = {
  name: string;
  age: number;
  address: {
    city: string;
    road: string;
    houseNo?: number;
  };
};

const user007: UserType = {
  name: "John",
  age: 35,
  address: {
    city: "California",
    road: "Frontage Rd",
  },
};

const home = user007?.address?.houseNo ?? "NA"; // Default value set
console.log({ home });
