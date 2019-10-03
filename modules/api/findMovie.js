// imports
// api keys
var keys = require("../api/keys.js");
// axios
const axios = require('axios');

// movie constructor
function Movie(title, year, omdbRating, rottenRating, country, language, plot, actors) {
    this.title = title;
    this.year = year;
    this.omdbRating = omdbRating;
    this.rottenRating = rottenRating;
    this.country = country;
    this.language = language;
    this.plot = plot;
    this.actors = actors;
    this.printMovieInfo = function() {
        console.log("- - - - - - - - - - - - - - -");
        console.log("Title: " + this.title);
        console.log("Year Released: " + this.year);
        console.log("IMDB Rating: " + this.omdbRating);
        console.log("Rotten Tomatoes Rating: " + this.rottenRating);
        console.log("Country Produced in: " + this.country);
        console.log("language: " + this.language);
        console.log("Plot: " + this.plot);
        console.log("Cast: " + this.actors);
    }
}

// searches OMDb for movie
var findMovie = function (movie) {
    // checks to see if artist/band arg is empty.
    if (movie === "") {
        console.log("You need to enter a movie! Command: movie-this Argument: (movie name). For now, I'll show you Labyrinth.");
        movie = "Labyrinth";
    }

    // query URL to search OMDB using trilogy key
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + keys.omdb;

    // query OMDb with axios
    axios.get(queryUrl).then(
    function(response) {
        var movie = response.data;
        var searchedMovie = new Movie(movie.Title, movie.Year, movie.Ratings[0].Value, movie.Ratings[1].Value,
                                    movie.Country, movie.Language, movie.Plot, movie.Actors);
        searchedMovie.printMovieInfo();
    })
    .catch(function(error) {
        console.log("Error, please try again. You requested: ", movie, error);
    });
};

module.exports = findMovie;