// imports
// fs
var fs = require('fs');
// axios
const axios = require('axios');
// moment
var moment = require('moment');
// dotenv
require("dotenv").config();
// findSong file
var findSong = require("./modules/api/findSong.js");

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
        default:
            console.log("Please choose from these commands: \n Command: spotify-this-song Argument: (song name) \n Command: concert-this Argument: (artist or band name) \n Command: movie-this Argument: (movie name) \n Command: do-what-it-says Argument: (none)");
    }
}
    // Concert this
        // name of venue
        // venue location
        // date of event (MM/DD/YYYY)
    
    // spotify this song
        // artist(s)
        // song name
        // preview link of the song from spotify
        // album the song is from
    
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