// imports
// fs
var fs = require('fs');
// dotenv
require("dotenv").config();
// findSong file
var findSong = require("./modules/api/findSong.js");
// findConcerts file
var findConcerts = require("./modules/api/findConcerts.js");
// findMovie file
var findMovie = require("./modules/api/findMovie.js");

// variables
var command = process.argv[2];
var arg = process.argv.splice(3).join(" ");

// Commands
function liri(command, arg) {
    console.log("- - - - - - - - - -");
    switch(command) {
        // calls function from other files and logs helpful information
        case "spotify-this-song":
            console.log("Looking for: " + arg);
            findSong(arg);
            break;
        case "concert-this":
            console.log("Looking for: " + arg);
            findConcerts(arg);
            break;
        case "movie-this":
            console.log("Looking for: " + arg);
            findMovie(arg);
            break;
        default:
            console.log("Please choose from these commands: \n Command: spotify-this-song Argument: (song name) \n Command: concert-this Argument: (artist or band name) \n Command: movie-this Argument: (movie name) \n Command: do-what-it-says Argument: (none)");
    }
}

    // movie this
        // title
        // year of release
        // IMDB rating
        // rotten tomatoes rating
        // country the movie was produced in
        // language of the movie
        // plot of the movie
        // actors in the movie

    // do what it says
        // using the fs node package read random.txt to
        // call commands for each of the above

liri(command, arg);