# Sentiment Analysis
Steps:

cd into api and run npm install

cd into client and run npm install

After starting the sql server, use the sql-dump to generate the following commands in mysql

1. CREATE DATABASE IF NOT EXISTS sentiment_analysis /_!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci / /!80016 DEFAULT ENCRYPTION='N' _/;

2. USE sentiment_analysis;

3. CREATE TABLE sentiment_score_table ( id_sentiment_score int NOT NULL AUTO_INCREMENT, input_text varchar(1000) NOT NULL, sentiment_score varchar(20) NOT NULL, ADD_DATE varchar(20) NOT NULL, PRIMARY KEY (id_sentiment_score) ) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

4. INSERT INTO sentiment_score_table VALUES (3,'Welcome All','1','2020-12-03'),(4,'Have a great day','1','2020-12-03'),(5,'Its pleasure to meet you','0','2020-12-03'),(6,'We had a good experience','-5','2020-12-03'),(7,'Never never never give up','1','2020-12-03'),(8,'Great news','3','2020-12-03'),(10,'hi all','1','2020-12-03'),(11,'Hello all. Welcome home','-4','2020-12-03'),(12,'I don't like rainy days','-5','2020-12-03'),(13,'We welcome you all','5','2020-12-03'),(14,'Hello world.. Good day','-3','2020-12-03'),(15,'I don't like rainy days','1','2020-12-03'),(16,'','4','2020-12-03'),(17,'','-1','2020-12-03'),(18,'He is a good boy','5','2020-12-03'),(19,'good product','-2','2020-12-03'),(20,'Bad response','4','2020-12-03'),(21,'Good start for a good day','-4','2020-12-03'),(22,'Bad score','4','2020-12-03'),(23,'John is a good friend','-5','2020-12-03'),(24,'The dog is mad','1','2020-12-03');

5. /_!40000 ALTER TABLE sentiment_score_table ENABLE KEYS _/;

6. alter user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';

Finally, run npm start for both api and client!
