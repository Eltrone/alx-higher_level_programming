// 8-script.js
$(document).ready(function() {
    $.getJSON("https://swapi-api.alx-tools.com/api/films/?format=json", function(data) {
        var movies = data.results;
        movies.forEach(function(movie) {
            $('#list_movies').append(`<li>${movie.title}</li>`);
        });
    });
});
