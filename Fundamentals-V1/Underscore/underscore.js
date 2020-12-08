//jshint esversion: 6

const _ = {};

const { delayLogger, logger } = require("../Objects/dot");

_.filer = function (arr, cb) {
    

    // create an array

    const storage = [];

    // loop through arr
    for(let i = 0; i < storage.length; i++) {
        // check if cb returns true
        if (cb(arr[i], i, arr) === true) {
        // if returns true, push into array
            storage.push(arr[i]);
        }
    }

    // return array
    return storage;
};

function add (a,b) {

    try {
        if (Number.isInteger(a) && Number.isInteger(b))
        return (a+b);
    } catch(error) {
        logger("Type doesn't match");
        logger(error);
    }
}

// delayLogger(add("Debajit","Deb"), 2000);
// delayLogger(add(10,20), 2000);


// function checker (a, )

// logger(Object);


// Arguments


