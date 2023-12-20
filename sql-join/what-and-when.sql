select "releaseYear", "g"."name" as "genre" from "films" join "filmGenre" using ("filmId") join "genres" as "g" using ("genreId") where "title" = 'Boogie Amelie';
