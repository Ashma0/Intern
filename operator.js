//const a = 3;
//document.write(a >= 3);

/*const a = true, b = false;
const c = 4;

document.write(a && a);
document.write(a && b);

document.write((c > 2) && (c < 2));*/


/*const a = true, b = false;

document.write(!a);
document.write(!b);*/

/*const number = prompt("Enter a number:");
if(number > 0){
    document.write("The number is positive");
}
document.write("The if statement is easy");*/

/*const number = prompt("Enter a number:");
if(number > 0) {
    document.write("The number is positive");
}
else{
    document.write("The number is either a negative number or 0");

}

document.write("The if... else statement is easy");*/

/*if(condition1) {
} else if (condition2){
} else {

}*/

/*const number = prompt("Enter a number:");
if(number > 0){
    document.write("The number is positive");
}

else if(number == 0){
    document.write("The number is 0");

}
else{
    console.log("The number is negative");

}*/

/*const number = 2;
if(number > 0) {
    document.write("The number is positive.");
}else{
    console.log("The number is negative or zero.");

}*/

/*const n = 5;
for(let i = 1; i<= n; i++){
    document.write('I love Javascript.');
}*/

/*const n = 5;
for(let i = 1; i <= n; i++){
    document.write(i);
}*/


/*let sum = 0;
const n = 100;

for(let i = n; i >=1; i--){
    sum = sum + i
}

document.write('sum:',sum);

document.write("The if...else if...else statement is easy");*/

/*for(let i = 1; i <= 5; i++){
    if (i == 3){
        break;
    }
    document.write(i);
}*/

/*let sum = 0, number;

while(true) {
    number = parseInt(prompt('Enter a number:'));
    if(number < 0){
        break;
    }
    sum +=number;
}

document.write('The sum is ${sum}.');*/

/*for(let i = 1; i <=3; i++){
    for(let j = 1; j <=3; j++){
        if (i ==2){
            break;
        }
        document.write(`i = ${i}, j = ${j}`);
    }
}*/

/*for(let i = 1; i <=5; i++){
    if(i == 3){
        continue;
    }
    document.write(i);
}*/

/*const number = parseInt(prompt("Enter a number between 1 and 7:"));
switch(number){
    case 1:
         document.write("Sunday");
    case 2:
        document.write("Monday");
        break; 
        case 3:
         document.write("Tuesday");
         break;
    case 4:
        document.write("Wednesday");
        break;
        case 5:
         document.write("Thursday");
         break;
    case 6:
        document.write("Friday");
        break;
     case 7:
         document.write("Saaturday");
         default:
            document.write("Invalid Input")
}*/
    /*let a = 2;

    switch (a) {
        case 1:
            a = 'one';
            break;
            case 2:
                a = 'two';
                break;
                default:
                    a = 'not found';
                    break;
    }
    document.write(`The value is ${a}`);*/

    /*let result;

    const operator = prompt(`Enter operator (either  +, -, * or /):`);

    const number1 = parseFloat(prompt(`Enter first number:`));
    const number2 = parseFloat(prompt(`Enter second number:`));

    switch(operator){
        case '+':
         result = number1 + number2;
         document.write(`${number1} +${number2} =${result}`);
         break;

         case '-':
         result = number1 - number2;
         document.write(`${number1} - ${number2} =${result}`);
         break;

         case '*':
         result = number1 * number2;
         document.write(`${number1} * ${number2} =${result}`);
         break;

         case '/':
         result = number1 / number2;
         document.write(`${number1} / ${number2} =${result}`);
         break;
        
         default:
            document.write(`Invalid operator`);
            break;
    }*/

/*let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        document.write(`${fruit} is a fruit.`);
        break;
        default:
        document.write(`${fruit} is not a fruit.`);
        break;
}*/

/*function great(){
    document.write("Hello there!");
}

greet ();*/

/*function greet(name) {
    document.write("Hello" + name +":)");
}
let name = prompt("Enter a name:");
greet(name);*/


/*function add(a, b){
    document.write(a + b);
}

add(3,4);
add(2,9);*/

/*function add(a , b){
    return a + b;
}

let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number:"));

let result = add(number1, number2);

document.write("The sum is" + result);*/

/*let a = "hello";

function greet() {
    document.write(a);
}

greet ();*/

/*let a = "hello";

function greet() {
    let b = "World"
    document.write(a + b);
}

greet();
document.write(a + b); */


/*let a = 'Hello';

function greet() {

    let b = 'World';

    document.write(a + '' + b);

    if (b == 'World') {
        let c = 'hello';

        document.write(a + ' ' + b + ' ' + c);
    }
    document.write(a + ' ' + b + ' ' + c);
}

greet();*/


/*function countDown(number) {
    document.write(number);

    const newNumber = number - 1;

    if(newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);*/


/*function factorial(x) {
    if (x === 0) {
        return 1;
    }
    else{
        return x * factorial(x - 1);
    }
}

const num = 3;

if(num > 0) {
    let result = factorial(num);
document.write(`Thefactorail of {num} is ${result}`);

}*/


/*const person = {
    name: 'John',
    age: 20,
};

document.write(person.name);*/



/*const student = {
    name: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

document.write(student.marks);

document.write(student.marks.science);*/


/*const person = {
    name: `Sam`,
    age: 30,
    greet: function() {document.write('hello')}

}

person.greet(); */


/*let number = `23.32`;
let result = parseInt(number);

document.write(result);*/


/*let student = { };

student.name = `John`;

student.greet = function() {
    document.write('hello');
}

student.greet(); */


/*const person = {
    name: 'John',
    age: 30,

    greet: function() { document.write('The name is' + ' ' + this.name);}
};

person.greet(); */



/*const person = {
    name: 'John',

    age: 30,
    greet: function() {
        let surname = 'Doe';
        document.write('The name is' + ' ' + this.name + ' ' + surname);}
    };
    person.greet();*/


    /*function Person(){
    this.name = ' Ashma',
    this.age = 22,

    this.greet = function () {
        document.write('hello');
    }
    
    }

const person1 = new Person();
const person2 = new Person();

document.write(person1.name);
document.write(person2.name); */


/*function Person (person_name, person_age,person_gender)
 {
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return('Hi' + ' ' + this.name);
    }
}

const person1 = new Person('Ashma', 22 , 'Female');
const person2 = new Person('Samjhana', 21 , 'Female');

document.write(person1.name);
document.write(person2.name);*/

/*function Person () {
    this.name = 'Sam'
}

let person1 = new Person();
let person2 = new Person();

person1.age = 20;*/


/*const myList = [ ];
const numberArray = [2, 4, 6, 8];
const stringArray = ['eat', 'work', 'sleep'];
const newData = ['work', 'exercise', 1, true];*/

/*const myArray = ['h','e','l','l','o'];
document.write(myArray[0]);
document.write(myArray[1]);*/



/*let dailyActivities = ['eat','sleep'];
dailyActivities.push('exercise');
document.write(dailyActivities);*/


/*let dailyActivities = ['work', 'eat','sleep', 'exercise'];

dailyActivities.pop();
document.write(dailyActivities);

const removedElement = dailyActivities.pop();

document.write(removedElement);
document.write(dailyActivities);*/



/*let arr = ['h','e'];
let arr1 = arr;
arr1.push('l');

document.write(arr);
document.write(arr1);*/


/*let studentsData = [['Jack',24], ['Sara', 23],['Peter',24]];
document.write(studentData);*/


/*let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

let studentsData = [student1, student2, student3];
 document.write(studentsData);*/


 /*let studentsData = [['Jack', 24],['Sara', 23],];

 studentsData.forEach((student) =>{
    student.forEach((data) =>{
document.write(data);
    });
 });*/


 /*let studentsData = [['Jack',  24], ['Sara', 23],];

 for(let i = 0; i < studentsData.length; i++){
    let innerArrayLength = studentsData[i].length;
    for(let j = 0; j < innerArrayLength; j ++){
        document.write(studentsData[i][j]);

    }
 }*/

/*const name = 'John';
document.write(name);*/


/*const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;
document.write(result);*/


/*const a = 'hello';
document.write(a[1]);*/


/*const student = {
    name: 'Ashma',
    class: 12,
    age: 22
}

for (let key in student) {
document.write(`${key} => ${student[key]}`);

}*/



/*const salaries = {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}
for(let i in salaries) {
    let salary = "$" + salaries[i];
    document.write(`${i} : ${salary}`);
}


const numerator = 100, denominator = 'a';
try{
    document.write(numerator/denominator);
    document.write(a);
}

catch(error) {
    document.write('An error caught');
    document.write('Error message: ' + error);

}*/



/*const numerator = 100, denominator = 'a';
try{
    document.write(numerator/denominator);
    document.write(a);
}
 catch(error) {
    document.write('An error caught');
    document.write('Error message: ' + error);
 }*/



 /*const numerator = 100, denominator = 'a';

 try{
    document.write(numerator/denominator);
    document.write(a);


 }
 catch(error) {
    document.write('An error caught');
    document.write('Error message:' + error);

 }

 finally{
    document.write('Finally will execute every time');
 }*/


/*try{
    setTimeout(function() {

    },3000);
}catch(e) {
    document.write("won't work");

}*/





