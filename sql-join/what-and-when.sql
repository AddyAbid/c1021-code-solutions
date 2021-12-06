select "genres"."name" as "genreName",
        "releaseYear"
from "films"
join "filmCategory" using ("filmId")
join "genres" using ("genreId")
where "title" = 'Boogie Amelie'
