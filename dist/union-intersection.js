"use strict";
// Union type example
const developer = {
    name: 'Sanju',
    expertise: 'JavaScript',
    experience: 1,
};
// Enum type (we should not use enum type, it's not recommended)
var Level;
(function (Level) {
    Level["junior"] = "Junior";
    Level["mid"] = "Mid";
    Level["senior"] = "Senior";
})(Level || (Level = {}));
const coder = {
    role: 'Java Developer',
    salary: 14000,
    isOop: true,
    moreProgrammingLanguages: 'Java, C#, C++',
    level: Level.mid,
};
