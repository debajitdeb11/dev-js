// jshint esversion: 8

const { logger } = require("../Objects/dot");

const ifElse = (condition, if_true, if_false) => {
    return (condition ? if_true() : if_false());
};


// const fun1 = () =>  {
//     logger("Hi, Debajit!");
// };

// const fun2 = () => {
//     logger("Hi, Semikha!");
// }


ifElse(true, ()=> {
    console.log("Yeah True!");
}, ()=> {
    console.log("False Buddy!");
});