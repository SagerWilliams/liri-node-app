# liri-node-app
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### Liri Commands:
- spotify-this-song   Argument: (song name)
- concert-this        Argument: (artist or band name)
- movie-this          Argument: (movie name)
- do-what-it-says     Argument: (none)

Example: node liri.js movie-this Labyrinth


### Resources used:
- node-spotify-api
- axios
- moment
- dotenv
- OMDb API
- Bandsintown API
