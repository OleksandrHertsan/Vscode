// let user1 = {
//     name: "John",
//     age: 30,
// isAdmin: true,
// "likes car": true
// }
// user1["likes car"] = false;
// user1.isMarried = false;

// //delete user1.isAdmin;
// // delete user1["likes car"];

// //console.log(user1.name);
// //console.log(user1.age);
// //console.log(user1);

// for(let key in user1){
//     console.log(key);
//     console.log(user1[key]);
// }

// let codes = {
//     "49": "Germany",
//     "41": "Shweden",
//     "44": "England",
//     "1": "USA",
// };

// // for(let code in codes){
// //     console.log(code);
// // }

// for(let code in codes){
//     console.log(Number(code));
// }

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user[name = "Pete"];
// delete user.name;

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }
// let sum = 0;

// for(let key in salaries){
//     sum+= salaries[key];
// }
// console.log(sum);

//funcrion имя(параметры){
 //   ...тело...
//}

// function showMessage(){
//     console.log('Hello World');
// }

// showMessage();
// showMessage();

// let userName = 'John';

// function showMessage(){
//     let name = 'Anna';
//     console.log(userName);
// }
// console.log(userName);

// showMessage();
// showMessage();


// function showMessage(from, text){
//     console.log(from + " " + text);
// }

// showMessage('John', 'Hello');
// showMessage('Lily', 'how are you');


// function sum(a, b){
//     console.log(a + b);
// }

// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));

// sum(num1, num2)

// function sum(a, b){
//     return a + b;
// }

// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));

// console.log(sum(num1, num2));

// function checkAge(age){
//     if(age > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let userage = Number(prompt('How old are you?'));

// if(checkAge(userage) == true){
//     console.log('Access is allowed')
// }
// else{
//     console.log('Access denied')
// }

// function checkNum(number){
//     if(number % 2 == 0){
//         return "Да";
//     }
//     else{
//         return "Нет";
//     }
// }
// let num = Number(prompt('Enter the number'));

// console.log(checkNum(num));

// function min(a, b){
//     if (a > b){
//         return b;
//     }
//     else {
//         return a;
//     }
// }
// console.log(min(2, 5));
// console,log(min(3, -1));
// console.log(min(1, 1));