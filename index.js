// class in javascript;

function Obj(name, age){  // This is constructor function in the javascript


   this.name = name;
   this.age = age;


};
Obj.prototype.myName = "Joban";
const hello = new Obj("Jobayer", 19);
console.log(hello);
console.log(hello.myName);

// We are  two way define  class;
//Number1 : class statement;
// Number2 : class expression;

class statement{
    constructor(name, age, email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    path(){

        console.log(this.name + this.age + this.email);

    }
};
const how = new statement('Jobayer', 19, 'jobayerjoban0048@gmail.com');
export default statement;

// const result = new statement('Jobayer', 19, 'jobayerjoban0048@gmail.com');
// console.log(result);

