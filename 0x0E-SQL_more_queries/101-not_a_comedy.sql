-- List all shows without the genre Comedy
SELECT title FROM tv_shows
WHERE id NOT IN (
    SELECT show_id FROM tv_show_genres
    JOIN tv_genres ON tv_genres.id = tv_show_genres.genre_id
    WHERE name = 'Comedy'
)
ORDER BY title;
