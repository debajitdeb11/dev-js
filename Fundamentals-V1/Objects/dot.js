// jshint esversion: 8
const {sleep} = require("../Functions/sleep");

let person = {
    "name": {
        "firstname": "Debajit",
        "lastname" : "Deb"
    },
    "address" : {
        "street": ["Tarapur", "Silchar"]
    }
};

/**
 * 
 * @param {String} message Enter the string you want to log 
 */

const logger = txt => {
    console.log(txt);
    return;
};

/**
 * 
 * @param {String} message Enter the message you want to print 
 * @param {Number} amount Enter the amount of time(in ms) you want the delay
 */
const delayLogger = (txt,amount) => {

    try {
        sleep(amount);
    } catch (error) {
        logger(error);
    }

    logger(txt);

};


// testing
// logger(person.name.firstname);

// delayLogger(person.address.street[0]);
// delayLogger(person.address.street[1]);


// person.address.street.push("Basanti Residency");
// logger(person.address.street.length);
// delayLogger(person.address.street[2]);

// console.log(typeof logger);

module.exports = {
    logger,
    delayLogger
};