// // Destructuring in the javascript ;

// const arr = [1, 2,  3, 4, 5, 6, 7, 8];
// console.log(arr);

// //  es5 system ;

// let a= arr[3];
// let b = arr[1];
// let c = arr[2];
// console.log(a);
// console.log(b);
// console.log(c);

// //  ES6 system;

// let [a1, b1, c1] = arr;
// console.log(a1,c1);

// const [a2, b2, c2] = arr;
// console.log(a2);



// const obj = {
//     name: "Jobayer",
//     email: 'jobayerjoban0048@gmail.com',
//     print: function (){
//         console.log(this.name);
//     }
// }
// // console.log(obj);
// // obj.print();
// // let name = obj.name;
// // const email = obj.email;
// // console.log(name, email);

// //  ES6 version ;
// const {name, email} = obj;

// console.log(name);
// console.log(email);

// function print({name, email}){

//     console.log(`My name is ${name} My email is ${email}`)

// }
// print({email, name});


// //  Use Destructuring in the javascript;

// const object = {

//     name1: 'Jobayer',
//     email1: 'jobayerjoban0048@gmail.com',

//     path: function (){

//         console.log(this.name + this.email);

//     }
// }

// const {name1,  email1} = object;
// console.log(name1, email1);
// function hello({name, emai}){
//     console.log("Email" + email + 'Name ' + name);
// }
// hello({name, email});


//Rest Parametres  

// function sum(...hello){
//     let total = 0;
//     for(let x of hello){
//     total += x;
//     }
//     return total;

// };

// console.log(sum(1, 2, 3, 4, 5, 6));
// console.log(sum(3, 4, 5, 6, 7, 8, 9, 10));
// function sum(...num){
//     console.log(num);
// }
// console.log(sum(1, 2, 3, 4, 5, 6));

// function sum(...num){
//     console.log(num);
// }
// sum(1, 2, 3, 4 ,5, 6);

// function add(...num){

//     return num.reduce((a, b) => a + b + 200);

// }
// console.log(add(20, 30, 40,  50, 60));


function add(...letter){

    return letter.reduce((a, b) => a + b);
    
}
console.log(add(1,2, 3, 4, 5));
