interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'Joma',
    lastName: 'ma',
    location: 'NYC',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
console.log(teacher3);

interface Student {
    firstName: string;
    lastName: string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const student1 = new StudentClass('Alice', 'Smith');
console.log(student1.workOnHomework());
console.log(student1.displayName());
