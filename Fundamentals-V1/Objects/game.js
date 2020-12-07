// jshint esversion: 8
const { logger } = require('./dot');


const game = {
    player: [
        {
            name: "Debajit",
            age: 23,
            playerId: "debajitdeb11"
        }, 
        {
            name: "Semikha",
            age: 25,
            playerId: "semikha27"
        }, 
        {
            name: "Bunty",
            age: 28,
            playerId: "bunty30"
        }
    ]
}



const peoples = game.player;

peoples.forEach(people => {
    logger(people.playerId);
});