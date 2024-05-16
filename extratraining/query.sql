CREATE TABLE
  director (id serial PRIMARY KEY, name varchar(60));

CREATE TABLE
  film (
    id serial PRIMARY KEY,
    name varchar(60),
    director_id int REFERENCES director (id),
    rating integer NOT NULL,
    year integer,
    CONSTRAINT film_rating CHECK (rating <= 10)
  );

CREATE TABLE
  genre (id serial PRIMARY KEY, name varchar(60));

CREATE TABLE
  film_genre (
    film_id integer REFERENCES film (id) ON DELETE CASCADE,
    genre_id integer REFERENCES genre (id),
    PRIMARY KEY (film_id, genre_id)
  );

INSERT INTO
  genre (name)
VALUES
  ('Comedy'),
  ('Drama'),
  ('Horror'),
  ('Fantasy'),
  ('Thriller');

INSERT INTO
  director (name)
VALUES
  ('Spielberg'),
  ('Tarantino'),
  ('Kubrick'),
  ('Nolan');

INSERT INTO
  film (name, director_id, rating, year)
VALUES
  ('Star Wars', 1, 9, 1970),
  ('Kill Bill', 2, 8, 2000),
  ('Dark side of the Moon', 3, 8, 2002),
  ('Oppenheimer', 4, 7, 2023),
  ('Pulp Fiction', 2, 6, 1998),
  ('Tenet', 4, 3, 2020);

INSERT INTO
  film_genre (film_id, genre_id)
VALUES
  (1, 4),
  (2, 1),
  (2, 2),
  (2, 5),
  (3, 4),
  (4, 5),
  (5, 1),
  (5, 3),
  (5, 5),
  (6, 1),
  (6, 2);

SELECT
  film.name,
  director.name AS director,
  STRING_AGG(genre.name, ', ') AS genre,
  film.rating,
  film.year
FROM
  film
  JOIN director ON film.director_id = director.id
  JOIN film_genre ON film_genre.film_id = film.id
  JOIN genre ON genre.id = film_genre.genre_id
GROUP BY
  film.name,
  director.name,
  film.rating,
  film.year
HAVING
  film.year > 2000
ORDER BY
  film.rating DESC;