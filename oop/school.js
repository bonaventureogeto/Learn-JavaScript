class Student {
    constructor(name, course, gpa, age) {
        this.name = name;
        this.course = course;
        this.gpa = gpa;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    graduating() {
        if (this.gpa >= 2.0) {
            console.log(`Congratulations ${this.name}, you are graduating!`);
        } else {
            console.log(`Sorry ${this.name}, you need to do better.`);
        }
    }
}

const myStudent = new Student('John Doe', 'Software Engineering', 2.5, 25);

// inherit from Student

class School extends Student{
    constructor(name, course, gpa, age, schoolName, schoolLocation) { 
        super(name, course, gpa, age);
        this.schoolName = schoolName;
        this.schoolLocation = schoolLocation;
    }

    welcome() {
        console.log(`Hello, ${this.name}! Welcome to ${this.schoolName} located in ${this.schoolLocation}.`);
    }
}

const mySchool = new School('Jane Doe', 'Data Science', 2.5, 30, 'Zindua School', 'Lavington, Nairobi');
mySchool.welcome();