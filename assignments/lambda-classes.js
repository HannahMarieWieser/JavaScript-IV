// CODE here for your Lambda Classes


//person class original

class Person{
    constructor(persFact){
        this.name = persFact.name;
        this.age = persFact.age;
        this.location = persFact.location;
    }   

    speak(){
        return  `Hello my name is ${this.name}, I am from ${this.location}`
    }
}


//instructor class  extend-> of person

class Instructor extends Person{
    constructor(instFacts){
        super(instFacts);
        this.specialty = instFacts.specialty;
        this.favLanguage = instFacts.favLanguage;
        this.catchPhrase = instFacts.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`
    }

    grade(name, subject){
        return `${name} receives a perfect score on ${subject}`
    }

    randomegrade(student){
        return Math.ceil(Math.random(student.grade) * 100);
    }

    meangrade(student, instructor){
        return `${student.name}'s old grade was ${student.grade}. ${student.name}'s new grade is ${instructor.randomegrade(Student)}`
    }
}


//student class extend-> of person
class Student extends Person{
    constructor(studFacts){
        super(studFacts)
        this.previousBackground = studFacts.previousBackground;
        this.className = studFacts.className;
        this.favSubjects = studFacts.favSubjects;
        this.grade = studFacts.grade;
    }

    listsSubjects(){
        return this.favSubjects;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${Student.name} has begun sprint challenge on ${subject}`;
    }

    graduate(instructor){
        if(instructor.randomegrade(this) > 70) {
            return `${this.name} can graduate!`;
        }        
        else {
            return this.graduate(instructor);
        }
    }
}

//project manager  extend-> of instrcutor

class ProjectManager extends Instructor{
    constructor(PMfacts){
        super(PMfacts)
        this.gradClassName = PMfacts.gradClassName;
        this.favInstructor = PMfacts.favInstructor;
    }

    standup(name, slack){
        return `${name} announces to ${slack}, @channel standy times!​​​​​`;
    }

    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}


///test objects
//person
const Mary = new Person({
    name : 'Mary',
    age : 22,
    location: 'Michigan'
});

const LemonSnicket = new Person({
    name : 'Lemony Snicket',
    age : 60,
    location : 'Britain'
});


//instructor

const Julio = new Instructor({
    specialty : 'Dark Arts',
    favLanguage : 'C++',
    catchPhrase : 'Enjoy your torture',
})

const Erin = new Instructor({
    specialty : 'Front End',
    favLanguage : 'CSS',
    catchPhrase : 'Look how clean this is!',
})




//student
const billy = new Student({
    name : 'billy bob',
    previousBackground : 'Architecture',
    className : 'CS404',
    favSubjects : ['Html', 'CSS'],
    grade : 22,
})

const alexa = new Student({
    name : 'alexa',
    previousBackground : 'Chef',
    className : 'CS1201',
    favSubjects : ['C#', 'Javascript', 'Python'],
    
})


//Project Manager

const BrandonSandon = new ProjectManager({
    name: 'BrandonSandon',
    location : 'FantasyLand',
    gradClassName : 'CS0',
    favInstructor : 'Kelsier'
})

const Spiderman = new ProjectManager({
    name : 'Spiderman',
    gradClassName : 'CS12',
    favInstructor : 'DocOc'
})




console.log(Mary.speak());
console.log(BrandonSandon.speak());
console.log(BrandonSandon.demo('Pits of Hathsin'))
console.log(Julio.grade('Amy', 'Basketball'));
console.log(billy.listsSubjects());
console.log(alexa.PRAssignment('Music'));
console.log(BrandonSandon.standup('BrandonSandon', 'MainChannel'));
console.log(Spiderman.debugsCode(billy,'art'));
console.log(Julio.meangrade(billy, Julio));
console.log(billy.graduate(Julio));