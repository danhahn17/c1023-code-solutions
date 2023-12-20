select "amount", "firstName", "lastName" from "customers" join "payments" using ("customerId") order by "amount" desc limit 10;
