// jshint esversion: 8

/**
 * @param {Number} amount Amount (in ms) you want to pause the execution
 */
const sleep = amount => {
    let date = new Date().getTime();

    while(new Date().getTime() <= date + amount) {
        // Waiting...
    }
};


module.exports = {
    sleep
};