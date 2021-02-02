//  ,,,,,,,,,,,,,,,,,,,,,,,,,,22-2 Let, const, array declared with const, object declared with const,,,,,,,,,,,,,,,,,,

// const mane change hobe na.
//  but const ar arry ar value  or object ar key/proparty gula change kora jabe

// let mane change able and lick hobe na

// ,,,,,,,,,,,,,,,,,,,,,,,,22-3 Function default parameter(backup rakha)for not provided values,,,,,,,,,,,,,,,,
// function addNumber(num1, num2 = 0){
//     const sum = num1 + num2;
//     return sum;
// }
// console.log(addNumber(50,));

// ,,,,,,,,,,,,,22-4 Template string, multiple line string(using caret),,,,,,,,,,,,,

// const message1= "I love y ";
// const message2 = " i mess you";
// const message3 = " Good bye";
// const fullMessage = `${message1} ${50*5} Is a goof boy ${message3}`;
// console.log(fullMessage);
// console.log(message1 + message2 + message3);

// const multiLine = `I love you 
// I mess you.
// I need you`
// console.log(multiLine);



// ,,,,,,,,,,,,,,,22-5 Arrow function(moddho juger tir), multiple parameter, function body,,,,,,,,,,,,,,,,,,

// function doubleIt(num){
//     return num*2;
// }

// const doubleIt =function muFun(num){
//     return  num *2;
// }

// const doubleIt = num => num * 2;  //one parameter
// // console.log(doubleIt(50));
// const addNum = (num1, num2) => num1 + num2;   //two  parameter
// const get5 = () => 5;    // no parameter

// const bishal = (num1, num2) => {
//     const sum = num1 + num2;
//     const differ = num1 - num2;
//     return sum * differ;
// }




// ,,,,,,,,,,,,22-6(3 idiots/ 3 dots) Spread operator, concatenate multiple arrays, array max,,,,,,,,,,,,,,,,,,

// const business = 582;
// const minister = 856;
// const shochitb = 844;
// const meximum = Math.max(business, minister, shochitb);
// const takaPoisha = [334, 544, 434,];
// const meximumNumber = Math.max(...takaPoisha);

// console.log(meximum, meximumNumber);



// const age = [45, 55, 88, 89];
// const age2 = [23, 11, 42, 54];
// // const allAges = age.concat(age2).concat([5]);
// const allAges2 = [...age, ...age2, 5];

// console.log(allAges2);


// ,,,,,,,,,,,,22-7 Class(stiler glass)/atribut same rekhe kaz kore, constructor, create object from class,,,,,,,,,,,,,,,,,,,,,,


// class student{
//     constructor(sId , sName){
//             this.id = sId;
//             this.name = sName;
//             this.school = 'Mohonpur High School'
//     }
// }

// const student1 = new student (12, "Riyad");
// const student2 = new student (22, "Riya");

// console.log(student1, student2);

// ,,,,,,,,,,,,,,,,,,,,,22-8 Inheritance, extends class, super, class method,,,,,,,,,,,,,,,,,


// object-oriented programming (OOP)

// class father{
//     constructor(){
//         this.fatherName = "NurulIslam";
//     }
// }
// class child extends father{
//     constructor(name){
//         super();
//         this.name = name;
//     }
//     getFullName(){  // class ar bhitore function ke methord bole
//         return this.name + ' '+ this.fatherName;
//     }
// }

// const childName = new child("riyad");
// console.log(childName.getFullName());
// console.log(childName);

// ,,,,,,,,,,,,,,,,,,,22-9 Destructure(kono akra boro arry or object theke proparty variable a rakhar upay),(object ke vhanga and {variabel with} ) Object, array, destructure complex object,,,,,,,,,,,,,,,,,,,,

// const person = { name: "Riyad", age: 24, job: 'student', number: "0185555555" };

// console.log(person.name);
// console.log(person.age);
// const {name,number, job} = person;
// console.log(name, job,number);

// const friends = ["Riyad", "Hasan", "tangil", "tarek"];
// const [firstname, secondName, ...remaningName] = friends;
// console.log(firstname, secondName, remaningName);

// const complexObject = {
//     name: 'Riyad',
//     info: {
//         address: 'taltala',
//         leader: "cumilla"
//     }
// }

// const {leader}= complexObject.info;
// console.log(leader);