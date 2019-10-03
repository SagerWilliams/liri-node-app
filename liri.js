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
        case "do-what-it-says":
            console.log("Getting something random for you!")
            doRandom();
            break;
        default:
            console.log("Please choose from these commands: \n Command: spotify-this-song Argument: (song name) \n Command: concert-this Argument: (artist or band name) \n Command: movie-this Argument: (movie name) \n Command: do-what-it-says Argument: (none)");
    }
}

function doRandom() {
    // reads the random.txt file and picks a random command
    fs.readFile("./random.txt", "utf8", function(error, data) {
        if (error) {
            console.log("Error: ", error);
        } 
        // make a list of commands by splitting on each line
        var listOfOptions = data.split("\n");
        // pick a random command
        var random = Math.floor(Math.random() * listOfOptions.length);
        var chosen = listOfOptions[random]
        var chosenSplit = chosen.split(",");
        // call liri() with chosen command and arg. Concert has trouble with quotes so .replace(/"/g,"") is used to remove them (thanks stackoverflow!)
        console.log(chosenSplit[0], chosenSplit[1]);
        liri(chosenSplit[0], chosenSplit[1].replace(/"/g,""));
    })
}

// call liri command to start application
liri(command, arg);