select "name", count("total".*) as "totals"
from "filmCategory"
join "genres" as "total" using ("genreId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "total"."name"
