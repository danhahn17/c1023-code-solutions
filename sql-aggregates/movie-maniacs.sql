select "firstName", "lastName", sum("p"."amount") as "totalSpent" from "customers" join "payments" as "p" using ("customerId") group by "customerId" order by "totalSpent" desc;
