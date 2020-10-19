Select * From accidents_usa_v2_db;

SELECT "ID", "City", "Zipcode", "Speed_Bump", "Cross_Walk", "Yield_Sign",
		"Intersection", "No_Exit", "Railway", "Roundabout",
		"Stop_Sign", "Traffic", "Traffic_Light", "Turning_Loop"
INTO road_atr_db
FROM accidents_usa_v2_db;

Select * From road_atr_db;

ALTER TABLE accidents_usa_v2_db
ADD PRIMARY KEY ("ID");

ALTER TABLE road_atr_db
ADD FOREIGN KEY ("ID") REFERENCES accidents_usa_v2_db("ID");

ALTER TABLE accidents_usa_v2_db
	DROP COLUMN "Speed_Bump",
	DROP COLUMN "Cross_Walk",
	DROP COLUMN  "Yield_Sign",
	DROP COLUMN "Intersection",
	DROP COLUMN  "No_Exit",
	DROP COLUMN  "Railway",
	DROP COLUMN  "Roundabout",
	DROP COLUMN "Stop_Sign",
	DROP COLUMN  "Traffic",
	DROP COLUMN  "Traffic_Light",
	DROP COLUMN  "Turning_Loop";
	
-- 	testing my hometown zipcode
Select * FROM accidents_usa_v2_db
Where "Zipcode" = 95240;