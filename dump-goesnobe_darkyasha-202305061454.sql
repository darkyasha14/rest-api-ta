-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: goesnobe_darkyasha
-- ------------------------------------------------------
-- Server version	5.7.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_address`
--

DROP TABLE IF EXISTS `t_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_address` (
  `address_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `kota_id` varchar(24) NOT NULL,
  `kecamatan_id` varchar(24) NOT NULL,
  `kelurahan_id` varchar(24) NOT NULL,
  `detail_address` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`address_id`),
  KEY `user_id` (`user_id`),
  KEY `kota_id` (`kota_id`),
  KEY `kecamatan_id` (`kecamatan_id`),
  KEY `kelurahan_id` (`kelurahan_id`),
  CONSTRAINT `t_address_ibfk_57` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_address_ibfk_58` FOREIGN KEY (`kota_id`) REFERENCES `t_kota` (`kota_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_address_ibfk_59` FOREIGN KEY (`kecamatan_id`) REFERENCES `t_kecamatan` (`kecamatan_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_address_ibfk_60` FOREIGN KEY (`kelurahan_id`) REFERENCES `t_kelurahan` (`kelurahan_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_address`
--

LOCK TABLES `t_address` WRITE;
/*!40000 ALTER TABLE `t_address` DISABLE KEYS */;
INSERT INTO `t_address` VALUES (2,2,'1371','137101','1371011001','jl.one, no.1, block.D3','2020-08-31 12:05:29','2020-08-31 12:05:29'),(3,2,'1371','137104','1371041001','address','2020-09-01 05:52:42','2020-09-01 05:52:42'),(4,2,'1371','137105','1371051004','jalan no1. block1','2020-09-01 15:26:43','2020-09-01 15:26:43'),(5,2,'1371','137101','1371011001','gfxc vfddh','2020-09-07 12:57:38','2020-09-07 12:57:38'),(6,2,'1371','137101','1371011010','dfhj jgdg','2020-09-07 12:58:56','2020-09-07 12:58:56'),(7,2,'1371','137101','1371011001','adddh','2020-09-07 13:00:28','2020-09-07 13:00:28'),(8,2,'1371','137101','1371011001','adddh','2020-09-07 13:00:31','2020-09-07 13:00:31'),(9,2,'1371','137101','1371011001','aaaaa','2020-09-07 13:04:34','2020-09-07 13:04:34'),(10,2,'1371','137101','1371011001','detail ','2020-09-07 13:08:16','2020-09-07 13:08:16'),(11,2,'1371','137101','1371011001','','2020-09-07 13:16:55','2020-09-07 13:16:55'),(12,1,'1371','137101','1371011001','xudicogpg','2020-09-09 03:56:47','2020-09-09 03:56:47'),(13,2,'1371','137108','1371081001','jl. Irigasi no1','2020-09-09 07:00:05','2020-09-09 07:00:05'),(14,1,'1371','137101','1371011001','basecamp tkb donk\n','2020-09-10 09:14:19','2020-09-10 09:14:19'),(15,2,'1371','137108','1371081001','jl. mantap mantap','2020-09-11 13:50:27','2020-09-11 13:50:27'),(16,2,'1371','137101','1371011001','qwwee\n','2020-09-11 13:51:14','2020-09-11 13:51:14'),(18,2,'1371','137101','1371011001','test','2020-09-11 14:30:07','2020-09-11 14:30:07'),(55,2,'1371','137101','1371011001','address','2020-09-11 14:49:54','2020-09-11 14:49:54'),(56,2,'1371','137101','1371011001','ini add','2020-09-11 14:51:05','2020-09-11 14:51:05'),(61,2,'1371','137101','1371011001','gggghhhgggg hhgg','2020-09-11 14:57:29','2020-09-11 14:57:29'),(62,2,'1371','137101','1371011001','data','2020-09-11 15:32:30','2020-09-11 15:32:30'),(63,2,'1371','137101','1371011001','pghkjd','2020-09-11 15:32:53','2020-09-11 15:32:53'),(64,2,'1371','137101','1371011001','jl. no1','2020-09-14 06:41:08','2020-09-14 06:41:08'),(65,7,'1371','137106','1371061007','jl no1 ','2020-09-29 07:29:55','2020-09-29 07:29:55'),(66,7,'1371','137101','1371011001','jl no1 block1','2020-10-08 07:24:09','2020-10-08 07:24:09');
/*!40000 ALTER TABLE `t_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_booking`
--

DROP TABLE IF EXISTS `t_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_booking` (
  `invoice_no` varchar(6) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `jasa_id` bigint(20) DEFAULT NULL,
  `payment_status` varchar(6) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `booking_expired` tinyint(1) DEFAULT '0',
  `booking_expired_date` datetime DEFAULT NULL,
  `address_id` bigint(20) DEFAULT NULL,
  `working_date` datetime NOT NULL,
  PRIMARY KEY (`invoice_no`),
  UNIQUE KEY `t_booking_invoice_no_unique` (`invoice_no`),
  KEY `user_id` (`user_id`),
  KEY `jasa_id` (`jasa_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `t_booking_ibfk_52` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_booking_ibfk_53` FOREIGN KEY (`jasa_id`) REFERENCES `t_jasa` (`jasa_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_booking_ibfk_54` FOREIGN KEY (`address_id`) REFERENCES `t_address` (`address_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_booking`
--

LOCK TABLES `t_booking` WRITE;
/*!40000 ALTER TABLE `t_booking` DISABLE KEYS */;
INSERT INTO `t_booking` VALUES ('091302',2,1,'UNPAID','2020-09-13 07:15:31','2021-09-17 16:30:00',1,'2020-09-13 08:15:31',63,'2020-09-21 07:15:00'),('091317',2,2,'UNPAID','2020-09-12 20:36:56','2021-09-17 16:30:00',1,'2020-09-12 21:36:56',63,'2020-09-12 21:25:00'),('091340',2,1,'UNPAID','2020-09-12 20:31:59','2021-09-17 16:30:00',1,'2020-09-12 21:31:59',63,'2020-09-12 23:31:00'),('091344',2,1,'PAID','2020-09-13 07:17:43','2021-09-17 16:30:00',1,'2020-09-13 08:17:43',63,'2020-09-26 20:17:00'),('091360',2,1,'UNPAID','2020-09-12 19:29:23','2021-09-17 16:30:00',1,'2020-09-12 20:29:23',63,'2020-09-12 19:29:00'),('091395',2,1,'UNPAID','2020-09-13 04:35:43','2021-09-17 16:30:00',1,'2020-09-13 05:35:43',63,'1999-12-31 17:00:00'),('091412',2,1,'PAID','2020-09-14 06:42:27','2021-09-17 16:30:00',1,'2020-09-14 07:42:27',64,'2020-09-14 08:25:00'),('091417',2,1,'UNPAID','2020-09-14 00:02:52','2021-09-17 16:30:00',1,'2020-09-14 01:02:52',63,'2020-09-14 14:02:00'),('091457',2,2,'UNPAID','2020-09-14 04:33:26','2021-09-17 16:30:00',1,'2020-09-14 05:33:26',63,'2020-09-15 04:33:00'),('091609',2,3,'UNPAID','2020-09-16 07:12:37','2021-09-17 16:30:00',1,'2020-09-16 08:12:37',64,'2020-09-24 21:12:00'),('092758',2,3,'PAID','2020-09-26 23:26:15','2021-09-17 16:30:00',1,'2020-09-27 00:26:15',64,'2020-09-29 21:26:00'),('092760',2,7,'UNPAID','2020-09-26 23:53:56','2021-09-17 16:30:00',1,'2020-09-27 00:53:56',64,'2020-09-28 21:53:00'),('092784',2,1,'UNPAID','2020-09-26 23:14:12','2021-09-17 16:30:00',1,'2020-09-27 00:14:12',64,'2020-09-26 22:14:00'),('092918',7,1,'PAID','2020-09-29 07:30:16','2021-09-17 16:30:00',1,'2020-09-29 08:30:16',65,'2020-09-29 21:30:00'),('100426',7,1,'UNPAID','2020-10-04 03:42:29','2021-09-17 16:30:00',1,'2020-10-04 04:42:29',65,'2020-09-29 21:30:00'),('100709',7,1,'UNPAID','2020-10-07 14:06:06','2021-09-17 16:30:00',1,'2020-10-07 15:06:06',65,'2020-10-08 22:05:00'),('100839',7,1,'PAID','2020-10-08 06:50:52','2021-09-17 16:30:00',1,'2020-10-08 07:50:52',65,'2020-10-08 06:50:00'),('100854',7,1,'UNPAID','2020-10-08 07:47:45','2021-09-17 16:30:00',1,'2020-10-08 08:47:45',66,'2020-10-08 07:47:00'),('100866',7,1,'UNPAID','2020-10-08 06:44:22','2021-09-17 16:30:00',1,'2020-10-08 07:44:22',65,'2020-09-29 21:30:00'),('100875',7,3,'PAID','2020-10-08 07:45:07','2021-09-17 16:30:00',1,'2020-10-08 08:45:07',66,'2020-10-08 07:45:00');
/*!40000 ALTER TABLE `t_booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_category`
--

DROP TABLE IF EXISTS `t_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_category` (
  `category_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(20) NOT NULL,
  `category_desc` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `t_category_category_name_unique` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_category`
--

LOCK TABLES `t_category` WRITE;
/*!40000 ALTER TABLE `t_category` DISABLE KEYS */;
INSERT INTO `t_category` VALUES (1,'Handphone','repair all type off handphone','2020-08-17 15:37:30','2020-09-16 06:45:21'),(2,'Laptop','service laptop','2020-08-17 15:37:58','2020-09-16 06:49:24'),(3,'e','e','2021-09-02 08:54:24','2021-09-02 08:54:24');
/*!40000 ALTER TABLE `t_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_confirm_payment`
--

DROP TABLE IF EXISTS `t_confirm_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_confirm_payment` (
  `conf_payment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `payment_date` datetime NOT NULL,
  `total_price` bigint(20) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `invoice_no` varchar(6) NOT NULL,
  `description` varchar(255) NOT NULL,
  `img_pay` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`conf_payment_id`),
  UNIQUE KEY `t_confirm_payment_invoice_no_unique` (`invoice_no`),
  CONSTRAINT `t_confirm_payment_ibfk_1` FOREIGN KEY (`invoice_no`) REFERENCES `t_booking` (`invoice_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_confirm_payment`
--

LOCK TABLES `t_confirm_payment` WRITE;
/*!40000 ALTER TABLE `t_confirm_payment` DISABLE KEYS */;
INSERT INTO `t_confirm_payment` VALUES (5,'irfan','app@gmail.com','2020-09-12 17:00:00',50000,'BNI','091344','','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/091344.png','2020-09-13 07:32:48','2020-09-13 07:32:48'),(6,'irfan kurniawan','shinigami@gmail.com','2020-09-13 17:00:00',50000,'BNI','091417','','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/091417.png','2020-09-14 00:05:49','2020-09-14 00:05:49'),(7,'irfan kurniawan','irfan@gmail.com','2020-09-13 17:00:00',50000,'ovo','091412','','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/091412.png','2020-09-14 06:48:49','2020-09-14 06:48:49'),(10,'irfan kurniawan','app@mail.com','2020-09-15 17:00:00',50000,'BNI','091609','description','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/091609.png','2020-09-16 08:01:31','2020-09-16 08:01:31'),(11,'irfan','app@email.com','2020-09-26 17:00:00',50000,'BNI','092784','','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/092784.png','2020-09-26 23:20:24','2020-09-26 23:20:24'),(12,'irfan','app@mail.com','2020-09-26 17:00:00',50000,'BNI','092758','','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/092758.png','2020-09-26 23:29:29','2020-09-26 23:29:29'),(13,'irfan kurniawan','rifairiflee@gmail.com','2020-09-28 17:00:00',50000,'BNI','092918','bukti pembayaran jasa','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/092918.png','2020-09-29 07:34:06','2020-09-29 07:34:06'),(14,'irfan kurniawan','shinigaminoirfan@gmail.com','2020-10-07 17:00:00',50000,'BNI','100839','bukti pembayaran','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/100839.png','2020-10-08 06:54:21','2020-10-08 06:54:21'),(15,'Irfan kurniawan','rifailriflee@gmail.com','2020-09-30 00:00:00',50000,'BNI','100875','bukti pembayaran','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/100875.png','2020-10-08 07:57:01','2020-10-08 07:57:01');
/*!40000 ALTER TABLE `t_confirm_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_hotel`
--

DROP TABLE IF EXISTS `t_hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_hotel` (
  `kamar_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `kamar_type` varchar(10) NOT NULL,
  `kamar_price` int(11) NOT NULL,
  `kamar_status` varchar(10) NOT NULL,
  `kamar_img` varchar(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`kamar_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_hotel`
--

LOCK TABLES `t_hotel` WRITE;
/*!40000 ALTER TABLE `t_hotel` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_jasa`
--

DROP TABLE IF EXISTS `t_jasa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_jasa` (
  `jasa_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `sub_category_id` bigint(20) NOT NULL,
  `jasa_name` varchar(20) NOT NULL,
  `jasa_desc` varchar(50) NOT NULL,
  `jasa_price` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`jasa_id`),
  UNIQUE KEY `t_jasa_jasa_name_unique` (`jasa_name`),
  KEY `sub_category_id` (`sub_category_id`),
  CONSTRAINT `t_jasa_ibfk_1` FOREIGN KEY (`sub_category_id`) REFERENCES `t_sub_category` (`sub_category_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_jasa`
--

LOCK TABLES `t_jasa` WRITE;
/*!40000 ALTER TABLE `t_jasa` DISABLE KEYS */;
INSERT INTO `t_jasa` VALUES (1,1,'Installation','To install AC',50000,'2020-08-17 15:44:00','2020-09-08 08:09:54'),(2,1,'Repair Broken','Fix what\'s broken on the ac',30000,'2020-08-17 15:44:08','2020-09-16 07:04:41'),(3,2,'Reinstall Device','test desc 123',50000,'2020-08-17 15:44:24','2020-09-16 07:08:42'),(4,2,'Repair Broken on Dev','test desc 123',30000,'2020-08-17 15:44:29','2020-09-16 07:09:21'),(7,4,'Reinstall','reisntall for fix phone system',40000,'2020-08-17 15:48:03','2020-09-14 01:59:16'),(14,9,'Installation OS','test desc',80000,'2020-08-17 15:49:43','2020-09-16 07:06:51'),(15,10,'Install huawei','test desc 123',50000,'2020-10-08 08:13:04','2020-10-08 08:13:04'),(16,1,'okee','cek',1223,'2021-09-02 08:53:13','2021-09-02 08:53:13');
/*!40000 ALTER TABLE `t_jasa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_kecamatan`
--

DROP TABLE IF EXISTS `t_kecamatan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_kecamatan` (
  `kecamatan_id` varchar(24) NOT NULL,
  `kota_id` varchar(24) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`kecamatan_id`),
  KEY `kota_id` (`kota_id`),
  CONSTRAINT `t_kecamatan_ibfk_1` FOREIGN KEY (`kota_id`) REFERENCES `t_kota` (`kota_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_kecamatan`
--

LOCK TABLES `t_kecamatan` WRITE;
/*!40000 ALTER TABLE `t_kecamatan` DISABLE KEYS */;
INSERT INTO `t_kecamatan` VALUES ('137101','1371','Padang Selatan','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137102','1371','Padang Timur','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137103','1371','Padang Barat','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137104','1371','Padang Utara','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137105','1371','Bungus Teluk Kabung','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137106','1371','Lubuk Begalung','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137107','1371','Lubuk Kilangan','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137108','1371','Pauh','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137109','1371','Kuranji','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137110','1371','Nanggalo','2020-08-31 12:02:51','2020-08-31 12:02:51'),('137111','1371','Koto Tangah','2020-08-31 12:02:51','2020-08-31 12:02:51');
/*!40000 ALTER TABLE `t_kecamatan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_kelurahan`
--

DROP TABLE IF EXISTS `t_kelurahan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_kelurahan` (
  `kelurahan_id` varchar(24) NOT NULL,
  `kecamatan_id` varchar(24) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`kelurahan_id`),
  KEY `kecamatan_id` (`kecamatan_id`),
  CONSTRAINT `t_kelurahan_ibfk_1` FOREIGN KEY (`kecamatan_id`) REFERENCES `t_kecamatan` (`kecamatan_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_kelurahan`
--

LOCK TABLES `t_kelurahan` WRITE;
/*!40000 ALTER TABLE `t_kelurahan` DISABLE KEYS */;
INSERT INTO `t_kelurahan` VALUES ('1371011001','137101','Belakang Pondok','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011002','137101','Alang Laweh','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011003','137101','Ranah Parak Rumbio','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011004','137101','Pasa Gadang','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011005','137101','Batang Arau','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011006','137101','Seberang Palinggam','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011007','137101','Seberang Padang','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011008','137101','Mata Air','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011009','137101','Rawang','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011010','137101','Teluk Bayur','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011011','137101','Air Manis','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371011012','137101','Bukit Gado-gado','2020-08-31 12:03:24','2020-08-31 12:03:24'),('1371021001','137102','Sawahan','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021002','137102','Jati Baru','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021003','137102','Jati','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021004','137102','Sawahan Timur','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021005','137102','Simpang Haru','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021006','137102','Kubu Marapalam','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021007','137102','Andalas','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021008','137102','Kubu Dalam Parak Karakah','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021009','137102','Parak Gadang Timur','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371021010','137102','Ganting Parak Gadang','2020-08-31 12:16:16','2020-08-31 12:16:16'),('1371031001','137103','Flamboyan Baru','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031002','137103','Rimbo Kaluang','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031003','137103','Ujung Gurun','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031004','137103','Purus','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031005','137103','Padang Pasir','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031006','137103','Olo','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031007','137103','Kampung Jao','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031008','137103','Belakang Tangsi','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031009','137103','Kampung Pondok','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371031010','137103','Berok Nipah','2020-08-31 12:17:24','2020-08-31 12:17:24'),('1371041001','137104','Air Tawar Timur','2020-08-31 12:17:55','2020-08-31 12:17:55'),('1371041002','137104','Air Tawar Barat','2020-08-31 12:17:55','2020-08-31 12:17:55'),('1371041003','137104','Ulak Karang Utara','2020-08-31 12:17:55','2020-08-31 12:17:55'),('1371041004','137104','Ulak Karang Selatan','2020-08-31 12:17:55','2020-08-31 12:17:55'),('1371041005','137104','Lolong Belanti','2020-08-31 12:17:55','2020-08-31 12:17:55'),('1371041006','137104','Alai Parak Kopi','2020-08-31 12:17:55','2020-08-31 12:17:55'),('1371041007','137104','Gunung Pangilun','2020-08-31 12:17:55','2020-08-31 12:17:55'),('1371051001','137105','Bungus Timur','2020-08-31 12:20:28','2020-08-31 12:20:28'),('1371051002','137105','Bungus Barat','2020-08-31 12:20:28','2020-08-31 12:20:28'),('1371051003','137105','Bungus Selatan','2020-08-31 12:20:28','2020-08-31 12:20:28'),('1371051004','137105','Teluk Kabung Utara','2020-08-31 12:20:28','2020-08-31 12:20:28'),('1371051005','137105','Teluk Kabung Tengah','2020-08-31 12:20:28','2020-08-31 12:20:28'),('1371051006','137105','Teluk Kabung Selatan','2020-08-31 12:20:28','2020-08-31 12:20:28'),('1371061001','137106','Cangkeh Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061002','137106','Kampung Baru Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061003','137106','Tanah Sirah Piai Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061004','137106','Tanjung Saba Pitamen Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061005','137106','Lubuk Begalung Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061006','137106','Gurun Laweh Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061007','137106','Tanjung Aua Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061008','137106','Koto Baru Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061009','137106','Banuaran Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061010','137106','Parak Laweh Pulau Aia Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061011','137106','Batung Taba Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061012','137106','Pagambiran Ampalu Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061013','137106','Pampangan Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061014','137106','Gates Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371061015','137106','Kampung Jua Nan XX','2020-08-31 12:20:51','2020-08-31 12:20:51'),('1371071001','137107','Indarung','2020-08-31 12:21:19','2020-08-31 12:21:19'),('1371071002','137107','Padang Besi','2020-08-31 12:21:19','2020-08-31 12:21:19'),('1371071003','137107','Batu Gadang','2020-08-31 12:21:19','2020-08-31 12:21:19'),('1371071004','137107','Bandar Buat','2020-08-31 12:21:19','2020-08-31 12:21:19'),('1371071005','137107','Koto Lalang','2020-08-31 12:21:19','2020-08-31 12:21:19'),('1371071006','137107','Baringin','2020-08-31 12:21:19','2020-08-31 12:21:19'),('1371071007','137107','Tarantang','2020-08-31 12:21:19','2020-08-31 12:21:19'),('1371081001','137108','Limau Manis','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371081002','137108','Koto Lua','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371081003','137108','Limau Manis Selatan','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371081004','137108','Piai Tangah','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371081005','137108','Cupak Tangah','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371081006','137108','Pisang','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371081007','137108','Binuang Kampuang Dalam','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371081008','137108','Kapalo Koto','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371081009','137108','Lambung Bukik','2020-08-31 12:22:14','2020-08-31 12:22:14'),('1371091001','137109','Pasar Ambacang','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371091002','137109','Anduring','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371091003','137109','Lubuk Lintah','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371091004','137109','Ampang','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371091005','137109','Kalumbuk','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371091006','137109','Korong Gadang','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371091007','137109','Kuranji','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371091008','137109','Gunung Sarik','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371091009','137109','Sungai Sapih','2020-08-31 12:23:04','2020-08-31 12:23:04'),('1371101001','137110','Surau Gadang','2020-08-31 12:24:59','2020-08-31 12:24:59'),('1371101002','137110','Kampung Olo','2020-08-31 12:24:59','2020-08-31 12:24:59'),('1371101003','137110','Kurao Pagang','2020-08-31 12:24:59','2020-08-31 12:24:59'),('1371101004','137110','Gurun Laweh','2020-08-31 12:24:59','2020-08-31 12:24:59'),('1371101005','137110','Tabing Banda Gadang','2020-08-31 12:24:59','2020-08-31 12:24:59'),('1371101006','137110','Kampung Lapai','2020-08-31 12:24:59','2020-08-31 12:24:59'),('1371111001','137111','Balai Gadang','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111002','137111','Lubuk Minturun','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111003','137111','Aie Pacah','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111004','137111','Dadok Tunggul Hitam','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111005','137111','Koto Panjang Ikua Koto','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111006','137111','Koto Pulai','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111007','137111','Batipuh Panjang','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111008','137111','Padang Sarai','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111009','137111','Lubuk Buaya','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111010','137111','Batang Kabung Ganting','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111011','137111','Bungo Pasang','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111012','137111','Parupuk Tabing','2020-08-31 12:25:42','2020-08-31 12:25:42'),('1371111013','137111','Pasie Nan Tigo','2020-08-31 12:25:42','2020-08-31 12:25:42');
/*!40000 ALTER TABLE `t_kelurahan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_kota`
--

DROP TABLE IF EXISTS `t_kota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_kota` (
  `kota_id` varchar(24) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`kota_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_kota`
--

LOCK TABLES `t_kota` WRITE;
/*!40000 ALTER TABLE `t_kota` DISABLE KEYS */;
INSERT INTO `t_kota` VALUES ('1301','KAB. PESISIR SELATAN','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1302','KAB. SOLOK','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1303','KAB. SIJUNJUNG','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1304','KAB. TANAH DATAR','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1305','KAB. PADANG PARIAMAN','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1306','KAB. AGAM','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1307','KAB. LIMA PULUH KOTA','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1308','KAB. PASAMAN','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1309','KAB. KEPULAUAN MENTA','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1310','KAB. DHARMASRAYA','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1311','KAB. SOLOK SELATAN','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1312','KAB. PASAMAN BARAT','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1371','KOTA PADANG','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1372','KOTA SOLOK','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1373','KOTA SAWAHLUNTO','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1374','KOTA PADANG PANJANG','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1375','KOTA BUKITTINGGI','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1376','KOTA PAYAKUMBUH','2020-08-31 12:02:33','2020-08-31 12:02:33'),('1377','KOTA PARIAMAN','2020-08-31 12:02:33','2020-08-31 12:02:33');
/*!40000 ALTER TABLE `t_kota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_payment`
--

DROP TABLE IF EXISTS `t_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_payment` (
  `payment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `invoice_no` varchar(6) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  UNIQUE KEY `t_payment_invoice_no_unique` (`invoice_no`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `t_payment_ibfk_45` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_payment_ibfk_46` FOREIGN KEY (`invoice_no`) REFERENCES `t_booking` (`invoice_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_payment`
--

LOCK TABLES `t_payment` WRITE;
/*!40000 ALTER TABLE `t_payment` DISABLE KEYS */;
INSERT INTO `t_payment` VALUES (116,2,'091344','2020-09-13 07:31:24','2020-09-13 07:31:24'),(117,2,'091417','2020-09-14 00:03:39','2020-09-14 00:03:39'),(118,2,'091412','2020-09-14 06:42:50','2020-09-14 06:42:50'),(119,2,'092784','2020-09-26 23:14:46','2020-09-26 23:14:46'),(120,7,'092918','2020-09-29 07:30:35','2020-09-29 07:30:35'),(121,7,'100839','2020-10-08 06:51:26','2020-10-08 06:51:26'),(122,7,'100875','2020-10-08 07:45:34','2020-10-08 07:45:34');
/*!40000 ALTER TABLE `t_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_profil`
--

DROP TABLE IF EXISTS `t_profil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_profil` (
  `profil_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `phone` varchar(14) DEFAULT NULL,
  `user_img` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`profil_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `t_profil_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_profil`
--

LOCK TABLES `t_profil` WRITE;
/*!40000 ALTER TABLE `t_profil` DISABLE KEYS */;
INSERT INTO `t_profil` VALUES (1,1,NULL,'https://darkyasha.goes2nobel.com/TA/back-end/./public/image/irfankurnia.png','2020-08-05 17:01:21','2020-08-18 11:38:47'),(2,2,'098778','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/irfankurniawan.png','2020-08-15 18:04:48','2020-09-06 08:14:36'),(5,5,NULL,NULL,'2020-09-16 08:02:27','2020-09-16 08:02:27'),(7,7,NULL,NULL,'2020-09-29 07:28:05','2020-09-29 07:28:05'),(8,8,NULL,NULL,'2021-09-16 06:00:37','2021-09-16 06:00:37');
/*!40000 ALTER TABLE `t_profil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_sub_category`
--

DROP TABLE IF EXISTS `t_sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_sub_category` (
  `sub_category_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category_id` bigint(20) DEFAULT NULL,
  `sub_category_name` varchar(20) NOT NULL,
  `sub_category_desc` varchar(255) NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`sub_category_id`),
  UNIQUE KEY `t_sub_category_sub_category_name_unique` (`sub_category_name`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `t_sub_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `t_category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_sub_category`
--

LOCK TABLES `t_sub_category` WRITE;
/*!40000 ALTER TABLE `t_sub_category` DISABLE KEYS */;
INSERT INTO `t_sub_category` VALUES (1,1,'Xiaomi','smartphone from china','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/Xiaomi.png','2020-08-17 15:39:39','2020-09-16 06:52:29'),(2,1,'Samsung','smartphone samsung','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/Samsung.png','2020-08-17 15:40:21','2020-09-16 06:54:51'),(4,1,'Realme','smartphone realmi','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/Realme.png','2020-08-17 15:40:35','2020-09-16 06:53:58'),(9,2,'ASUS','service laptop ASUS','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/ASUS.png','2020-08-17 15:41:53','2020-09-16 06:56:55'),(10,1,'huawei','test desc','https://darkyasha.goes2nobel.com/TA/back-end/./public/image/huawei.png','2020-10-08 07:36:32','2020-10-08 07:36:32'),(11,1,'okee','e',NULL,'2021-09-02 08:54:34','2021-09-02 08:54:34');
/*!40000 ALTER TABLE `t_sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_transaction_complate`
--

DROP TABLE IF EXISTS `t_transaction_complate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_transaction_complate` (
  `transaction_com_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `invoice_no` varchar(6) NOT NULL,
  `conf_payment_id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`transaction_com_id`),
  UNIQUE KEY `t_transaction_complate_invoice_no_unique` (`invoice_no`),
  KEY `user_id` (`user_id`),
  KEY `conf_payment_id` (`conf_payment_id`),
  CONSTRAINT `t_transaction_complate_ibfk_67` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`),
  CONSTRAINT `t_transaction_complate_ibfk_68` FOREIGN KEY (`invoice_no`) REFERENCES `t_booking` (`invoice_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_transaction_complate_ibfk_69` FOREIGN KEY (`conf_payment_id`) REFERENCES `t_confirm_payment` (`conf_payment_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_transaction_complate`
--

LOCK TABLES `t_transaction_complate` WRITE;
/*!40000 ALTER TABLE `t_transaction_complate` DISABLE KEYS */;
INSERT INTO `t_transaction_complate` VALUES (3,2,'091344',5,'2020-09-13 07:34:18','2020-09-13 07:34:18'),(4,2,'091412',7,'2020-09-14 06:56:02','2020-09-14 06:56:02'),(5,2,'092758',12,'2020-09-26 23:34:43','2020-09-26 23:34:43'),(6,7,'092918',13,'2020-09-29 07:38:40','2020-09-29 07:38:40'),(7,7,'100839',14,'2020-10-08 06:56:29','2020-10-08 06:56:29'),(8,7,'100875',15,'2020-10-08 07:58:21','2020-10-08 07:58:21');
/*!40000 ALTER TABLE `t_transaction_complate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `is_login` tinyint(1) DEFAULT '0',
  `is_admin` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `t_user_username_unique` (`username`),
  UNIQUE KEY `t_user_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (1,'irfan kurniawan','irfankurnia','12345678','shinigaminoirfan@gmail.com',1,1,'2020-08-05 17:01:21','2020-08-05 17:06:19'),(2,'irfan kurniawan','irfankurniawan','12345678','harneti09@gmail.com',1,0,'2020-08-15 18:04:47','2020-08-24 06:14:33'),(5,'darkyasha','darkyasha','12345678','yusman1902@gmail.com',0,0,'2020-09-16 08:02:27','2020-09-16 08:02:27'),(7,'irfan kurniawan','irfankr','12345678','rifairiflee@gmail.com',1,0,'2020-09-29 07:28:05','2020-10-05 02:31:00'),(8,'Setiawan','stwn','Setiawan160','ttk.shimakaze@gmail.com',0,0,'2021-09-16 06:00:36','2021-09-16 06:00:36');
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'goesnobe_darkyasha'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-06 14:54:47
