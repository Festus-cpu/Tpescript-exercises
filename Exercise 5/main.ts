class Student {
    studentName: string;
    studentAge: number;
    studentGrade: number;

    constructor(name: string, age: number, grade: number) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }

    displayInfo(): void {
        console.log(`Name: ${this.studentName}`);
        console.log(`Age: ${this.studentAge}`);
        console.log(`Grade: ${this.studentGrade}`);
    }

    isPassing(gradeThreshold: number): boolean {
        return this.studentGrade >= gradeThreshold;
    }
}

// Instantiate a new student object and call the methods to test your class
const student = new Student("Festus", 18, 85);
student.displayInfo(); // Output: Name: Festus, Age: 18, Grade: 85
console.log(student.isPassing(60)); // Output: true
