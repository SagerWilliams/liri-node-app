// imports
// api keys
var keys = require("../api/keys.js");
// axios
const axios = require('axios');
// moment
var moment = require('moment');

// concert info constructor
function Concert(venue, city, country, date) {
    this.venue = venue,
    this.city = city,
    this.country = country,
    this.date = date,
    this.printConcertInfo = function() {
        console.log("- - - - - - - - - - - - - - -");
        console.log("Venue: " + this.venue);
        console.log("City: " + this.city);
        console.log("Country: " + this.country);
        console.log("Date: " + moment(this.date).format("MM/DD/YYYY"));
    }
}

// searches bandsintown with axios for upcoming concerts
var findConcerts = function(band) {
    // checks to see if artist/band arg is empty.
    if (band === "") {
        console.log("You need to enter an artist/band! Command: concert-this Argument: (artist/band name). For now, I'll show you upcoming events for Zedd.");
        band = "Zedd";
    }
    // queryURL for bandsintown
    var queryUrl = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=" + keys.bandsNearMe;

    // query with axios and format the results
    axios.get(queryUrl).then(function(response) {
        // get the list of shows and log them
        var showList = response.data;
        for (show in showList) {
            var concert = new Concert(showList[show].venue.name, showList[show].venue.city, showList[show].venue.country, showList[show].datetime);
            concert.printConcertInfo();
        }
    })
    .catch(function(error) {
        console.log("Error, please try again. You requested: ", band, error);
    });
};

// export information for liri.js
module.exports = findConcerts;