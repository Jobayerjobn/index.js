// import hello from "./index.js";


// const hello = function(name, age , email){   //This syntex of ES5 ;
//     this.name = name;
//     this.age = age;
//     this.email = email;
// };
// hello.prototype.firstName = 'Joban';
// const ret = new hello('Jobayer', 19, 'jobayerjoban0048@gmail.com');
// console.log(ret);
// hello.firstName();

// syntex of ES6  

class Car{
    constructor(name, model , color){  //this is property of object or we can tell khathamo;

        this.name = name;
        this.model = model;
        this.color = color;

    };

    //method;
    path(){

        console.log(this.name + this.model + this.color);

    };
};
// create real object;
const result = new Car('Ferarri', 2022, 'Red');

const result1 = new Car('BMW', 2021, 'Black');
const result2 = new Car('Audo', 2018, 'White');
console.log(result, result1, result2);


// class expression 

const expre = class{

    constructor(name, age, email, hour){

        this.name = name;
        this.age = age;
        this.email = email;
        this.hour = hour;

    };
    print(){
        return `${this.age - this.hour}`;
    };
};
const result3 = new expre('Jobayer', 19, 40);
console.log(result3);