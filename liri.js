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
