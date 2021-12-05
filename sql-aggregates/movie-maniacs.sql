select "customers"."firstName", "customers"."lastName", sum("amount") as "totalAmount"
from "payments"
join "customers" using ("customerId")
group by "customers"."customerId"
order by "totalAmount" desc;
