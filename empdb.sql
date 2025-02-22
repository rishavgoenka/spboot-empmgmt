

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) DEFAULT NULL,
  `emp_id` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (100,'jack.r@gmail.com','111','Jack','Rabin'),(103,'robert.s@gmail.com','103','Robert','S'),(104,'kate.r@gmail.com','113','Kate','R'),(105,'promod.rai@gmail.com','114','Promod','Rai'),(106,'ashok@gmail.com',NULL,'Ashok','Halder'),(107,'alokhalder@gmail.com',NULL,'Alok','Halder');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
