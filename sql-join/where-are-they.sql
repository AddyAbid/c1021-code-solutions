select "cities"."name" as "cityName",
        "line1", "district"

from "cities"
join "addresses" using ("cityId")
