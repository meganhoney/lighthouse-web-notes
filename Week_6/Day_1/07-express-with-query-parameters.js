const disneyMovies = require('./disney-movies.json');
const express = require('express');

const app = express();
const port = 9000; // use higher port numbers to not give access to modules you didn't write

// query parameters
// express knows that text following colon is dynamic
app.get('/disney-movie/:disney_movie_id', () => {
  // after params same as after colon
  // parseInt() to ensure number
  const disneyMovieId = parseInt(req.params.disney_movie_id);

  if(typeof disneyMovies[disneyMovieId] !== undefined) {
    const disneyMovie = disneyMoves[disneyMovieId];

    res.write(`<!DOCTYPE html>
      <html>
        <head>
            <title>Disney Movie: ${disneyMovie.name}</title>
        </head>
        <body>
            <h1>Disney Movie: ${disneyMovie.name}</h1>
            <p>
                <img src="${disneyMovie.image}">
                <strong>${disneyMovie.name}</strong>
                (${disneyMovie.year})
                [Rating: ${disneyMovie.imdbRating} ★]
            </p>
        </body>
      </html>
    `);
    res.send();
  } else {
    res.status(404);
    res.write('404: resource not found.');
    res.send();
  }
});

app.listen(port, () => {
  console.log('HTTP server listening on port:', port)
});