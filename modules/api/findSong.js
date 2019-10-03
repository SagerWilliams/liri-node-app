// imports
// api keys
var keys = require("../api/keys.js");

// song info constructor
function Song(artists, name, album, preview) {
    this.artists = artists,
    this.name = name,
    this.album = album,
    this.preview = preview,
    this.printSongInfo = function() {
        console.log("- - - - - - - - - - - - - - -");
        console.log("Artists: " + JSON.stringify(this.artists));
        console.log("Name: " + this.name);
        console.log("Album: " + this.album);
        console.log("Preview: " + this.preview);
    }
}

// querries spotify for song and returns information about requested song
var findSong = function (song) {
    // checks to see if song arg is empty. if it is set the song to Zedd - Clarity
    if (song === "") {
        console.log("You need to enter a song! Command: spotify-this-song Argument: (song name). For now, I'll show you Clarity by Zedd.");
        song = "Clarity";
    }
    // variables
    // node-spotify-api
    var Spotify = require('node-spotify-api');
    // spotify keys
    var spotify = new Spotify(keys.spotify);

    // main function that searches spotify for provided song.
    spotify.search({ type: 'track', query: song }, function (err, data) {
        // logs info about error
        if (err) {
            console.log("Error, please try again. You requested: ", song, err);
            return;
        }
        // call logSong to log information about requested song.
        var songInfo = data.tracks.items[0];
        var song = new Song(songInfo.artists, songInfo.name, songInfo.album.name, songInfo.preview_url);
        song.printSongInfo();
    });
};

// export information for liri.js
module.exports = findSong;