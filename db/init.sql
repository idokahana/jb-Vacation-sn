-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: אפריל 19, 2025 בזמן 09:13 PM
-- גרסת שרת: 9.2.0
-- PHP Version: 8.2.27
SET
    SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
    time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jb-Vacation-sn`
--
CREATE DATABASE IF NOT EXISTS `jb-Vacation-sn` DEFAULT CHARACTER
SET
    utf8mb3 COLLATE utf8mb3_general_ci;

USE `jb-Vacation-sn`;

-- --------------------------------------------------------
--
-- מבנה טבלה עבור טבלה `follows`
--
CREATE TABLE
    `follows` (
        `user_id` char(36) CHARACTER
        SET
            utf8mb3 COLLATE utf8mb3_bin NOT NULL,
            `vacation_id` char(36) CHARACTER
        SET
            utf8mb3 COLLATE utf8mb3_bin NOT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

--
-- הוצאת מידע עבור טבלה `follows`
--
INSERT INTO
    `follows` (
        `user_id`,
        `vacation_id`,
        `created_at`,
        `updated_at`
    )
VALUES
    (
        '58d0b891-bbfe-496c-89eb-3aa558602266',
        '01afb68f-999b-48ad-8bcf-aefc954850bb',
        '2025-04-14 10:07:26',
        '2025-04-14 10:07:26'
    ),
    (
        '58d0b891-bbfe-496c-89eb-3aa558602266',
        '10136594-e196-4e66-9df0-e765e1f403f8',
        '2025-04-14 09:59:24',
        '2025-04-14 09:59:24'
    ),
    (
        '58d0b891-bbfe-496c-89eb-3aa558602266',
        '1f5aacae-0d5b-45b1-91f5-fce4736d00ac',
        '2025-04-14 10:06:32',
        '2025-04-14 10:06:32'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        '01afb68f-999b-48ad-8bcf-aefc954850bb',
        '2025-04-14 15:05:04',
        '2025-04-14 15:05:04'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        '040e6c8c-e185-416d-990d-9192df7070ef',
        '2025-04-14 15:04:05',
        '2025-04-14 15:04:05'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        '10136594-e196-4e66-9df0-e765e1f403f8',
        '2025-04-14 15:08:39',
        '2025-04-14 15:08:39'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        '1f5aacae-0d5b-45b1-91f5-fce4736d00ac',
        '2025-04-14 15:08:38',
        '2025-04-14 15:08:38'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        '23b9f509-e945-4998-a183-ca6737c4ce55',
        '2025-04-14 15:08:41',
        '2025-04-14 15:08:41'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        '2778b76e-6f10-48a7-8037-7e876d4d83f0',
        '2025-04-14 15:08:41',
        '2025-04-14 15:08:41'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        '56d8d717-449d-4ec3-9042-4eb4227e6b11',
        '2025-04-14 15:11:03',
        '2025-04-14 15:11:03'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        '81e10953-b645-4b73-aaeb-d5e2244ee3d7',
        '2025-04-14 15:11:04',
        '2025-04-14 15:11:04'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        '01afb68f-999b-48ad-8bcf-aefc954850bb',
        '2025-04-14 15:39:01',
        '2025-04-14 15:39:01'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        '040e6c8c-e185-416d-990d-9192df7070ef',
        '2025-04-14 15:39:03',
        '2025-04-14 15:39:03'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        '10136594-e196-4e66-9df0-e765e1f403f8',
        '2025-04-14 15:07:21',
        '2025-04-14 15:07:21'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        '1f5aacae-0d5b-45b1-91f5-fce4736d00ac',
        '2025-04-14 14:50:36',
        '2025-04-14 14:50:36'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        '23b9f509-e945-4998-a183-ca6737c4ce55',
        '2025-04-14 10:33:51',
        '2025-04-14 10:33:51'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        '2778b76e-6f10-48a7-8037-7e876d4d83f0',
        '2025-04-14 15:02:23',
        '2025-04-14 15:02:23'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        '43ece891-60f8-423b-bfa7-f17c71ea9e8b',
        '2025-04-14 15:02:24',
        '2025-04-14 15:02:24'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        '49e15fee-2f0d-4dab-acdc-ea63ee04e03d',
        '2025-04-14 15:02:26',
        '2025-04-14 15:02:26'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        'dd2208d2-fc26-403c-ab36-940ffa443ab8',
        '2025-04-14 10:34:00',
        '2025-04-14 10:34:00'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        'e38be90b-47dc-49a6-8bbf-20d00d5c2e34',
        '2025-04-14 10:34:01',
        '2025-04-14 10:34:01'
    );

-- --------------------------------------------------------
--
-- מבנה טבלה עבור טבלה `users`
--
CREATE TABLE
    `users` (
        `user_id` char(36) CHARACTER
        SET
            utf8mb3 COLLATE utf8mb3_bin NOT NULL,
            `first_name` varchar(50) NOT NULL,
            `last_name` varchar(50) NOT NULL,
            `email` varchar(100) NOT NULL,
            `password` varchar(64) NOT NULL,
            `role` enum ('user', 'admin') NOT NULL DEFAULT 'user',
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

--
-- הוצאת מידע עבור טבלה `users`
--
INSERT INTO
    `users` (
        `user_id`,
        `first_name`,
        `last_name`,
        `email`,
        `password`,
        `role`,
        `created_at`,
        `updated_at`
    )
VALUES
    (
        '38e3003f-9dc9-4c4f-9fcb-f939b863d8e0',
        'asdf',
        'asdf',
        'idoka1233@gmail.co',
        '4dd033c89803abc5d940e14556dffae740565218270c3287e8e6bfb6dfda5e41',
        'user',
        '2025-04-14 16:13:08',
        '2025-04-14 16:13:08'
    ),
    (
        '58d0b891-bbfe-496c-89eb-3aa558602266',
        'bsika',
        'bdika',
        'bidka@gmail.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-04-14 09:29:41',
        '2025-04-14 09:29:41'
    ),
    (
        '6503c33d-41ad-4f4a-a8bd-dd16320422d5',
        'ido',
        'kahana',
        'asdfasf@asdf.com',
        '647e02f42f4bdf0a97e5a0fba477466d87b5437a87e0e8a4d6cdcc0947c94f2e',
        'user',
        '2025-04-14 16:12:02',
        '2025-04-14 16:12:02'
    ),
    (
        '6a70bd78-ce5c-4e30-a6c7-121615c5d226',
        'ido',
        'kahana',
        'idoka1233@gmail.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 11:32:13',
        '2025-03-10 11:32:13'
    ),
    (
        '97b91fb1-fd90-11ef-9bb1-0242ac110002',
        'Admin',
        'User',
        'admin@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'admin',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b92657-fd90-11ef-9bb1-0242ac110002',
        'John',
        'Doe',
        'john@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b92796-fd90-11ef-9bb1-0242ac110002',
        'Jane',
        'Smith',
        'jane@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b92812-fd90-11ef-9bb1-0242ac110002',
        'Mike',
        'Brown',
        'mike@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b92872-fd90-11ef-9bb1-0242ac110002',
        'Emily',
        'Davis',
        'emily@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b928d1-fd90-11ef-9bb1-0242ac110002',
        'Chris',
        'Wilson',
        'chris@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b9292b-fd90-11ef-9bb1-0242ac110002',
        'Sarah',
        'Taylor',
        'sarah@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b92989-fd90-11ef-9bb1-0242ac110002',
        'David',
        'White',
        'david@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b929ef-fd90-11ef-9bb1-0242ac110002',
        'Laura',
        'Harris',
        'laura@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        '97b92a48-fd90-11ef-9bb1-0242ac110002',
        'James',
        'Clark',
        'james@example.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-10 09:18:13',
        '2025-03-10 09:18:13'
    ),
    (
        'a9910ff1-ba2c-42a7-8f4e-f804c136148e',
        'mosha',
        'zot',
        'jkllh@asdf.com',
        '7f7737fddd2842bc2afdbf1868aaa8e986b83133a1f010fe96535c15e4584628',
        'user',
        '2025-03-11 16:38:03',
        '2025-03-11 16:38:03'
    ),
    (
        'ef0f546a-9e04-4057-82b7-ec686b1bc6f9',
        'ido',
        'kahana',
        'idokakakaka1@gmail.com',
        '39ecec07b29aab5b56841fa936f12216a05efebe81acb1c0bac7c63a47702089',
        'user',
        '2025-03-15 19:52:01',
        '2025-03-15 19:52:01'
    );

-- --------------------------------------------------------
--
-- מבנה טבלה עבור טבלה `vacations`
--
CREATE TABLE
    `vacations` (
        `vacation_id` char(36) CHARACTER
        SET
            utf8mb3 COLLATE utf8mb3_bin NOT NULL,
            `destination` varchar(50) NOT NULL,
            `vacation_description` varchar(255) NOT NULL,
            `starting_date` datetime NOT NULL,
            `ending_date` datetime NOT NULL,
            `price` int NOT NULL,
            `image_url` varchar(255) DEFAULT NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

--
-- הוצאת מידע עבור טבלה `vacations`
--
INSERT INTO
    `vacations` (
        `vacation_id`,
        `destination`,
        `vacation_description`,
        `starting_date`,
        `ending_date`,
        `price`,
        `image_url`,
        `created_at`,
        `updated_at`
    )
VALUES
    (
        '01afb68f-999b-48ad-8bcf-aefc954850bb',
        'israel',
        'the most butiful country in the middle east',
        '2025-04-16 00:00:00',
        '2025-04-30 00:00:00',
        1223,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/740538aa-3569-458c-bb10-1f775fec88fb.jpeg',
        '2025-03-15 19:43:03',
        '2025-04-14 14:41:54'
    ),
    (
        '040e6c8c-e185-416d-990d-9192df7070ef',
        'asdf',
        'asdfasdfasdf',
        '2025-03-20 00:00:00',
        '2025-03-26 00:00:00',
        123,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/bd8f426c-b7f2-4d5c-a6d0-31e3cccaa5e4.jpeg',
        '2025-03-15 19:34:29',
        '2025-03-18 08:36:30'
    ),
    (
        '10136594-e196-4e66-9df0-e765e1f403f8',
        'peru',
        'zdasdfasdf asdf asdf asdf asdf asdf',
        '2025-03-25 00:00:00',
        '2025-04-03 00:00:00',
        123,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/1e913946-eae7-490a-8b74-7e4b0e609ff5.jpeg',
        '2025-03-16 11:05:18',
        '2025-03-16 11:05:18'
    ),
    (
        '1f5aacae-0d5b-45b1-91f5-fce4736d00ac',
        ' Dubai, UAE',
        'Experience the luxury of Dubai, visit the tallest building, and shop in grand malls.',
        '2025-04-26 00:00:00',
        '2025-05-03 00:00:00',
        5678,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/b742dc8b-de80-435e-83c5-0a56826252af.jpeg',
        '2025-03-15 19:40:14',
        '2025-03-15 19:40:14'
    ),
    (
        '23b9f509-e945-4998-a183-ca6737c4ce55',
        'Rio de Janeiro, Brazil',
        'Relax on Copacabana Beach, see Christ the Redeemer, and enjoy Carnival vibes.',
        '2025-04-03 00:00:00',
        '2025-04-08 00:00:00',
        7890,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/251b9d78-f350-4665-b9b1-33a0ce809ce5.jpeg',
        '2025-03-15 19:46:45',
        '2025-03-15 19:46:45'
    ),
    (
        '2778b76e-6f10-48a7-8037-7e876d4d83f0',
        ' Tokyo, Japan',
        'Discover the futuristic city of Tokyo, enjoy sushi, and visit ancient temples.',
        '2025-04-05 00:00:00',
        '2025-04-12 00:00:00',
        3000,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/ed65ab23-19c0-403f-8715-309f6aef47a3.jpeg',
        '2025-03-15 19:35:32',
        '2025-03-15 19:35:32'
    ),
    (
        '31d4548f-ba92-46ac-bce9-d8c6929024cc',
        'peru',
        'peru the must butiful place in the world',
        '2025-04-13 00:00:00',
        '2025-04-21 00:00:00',
        12345,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/e8b6ae73-6fc6-48f6-b1f6-5c69f86ad6a3.jpeg',
        '2025-04-14 16:00:03',
        '2025-04-14 16:00:03'
    ),
    (
        '43ece891-60f8-423b-bfa7-f17c71ea9e8b',
        'Barcelona, Spain',
        ' Wander through the colorful streets, see Gaudí’s architecture, and enjoy tapas.',
        '2025-05-10 00:00:00',
        '2025-04-15 00:00:00',
        500,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/5f1b36cc-0b8f-4c51-bdca-f2947573d0b7.jpeg',
        '2025-03-15 19:45:37',
        '2025-03-15 19:45:37'
    ),
    (
        '49e15fee-2f0d-4dab-acdc-ea63ee04e03d',
        'Cape Town, South Africa',
        'Climb Table Mountain, visit vineyards, and explore breathtaking landscapes.',
        '2025-12-06 00:00:00',
        '2026-01-03 00:00:00',
        20000,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/22964b20-4d63-48a1-bcc6-a8b2accd9a81.jpeg',
        '2025-03-15 19:48:04',
        '2025-03-15 19:48:04'
    ),
    (
        '56d8d717-449d-4ec3-9042-4eb4227e6b11',
        ' New York, USA',
        'Walk through Times Square, see a Broadway show, and visit the Statue of Liberty.',
        '2025-04-19 00:00:00',
        '2025-04-26 00:00:00',
        4567,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/4c6289cf-35ef-44d7-b4a6-b6f9e042cdc5.jpeg',
        '2025-03-15 19:37:27',
        '2025-03-15 19:37:27'
    ),
    (
        '81e10953-b645-4b73-aaeb-d5e2244ee3d7',
        'Santorini, Greece',
        ' Experience breathtaking sunsets and white-washed buildings by the Aegean Sea.',
        '2025-04-05 00:00:00',
        '2025-04-12 00:00:00',
        1234,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/49ebed37-2c24-45e1-ad2c-5f0e9865f30e.jpeg',
        '2025-03-15 19:36:35',
        '2025-03-15 19:36:35'
    ),
    (
        'dd2208d2-fc26-403c-ab36-940ffa443ab8',
        'Bangkok, Thailand',
        ' Discover the vibrant street food, golden temples, and bustling nightlife.',
        '2025-06-14 00:00:00',
        '2025-08-16 00:00:00',
        10000,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/9d5b81bf-34f3-4530-b9a8-1fc4cf058c75.jpeg',
        '2025-03-15 19:44:04',
        '2025-03-15 19:44:04'
    ),
    (
        'e38be90b-47dc-49a6-8bbf-20d00d5c2e34',
        'rome',
        'Explore ancient ruins, eat authentic Italian pizza, and visit the Vatican.',
        '2025-03-15 00:00:00',
        '2025-04-05 00:00:00',
        1234,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/13d92506-44f6-4c4e-a317-f72b583bfba5.jpeg',
        '2025-03-15 19:39:01',
        '2025-03-15 19:39:01'
    ),
    (
        'ea90e0c9-b35a-4729-9892-343a29ecce10',
        'Maldives',
        ' Enjoy a luxurious beach vacation in an overwater bungalow with crystal-clear waters',
        '2025-03-15 00:00:00',
        '2025-03-22 00:00:00',
        3500,
        'http://127.0.0.1:4566/il.co.johnbryce.idokahana/1c487827-09c9-4a16-af52-0cdc306768e4.jpeg',
        '2025-03-15 19:33:28',
        '2025-03-15 19:33:28'
    );

--
-- Indexes for dumped tables
--
--
-- אינדקסים לטבלה `follows`
--
ALTER TABLE `follows` ADD PRIMARY KEY (`user_id`, `vacation_id`),
ADD UNIQUE KEY `follows_vacationId_userId_unique` (`user_id`, `vacation_id`),
ADD KEY `vacation_id` (`vacation_id`);

--
-- אינדקסים לטבלה `users`
--
ALTER TABLE `users` ADD PRIMARY KEY (`user_id`),
ADD UNIQUE KEY `users_email` (`email`);

--
-- אינדקסים לטבלה `vacations`
--
ALTER TABLE `vacations` ADD PRIMARY KEY (`vacation_id`);

--
-- הגבלות לטבלאות שהוצאו
--
--
-- הגבלות לטבלה `follows`
--
ALTER TABLE `follows` ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`vacation_id`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;