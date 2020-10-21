Select * From "accidents_CA_only_v2_tbl";

-- SELECT "ID", "City", "Zipcode", "Speed_Bump", "Cross_Walk", "Yield_Sign",
-- 		"Intersection", "No_Exit", "Railway", "Roundabout",
-- 		"Stop_Sign", "Traffic", "Traffic_Light", "Turning_Loop"
-- INTO road_atr_db
-- FROM accidents_usa_v2_db;

-- Select * From road_atr_db;

ALTER TABLE "accidents_CA_only_v2_tbl"
ADD PRIMARY KEY ("ID");

-- ALTER TABLE road_atr_db
-- ADD FOREIGN KEY ("ID") REFERENCES accidents_usa_v2_db("ID");

-- ALTER TABLE accidents_usa_v2_db
-- 	DROP COLUMN "Speed_Bump",
-- 	DROP COLUMN "Cross_Walk",
-- 	DROP COLUMN  "Yield_Sign",
-- 	DROP COLUMN "Intersection",
-- 	DROP COLUMN  "No_Exit",
-- 	DROP COLUMN  "Railway",
-- 	DROP COLUMN  "Roundabout",
-- 	DROP COLUMN "Stop_Sign",
-- 	DROP COLUMN  "Traffic",
-- 	DROP COLUMN  "Traffic_Light",
-- 	DROP COLUMN  "Turning_Loop";


Select "Severity", Count("Severity") From "accidents_CA_only_v2_tbl" Where "County" = 'Ventura' Group By "Severity";

SELECT "Month", Count("Month") FROM "accidents_CA_only_v2_tbl" WHERE "County" = 'Ventura' GROUP BY "Month";

SELECT "Month", Count("Month")
                    FROM "accidents_CA_only_v2_tbl"
                    WHERE "County" = 'Ventura' 
                    GROUP BY "Month"
                    ORDER BY CASE WHEN "Month" = 'January' then 1
                        WHEN "Month" = 'February' then 2
                        WHEN "Month" = 'March' then 3
                        WHEN "Month" = 'April' then 4
                        WHEN "Month" = 'May' then 5
                        WHEN "Month" = 'June' then 6
                        WHEN "Month" = 'July' then 7
                        WHEN "Month" = 'August' then 8
                        WHEN "Month" = 'September' then 9
                        WHEN "Month" = 'October' then 10
                        WHEN "Month" = 'November' then 11
                        WHEN "Month" = 'December' then 12
                        ELSE NULL END;
						
-- SELECT "Zipcode", "City", "State", Count("Zipcode")
-- FROM accidents_usa_v2_db 
-- WHERE "City" = 'Los Angeles' 
-- GROUP BY "Zipcode", "City", "State"
-- ORDER BY Count("Zipcode") DESC;

SELECT "Time_of_Day", COUNT("Time_of_Day")
FROM "accidents_CA_only_v2_tbl" 
WHERE "County" = 'Ventura'
GROUP BY "Time_of_Day"
ORDER BY CASE WHEN "Time_of_Day" = 'Early Morning' then 1
                        WHEN "Time_of_Day" = 'Morning' then 2
                        WHEN "Time_of_Day" = 'Afteroon' then 3
                        WHEN "Time_of_Day" = 'Late Afternoon' then 4
                        WHEN "Time_of_Day" = 'Night' then 5
						WHEN "Time_of_Day" = 'Late Night' then 6
						ELSE NULL END;

Select "Latitude", "Longitude", "Severity", "City", "Month", "Year"
From "accidents_CA_only_v2_tbl"
Where "County" = 'Kern'
Group by "Latitude", "Longitude", "Severity", "City", "Month", "Year"
Order by "Latitude" ASC;

Select * from "accidents_CA_only_v2_tbl";

 
Select "Latitude", "Longitude" 
From "accidents_CA_only_v2_tbl"
Where "County" = 'Alpine'
Group by "Latitude", "Longitude" 
Order by "Latitude" DESC;