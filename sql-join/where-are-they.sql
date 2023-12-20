select "line1" as "address", "district", "cities"."name" as "city", "countries"."name" as "country" from "addresses" join "cities" using ("cityId") join "countries" using ("countryId");
