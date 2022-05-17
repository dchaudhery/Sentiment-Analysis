# Sentiment Analysis
Steps:

`cd` into api and `run npm install`

`cd` into client and `run npm install`

After starting the sql server, use the sql-dump to generate the following commands in mysql

1. `CREATE DATABASE IF NOT EXISTS sentiment_analysis /_!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci / /!80016 DEFAULT ENCRYPTION='N' _/;`

2. `USE sentiment_analysis;`

3. `CREATE TABLE sentiment_score_table ( id_sentiment_score int NOT NULL AUTO_INCREMENT, input_text varchar(1000) NOT NULL, sentiment_score varchar(20) NOT NULL, ADD_DATE varchar(20) NOT NULL, PRIMARY KEY (id_sentiment_score) ) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`

4. Insert data you like

5. `/_!40000 ALTER TABLE sentiment_score_table ENABLE KEYS _/;`

Finally, run `npm start` for both api and client!
