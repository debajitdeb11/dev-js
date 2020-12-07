// jshint esversion: 6

const { logger, delayLogger } = require('./dot');


// Example of destructuring
const [person, address] = ["Debajit Deb", "Tarapur, Silchar"];

logger(address);


const students = ["Semikha", "Bishal", "Bunny", "Tummy"];

students.forEach(student => {
    delayLogger(student);
});
