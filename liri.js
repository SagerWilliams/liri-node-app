// fs
var fs = require('fs');
// node-spotify-api
var Spotify = require('node-spotify-api');
// axios
const axios = require('axios');
// moment
var moment = require('moment');
// dotenv
require("dotenv").config();
var keys = require("./keys.js");

// spotify keys
var spotifyKey = new Spotify(keys.spotify);

// Commands

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