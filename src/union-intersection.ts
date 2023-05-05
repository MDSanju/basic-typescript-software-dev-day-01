type NoobDeveloper = {
    name: string;
};

type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
};

// Union type example

const developer: NoobDeveloper | JuniorDeveloper = {
    name: 'Sanju',
    expertise: 'JavaScript',
    experience: 1,
};

// ------------------------------------

type JavaScriptDeveloper = {
    role: string;
    salary: number;
}

// Intersection type example

type PythonDeveloper = JavaScriptDeveloper & {
    isOop: boolean;
}

// Enum type (we should not use enum type, it's not recommended)

enum Level {
    junior = 'Junior',
    mid = 'Mid',
    senior = 'Senior',
}

type NextLevelDeveloper = PythonDeveloper & {
    moreProgrammingLanguages: string;
    level: Level;
}


const coder: NextLevelDeveloper = {
    role: 'Java Developer',
    salary: 14000,
    isOop: true,
    moreProgrammingLanguages: 'Java, C#, C++',
    level: Level.mid,
};
