-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2021 at 04:22 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dj_react_sale_and_inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities_log_log_activity`
--

CREATE TABLE `activities_log_log_activity` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `action_done` varchar(200) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `activity_log_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `activities_log_log_activity`
--

INSERT INTO `activities_log_log_activity` (`id`, `created_at`, `action_done`, `account_id`, `activity_log_id`) VALUES
(1, '2021-06-24 14:13:45.898458', 'Transaction', 40, 'None'),
(2, '2021-06-24 14:15:11.844520', 'Transaction', 40, 'None'),
(3, '2021-06-25 03:11:21.761871', 'Transaction', 40, 'None'),
(4, '2021-06-25 03:12:09.777561', 'Transaction', 40, 'None'),
(5, '2021-06-25 03:29:40.188236', 'Transaction', 40, 'None'),
(6, '2021-06-25 03:33:53.794968', 'Transaction', 40, 'None'),
(7, '2021-06-25 04:59:07.505522', 'Transaction', 40, 'None'),
(8, '2021-06-25 05:01:06.121724', 'Transaction', 40, 'None'),
(9, '2021-06-25 05:02:53.050518', 'Transaction', 40, 'None'),
(10, '2021-06-25 05:03:45.933292', 'Transaction', 40, 'None'),
(11, '2021-06-25 05:06:21.328189', 'Transaction', 40, 'None'),
(12, '2021-06-25 05:07:44.817102', 'Transaction', 40, 'None'),
(13, '2021-06-25 05:14:02.378035', 'Transaction', 2, 'None'),
(14, '2021-06-25 05:15:00.900436', 'Transaction', 2, 'None'),
(15, '2021-06-25 05:17:20.406788', 'Transaction', 2, 'None'),
(16, '2021-06-25 05:19:22.026055', 'Transaction', 2, 'None'),
(17, '2021-06-25 05:21:22.732759', 'Transaction', 2, 'None'),
(18, '2021-06-26 14:27:39.397081', 'Transaction', 40, 'AC-I21-0626-0001'),
(19, '2021-06-26 14:29:55.910849', 'Transaction', 40, 'AC-I21-0626-0002'),
(20, '2021-06-26 14:36:30.882151', 'Transaction', 40, 'AC-I21-0626-0003'),
(21, '2021-06-26 14:37:31.984137', 'Transaction', 40, 'AC-I21-0626-0004'),
(22, '2021-06-26 14:37:49.415381', 'Transaction', 40, 'AC-I21-0626-0005'),
(23, '2021-06-26 14:38:47.676156', 'Transaction', 40, 'AC-I21-0626-0006'),
(24, '2021-06-26 14:56:17.470307', 'Transaction', 40, 'AC-I21-0626-0007'),
(25, '2021-06-26 14:56:53.614859', 'Transaction', 40, 'AC-I21-0626-0008'),
(26, '2021-06-26 14:58:53.128597', 'Transaction', 40, 'AC-I21-0626-0009'),
(27, '2021-06-26 15:01:02.542195', 'Transaction', 40, 'AC-I21-0626-0010'),
(28, '2021-06-26 15:03:31.624570', 'Transaction', 40, 'AC-I21-0626-0011'),
(29, '2021-06-26 15:04:45.666566', 'Transaction', 40, 'AC-I21-0626-0012'),
(30, '2021-06-26 15:05:17.720652', 'Transaction', 40, 'AC-I21-0626-0013'),
(31, '2021-06-28 13:04:27.921171', 'Transaction', 40, 'AC-I21-0628-0001'),
(32, '2021-06-28 13:25:07.712284', 'Transaction', 40, 'AC-I21-0628-0002'),
(33, '2021-06-28 13:26:23.143629', 'Transaction', 40, 'AC-I21-0628-0003'),
(34, '2021-06-28 16:32:50.418670', 'Transaction', 40, 'AC-I21-0628-0004'),
(35, '2021-06-28 16:33:14.237214', 'Transaction', 40, 'AC-I21-0628-0005'),
(36, '2021-06-28 17:02:51.196168', 'Transaction', 40, 'AC-I21-0628-0006'),
(37, '2021-06-30 02:46:13.566231', 'Transaction', 40, 'AC-I21-0630-0001'),
(38, '2021-06-30 04:25:36.143724', 'Transaction', 40, 'AC-I21-0630-0002'),
(39, '2021-06-30 04:27:13.891018', 'Transaction', 40, 'AC-I21-0630-0003'),
(40, '2021-06-30 04:28:03.644420', 'Transaction', 40, 'AC-I21-0630-0004'),
(41, '2021-06-30 04:29:32.945621', 'Transaction', 40, 'AC-I21-0630-0005'),
(42, '2021-06-30 13:34:31.083001', 'Transaction', 40, 'AC-I21-0630-0006'),
(43, '2021-07-01 12:03:15.373054', 'Transaction', 2, 'AC-I21-0701-0001'),
(44, '2021-07-02 13:13:21.243668', 'Transaction', 2, 'AC-I21-0702-0001'),
(45, '2021-07-02 13:13:51.392894', 'Transaction', 2, 'AC-I21-0702-0002'),
(46, '2021-07-02 13:23:04.915803', 'Transaction', 40, 'AC-I21-0702-0003'),
(47, '2021-07-03 15:26:46.356651', 'Transaction', 2, 'AC-I21-0703-0001'),
(48, '2021-07-03 15:27:07.341945', 'Transaction', 2, 'AC-I21-0703-0002'),
(49, '2021-07-03 17:36:39.660106', 'Inventory Added', 2, 'AC-I21-0703-0003'),
(50, '2021-07-03 17:37:24.957086', 'Inventory Added', 2, 'AC-I21-0703-0004'),
(51, '2021-07-03 17:39:21.158971', 'Inventory Added', 2, 'AC-I21-0703-0005'),
(52, '2021-07-03 17:40:41.615677', 'Inventory Added', 2, 'AC-I21-0703-0006'),
(53, '2021-07-03 17:42:18.615633', 'Inventory Added', 2, 'AC-I21-0703-0007'),
(54, '2021-07-03 17:49:06.672956', 'Inventory Added', 2, 'AC-I21-0703-0008'),
(55, '2021-07-03 17:52:09.753700', 'Inventory Added', 2, 'AC-I21-0703-0009'),
(56, '2021-07-03 18:18:51.135599', 'Inventory Added', 2, 'AC-I21-0703-0010'),
(57, '2021-07-03 18:19:11.197595', 'Inventory Added', 2, 'AC-I21-0703-0011'),
(58, '2021-07-03 18:20:10.711808', 'Inventory Added', 2, 'AC-I21-0703-0012'),
(59, '2021-07-03 18:20:41.010313', 'Inventory Added', 2, 'AC-I21-0703-0013'),
(60, '2021-07-03 18:32:30.404978', 'Inventory Added', 2, 'AC-I21-0703-0014'),
(61, '2021-07-03 18:36:46.850605', 'Product Added', 2, 'AC-I21-0703-0015'),
(62, '2021-07-03 18:37:42.630512', 'Supplier Added', 2, 'AC-I21-0703-0016'),
(63, '2021-07-03 18:38:42.867661', 'Supplier Added', 2, 'AC-I21-0703-0017'),
(64, '2021-07-03 18:39:06.842835', 'Product Added', 2, 'AC-I21-0703-0018'),
(65, '2021-07-03 18:41:17.479341', 'Product Added', 2, 'AC-I21-0703-0019'),
(66, '2021-07-03 18:41:49.999197', 'Product Added', 2, 'AC-I21-0703-0020'),
(67, '2021-07-03 18:42:33.322308', 'Product Added', 2, 'AC-I21-0703-0021'),
(68, '2021-07-03 18:43:14.904110', 'Product Added', 2, 'AC-I21-0703-0022'),
(69, '2021-07-03 18:44:11.903719', 'Product Added', 2, 'AC-I21-0703-0023'),
(70, '2021-07-03 18:44:37.502937', 'Inventory Added', 2, 'AC-I21-0703-0024'),
(71, '2021-07-03 18:45:03.400918', 'Supplier Added', 2, 'AC-I21-0703-0025'),
(72, '2021-07-04 04:02:49.828137', 'Inventory Added', 2, 'AC-I21-0704-0001'),
(73, '2021-07-04 04:03:22.922993', 'Product Added', 2, 'AC-I21-0704-0002'),
(74, '2021-07-04 04:04:21.421754', 'Product Added', 2, 'AC-I21-0704-0003'),
(75, '2021-07-04 04:05:12.717145', 'Transaction Added', 2, 'AC-I21-0704-0004'),
(76, '2021-07-04 12:10:39.757762', 'Product Added', 2, 'AC-I21-0704-0005'),
(77, '2021-07-04 12:11:11.013131', 'Product Added', 2, 'AC-I21-0704-0006'),
(78, '2021-07-04 12:11:42.598566', 'Inventory Added', 2, 'AC-I21-0704-0007'),
(79, '2021-07-04 12:12:05.048852', 'Product Added', 2, 'AC-I21-0704-0008'),
(80, '2021-07-04 12:16:09.875149', 'Transaction', 2, 'AC-I21-0704-0009'),
(81, '2021-07-04 13:27:39.198141', 'Transaction Added', 2, 'AC-I21-0704-0010'),
(82, '2021-07-04 16:58:01.021791', 'Transaction Added', 2, 'AC-I21-0704-0011'),
(83, '2021-07-04 17:01:42.831317', 'Product Added', 2, 'AC-I21-0704-0012'),
(84, '2021-07-04 17:03:07.755234', 'Product Added', 2, 'AC-I21-0704-0013'),
(85, '2021-07-04 17:17:54.085668', 'Transaction Added', 2, 'AC-I21-0704-0014'),
(86, '2021-07-05 12:29:57.882305', 'Product Added', 2, 'AC-I21-0705-0001'),
(87, '2021-07-06 14:42:41.000556', 'Transaction Added', 40, 'AC-I21-0706-0001'),
(88, '2021-07-06 15:05:00.387773', 'Transaction Added', 2, 'AC-I21-0706-0002'),
(89, '2021-07-07 03:19:19.135956', 'Transaction', 2, 'None'),
(90, '2021-07-07 03:37:15.538056', 'Product Added', 2, 'None'),
(91, '2021-07-07 03:44:17.376897', 'Inventory Added', 2, 'None'),
(92, '2021-07-07 03:49:23.489679', 'Supplier Added', 2, 'None'),
(93, '2021-07-07 03:58:17.776876', 'Transaction Added', 40, 'None'),
(94, '2021-07-09 18:00:58.933267', 'Inventory Added', 2, 'None'),
(95, '2021-07-09 18:04:27.978445', 'Inventory Added', 2, 'None'),
(96, '2021-07-09 18:08:05.382665', 'Transaction Added', 2, 'None'),
(97, '2021-07-11 06:40:44.359553', 'Transaction Added', 2, 'AC-I21-0711-0001'),
(98, '2021-07-11 06:44:10.704904', 'Transaction Added', 2, 'AC-I21-0711-0002'),
(99, '2021-07-11 06:45:42.335918', 'Inventory Added', 2, 'AC-I21-0711-0003'),
(100, '2021-07-11 06:46:48.808008', 'Inventory Added', 2, 'AC-I21-0711-0004'),
(101, '2021-07-11 06:47:13.865675', 'Transaction Added', 2, 'AC-I21-0711-0005'),
(102, '2021-07-11 06:50:22.845240', 'Inventory Added', 2, 'AC-I21-0711-0006'),
(103, '2021-07-11 06:50:35.445067', 'Transaction Added', 2, 'AC-I21-0711-0007'),
(104, '2021-07-11 08:13:46.365501', 'Transaction Added', 40, 'AC-I21-0711-0008'),
(105, '2021-07-11 08:24:39.127637', 'Transaction Added', 40, 'AC-I21-0711-0009'),
(106, '2021-07-11 08:25:18.648198', 'Transaction Added', 2, 'AC-I21-0711-0010'),
(107, '2021-07-11 12:43:36.701780', 'Product Added', 2, 'AC-I21-0711-0011'),
(108, '2021-07-11 13:05:26.662466', 'Product Added', 2, 'AC-I21-0711-0012'),
(109, '2021-07-11 13:05:54.556361', 'Product Added', 2, 'AC-I21-0711-0013'),
(110, '2021-07-11 13:07:34.576796', 'Product Added', 2, 'AC-I21-0711-0014'),
(111, '2021-07-12 04:57:46.094732', 'Transaction Added', 40, 'AC-I21-0712-0001'),
(112, '2021-07-12 13:49:46.950988', 'Transaction Added', 2, 'AC-I21-0712-0002'),
(113, '2021-07-13 04:15:53.814245', 'Transaction Added', 2, 'AC-I21-0713-0001'),
(114, '2021-07-13 16:21:59.336235', 'Transaction Added', 40, 'AC-I21-0713-0002'),
(115, '2021-07-16 14:28:00.811146', 'Transaction Added', 2, 'AC-I21-0716-0001'),
(116, '2021-07-16 15:02:45.203007', 'Transaction Added', 2, 'AC-I21-0716-0002'),
(117, '2021-07-16 15:05:00.537830', 'Transaction Added', 2, 'AC-I21-0716-0003'),
(118, '2021-07-16 15:06:52.732907', 'Transaction Added', 2, 'AC-I21-0716-0004'),
(119, '2021-07-16 15:19:10.444175', 'Transaction Added', 2, 'AC-I21-0716-0005'),
(120, '2021-07-16 15:22:59.927537', 'Transaction Added', 2, 'AC-I21-0716-0006'),
(121, '2021-07-17 11:12:46.047871', 'Transaction Added', 40, 'AC-I21-0717-0001'),
(122, '2021-07-17 11:23:24.981421', 'Transaction Added', 40, 'AC-I21-0717-0002'),
(123, '2021-07-17 17:19:30.255502', 'Transaction Added', 2, 'AC-I21-0717-0003'),
(124, '2021-07-17 18:06:05.928598', 'Transaction Added', 40, 'AC-I21-0717-0004'),
(125, '2021-07-17 18:34:21.437728', 'Transaction Added', 40, 'AC-I21-0717-0005'),
(126, '2021-07-17 18:42:10.619094', 'Transaction Added', 40, 'AC-I21-0717-0006'),
(127, '2021-07-17 19:34:49.402544', 'Transaction Added', 40, 'AC-I21-0717-0007'),
(128, '2021-07-17 20:01:20.740570', 'Transaction Added', 40, 'AC-I21-0717-0008'),
(129, '2021-07-17 20:15:00.882366', 'Transaction Added', 40, 'AC-I21-0717-0009'),
(130, '2021-07-17 20:22:27.414587', 'Transaction Added', 40, 'AC-I21-0717-0010'),
(131, '2021-07-19 05:01:12.816367', 'Transaction Added', 2, 'AC-I21-0719-0001'),
(132, '2021-07-24 13:40:02.699799', 'Product Added', 2, 'AC-I21-0724-0001');

-- --------------------------------------------------------

--
-- Table structure for table `articles_article`
--

CREATE TABLE `articles_article` (
  `id` int(11) NOT NULL,
  `title` varchar(120) NOT NULL,
  `content` longtext NOT NULL,
  `owner_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `attendance_log_attendance_log`
--

CREATE TABLE `attendance_log_attendance_log` (
  `id` bigint(20) NOT NULL,
  `login_at` datetime(6) DEFAULT NULL,
  `logout_at` datetime(6) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `attendance_log_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance_log_attendance_log`
--

INSERT INTO `attendance_log_attendance_log` (`id`, `login_at`, `logout_at`, `account_id`, `attendance_log_id`) VALUES
(248, '2021-07-19 04:58:01.723083', '2021-07-19 04:58:20.619778', 2, 'AT-I21-0719-0001'),
(249, '2021-07-19 04:59:35.508365', '2021-07-19 04:59:37.784961', 40, 'AT-I21-0719-0002'),
(250, '2021-07-19 04:59:41.000000', '2021-07-19 05:03:03.000000', 2, 'AT-I21-0719-0003'),
(251, '2021-07-19 05:02:00.862581', '2021-07-19 05:03:09.236168', 2, 'AT-I21-0719-0004'),
(252, '2021-07-19 05:07:58.521304', '2021-07-19 05:08:25.738613', 2, 'AT-I21-0719-0005'),
(253, '2021-07-19 05:08:34.663225', '2021-07-19 05:08:36.460130', 2, 'AT-I21-0719-0006'),
(254, '2021-07-19 15:54:14.920619', '2021-07-20 04:00:40.600539', 2, 'AT-I21-0719-0007'),
(255, '2021-07-20 04:11:32.278610', '2021-07-20 13:32:58.340394', 2, 'AT-I21-0720-0001'),
(256, '2021-07-20 13:33:51.253023', '2021-07-20 14:18:48.261732', 2, 'AT-I21-0720-0002'),
(257, '2021-07-21 01:55:47.130662', '2021-07-21 02:49:39.041373', 2, 'AT-I21-0721-0001'),
(258, '2021-07-21 02:53:18.683801', '2021-07-22 13:25:58.803257', 2, 'AT-I21-0721-0002'),
(259, '2021-07-22 13:26:02.270801', '2021-07-23 12:27:36.128496', 2, 'AT-I21-0722-0001'),
(260, '2021-07-23 12:27:53.830828', '2021-07-24 12:28:14.376885', 2, 'AT-I21-0723-0001'),
(261, '2021-07-24 12:28:19.771255', NULL, 2, 'AT-I21-0724-0001');

-- --------------------------------------------------------

--
-- Table structure for table `authtoken_token`
--

CREATE TABLE `authtoken_token` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authtoken_token`
--

INSERT INTO `authtoken_token` (`key`, `created`, `user_id`) VALUES
('13759c280cabc594f940e4adac37a5d43df5f9d1', '2021-03-03 05:00:41.853428', 35),
('7a90992662b34373120d702b8409cec5a3866ec2', '2021-03-03 15:13:01.279314', 1),
('a3ef13566ae7a3b4a0be19ca873d74613b620adc', '2021-03-04 13:12:46.703966', 36),
('b934f6da94d6e4f1abac6c754683b5f991a39685', '2021-03-03 05:00:01.239791', 34),
('bd7cd5b4108297bd0daf06894ccf98c7b087a7ac', '2021-03-03 07:22:09.787763', 2);

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add article', 7, 'add_article'),
(26, 'Can change article', 7, 'change_article'),
(27, 'Can delete article', 7, 'delete_article'),
(28, 'Can view article', 7, 'view_article'),
(29, 'Can add product', 8, 'add_product'),
(30, 'Can change product', 8, 'change_product'),
(31, 'Can delete product', 8, 'delete_product'),
(32, 'Can view product', 8, 'view_product'),
(33, 'Can add supplier', 9, 'add_supplier'),
(34, 'Can change supplier', 9, 'change_supplier'),
(35, 'Can delete supplier', 9, 'delete_supplier'),
(36, 'Can view supplier', 9, 'view_supplier'),
(37, 'Can add inventory', 10, 'add_inventory'),
(38, 'Can change inventory', 10, 'change_inventory'),
(39, 'Can delete inventory', 10, 'delete_inventory'),
(40, 'Can view inventory', 10, 'view_inventory'),
(41, 'Can add transaction', 11, 'add_transaction'),
(42, 'Can change transaction', 11, 'change_transaction'),
(43, 'Can delete transaction', 11, 'delete_transaction'),
(44, 'Can view transaction', 11, 'view_transaction'),
(45, 'Can add transaction_item', 12, 'add_transaction_item'),
(46, 'Can change transaction_item', 12, 'change_transaction_item'),
(47, 'Can delete transaction_item', 12, 'delete_transaction_item'),
(48, 'Can view transaction_item', 12, 'view_transaction_item'),
(49, 'Can add auth token', 13, 'add_authtoken'),
(50, 'Can change auth token', 13, 'change_authtoken'),
(51, 'Can delete auth token', 13, 'delete_authtoken'),
(52, 'Can view auth token', 13, 'view_authtoken'),
(53, 'Can add category', 14, 'add_category'),
(54, 'Can change category', 14, 'change_category'),
(55, 'Can delete category', 14, 'delete_category'),
(56, 'Can view category', 14, 'view_category'),
(57, 'Can add Token', 15, 'add_token'),
(58, 'Can change Token', 15, 'change_token'),
(59, 'Can delete Token', 15, 'delete_token'),
(60, 'Can view Token', 15, 'view_token'),
(61, 'Can add token', 16, 'add_tokenproxy'),
(62, 'Can change token', 16, 'change_tokenproxy'),
(63, 'Can delete token', 16, 'delete_tokenproxy'),
(64, 'Can view token', 16, 'view_tokenproxy'),
(65, 'Can add activity_ log', 17, 'add_activity_log'),
(66, 'Can change activity_ log', 17, 'change_activity_log'),
(67, 'Can delete activity_ log', 17, 'delete_activity_log'),
(68, 'Can view activity_ log', 17, 'view_activity_log'),
(69, 'Can add attendance_ log', 18, 'add_attendance_log'),
(70, 'Can change attendance_ log', 18, 'change_attendance_log'),
(71, 'Can delete attendance_ log', 18, 'delete_attendance_log'),
(72, 'Can view attendance_ log', 18, 'view_attendance_log'),
(73, 'Can add activity_ logs', 19, 'add_activity_logs'),
(74, 'Can change activity_ logs', 19, 'change_activity_logs'),
(75, 'Can delete activity_ logs', 19, 'delete_activity_logs'),
(76, 'Can view activity_ logs', 19, 'view_activity_logs'),
(77, 'Can add log_ activity', 20, 'add_log_activity'),
(78, 'Can change log_ activity', 20, 'change_log_activity'),
(79, 'Can delete log_ activity', 20, 'delete_log_activity'),
(80, 'Can view log_ activity', 20, 'view_log_activity');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'Chountaal', NULL, 0, 'Chountaal', 'Chountal', 'Lamera', 'ChountalLamera@gmail.com', 0, 1, '2020-12-21 14:11:00.000000'),
(2, 'pbkdf2_sha256$260000$BHHEl1lEx9lUCHRJRs2CyW$BG8uILwW+IshNfjK7HTBO5lIgaKQ7bgl+Qba6ryE+sg=', '2021-07-13 13:07:48.000000', 1, 'OwnerUser', 'Kevin Bryan', 'Buenaseda', 'kevinbryanbuenaseda@gmail.com', 1, 1, '2020-12-22 15:12:05.000000'),
(33, 'Mancio', NULL, 1, 'Cedrickdy', 'Cedrick', 'Mancio', 'CedrickMancio@gmail.com', 0, 1, '2021-03-03 04:57:30.000000'),
(34, 'TasmanianDevil', NULL, 1, 'TasmanianDevil', 'Tasmanian', 'Devil', 'TasmanianDevil@gmail.com', 0, 1, '2021-03-03 05:00:00.000000'),
(35, 'AstengClover', NULL, 0, 'AstengClover', 'Asteng', 'Clover', 'AstengClover@gmail.com', 0, 1, '2021-03-03 05:00:41.000000'),
(36, 'FoghornLeghorn', NULL, 0, 'FoghornLeghorn', 'Foghorn', 'Leghorn', 'FoghornLeghorn@gmail.com', 0, 1, '2021-03-04 13:12:46.000000'),
(37, 'MarvintheMartian', NULL, 1, 'MarvintheMartian', 'Marvin the', 'Martian', 'MarvintheMartian@gmail.com', 0, 1, '2021-03-05 17:25:41.000000'),
(38, 'BugsBunny', NULL, 1, 'BugsBunny', 'Bugs', 'Bunny', 'BugsBunny@gmail.com', 0, 1, '2021-06-23 14:51:01.000000'),
(40, 'pbkdf2_sha256$260000$y9z9Nf0UUqd2i9x2lRf3lT$+dWa3I6zKa1bPWhCiO5cEf50DaWxMBT8hXAlSw61fRI=', NULL, 0, 'EmployeeUser', 'Kevin Bryan', 'Buenaseda', 'erty@gmail.com', 0, 1, '2021-06-23 15:18:47.000000'),
(69, 'pbkdf2_sha256$260000$Sm8DIlTbQDpbu0xtBDZHi3$SvZvrK86C3WChxTGhNusPwLDYnF55WYkXA5koNVr+NE=', NULL, 0, 'JuanDelaCruz', 'Juan', 'DelaCruz', 'JuanDelaCruz@gmail.com', 0, 1, '2021-07-19 16:13:46.620325'),
(75, 'ChountalLamera', NULL, 0, 'ChountalLamera', 'Chountal', 'Lamera', 'ChountalLamera@gmail.com', 0, 1, '2021-07-20 13:26:33.436222'),
(76, 'CedrickMancio', NULL, 0, 'CedrickMancio', 'Cedrick', 'Mancio', 'CedrickMancio@gmail.com', 0, 1, '2021-07-20 13:34:20.134931'),
(79, 'BiegeNescaf', NULL, 1, 'BiegeNescaf', 'Biege', 'Nescaf', 'BiegeNescaf@gmail.com', 0, 1, '2021-07-21 02:01:42.265925'),
(80, 'TasmanianDevilV2', NULL, 1, 'TasmanianDevilV2', 'Tasmanian V2', 'Devil', 'TasmanianDevilV2@gmail.com', 0, 1, '2021-07-21 02:41:31.852985');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories_category`
--

CREATE TABLE `categories_category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories_category`
--

INSERT INTO `categories_category` (`id`, `name`, `category_id`) VALUES
(4, 'Engine Parts and Accessories', ''),
(5, 'Exhaust', ''),
(7, 'Fuel and Air', ''),
(8, 'Drive', ''),
(9, 'Brakes', ''),
(10, 'Covers', ''),
(15, 'Controls', ''),
(16, 'Lights and Electrical', ''),
(17, 'Body Parts', ''),
(18, 'Suspension', ''),
(19, 'Tires and Wheels', ''),
(20, 'Windscreens and Accessories', ''),
(21, 'Crash Protection', ''),
(22, 'Dash and Gauges', ''),
(23, 'Luggage', ''),
(24, 'Electronic Accessories', ''),
(25, 'Security', ''),
(36, 'Lights', 'None');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2020-12-22 15:18:29.441815', '4', 'Engine Parts and Accessories', 1, '[{\"added\": {}}]', 14, 2),
(2, '2020-12-22 15:18:50.286078', '2', 'Carburetor for Hensim 150cc 149cc', 2, '[{\"changed\": {\"fields\": [\"Category\", \"Supplier\", \"Description\"]}}]', 8, 2),
(3, '2020-12-22 15:18:57.131196', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Category\", \"Supplier\", \"Description\"]}}]', 8, 2),
(4, '2020-12-28 12:16:49.875960', '7', 'Lextek CP Full System Exhaust Kit V4', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(5, '2021-01-13 18:30:14.560313', '20', '20', 3, '', 11, 2),
(6, '2021-01-13 18:30:46.291836', '17', '17', 3, '', 11, 2),
(7, '2021-01-15 04:16:09.612803', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(8, '2021-01-15 04:20:31.232432', '15', 'Test 7', 1, '[{\"added\": {}}]', 8, 2),
(9, '2021-01-15 04:21:12.440756', '15', 'Test 7', 3, '', 8, 2),
(10, '2021-01-15 04:21:24.637242', '16', 'Test 7', 1, '[{\"added\": {}}]', 8, 2),
(11, '2021-01-15 04:25:58.218885', '2', 'Carburetor for Hensim 150cc 149cc', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(12, '2021-01-15 04:26:18.186089', '3', 'Yoshimura R-77 Full System Exhaust', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(13, '2021-01-15 04:26:29.034129', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(14, '2021-01-15 04:26:44.384215', '4', 'Lextek CP Full System Exhaust Kit', 2, '[{\"changed\": {\"fields\": [\"Image\", \"Description\"]}}]', 8, 2),
(15, '2021-01-15 04:26:55.244015', '5', 'Lextek CP Full System Exhaust Kit V2', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(16, '2021-01-15 04:27:08.204921', '6', 'Lextek CP Full System Exhaust Kit V3', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(17, '2021-01-15 04:27:19.930449', '7', 'Lextek CP Full System Exhaust Kit V4', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(18, '2021-01-15 04:27:29.214259', '9', 'Alpinestars 2021 Tech-10 Boots', 2, '[{\"changed\": {\"fields\": [\"Description\"]}}]', 8, 2),
(19, '2021-01-15 04:27:44.236534', '9', 'Alpinestars 2021 Tech-10 Boots', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(20, '2021-01-15 04:27:54.244944', '11', 'Sunstar 520 Steel Sprocket And Chain Kit', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(21, '2021-01-15 04:28:00.023830', '12', 'Test2', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(22, '2021-01-15 04:28:07.763933', '13', 'Test 511', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(23, '2021-01-15 04:28:13.998846', '14', 'Test 6', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(24, '2021-01-15 04:28:19.773497', '14', 'Test 6', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(25, '2021-01-15 04:28:26.523855', '14', 'Test 6', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(26, '2021-01-15 04:28:32.183248', '16', 'Test 7', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(27, '2021-01-15 04:30:08.829693', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(28, '2021-01-15 04:30:22.346348', '2', 'Carburetor for Hensim 150cc 149cc', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(29, '2021-01-15 04:31:31.171618', '4', 'Lextek CP Full System Exhaust Kit', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(30, '2021-01-15 04:31:53.905975', '7', 'Lextek CP Full System Exhaust Kit V4', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(31, '2021-01-15 04:32:10.907302', '9', 'Alpinestars 2021 Tech-10 Boots', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(32, '2021-01-15 04:33:04.599055', '16', 'Test 7', 3, '', 8, 2),
(33, '2021-01-15 04:33:04.602054', '14', 'Test 6', 3, '', 8, 2),
(34, '2021-01-15 04:33:04.611038', '13', 'Test 511', 3, '', 8, 2),
(35, '2021-01-15 04:33:04.613972', '12', 'Test2', 3, '', 8, 2),
(36, '2021-01-15 04:49:33.073308', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(37, '2021-01-15 04:49:54.932494', '2', 'Carburetor for Hensim 150cc 149cc', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(38, '2021-01-15 04:50:06.522111', '3', 'Yoshimura R-77 Full System Exhaust', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(39, '2021-01-15 04:50:22.689129', '4', 'Lextek CP Full System Exhaust Kit', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(40, '2021-01-15 04:50:39.963067', '5', 'Lextek CP Full System Exhaust Kit V2', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(41, '2021-01-15 04:50:52.603924', '6', 'Lextek CP Full System Exhaust Kit V3', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(42, '2021-01-15 04:51:00.580488', '7', 'Lextek CP Full System Exhaust Kit V4', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(43, '2021-01-15 04:51:06.913652', '8', 'Avon Tire 3D Ultra EVO Tire Combo', 2, '[{\"changed\": {\"fields\": [\"Image\", \"Description\"]}}]', 8, 2),
(44, '2021-01-15 04:51:12.572175', '9', 'Alpinestars 2021 Tech-10 Boots', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(45, '2021-01-15 04:51:18.963867', '10', 'Galfer Front Brake Line Kit', 2, '[{\"changed\": {\"fields\": [\"Image\", \"Description\"]}}]', 8, 2),
(46, '2021-01-15 04:51:34.809088', '11', 'Sunstar 520 Steel Sprocket And Chain Kit', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(47, '2021-01-15 04:52:56.538691', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(48, '2021-01-15 04:53:24.082850', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(49, '2021-01-15 04:53:55.287240', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(50, '2021-01-15 04:54:34.471733', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(51, '2021-01-15 04:55:47.597200', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(52, '2021-01-15 04:59:24.951806', '11', 'Sunstar 520 Steel Sprocket And Chain Kit', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(53, '2021-01-15 05:01:31.650146', '1', 'Ibex K774', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(54, '2021-01-15 05:01:38.385401', '2', 'Carburetor for Hensim 150cc 149cc', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(55, '2021-01-15 05:01:50.744108', '3', 'Yoshimura R-77 Full System Exhaust', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(56, '2021-01-15 05:02:14.698300', '4', 'Lextek CP Full System Exhaust Kit', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(57, '2021-01-15 05:02:22.037925', '5', 'Lextek CP Full System Exhaust Kit V2', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(58, '2021-01-15 05:02:27.268099', '6', 'Lextek CP Full System Exhaust Kit V3', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(59, '2021-01-15 05:02:32.164629', '7', 'Lextek CP Full System Exhaust Kit V4', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(60, '2021-01-15 05:02:37.470174', '8', 'Avon Tire 3D Ultra EVO Tire Combo', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(61, '2021-01-15 05:02:45.211591', '9', 'Alpinestars 2021 Tech-10 Boots', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(62, '2021-01-15 05:02:55.735267', '10', 'Galfer Front Brake Line Kit', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(63, '2021-01-15 05:03:02.154249', '11', 'Sunstar 520 Steel Sprocket And Chain Kit', 2, '[{\"changed\": {\"fields\": [\"Image\"]}}]', 8, 2),
(64, '2021-01-15 10:50:05.784800', '4', 'Lextek CP Full System Exhaust Kit', 2, '[{\"changed\": {\"fields\": [\"Stock\"]}}]', 8, 2),
(65, '2021-01-15 10:52:24.166130', '11', 'Sunstar 520 Steel Sprocket And Chain Kit', 2, '[{\"changed\": {\"fields\": [\"Stock\"]}}]', 8, 2),
(66, '2021-01-15 10:52:39.405652', '3', 'Yoshimura R-77 Full System Exhaust', 2, '[{\"changed\": {\"fields\": [\"Stock\"]}}]', 8, 2),
(67, '2021-01-17 06:41:56.102264', '7', 'Lextek CP Full System Exhaust Kit V4', 3, '', 8, 2),
(68, '2021-01-17 06:41:56.109451', '6', 'Lextek CP Full System Exhaust Kit V3', 3, '', 8, 2),
(69, '2021-01-17 06:41:56.111773', '5', 'Lextek CP Full System Exhaust Kit V2', 3, '', 8, 2),
(70, '2021-01-17 07:04:46.230924', '14', 'Belt', 3, '', 14, 2),
(71, '2021-01-17 07:05:15.213163', '13', 'Helmet', 3, '', 14, 2),
(72, '2021-01-17 07:05:15.217182', '12', 'Protection', 3, '', 14, 2),
(73, '2021-01-17 07:05:35.396807', '15', 'Controls', 1, '[{\"added\": {}}]', 14, 2),
(74, '2021-01-17 07:05:47.922878', '16', 'Lights and Electrical', 1, '[{\"added\": {}}]', 14, 2),
(75, '2021-01-17 07:05:55.407289', '17', 'Body Parts', 1, '[{\"added\": {}}]', 14, 2),
(76, '2021-01-17 07:06:03.988507', '18', 'Suspension', 1, '[{\"added\": {}}]', 14, 2),
(77, '2021-01-17 07:06:09.851939', '19', 'Tires and Wheels', 1, '[{\"added\": {}}]', 14, 2),
(78, '2021-01-17 07:06:16.973410', '20', 'Windscreens and Accessories', 1, '[{\"added\": {}}]', 14, 2),
(79, '2021-01-17 07:06:26.187802', '21', 'Crash Protection', 1, '[{\"added\": {}}]', 14, 2),
(80, '2021-01-17 07:06:35.436928', '22', 'Dash and Gauges', 1, '[{\"added\": {}}]', 14, 2),
(81, '2021-01-17 07:06:43.787625', '23', 'Luggage', 1, '[{\"added\": {}}]', 14, 2),
(82, '2021-01-17 07:06:55.923412', '24', 'Electronic Accessories', 1, '[{\"added\": {}}]', 14, 2),
(83, '2021-01-17 07:07:03.037269', '25', 'Security', 1, '[{\"added\": {}}]', 14, 2),
(84, '2021-01-17 07:14:43.994916', '3', 'Test 1 Test 1', 3, '', 9, 2),
(85, '2021-01-17 10:54:25.496019', '11', 'Tire and Wheels', 3, '', 14, 2),
(86, '2021-01-19 07:07:40.894942', '33', 'HONDA 11000-MFJ-D00 CRANKCASE SET', 3, '', 8, 2),
(87, '2021-01-19 07:07:56.109063', '26', 'OEM part', 3, '', 14, 2),
(88, '2021-01-20 16:01:36.592127', '32', 'qq', 3, '', 14, 2),
(89, '2021-01-20 16:01:36.596166', '31', 'qqq', 3, '', 14, 2),
(90, '2021-01-20 16:01:36.599346', '30', 'wewq', 3, '', 14, 2),
(91, '2021-01-20 16:01:36.602221', '29', 'Wew', 3, '', 14, 2),
(92, '2021-01-20 16:01:36.605140', '28', 'Cd', 3, '', 14, 2),
(93, '2021-01-20 16:01:36.608137', '27', 'CG', 3, '', 14, 2),
(94, '2021-01-20 16:11:57.949462', '33', 'Ford Motor', 3, '', 14, 2),
(95, '2021-01-20 16:16:01.813243', '34', 'Ford Motor', 3, '', 14, 2),
(96, '2021-01-20 16:16:14.649997', '10', 'TestUser', 3, '', 4, 2),
(97, '2021-01-20 16:16:14.652049', '11', 'TestUser1', 3, '', 4, 2),
(98, '2021-01-20 16:17:16.611706', '34', 'HONDA 11000-MFJ-D00 CRANKCASE SET', 3, '', 8, 2),
(99, '2021-01-20 16:17:25.887492', '27', 'Ford Moto', 3, '', 9, 2),
(100, '2021-01-20 16:17:25.890600', '26', 'Honda', 3, '', 9, 2),
(101, '2021-01-20 16:45:51.543646', '68', '68', 3, '', 12, 2),
(102, '2021-01-20 16:45:51.548181', '67', '67', 3, '', 12, 2),
(103, '2021-01-20 16:45:57.453560', '38', '38', 3, '', 11, 2),
(104, '2021-01-20 16:46:13.625786', '12', 'TestUser', 3, '', 4, 2),
(105, '2021-03-03 04:56:46.367930', '24', 'qaweaaratyhshhhha', 3, '', 4, 2),
(106, '2021-03-03 04:56:46.373188', '23', 'qaweaartyhshhhha', 3, '', 4, 2),
(107, '2021-03-03 04:56:46.376187', '22', 'qaweartyhshhhha', 3, '', 4, 2),
(108, '2021-03-03 04:56:46.378186', '26', 'qawedasaaratyhsahhhha', 3, '', 4, 2),
(109, '2021-03-03 04:56:46.381182', '25', 'qawedasaaratyhshhhha', 3, '', 4, 2),
(110, '2021-03-03 04:56:46.384183', '21', 'qweartyhshhhha', 3, '', 4, 2),
(111, '2021-03-03 04:56:46.387178', '15', 'qweqwerty', 3, '', 4, 2),
(112, '2021-03-03 04:56:46.389179', '16', 'qweqwerty123', 3, '', 4, 2),
(113, '2021-03-03 04:56:46.392177', '17', 'qweqwerty123123123', 3, '', 4, 2),
(114, '2021-03-03 04:56:46.394174', '18', 'qwertyhhhhh', 3, '', 4, 2),
(115, '2021-03-03 04:56:46.397174', '19', 'qwertyhhhhha', 3, '', 4, 2),
(116, '2021-03-03 04:56:46.399173', '20', 'qwertyhshhhha', 3, '', 4, 2),
(117, '2021-03-03 04:56:46.402169', '14', 'qwertyui', 3, '', 4, 2),
(118, '2021-03-03 04:56:46.404168', '31', 'zaAsax1cv', 3, '', 4, 2),
(119, '2021-03-03 04:56:46.411167', '30', 'zaAsaxcv', 3, '', 4, 2),
(120, '2021-03-03 04:56:46.414165', '32', 'zaAszax1cv', 3, '', 4, 2),
(121, '2021-03-03 04:56:46.417161', '28', 'zAaxcv', 3, '', 4, 2),
(122, '2021-03-03 04:56:46.419160', '29', 'zAsaxcv', 3, '', 4, 2),
(123, '2021-03-03 04:56:46.422158', '27', 'zAxcv', 3, '', 4, 2),
(124, '2021-03-03 04:57:30.820107', '33', 'Admin3', 1, '[{\"added\": {}}]', 4, 2),
(125, '2021-03-03 07:20:53.648887', '33', 'Admin3', 2, '[{\"changed\": {\"fields\": [\"Email address\"]}}]', 4, 2),
(126, '2021-03-05 17:34:48.494100', 'eccb2f9e4a3bb8e1973c2aa9ac128403c7dd6cea9693923666d781f7701482e926d2cd85770c234103e2100f049acb15990cfe18dbde1bcf637e29a296316b3f', 'eccb2f9e4a3bb8e1973c2aa9ac128403c7dd6cea9693923666d781f7701482e926d2cd85770c234103e2100f049acb15990cfe18dbde1bcf637e29a296316b3f : buenaseda', 3, '', 13, 2),
(127, '2021-03-05 17:34:48.498096', 'd7baeee669ea2f8e68e980de6f9248e3618872ebc0a8d788c14bfa610f9f9caac085e2d70e9b412b408cf5b7dd36bbedded1b131255bf39975e7a04620becc83', 'd7baeee669ea2f8e68e980de6f9248e3618872ebc0a8d788c14bfa610f9f9caac085e2d70e9b412b408cf5b7dd36bbedded1b131255bf39975e7a04620becc83 : buenaseda', 3, '', 13, 2),
(128, '2021-03-05 17:34:48.502093', 'b87952f4f8ef24989e97be2c48f917c240f1ba45186b571f941d10662a860ce1f3979872724ab6342bf9f36e85391f07796b8706ef0fa8969be6988606ef6b4e', 'b87952f4f8ef24989e97be2c48f917c240f1ba45186b571f941d10662a860ce1f3979872724ab6342bf9f36e85391f07796b8706ef0fa8969be6988606ef6b4e : admin', 3, '', 13, 2),
(129, '2021-03-05 17:34:48.505664', 'b845508581724c9b7773a79d3eefb16afc02abecf1ff5bc842241ec9cd7f5ab5151e7e2b2f99e8b2ed3df2f0fa4fbcb8f731bc950b0b7d50ebcf966d5c034f3a', 'b845508581724c9b7773a79d3eefb16afc02abecf1ff5bc842241ec9cd7f5ab5151e7e2b2f99e8b2ed3df2f0fa4fbcb8f731bc950b0b7d50ebcf966d5c034f3a : buenaseda', 3, '', 13, 2),
(130, '2021-03-05 17:34:48.508341', 'b6820d0403e49015e1aff883cd1fe3ce6eaf6ad0b4fa4c25357855ba8b96c4c4ed550d8d655c6ff723f939e8903cdccf6ecd9a0f738379cfc19550a49b607206', 'b6820d0403e49015e1aff883cd1fe3ce6eaf6ad0b4fa4c25357855ba8b96c4c4ed550d8d655c6ff723f939e8903cdccf6ecd9a0f738379cfc19550a49b607206 : buenaseda', 3, '', 13, 2),
(131, '2021-03-05 17:34:48.510797', 'b2fbc63e356d88021b2c1ba14d39207dac8eb04bf16c3c886e886f555d15ecf7a554fffb09f0c940076bb24ffe42ed60a3a3abc503a57b954af2edbe935170c4', 'b2fbc63e356d88021b2c1ba14d39207dac8eb04bf16c3c886e886f555d15ecf7a554fffb09f0c940076bb24ffe42ed60a3a3abc503a57b954af2edbe935170c4 : buenaseda', 3, '', 13, 2),
(132, '2021-03-05 17:34:48.513603', 'afbe88c9404819a4056ef95778013fdeff1cdb8e2b377171434946490e3e7e02510a6328195bdc2663b8ebac33467cd4cf2963869bf341ec9ab1c1dae4c1408c', 'afbe88c9404819a4056ef95778013fdeff1cdb8e2b377171434946490e3e7e02510a6328195bdc2663b8ebac33467cd4cf2963869bf341ec9ab1c1dae4c1408c : TestUser', 3, '', 13, 2),
(133, '2021-03-05 17:34:48.515902', '9ab82d0c4478173954f6f03e0420d5d70e233be9e6ac8e73ed172c364ba167fd293c33f76a56b73da1f8a47ab4f3c02f00912d6e674ab29f562959fc0332441f', '9ab82d0c4478173954f6f03e0420d5d70e233be9e6ac8e73ed172c364ba167fd293c33f76a56b73da1f8a47ab4f3c02f00912d6e674ab29f562959fc0332441f : admin', 3, '', 13, 2),
(134, '2021-03-05 17:34:48.517908', '8e8ba2b449cb496a39f5f8a3c0944ea3259be98219a6e3284036ea964fde3fe5b228bcbc4425e5a7ea5772cbf8181205db107674ffaa4cd54180a8bfe040f139', '8e8ba2b449cb496a39f5f8a3c0944ea3259be98219a6e3284036ea964fde3fe5b228bcbc4425e5a7ea5772cbf8181205db107674ffaa4cd54180a8bfe040f139 : admin', 3, '', 13, 2),
(135, '2021-03-05 17:34:48.521600', '868d8e1f0e42d04d7ce8e2cce5075aac5c9081f5450eba79e1e692c30a1e482a7e32cbe4d9406921e064724a6c560db36f43396a05a4e1ce95e731322482de37', '868d8e1f0e42d04d7ce8e2cce5075aac5c9081f5450eba79e1e692c30a1e482a7e32cbe4d9406921e064724a6c560db36f43396a05a4e1ce95e731322482de37 : buenaseda', 3, '', 13, 2),
(136, '2021-03-05 17:34:48.524370', '69acf712159aa151820f624a43dcc31aaaf11306890fa558fea4c97229fcae7110c11f7e37b4092960458ee45e7c3e9ffff915ea0732520fed065c654337dbf8', '69acf712159aa151820f624a43dcc31aaaf11306890fa558fea4c97229fcae7110c11f7e37b4092960458ee45e7c3e9ffff915ea0732520fed065c654337dbf8 : admin', 3, '', 13, 2),
(137, '2021-03-05 17:34:48.526315', '4298b5cdc63b3cc0176e2d9053b157c02f8aaeb74d481a25fe7621a851acacbc1c872e9c2cefcbae2b0e5fee926036c376b58199eee5a00702a1cbbe4b04dd6b', '4298b5cdc63b3cc0176e2d9053b157c02f8aaeb74d481a25fe7621a851acacbc1c872e9c2cefcbae2b0e5fee926036c376b58199eee5a00702a1cbbe4b04dd6b : buenaseda', 3, '', 13, 2),
(138, '2021-03-05 17:34:48.528322', '3afbf99d3671b3526c60f04d005ff1326a231aa701c514525d5d29d9d590de7e9ec2caf913582dc62a8caa9b61b509590c0928b71e296090dff8ec4dcec9b4eb', '3afbf99d3671b3526c60f04d005ff1326a231aa701c514525d5d29d9d590de7e9ec2caf913582dc62a8caa9b61b509590c0928b71e296090dff8ec4dcec9b4eb : admon', 3, '', 13, 2),
(139, '2021-03-05 17:34:48.531081', '011a0ecb48711c20316c59c010978f6dfd9620ba921650a14b0c1630fe6b118bf5d93609d6553191418e885bd9f053a78666605d1dcc643307df86b85d280ce2', '011a0ecb48711c20316c59c010978f6dfd9620ba921650a14b0c1630fe6b118bf5d93609d6553191418e885bd9f053a78666605d1dcc643307df86b85d280ce2 : admin', 3, '', 13, 2),
(140, '2021-04-10 16:47:37.603280', '107', '107', 2, '[{\"changed\": {\"fields\": [\"Transaction\"]}}]', 12, 2),
(141, '2021-04-10 16:51:44.768903', '53', '53', 2, '[{\"changed\": {\"fields\": [\"Quantity\"]}}]', 11, 2),
(142, '2021-04-10 16:51:52.918234', '56', '56', 2, '[{\"changed\": {\"fields\": [\"Change\"]}}]', 11, 2),
(143, '2021-04-10 16:52:41.364638', '56', '56', 2, '[{\"changed\": {\"fields\": [\"Change\"]}}]', 11, 2),
(144, '2021-04-10 16:52:47.584514', '50', '50', 2, '[{\"changed\": {\"fields\": [\"Change\"]}}]', 11, 2),
(145, '2021-04-10 16:53:02.260160', '55', '55', 2, '[{\"changed\": {\"fields\": [\"Change\"]}}]', 11, 2),
(146, '2021-04-10 16:53:06.852119', '54', '54', 2, '[{\"changed\": {\"fields\": [\"Change\"]}}]', 11, 2),
(147, '2021-04-10 16:58:32.978756', '56', '56', 2, '[{\"changed\": {\"fields\": [\"Change\"]}}]', 11, 2),
(148, '2021-04-11 03:40:45.453620', '58', '58', 1, '[{\"added\": {}}]', 11, 2),
(149, '2021-04-14 16:18:53.784688', '21', 'EBC SRK Complete', 2, '[{\"changed\": {\"fields\": [\"Name\"]}}]', 8, 2),
(150, '2021-06-15 15:12:57.127592', '95', '95', 1, '[{\"added\": {}}]', 11, 2),
(151, '2021-06-23 03:59:37.171946', '1', '1', 1, '[{\"added\": {}}]', 17, 2),
(152, '2021-06-23 04:00:30.103897', '2', '2', 1, '[{\"added\": {}}]', 17, 2),
(153, '2021-06-23 15:00:28.787139', '55ccbd717121bfd4ffa40bcf369cf61e77a686f2bbd9ea9674772b2eea635c56a3affec7f03094ad876a7b2de2b262f4f75213979468d596ec0ba5c5d31bc53c', '55ccbd717121bfd4ffa40bcf369cf61e77a686f2bbd9ea9674772b2eea635c56a3affec7f03094ad876a7b2de2b262f4f75213979468d596ec0ba5c5d31bc53c : admin7', 3, '', 13, 2),
(154, '2021-06-23 15:00:28.793134', '3db2f8ea7488968ea9874c89b9636d3e651ba247aef91c356d8ca3d8cb7197f8baadda864bb16dc2610c12015d56c2607a2c8f697028278ddb4931a1e6fc145a', '3db2f8ea7488968ea9874c89b9636d3e651ba247aef91c356d8ca3d8cb7197f8baadda864bb16dc2610c12015d56c2607a2c8f697028278ddb4931a1e6fc145a : Erty', 3, '', 13, 2),
(155, '2021-06-23 15:07:55.119168', 'f9dadc3c4d00be7817ef74ac2a62d45ae8246703a919220c261f916db2814bae380a418d33339b25bcd52e541b2a88709e9d215e47b81258df580ca9feb49343', 'f9dadc3c4d00be7817ef74ac2a62d45ae8246703a919220c261f916db2814bae380a418d33339b25bcd52e541b2a88709e9d215e47b81258df580ca9feb49343 : Ertyui', 3, '', 13, 2),
(156, '2021-06-23 15:08:09.148053', '39', 'Ertyui', 3, '', 4, 2),
(157, '2021-06-23 16:35:52.021789', '3', '3', 3, '', 17, 2),
(158, '2021-06-23 16:35:52.025785', '2', '2', 3, '', 17, 2),
(159, '2021-06-23 16:35:52.029783', '1', '1', 3, '', 17, 2),
(160, '2021-06-24 03:55:43.365816', '6', '6', 3, '', 17, 2),
(161, '2021-06-24 03:55:43.373180', '5', '5', 3, '', 17, 2),
(162, '2021-06-24 03:55:43.379810', '4', '4', 3, '', 17, 2),
(163, '2021-06-24 03:55:51.276787', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65 : buenaseda', 3, '', 13, 2),
(164, '2021-06-24 03:55:51.280866', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000 : buenaseda', 3, '', 13, 2),
(165, '2021-06-24 03:55:51.283800', '86840133d24c0e94c5acbdb03bdc874d1d239e5447926dd3d5835f046dea4c0346caebdf46caf538a5f1760abfe1e0795966a0625f7d859ad17b8fd0c0821f46', '86840133d24c0e94c5acbdb03bdc874d1d239e5447926dd3d5835f046dea4c0346caebdf46caf538a5f1760abfe1e0795966a0625f7d859ad17b8fd0c0821f46 : buenaseda', 3, '', 13, 2),
(166, '2021-06-24 03:55:51.286907', '5adb24bea5f11c1802b6b418da72592dd7dc7f395604aca6944e791d381cdfe9dc6f7ad28ba3cd81b9e4447f50f2883902222aa18e0500ed41355186cb0332f3', '5adb24bea5f11c1802b6b418da72592dd7dc7f395604aca6944e791d381cdfe9dc6f7ad28ba3cd81b9e4447f50f2883902222aa18e0500ed41355186cb0332f3 : buenaseda', 3, '', 13, 2),
(167, '2021-06-24 03:55:51.289596', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9 : buenaseda', 3, '', 13, 2),
(168, '2021-06-24 03:56:54.093386', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65 : buenaseda', 3, '', 13, 2),
(169, '2021-06-24 03:56:54.100382', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000 : buenaseda', 3, '', 13, 2),
(170, '2021-06-24 03:56:54.107379', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9 : buenaseda', 3, '', 13, 2),
(171, '2021-06-24 03:57:06.156578', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65 : buenaseda', 3, '', 13, 2),
(172, '2021-06-24 03:57:06.161575', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000 : buenaseda', 3, '', 13, 2),
(173, '2021-06-24 03:57:33.113344', '86840133d24c0e94c5acbdb03bdc874d1d239e5447926dd3d5835f046dea4c0346caebdf46caf538a5f1760abfe1e0795966a0625f7d859ad17b8fd0c0821f46', '86840133d24c0e94c5acbdb03bdc874d1d239e5447926dd3d5835f046dea4c0346caebdf46caf538a5f1760abfe1e0795966a0625f7d859ad17b8fd0c0821f46 : buenaseda', 3, '', 13, 2),
(174, '2021-06-24 03:57:33.127328', '5adb24bea5f11c1802b6b418da72592dd7dc7f395604aca6944e791d381cdfe9dc6f7ad28ba3cd81b9e4447f50f2883902222aa18e0500ed41355186cb0332f3', '5adb24bea5f11c1802b6b418da72592dd7dc7f395604aca6944e791d381cdfe9dc6f7ad28ba3cd81b9e4447f50f2883902222aa18e0500ed41355186cb0332f3 : buenaseda', 3, '', 13, 2),
(175, '2021-06-24 03:57:33.133324', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9 : buenaseda', 3, '', 13, 2),
(176, '2021-06-24 03:58:48.262306', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65 : buenaseda', 3, '', 13, 2),
(177, '2021-06-24 03:58:48.271299', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000 : buenaseda', 3, '', 13, 2),
(178, '2021-06-24 03:58:48.277298', '86840133d24c0e94c5acbdb03bdc874d1d239e5447926dd3d5835f046dea4c0346caebdf46caf538a5f1760abfe1e0795966a0625f7d859ad17b8fd0c0821f46', '86840133d24c0e94c5acbdb03bdc874d1d239e5447926dd3d5835f046dea4c0346caebdf46caf538a5f1760abfe1e0795966a0625f7d859ad17b8fd0c0821f46 : buenaseda', 3, '', 13, 2),
(179, '2021-06-24 03:58:48.286288', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9 : buenaseda', 3, '', 13, 2),
(180, '2021-06-24 03:59:33.901673', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65', 'cffb6a7800b827a48b968c2df843ddf235ff79236bfbc207a7ad70e7a63a4d2243a0e25b351493cf11dc0bcf07d5bf2d4081ebab2aedd1fddd8756d0a91f0b65 : buenaseda', 3, '', 13, 2),
(181, '2021-06-24 03:59:33.906674', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000', '98ab988fdc67f723ac5949a73c6585c20466152dd56d3c3d25a70dded085bf75118cb8936611e301fc705f45c0c9c10c255f01978a76fd82d827663e79f9e000 : buenaseda', 3, '', 13, 2),
(182, '2021-06-24 03:59:33.909668', '86840133d24c0e94c5acbdb03bdc874d1d239e5447926dd3d5835f046dea4c0346caebdf46caf538a5f1760abfe1e0795966a0625f7d859ad17b8fd0c0821f46', '86840133d24c0e94c5acbdb03bdc874d1d239e5447926dd3d5835f046dea4c0346caebdf46caf538a5f1760abfe1e0795966a0625f7d859ad17b8fd0c0821f46 : buenaseda', 3, '', 13, 2),
(183, '2021-06-24 03:59:33.912666', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9', '59021819caa08e04e1fe368f4ecd59bbc3fdca1ca6716eeb53b797874899a295a1c2bf1a9e90da55963c9b747b29cee0dfb253099622429b110b9b7baeef4ab9 : buenaseda', 3, '', 13, 2),
(184, '2021-06-24 04:01:27.203055', '7', '7', 3, '', 17, 2),
(185, '2021-06-24 04:01:37.326311', 'b2ca4bcd9971cb089f370cbcce91a8712c1cd4d7062700ac45585bf800bde81bc1880cd58315ccf6e3b0a73c51bd7eae71764ca6a5be73b5c237c4c2022e0610', 'b2ca4bcd9971cb089f370cbcce91a8712c1cd4d7062700ac45585bf800bde81bc1880cd58315ccf6e3b0a73c51bd7eae71764ca6a5be73b5c237c4c2022e0610 : buenaseda', 3, '', 13, 2),
(186, '2021-06-24 04:01:51.348876', 'b2ca4bcd9971cb089f370cbcce91a8712c1cd4d7062700ac45585bf800bde81bc1880cd58315ccf6e3b0a73c51bd7eae71764ca6a5be73b5c237c4c2022e0610', 'b2ca4bcd9971cb089f370cbcce91a8712c1cd4d7062700ac45585bf800bde81bc1880cd58315ccf6e3b0a73c51bd7eae71764ca6a5be73b5c237c4c2022e0610 : buenaseda', 3, '', 13, 2),
(187, '2021-06-24 07:28:32.584968', '637d6233d834b0ccb3b7451dcd65eaac5dbc429fcb447baece79ecf5be14a0b75347a3846cc11251f7eb0f61093e0f8fc6e2819e7708a979ef06afb85c2d4b79', '637d6233d834b0ccb3b7451dcd65eaac5dbc429fcb447baece79ecf5be14a0b75347a3846cc11251f7eb0f61093e0f8fc6e2819e7708a979ef06afb85c2d4b79 : Ertyui', 3, '', 13, 2),
(188, '2021-06-24 15:11:22.491324', '2', '2', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(189, '2021-06-25 05:10:38.976446', '10', '10', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(190, '2021-06-25 05:13:38.934742', 'cba44d10eaf714503c95619f7f689065e74718e82781a8837009d805fa15956317af5d56a92c244c0228ff033910e5a1503339dd9b2d85b35b7f6588847dce16', 'cba44d10eaf714503c95619f7f689065e74718e82781a8837009d805fa15956317af5d56a92c244c0228ff033910e5a1503339dd9b2d85b35b7f6588847dce16 : Ertyui', 3, '', 13, 2),
(191, '2021-06-25 05:13:38.942737', 'a156efbdf62a86144bbe98644108590c05967aebc96e82d580383c7e60eb95bc4c720f6660fe8cc20c2a7b0461580add1d2c23187b740a7c34ba89f7def0ba76', 'a156efbdf62a86144bbe98644108590c05967aebc96e82d580383c7e60eb95bc4c720f6660fe8cc20c2a7b0461580add1d2c23187b740a7c34ba89f7def0ba76 : Ertyui', 3, '', 13, 2),
(192, '2021-06-25 05:29:37.446762', '110', '110', 2, '[{\"changed\": {\"fields\": [\"Creator\"]}}]', 11, 2),
(193, '2021-06-25 05:29:43.300135', '109', '109', 2, '[{\"changed\": {\"fields\": [\"Creator\"]}}]', 11, 2),
(194, '2021-06-26 03:09:48.286885', '11', '11', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(195, '2021-06-26 13:06:18.730621', '12', '12', 2, '[{\"changed\": {\"fields\": [\"Attendance log id\", \"Logout at\"]}}]', 18, 2),
(196, '2021-06-26 14:58:37.941035', '112', '112', 2, '[{\"changed\": {\"fields\": [\"Transaction id\"]}}]', 11, 2),
(197, '2021-06-26 14:58:44.204145', '111', '111', 2, '[{\"changed\": {\"fields\": [\"Transaction id\"]}}]', 11, 2),
(198, '2021-06-26 15:03:02.698541', '112', '112', 2, '[{\"changed\": {\"fields\": [\"Transaction id\"]}}]', 11, 2),
(199, '2021-06-26 15:03:08.113178', '111', '111', 2, '[{\"changed\": {\"fields\": [\"Transaction id\"]}}]', 11, 2),
(200, '2021-06-27 13:41:11.331364', '14', '14', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(201, '2021-06-28 02:45:09.778102', 'e5768ac11c8a14fbe346b6ed2804572ed51b89149ad28d9984dcd2edefe9a5379336ee1ffa35a8b40e83eadb6ff91aed241099e2f54ae5f48301d0107412b065', 'e5768ac11c8a14fbe346b6ed2804572ed51b89149ad28d9984dcd2edefe9a5379336ee1ffa35a8b40e83eadb6ff91aed241099e2f54ae5f48301d0107412b065 : buenaseda', 3, '', 13, 2),
(202, '2021-06-28 02:45:09.783097', 'e45af082cd3501cb4c26f017e21e55588f8f51a3cf4bac323b40608309430cce9ae13ad992440c387ddfaed11b8dca0c908dfd32ed938dff41d80b9fd90e2db3', 'e45af082cd3501cb4c26f017e21e55588f8f51a3cf4bac323b40608309430cce9ae13ad992440c387ddfaed11b8dca0c908dfd32ed938dff41d80b9fd90e2db3 : Ertyui', 3, '', 13, 2),
(203, '2021-06-28 02:45:09.786095', 'b74a13e438b952c0994b9c3f814d685ae990b4cf91aa814d960a11e9e3c7534112df2c5887d65111ab216bc33bbf93b5ec4dd7f3dd7e963ea0e3089f5f0d95fc', 'b74a13e438b952c0994b9c3f814d685ae990b4cf91aa814d960a11e9e3c7534112df2c5887d65111ab216bc33bbf93b5ec4dd7f3dd7e963ea0e3089f5f0d95fc : Ertyui', 3, '', 13, 2),
(204, '2021-06-28 02:45:45.086957', 'e5768ac11c8a14fbe346b6ed2804572ed51b89149ad28d9984dcd2edefe9a5379336ee1ffa35a8b40e83eadb6ff91aed241099e2f54ae5f48301d0107412b065', 'e5768ac11c8a14fbe346b6ed2804572ed51b89149ad28d9984dcd2edefe9a5379336ee1ffa35a8b40e83eadb6ff91aed241099e2f54ae5f48301d0107412b065 : buenaseda', 3, '', 13, 2),
(205, '2021-06-28 02:45:45.090955', 'e45af082cd3501cb4c26f017e21e55588f8f51a3cf4bac323b40608309430cce9ae13ad992440c387ddfaed11b8dca0c908dfd32ed938dff41d80b9fd90e2db3', 'e45af082cd3501cb4c26f017e21e55588f8f51a3cf4bac323b40608309430cce9ae13ad992440c387ddfaed11b8dca0c908dfd32ed938dff41d80b9fd90e2db3 : Ertyui', 3, '', 13, 2),
(206, '2021-06-28 02:45:45.094951', 'b74a13e438b952c0994b9c3f814d685ae990b4cf91aa814d960a11e9e3c7534112df2c5887d65111ab216bc33bbf93b5ec4dd7f3dd7e963ea0e3089f5f0d95fc', 'b74a13e438b952c0994b9c3f814d685ae990b4cf91aa814d960a11e9e3c7534112df2c5887d65111ab216bc33bbf93b5ec4dd7f3dd7e963ea0e3089f5f0d95fc : Ertyui', 3, '', 13, 2),
(207, '2021-06-28 13:24:02.803662', '20', '20', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(208, '2021-06-28 16:32:18.671021', '21', '21', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(209, '2021-06-28 17:02:32.350359', '22', '22', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(210, '2021-06-29 03:39:43.806046', 'f763b880eaab127eeee6742e56f4ff8286d4945ed82e1dcd34232b88aa67b6164d9ff32309c91690d45ee93cbcc96f8242140ca214cceecbd0fca2f3483bf766', 'f763b880eaab127eeee6742e56f4ff8286d4945ed82e1dcd34232b88aa67b6164d9ff32309c91690d45ee93cbcc96f8242140ca214cceecbd0fca2f3483bf766 : Ertyui', 3, '', 13, 2),
(211, '2021-06-29 03:39:43.821038', 'd1f36f3ac8cb2e6c944c2a9f60bd85b1437d53d42759e7778f89676f7c98009d149a5ec217cd03c192b7c08ce7c26e923360de97b09f2005f95861cba1f511a5', 'd1f36f3ac8cb2e6c944c2a9f60bd85b1437d53d42759e7778f89676f7c98009d149a5ec217cd03c192b7c08ce7c26e923360de97b09f2005f95861cba1f511a5 : Ertyui', 3, '', 13, 2),
(212, '2021-06-29 03:39:43.824034', '1253c9c59b93e520c33a6dae12fdddce562e8f225d21fd8e4741284360ae30744ba9633ee9905be2c47bf8fa4f7f503efb3e1cb392779408604767f78c9998d4', '1253c9c59b93e520c33a6dae12fdddce562e8f225d21fd8e4741284360ae30744ba9633ee9905be2c47bf8fa4f7f503efb3e1cb392779408604767f78c9998d4 : Ertyui', 3, '', 13, 2),
(213, '2021-06-29 03:40:29.740982', 'f763b880eaab127eeee6742e56f4ff8286d4945ed82e1dcd34232b88aa67b6164d9ff32309c91690d45ee93cbcc96f8242140ca214cceecbd0fca2f3483bf766', 'f763b880eaab127eeee6742e56f4ff8286d4945ed82e1dcd34232b88aa67b6164d9ff32309c91690d45ee93cbcc96f8242140ca214cceecbd0fca2f3483bf766 : Ertyui', 3, '', 13, 2),
(214, '2021-06-29 03:40:29.744980', '1253c9c59b93e520c33a6dae12fdddce562e8f225d21fd8e4741284360ae30744ba9633ee9905be2c47bf8fa4f7f503efb3e1cb392779408604767f78c9998d4', '1253c9c59b93e520c33a6dae12fdddce562e8f225d21fd8e4741284360ae30744ba9633ee9905be2c47bf8fa4f7f503efb3e1cb392779408604767f78c9998d4 : Ertyui', 3, '', 13, 2),
(215, '2021-06-29 03:40:53.414689', 'f763b880eaab127eeee6742e56f4ff8286d4945ed82e1dcd34232b88aa67b6164d9ff32309c91690d45ee93cbcc96f8242140ca214cceecbd0fca2f3483bf766', 'f763b880eaab127eeee6742e56f4ff8286d4945ed82e1dcd34232b88aa67b6164d9ff32309c91690d45ee93cbcc96f8242140ca214cceecbd0fca2f3483bf766 : Ertyui', 3, '', 13, 2),
(216, '2021-06-29 03:40:53.419687', '1253c9c59b93e520c33a6dae12fdddce562e8f225d21fd8e4741284360ae30744ba9633ee9905be2c47bf8fa4f7f503efb3e1cb392779408604767f78c9998d4', '1253c9c59b93e520c33a6dae12fdddce562e8f225d21fd8e4741284360ae30744ba9633ee9905be2c47bf8fa4f7f503efb3e1cb392779408604767f78c9998d4 : Ertyui', 3, '', 13, 2),
(217, '2021-06-29 03:41:04.472406', '0949a69afe20451fb3dc807b25039a67a57dcb6731feb8c8d7c9d40885c6988b3cbcd815e123ae3f0c319450e2742501a39a707abbe29ee86bb88afc0b481b8d', '0949a69afe20451fb3dc807b25039a67a57dcb6731feb8c8d7c9d40885c6988b3cbcd815e123ae3f0c319450e2742501a39a707abbe29ee86bb88afc0b481b8d : Ertyui', 3, '', 13, 2),
(218, '2021-06-29 07:32:10.126626', 'd1f36f3ac8cb2e6c944c2a9f60bd85b1437d53d42759e7778f89676f7c98009d149a5ec217cd03c192b7c08ce7c26e923360de97b09f2005f95861cba1f511a5', 'd1f36f3ac8cb2e6c944c2a9f60bd85b1437d53d42759e7778f89676f7c98009d149a5ec217cd03c192b7c08ce7c26e923360de97b09f2005f95861cba1f511a5 : Ertyui', 3, '', 13, 2),
(219, '2021-06-29 07:32:10.140633', '083bbb5b7eb360b37f61ac514969a66cc5f246cc30d3c9110da9ab564f631e00f0a9a958537277d09263520a083968a36bc35f43b3a90f0674b41f651189f77d', '083bbb5b7eb360b37f61ac514969a66cc5f246cc30d3c9110da9ab564f631e00f0a9a958537277d09263520a083968a36bc35f43b3a90f0674b41f651189f77d : Ertyui', 3, '', 13, 2),
(220, '2021-06-29 07:47:34.288303', 'f4700a5edcdaff5098a3d271d1879c153e4f99c92aace45105853586894d0fb9599818e0aa51b088ae8d8aed444d613d4ba24ecd17da27a9c2445fea77122101', 'f4700a5edcdaff5098a3d271d1879c153e4f99c92aace45105853586894d0fb9599818e0aa51b088ae8d8aed444d613d4ba24ecd17da27a9c2445fea77122101 : Ertyui', 3, '', 13, 2),
(221, '2021-06-29 07:47:40.845874', '25', '25', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(222, '2021-06-29 07:55:39.239613', '11', '11', 3, '', 18, 2),
(223, '2021-06-29 07:55:39.244610', '10', '10', 3, '', 18, 2),
(224, '2021-06-29 07:55:39.247606', '9', '9', 3, '', 18, 2),
(225, '2021-06-29 07:55:39.252604', '8', '8', 3, '', 18, 2),
(226, '2021-06-29 07:55:39.255600', '7', '7', 3, '', 18, 2),
(227, '2021-06-29 07:55:39.258599', '6', '6', 3, '', 18, 2),
(228, '2021-06-29 07:55:39.261597', '5', '5', 3, '', 18, 2),
(229, '2021-06-29 07:55:39.265595', '4', '4', 3, '', 18, 2),
(230, '2021-06-29 07:55:39.269593', '3', '3', 3, '', 18, 2),
(231, '2021-06-29 07:55:39.272591', '2', '2', 3, '', 18, 2),
(232, '2021-06-29 07:55:39.275591', '1', '1', 3, '', 18, 2),
(233, '2021-06-29 07:56:08.902369', '23', '23', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(234, '2021-06-29 07:56:13.112335', '24', '24', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(235, '2021-06-30 02:50:48.270640', '1f6164b4ecfcf20406833b828ba5dbb99281fd44eda2f686ef5f7d9975c419af966adddbe073202fc00e97838d5c7d01a3dc5bba9ecfabc25737d03e6fd24e59', '1f6164b4ecfcf20406833b828ba5dbb99281fd44eda2f686ef5f7d9975c419af966adddbe073202fc00e97838d5c7d01a3dc5bba9ecfabc25737d03e6fd24e59 : Ertyui', 3, '', 13, 2),
(236, '2021-06-30 02:51:14.604235', 'e413284087decbd302fa33ca263c8d36cafd2e46120622467fe7450ca8cb1576f89e2a3e3d4908e23d1ffbe2972c7e25f0ab4c20eb6bbf188a80753468948c71', 'e413284087decbd302fa33ca263c8d36cafd2e46120622467fe7450ca8cb1576f89e2a3e3d4908e23d1ffbe2972c7e25f0ab4c20eb6bbf188a80753468948c71 : Ertyui', 3, '', 13, 2),
(237, '2021-06-30 02:51:23.364009', '29', '29', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(238, '2021-06-30 02:51:27.949976', '28', '28', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(239, '2021-06-30 04:56:29.267168', 'adc8b456c406f54132a002d477d2163fce6cfba0fb3db21ab2c9bcc208a7846acf9945c1152bea59d13c2ebcc41c0810d53605ba9f43f36410ba7eb8718ceca1', 'adc8b456c406f54132a002d477d2163fce6cfba0fb3db21ab2c9bcc208a7846acf9945c1152bea59d13c2ebcc41c0810d53605ba9f43f36410ba7eb8718ceca1 : Ertyui', 3, '', 13, 2),
(240, '2021-06-30 15:23:39.135322', '33', '33', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(241, '2021-06-30 15:24:22.945955', 'e36457903e84a8700fbafd33acd124a4e3e1d9b0f17791ebfb826dae5151270111431e8cbe5ae2df6c13500d0bb6bf70d75bc533e407be3aa50b673216f34cef', 'e36457903e84a8700fbafd33acd124a4e3e1d9b0f17791ebfb826dae5151270111431e8cbe5ae2df6c13500d0bb6bf70d75bc533e407be3aa50b673216f34cef : Ertyui', 3, '', 13, 2),
(242, '2021-06-30 15:24:22.950951', '22e3c0aaa3c8806c1248b87012afd46fd5f14973bcd03634f8ceeb3721acbc68e2fbf1ac46627f428110398860d3588f2c7d4dcbb339adc0ac478db7a2eb1b7a', '22e3c0aaa3c8806c1248b87012afd46fd5f14973bcd03634f8ceeb3721acbc68e2fbf1ac46627f428110398860d3588f2c7d4dcbb339adc0ac478db7a2eb1b7a : Ertyui', 3, '', 13, 2),
(243, '2021-06-30 15:50:56.571904', '34', '34', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(244, '2021-06-30 15:51:18.705824', '3dfb95f1dcfd11d8bb030450a8625d33f73e3f55b7c430e35e718af5364d44752746f92007ee9e45d549d6f660d554c88ebdff7377db031957a3384e4f0a38c4', '3dfb95f1dcfd11d8bb030450a8625d33f73e3f55b7c430e35e718af5364d44752746f92007ee9e45d549d6f660d554c88ebdff7377db031957a3384e4f0a38c4 : Ertyui', 3, '', 13, 2),
(245, '2021-06-30 15:52:42.014628', '9f8a23db2bc0060b88a95a4943cebe379f1ea963c4ba1ca98a7a4bfdb355e4396e6f3e9a7f19f25060e85f779d4cb0aa6a35754d25078407d48018d5322c60b1', '9f8a23db2bc0060b88a95a4943cebe379f1ea963c4ba1ca98a7a4bfdb355e4396e6f3e9a7f19f25060e85f779d4cb0aa6a35754d25078407d48018d5322c60b1 : Ertyui', 3, '', 13, 2),
(246, '2021-06-30 15:55:12.576220', 'd5b8bd33251d1f25bd614e66870527baa4f701c5aa2a7ca9d6bf478dec77fdbd0280332b85a86e48b18ea996af4676d99e17ca51210614590dfe238a4d982899', 'd5b8bd33251d1f25bd614e66870527baa4f701c5aa2a7ca9d6bf478dec77fdbd0280332b85a86e48b18ea996af4676d99e17ca51210614590dfe238a4d982899 : buenaseda', 3, '', 13, 2),
(247, '2021-06-30 15:55:12.580215', 'bffb258f5109b1f307a977ed1457ee695b9371309357294aab2dbd108c849d7f0dd5f8f4f6995623de18ac1b65e960c9ca8fdbc5726cb649c26bfd564b72843e', 'bffb258f5109b1f307a977ed1457ee695b9371309357294aab2dbd108c849d7f0dd5f8f4f6995623de18ac1b65e960c9ca8fdbc5726cb649c26bfd564b72843e : Ertyui', 3, '', 13, 2),
(248, '2021-06-30 16:03:59.793458', 'd136c095767480b9fe1b6415b543fa5eedceb6fcec7dcdf6289a9741a473c24151e0a79a2447453176a6053d1df4e622f822a74e7e2b0216a8a204950373adfe', 'd136c095767480b9fe1b6415b543fa5eedceb6fcec7dcdf6289a9741a473c24151e0a79a2447453176a6053d1df4e622f822a74e7e2b0216a8a204950373adfe : Ertyui', 3, '', 13, 2),
(249, '2021-06-30 16:08:06.658254', 'beceae7d019f69f3b5e42c2d862bd8dad488366d35eefed9f277b954ca6cf356e17c9d339ed6691ccb187bc901e8846fc93d96a6e0e46248d3dcba6050a7cdd8', 'beceae7d019f69f3b5e42c2d862bd8dad488366d35eefed9f277b954ca6cf356e17c9d339ed6691ccb187bc901e8846fc93d96a6e0e46248d3dcba6050a7cdd8 : Ertyui', 3, '', 13, 2),
(250, '2021-06-30 16:09:08.108374', '2129b748d53b6f518f6253ba24a0b109a22eb739386987d145e358f589a7934ac1b8b32a08c23453ad8fdbcf62191795aedccdd9a7200faf91ca5d866779c8fa', '2129b748d53b6f518f6253ba24a0b109a22eb739386987d145e358f589a7934ac1b8b32a08c23453ad8fdbcf62191795aedccdd9a7200faf91ca5d866779c8fa : buenaseda', 3, '', 13, 2),
(251, '2021-06-30 16:10:49.771342', '0c928dc4d8010b51b6a38dc0581ccb0c860d065d46e8f9d69699f0ec7e97af4468d56638fed79dbd92799669037b0e5a66890b5bab63d5c62e7e37310fc2a9f9', '0c928dc4d8010b51b6a38dc0581ccb0c860d065d46e8f9d69699f0ec7e97af4468d56638fed79dbd92799669037b0e5a66890b5bab63d5c62e7e37310fc2a9f9 : Ertyui', 3, '', 13, 2),
(252, '2021-06-30 16:11:40.497380', '48', '48', 3, '', 18, 2),
(253, '2021-06-30 16:11:40.503415', '47', '47', 3, '', 18, 2),
(254, '2021-06-30 16:11:40.506416', '46', '46', 3, '', 18, 2),
(255, '2021-06-30 16:11:40.509411', '45', '45', 3, '', 18, 2),
(256, '2021-06-30 16:11:40.512409', '44', '44', 3, '', 18, 2),
(257, '2021-06-30 16:11:40.516406', '43', '43', 3, '', 18, 2),
(258, '2021-06-30 16:11:40.531398', '42', '42', 3, '', 18, 2),
(259, '2021-06-30 16:11:40.534397', '41', '41', 3, '', 18, 2),
(260, '2021-06-30 16:11:40.537394', '40', '40', 3, '', 18, 2),
(261, '2021-06-30 16:11:51.956741', '39', '39', 3, '', 18, 2),
(262, '2021-06-30 16:11:51.962735', '38', '38', 3, '', 18, 2),
(263, '2021-06-30 16:11:51.968735', '37', '37', 3, '', 18, 2),
(264, '2021-06-30 16:11:51.971730', '36', '36', 3, '', 18, 2),
(265, '2021-06-30 16:11:51.977727', '35', '35', 3, '', 18, 2),
(266, '2021-06-30 16:11:51.982723', '34', '34', 3, '', 18, 2),
(267, '2021-06-30 16:11:51.985722', '33', '33', 3, '', 18, 2),
(268, '2021-06-30 16:12:00.805155', '32', '32', 3, '', 18, 2),
(269, '2021-06-30 16:12:00.808151', '31', '31', 3, '', 18, 2),
(270, '2021-06-30 16:12:00.811153', '30', '30', 3, '', 18, 2),
(271, '2021-06-30 16:12:00.815148', '29', '29', 3, '', 18, 2),
(272, '2021-06-30 16:12:00.818146', '28', '28', 3, '', 18, 2),
(273, '2021-06-30 16:12:00.822144', '27', '27', 3, '', 18, 2),
(274, '2021-06-30 16:14:17.178372', '2', 'buenaseda', 2, '[]', 4, 2),
(275, '2021-07-01 04:02:57.125155', '63', '63', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(276, '2021-07-01 04:03:43.854904', '4127e4295f68e2d2b41c4fe5c29dc507b7c679de70cf5432c4b55a5ad7ee12f361f945ac33c39dcfe71f310400531c3cff67ffcee50afdfce24c1c3993026068', '4127e4295f68e2d2b41c4fe5c29dc507b7c679de70cf5432c4b55a5ad7ee12f361f945ac33c39dcfe71f310400531c3cff67ffcee50afdfce24c1c3993026068 : Ertyui', 3, '', 13, 2),
(277, '2021-07-01 12:35:35.906053', '69', '69', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(278, '2021-07-01 12:36:03.014183', '55ce5de81f8ef26737f0248c3801cbd601e64f19ddb141234780763d5d6f3191ea4f2184cebd4e61a592c6a32e3bd7db1fcf8fe7c92123c332fad447f4aef754', '55ce5de81f8ef26737f0248c3801cbd601e64f19ddb141234780763d5d6f3191ea4f2184cebd4e61a592c6a32e3bd7db1fcf8fe7c92123c332fad447f4aef754 : buenaseda', 3, '', 13, 2),
(279, '2021-07-01 16:18:25.338383', 'ea74258a34307af477beed581856a9e485729f0905476d60b36a2eaf0b11ff61d2bd83be435758c9af02b38511ce72ebbc835aca8d94644f299f0ee96ddfe6c4', 'ea74258a34307af477beed581856a9e485729f0905476d60b36a2eaf0b11ff61d2bd83be435758c9af02b38511ce72ebbc835aca8d94644f299f0ee96ddfe6c4 : Ertyui', 3, '', 13, 2),
(280, '2021-07-01 16:18:25.359370', 'bfb4ab516c6854df3995bcd96e435533a45fcb09d6f55224bd51aea1d76bc55c9780bd65ddb13db38a2d391cb795bde6c8151b0837332e511373b01d4d8b8902', 'bfb4ab516c6854df3995bcd96e435533a45fcb09d6f55224bd51aea1d76bc55c9780bd65ddb13db38a2d391cb795bde6c8151b0837332e511373b01d4d8b8902 : Ertyui', 3, '', 13, 2),
(281, '2021-07-01 16:18:25.363367', 'a4e7045cb99e78e89661786621f9821c3274a567aaa070d6e07b6bc85cf3aa1565386d3e9c320c9a3088ae01128f6da19e7e20aecbc1ba99a5ccef65244f24f2', 'a4e7045cb99e78e89661786621f9821c3274a567aaa070d6e07b6bc85cf3aa1565386d3e9c320c9a3088ae01128f6da19e7e20aecbc1ba99a5ccef65244f24f2 : Ertyui', 3, '', 13, 2),
(282, '2021-07-01 16:18:25.366365', '15e7c126551367e27bff48d95c0056f9bb43b5d4939e06b614e4fc2c8c54c8cb55705779dc471b437570e0bc01810bcbee1e0bab495072f42b2dadd7c5ce09d7', '15e7c126551367e27bff48d95c0056f9bb43b5d4939e06b614e4fc2c8c54c8cb55705779dc471b437570e0bc01810bcbee1e0bab495072f42b2dadd7c5ce09d7 : Ertyui', 3, '', 13, 2),
(283, '2021-07-01 16:18:25.370362', '1297dbf14237d39842a4bc8466835f301b3c0b70d9a39f439e8338dcd9209e185a9ea99236d3c3b2a8d80da976cad90251c9dac954c1ccae9f953c5d92730422', '1297dbf14237d39842a4bc8466835f301b3c0b70d9a39f439e8338dcd9209e185a9ea99236d3c3b2a8d80da976cad90251c9dac954c1ccae9f953c5d92730422 : Ertyui', 3, '', 13, 2),
(284, '2021-07-01 16:18:31.087596', '74', '74', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(285, '2021-07-01 16:18:38.037510', '75', '75', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(286, '2021-07-01 16:18:42.861684', '76', '76', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(287, '2021-07-01 16:18:46.918647', '77', '77', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(288, '2021-07-01 16:18:50.973608', '78', '78', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(289, '2021-07-02 03:40:26.862921', '7d50bb632be3cfbce27e6513bde9af31ac6a2f35dc8d94590bd711559af0ec1932a203323a1d429ef6d4a4a02fbe9a76906cbce46e817225c38e03cec0cbb332', '7d50bb632be3cfbce27e6513bde9af31ac6a2f35dc8d94590bd711559af0ec1932a203323a1d429ef6d4a4a02fbe9a76906cbce46e817225c38e03cec0cbb332 : buenaseda', 3, '', 13, 2),
(290, '2021-07-02 03:40:40.342524', '95', '95', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(291, '2021-07-02 03:59:19.230583', 'ea121e18e0b7c963866abaca3e27b2bea153ab0567e59b235bfabd5770b2016be01c2810b207dc46605896c457159a36583815a887604257493b0fdf550f4218', 'ea121e18e0b7c963866abaca3e27b2bea153ab0567e59b235bfabd5770b2016be01c2810b207dc46605896c457159a36583815a887604257493b0fdf550f4218 : buenaseda', 3, '', 13, 2),
(292, '2021-07-02 04:00:29.153517', 'f29366c77c4333228d981a5cd5d968f79e1c3d167c4c5ea759823489d429c19893db87710ed05f03014e441ab0300f724aa3c355e3d0109bfa79d2e6810fc13e', 'f29366c77c4333228d981a5cd5d968f79e1c3d167c4c5ea759823489d429c19893db87710ed05f03014e441ab0300f724aa3c355e3d0109bfa79d2e6810fc13e : buenaseda', 3, '', 13, 2),
(293, '2021-07-02 04:00:29.164054', '7051e64b72c23ecebc901c560da57b5ebc8d9b19fd8b671c66984d27bee33860a07930d5ec13ffa96402d60f4694edac389bef7d940576ff02f3a4c7a355e6a6', '7051e64b72c23ecebc901c560da57b5ebc8d9b19fd8b671c66984d27bee33860a07930d5ec13ffa96402d60f4694edac389bef7d940576ff02f3a4c7a355e6a6 : buenaseda', 3, '', 13, 2),
(294, '2021-07-02 04:00:42.097064', 'f29366c77c4333228d981a5cd5d968f79e1c3d167c4c5ea759823489d429c19893db87710ed05f03014e441ab0300f724aa3c355e3d0109bfa79d2e6810fc13e', 'f29366c77c4333228d981a5cd5d968f79e1c3d167c4c5ea759823489d429c19893db87710ed05f03014e441ab0300f724aa3c355e3d0109bfa79d2e6810fc13e : buenaseda', 3, '', 13, 2),
(295, '2021-07-02 04:00:42.101062', '7051e64b72c23ecebc901c560da57b5ebc8d9b19fd8b671c66984d27bee33860a07930d5ec13ffa96402d60f4694edac389bef7d940576ff02f3a4c7a355e6a6', '7051e64b72c23ecebc901c560da57b5ebc8d9b19fd8b671c66984d27bee33860a07930d5ec13ffa96402d60f4694edac389bef7d940576ff02f3a4c7a355e6a6 : buenaseda', 3, '', 13, 2),
(296, '2021-07-02 04:03:44.319701', '113', '113', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(297, '2021-07-02 04:03:49.534947', '112', '112', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(298, '2021-07-02 04:03:58.356207', '114', '114', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(299, '2021-07-02 04:04:02.900837', '115', '115', 2, '[]', 18, 2),
(300, '2021-07-02 04:12:49.269029', '3395a53860415d0573d5f1d82a57cdcfc07a9f53a7f41d39afb101982b4ef48b273c1462f6c0e0b667528b0a1854e2a8daa3e3957a1e6de90592bb573261cd93', '3395a53860415d0573d5f1d82a57cdcfc07a9f53a7f41d39afb101982b4ef48b273c1462f6c0e0b667528b0a1854e2a8daa3e3957a1e6de90592bb573261cd93 : buenaseda', 3, '', 13, 2),
(301, '2021-07-02 04:13:03.564642', '117', '117', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(302, '2021-07-02 13:17:29.528208', 'd0f0918e409a7105724748a71d80b52594a3dd7c0aeb1604f22bfa792ff492d16efa89324d2e27dea6502409a707bdfd0670061599b468856456489708ee5594', 'd0f0918e409a7105724748a71d80b52594a3dd7c0aeb1604f22bfa792ff492d16efa89324d2e27dea6502409a707bdfd0670061599b468856456489708ee5594 : buenaseda', 3, '', 13, 2),
(303, '2021-07-02 13:17:35.299423', '122', '122', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(304, '2021-07-03 04:25:33.852338', '128', '128', 3, '', 18, 2),
(305, '2021-07-03 04:25:33.863331', '127', '127', 3, '', 18, 2),
(306, '2021-07-03 04:25:33.869327', '126', '126', 3, '', 18, 2),
(307, '2021-07-03 04:25:33.875324', '125', '125', 3, '', 18, 2),
(308, '2021-07-03 04:25:33.879322', '124', '124', 3, '', 18, 2),
(309, '2021-07-03 04:25:33.885317', '123', '123', 3, '', 18, 2),
(310, '2021-07-03 04:25:54.904818', 'ac1720f2df883608d0f0910c5c15cc73331f1fa3321d0a6658713b431d141a33d4fc43cda50af09e6ae3b508e9b64cc9efc3ef472c36c0aa9c8b5892f7df862d', 'ac1720f2df883608d0f0910c5c15cc73331f1fa3321d0a6658713b431d141a33d4fc43cda50af09e6ae3b508e9b64cc9efc3ef472c36c0aa9c8b5892f7df862d : buenaseda', 3, '', 13, 2),
(311, '2021-07-03 04:25:54.996761', 'aadd377c4a86452c195453235634a2807d21d9f1c6c0a6f4d6f08a68ff4f392047419ab72fc6dbb38f96e25f4082881f661f996cd9755bb1d238225d465b1ba0', 'aadd377c4a86452c195453235634a2807d21d9f1c6c0a6f4d6f08a68ff4f392047419ab72fc6dbb38f96e25f4082881f661f996cd9755bb1d238225d465b1ba0 : buenaseda', 3, '', 13, 2),
(312, '2021-07-03 04:56:10.922711', 'cc8a3390471f284740a392856be39b61c26d28b6fea8676c00009502892d0c5aec81d8e5d21898786624c5359c2268900569d663b58ed692da15214ec61cfc8b', 'cc8a3390471f284740a392856be39b61c26d28b6fea8676c00009502892d0c5aec81d8e5d21898786624c5359c2268900569d663b58ed692da15214ec61cfc8b : buenaseda', 3, '', 13, 2),
(313, '2021-07-03 05:21:33.630121', '45', 'Test NAme', 2, '[{\"changed\": {\"fields\": [\"Category\"]}}]', 8, 2),
(314, '2021-07-03 15:37:30.030514', '134', '134', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2);
INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(315, '2021-07-03 15:37:41.675044', '79843a9076e68490399d53d114d71409800e9ed57f23fbfc3e0ea2d0d712a5b7c405cc7366fb0d41fb2873d9216bf1636c6ef7e911f7c034fb2460867aa6fc41', '79843a9076e68490399d53d114d71409800e9ed57f23fbfc3e0ea2d0d712a5b7c405cc7366fb0d41fb2873d9216bf1636c6ef7e911f7c034fb2460867aa6fc41 : buenaseda', 3, '', 13, 2),
(316, '2021-07-03 17:29:23.710335', '2', 'buenaseda', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 2),
(317, '2021-07-04 09:42:11.123400', '136', '136', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(318, '2021-07-04 09:42:15.826978', '137', '137', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(319, '2021-07-04 09:43:00.760590', '8c45cb6affa2178193e3c73bad29c850da2e179cce7513121b0566b0ea7ca377d3064778ec4b97235de03e8a99e8b33fe7d9b0315219d2ba0e1e6b968c6d0f07', '8c45cb6affa2178193e3c73bad29c850da2e179cce7513121b0566b0ea7ca377d3064778ec4b97235de03e8a99e8b33fe7d9b0315219d2ba0e1e6b968c6d0f07 : buenaseda', 3, '', 13, 2),
(320, '2021-07-04 09:43:00.765589', '1840fe94defd2646aa3a67a3a1fb22d1eaebfb927af9cd9986a27700d9c97b5e3f7952e2d5f00e89daa857a8d170c19e8534bb0b67c1e206090fbf9dd3ed4f12', '1840fe94defd2646aa3a67a3a1fb22d1eaebfb927af9cd9986a27700d9c97b5e3f7952e2d5f00e89daa857a8d170c19e8534bb0b67c1e206090fbf9dd3ed4f12 : buenaseda', 3, '', 13, 2),
(321, '2021-07-04 13:19:23.102380', '138', '138', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(322, '2021-07-04 13:21:41.316438', '6176ae480934661672ba252fbdb31b55435891345457cea89d293e46ab0cafdb00994989005a010dbbcfdb9ec7aba67aced9facd4814699774d2a7ebfe871baa', '6176ae480934661672ba252fbdb31b55435891345457cea89d293e46ab0cafdb00994989005a010dbbcfdb9ec7aba67aced9facd4814699774d2a7ebfe871baa : buenaseda', 3, '', 13, 2),
(323, '2021-07-04 13:39:01.585349', 'd61aa57e16388e128dd533d78557e96d3dda8cb62144a8940a6b11c8efd3e8dc7a96d4584970cedb1a0e81b2a3179a5e0a015ca130971bc11c38f186ab941064', 'd61aa57e16388e128dd533d78557e96d3dda8cb62144a8940a6b11c8efd3e8dc7a96d4584970cedb1a0e81b2a3179a5e0a015ca130971bc11c38f186ab941064 : buenaseda', 3, '', 13, 2),
(324, '2021-07-04 13:39:06.598183', '139', '139', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(325, '2021-07-04 17:11:51.851773', '877a88248077a630c399f55c99646fb9453ba0713f3834a6b4ce2f0c9262fd3446a30797ffc2a21606841564a4316c2aca24978a6552cef69e9523d9c9ea91df', '877a88248077a630c399f55c99646fb9453ba0713f3834a6b4ce2f0c9262fd3446a30797ffc2a21606841564a4316c2aca24978a6552cef69e9523d9c9ea91df : buenaseda', 3, '', 13, 2),
(326, '2021-07-04 17:12:01.731185', '141', '141', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(327, '2021-07-05 03:21:29.071259', '9b2a11c65e91ca67c4833590dbf57f3a5a29e92b7c506270524e4d57148cec913b3c10695f0853dd0e6aa59c5818d30b1e5e2478030dde5102a49ea1efbb909d', '9b2a11c65e91ca67c4833590dbf57f3a5a29e92b7c506270524e4d57148cec913b3c10695f0853dd0e6aa59c5818d30b1e5e2478030dde5102a49ea1efbb909d : buenaseda', 3, '', 13, 2),
(328, '2021-07-05 03:21:29.093250', '4279a1e4045b37e9011f99ea8a12506085e0160226982301ee150ac2315ccefcd2b27220d90912d16578ed8a07ea3c58bb5ee2d05b51cb0ed7590a7225efb48d', '4279a1e4045b37e9011f99ea8a12506085e0160226982301ee150ac2315ccefcd2b27220d90912d16578ed8a07ea3c58bb5ee2d05b51cb0ed7590a7225efb48d : buenaseda', 3, '', 13, 2),
(329, '2021-07-05 03:21:37.035823', '142', '142', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(330, '2021-07-05 03:21:41.698974', '143', '143', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(331, '2021-07-06 15:24:32.124331', 'b63ea012d4fe9e14aded26378dd3382fb1e87581db5215ac856aaaeafbc25b49d0b38d6efeee63a6e3181900c3fe5e4a83cc79052034de1a5911cef8e9dc4fb2', 'b63ea012d4fe9e14aded26378dd3382fb1e87581db5215ac856aaaeafbc25b49d0b38d6efeee63a6e3181900c3fe5e4a83cc79052034de1a5911cef8e9dc4fb2 : buenaseda', 3, '', 13, 2),
(332, '2021-07-07 03:53:33.233113', 'aa6affd050de70b7e6398327416bb9af845b9c2248b3bdf6c9ce5fcf11fad7521eacff38ad3ad9708c134b46f48887aebc9d295405462ec867eb04cc52f6a3b8', 'aa6affd050de70b7e6398327416bb9af845b9c2248b3bdf6c9ce5fcf11fad7521eacff38ad3ad9708c134b46f48887aebc9d295405462ec867eb04cc52f6a3b8 : buenaseda', 3, '', 13, 2),
(333, '2021-07-07 03:53:33.239109', '66430685a3f081980f97cf479fe29118e81de9baf76072f5c6942b48d06a187611b5879d8c5925a6fd8c72ee6fbc7a89325f1699e998d69d42b232ee7fe85151', '66430685a3f081980f97cf479fe29118e81de9baf76072f5c6942b48d06a187611b5879d8c5925a6fd8c72ee6fbc7a89325f1699e998d69d42b232ee7fe85151 : buenaseda', 3, '', 13, 2),
(334, '2021-07-07 03:54:36.358685', '145', '145', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(335, '2021-07-07 03:54:54.012242', '146', '146', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(336, '2021-07-07 03:55:02.796835', '144', '144', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(337, '2021-07-09 02:54:04.587323', '153', '153', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(338, '2021-07-09 02:54:14.975264', '152', '152', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(339, '2021-07-09 02:54:29.347322', '154', '154', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(340, '2021-07-09 02:54:52.815597', '9cad5b5d6a34d988ee39b8d278f866f012a34d306470bb0067997fd5984a898b651e8f4cbc8d82389b10de9afb252c51366a86ce20588d68026121962136db41', '9cad5b5d6a34d988ee39b8d278f866f012a34d306470bb0067997fd5984a898b651e8f4cbc8d82389b10de9afb252c51366a86ce20588d68026121962136db41 : buenaseda', 3, '', 13, 2),
(341, '2021-07-09 02:54:52.826589', '03a14eee2356f6f2cadccda385ca01076e3b26dd50cb7a5e2e6166befabd6ddd96d5c701f569b96f4782012a57f306e408e1e809e892a686c3cd9be13ba279aa', '03a14eee2356f6f2cadccda385ca01076e3b26dd50cb7a5e2e6166befabd6ddd96d5c701f569b96f4782012a57f306e408e1e809e892a686c3cd9be13ba279aa : buenaseda', 3, '', 13, 2),
(342, '2021-07-09 17:08:40.919032', '156', '156', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(343, '2021-07-09 17:09:15.151584', 'dbe7e1f28c071aacfeebac23c840027422ef42c8f404e5ae6faab7bacb30281dafa8ea4671038d8c305d9a2ac82872de032357ba19f4376cdbad0e66b7c35d9a', 'dbe7e1f28c071aacfeebac23c840027422ef42c8f404e5ae6faab7bacb30281dafa8ea4671038d8c305d9a2ac82872de032357ba19f4376cdbad0e66b7c35d9a : buenaseda', 3, '', 13, 2),
(344, '2021-07-10 12:52:23.437933', '157', '157', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(345, '2021-07-10 12:53:46.628390', '158', '158', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(346, '2021-07-11 06:43:43.615448', '164', '164', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(347, '2021-07-11 06:46:21.161267', '165', '165', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(348, '2021-07-11 06:50:01.876682', '166', '166', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(349, '2021-07-11 08:20:57.296804', '167', '167', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(350, '2021-07-11 08:22:12.958208', 'e7c6deafc1a0beb606ccdaef0816cd91f3f0ade7389469cd776245bcfb3b3bdaa75f927d5f126ae95b08abe1436857755c0f092698065b7d84a171f2eeed932e', 'e7c6deafc1a0beb606ccdaef0816cd91f3f0ade7389469cd776245bcfb3b3bdaa75f927d5f126ae95b08abe1436857755c0f092698065b7d84a171f2eeed932e : buenaseda', 3, '', 13, 2),
(351, '2021-07-11 08:22:12.962205', 'c4a123694cbd955058f9f40f513ee282d1dff79af8199b5b9e9cdc0c0e93ca2e33846ef74427698dccd7adbbed6a94274f66654bf2735146347877340353244a', 'c4a123694cbd955058f9f40f513ee282d1dff79af8199b5b9e9cdc0c0e93ca2e33846ef74427698dccd7adbbed6a94274f66654bf2735146347877340353244a : buenaseda', 3, '', 13, 2),
(352, '2021-07-11 08:22:12.966203', '48d60501bfcbd9d5b4e1795f0f752e4cadd1b2b35a7f6c70b18d3bef7470fd57c9421f7283eb1ae64b2504dc3e5b49ea6bd2d34fcb1297156b939cdafa9047f3', '48d60501bfcbd9d5b4e1795f0f752e4cadd1b2b35a7f6c70b18d3bef7470fd57c9421f7283eb1ae64b2504dc3e5b49ea6bd2d34fcb1297156b939cdafa9047f3 : buenaseda', 3, '', 13, 2),
(353, '2021-07-11 08:22:13.017171', '28d1ff3c12e7003cb4d8cb1aefb6cd9290562afb72c82bb3a31508cd0aaf0c028b62c68163ca5c3333b303cc5907f40aec36a6d1a916314883f655bae5ee8256', '28d1ff3c12e7003cb4d8cb1aefb6cd9290562afb72c82bb3a31508cd0aaf0c028b62c68163ca5c3333b303cc5907f40aec36a6d1a916314883f655bae5ee8256 : buenaseda', 3, '', 13, 2),
(354, '2021-07-11 08:24:06.827645', '169', '169', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(355, '2021-07-11 08:26:16.186909', '8eac803f28d93e03b5a08bb5b5f3103aa0cce209e00ae97f07fbe3c53841a7296f4fcae97a2797bbda3ce94eb896e159e977e96ef8bd14e9ef4d8ecdd46a4b2a', '8eac803f28d93e03b5a08bb5b5f3103aa0cce209e00ae97f07fbe3c53841a7296f4fcae97a2797bbda3ce94eb896e159e977e96ef8bd14e9ef4d8ecdd46a4b2a : buenaseda', 3, '', 13, 2),
(356, '2021-07-11 08:29:14.399070', 'c9a918a83bddd93e13971021da9268d7ce753fb2910df20c9901190402e59960f864cf161facb81d1ed141186171861e2ed01eac264334e19f5623fef85a0dd0', 'c9a918a83bddd93e13971021da9268d7ce753fb2910df20c9901190402e59960f864cf161facb81d1ed141186171861e2ed01eac264334e19f5623fef85a0dd0 : buenaseda', 3, '', 13, 2),
(357, '2021-07-11 08:29:14.403100', '2b7cd48fc07f58c08c0e21ce68008820c47c56121cf302d6a79a4391bf61c4623017ae617fd68434e5e8e1971c56538c0ebe029c8452a8e4522b8c2ab6bf0f2b', '2b7cd48fc07f58c08c0e21ce68008820c47c56121cf302d6a79a4391bf61c4623017ae617fd68434e5e8e1971c56538c0ebe029c8452a8e4522b8c2ab6bf0f2b : buenaseda', 3, '', 13, 2),
(358, '2021-07-11 08:29:34.487858', 'c9a918a83bddd93e13971021da9268d7ce753fb2910df20c9901190402e59960f864cf161facb81d1ed141186171861e2ed01eac264334e19f5623fef85a0dd0', 'c9a918a83bddd93e13971021da9268d7ce753fb2910df20c9901190402e59960f864cf161facb81d1ed141186171861e2ed01eac264334e19f5623fef85a0dd0 : buenaseda', 3, '', 13, 2),
(359, '2021-07-11 08:29:34.491887', '2b7cd48fc07f58c08c0e21ce68008820c47c56121cf302d6a79a4391bf61c4623017ae617fd68434e5e8e1971c56538c0ebe029c8452a8e4522b8c2ab6bf0f2b', '2b7cd48fc07f58c08c0e21ce68008820c47c56121cf302d6a79a4391bf61c4623017ae617fd68434e5e8e1971c56538c0ebe029c8452a8e4522b8c2ab6bf0f2b : buenaseda', 3, '', 13, 2),
(360, '2021-07-11 08:29:41.281736', '173', '173', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(361, '2021-07-11 08:29:47.289674', '174', '174', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(362, '2021-07-11 15:20:44.873136', '33', 'admin56', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 2),
(363, '2021-07-11 15:20:57.750178', '1', 'admin7', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 2),
(364, '2021-07-11 15:21:10.541821', '13', 'TestUser', 3, '', 4, 2),
(365, '2021-07-11 15:21:10.544819', '36', 'TestUser1', 3, '', 4, 2),
(366, '2021-07-11 15:21:10.548814', '34', 'zaAszxax1cv', 3, '', 4, 2),
(367, '2021-07-11 15:21:10.551815', '35', 'zaAszxxax1cv', 3, '', 4, 2),
(368, '2021-07-11 15:23:18.694628', '35', 'zaAszxxax1cv', 3, '', 4, 2),
(369, '2021-07-11 15:23:58.808521', '37', 'admon', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 2),
(370, '2021-07-11 15:24:11.423456', '38', 'Erty', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 2),
(371, '2021-07-11 15:24:20.453096', '36', 'TestUser1', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 2),
(372, '2021-07-11 15:24:27.456013', '34', 'zaAszxax1cv', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 2),
(373, '2021-07-11 15:24:33.215138', '35', 'zaAszxxax1cv', 2, '[{\"changed\": {\"fields\": [\"First name\", \"Last name\"]}}]', 4, 2),
(374, '2021-07-12 04:07:40.340937', 'c73d5dc9736d164be2945d97c322737db53e25fbcd0c73759b5bebf23c276229ea24210c49cf4cac4edd3f5be42c63f997347e383f8c2f17ee2c947d7ff9c32e', 'c73d5dc9736d164be2945d97c322737db53e25fbcd0c73759b5bebf23c276229ea24210c49cf4cac4edd3f5be42c63f997347e383f8c2f17ee2c947d7ff9c32e : buenaseda', 3, '', 13, 2),
(375, '2021-07-12 04:07:40.346934', '5806757c5ac5d2441f95c02015c0f04d9989c7331bbdc0f52ac51f6928372a2c6a1130af29902cb828b25f16d1d8b7b4c104bafe2ab0620250c1288531ad014d', '5806757c5ac5d2441f95c02015c0f04d9989c7331bbdc0f52ac51f6928372a2c6a1130af29902cb828b25f16d1d8b7b4c104bafe2ab0620250c1288531ad014d : buenaseda', 3, '', 13, 2),
(376, '2021-07-12 04:07:53.868130', '175', '175', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(377, '2021-07-12 04:08:03.179801', '176', '176', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(378, '2021-07-12 13:48:51.505280', '353317f64e40d19410db403de0f40291cb4ff581ff598c74070aee66c63e5609fefd3de1aa48e3e373973a9cf0293e21fbd138303ada6a15bd14143e62534d7b', '353317f64e40d19410db403de0f40291cb4ff581ff598c74070aee66c63e5609fefd3de1aa48e3e373973a9cf0293e21fbd138303ada6a15bd14143e62534d7b : Ertyui', 3, '', 13, 2),
(379, '2021-07-12 13:49:00.140433', '177', '177', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(380, '2021-07-12 17:37:15.561961', '178', '178', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(381, '2021-07-12 18:01:51.735613', '35', 'TestCategory', 3, '', 14, 2),
(382, '2021-07-12 18:02:08.235774', '37', 'Test 23-04-09', 3, '', 14, 2),
(383, '2021-07-12 18:03:31.239385', '36', 'Lights', 2, '[{\"changed\": {\"fields\": [\"Category id\", \"Name\"]}}]', 14, 2),
(384, '2021-07-13 03:13:31.624275', '179', '179', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(385, '2021-07-13 03:14:00.815111', '180', '180', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(386, '2021-07-13 03:15:23.941491', 'fd1f2d2769a25baf6529c51019dfa0de83c0e8a160bbb259343932cd6962893e5ce0a60208cfbec134b48849880a4780cdaeb1201a95d6a1845ddcd3d35dd634', 'fd1f2d2769a25baf6529c51019dfa0de83c0e8a160bbb259343932cd6962893e5ce0a60208cfbec134b48849880a4780cdaeb1201a95d6a1845ddcd3d35dd634 : buenaseda', 3, '', 13, 2),
(387, '2021-07-13 03:15:23.946491', 'f396f0ad76bd197703f1a68bac7513a6869c555285e3e94b56b383fa0bdbd28bc60a09c85d7ab6bf489854e87099497225541ff3f34b22d0044e7d4cb04b6eb5', 'f396f0ad76bd197703f1a68bac7513a6869c555285e3e94b56b383fa0bdbd28bc60a09c85d7ab6bf489854e87099497225541ff3f34b22d0044e7d4cb04b6eb5 : buenaseda', 3, '', 13, 2),
(388, '2021-07-13 03:15:23.950484', 'a400e6688d68507e9f90e489700ec49dfe17533b9a84dc904be689704565e387d0f0686158ea68b513818cda8f51f8b3e7c8da354d76ac6802d991081f0807f1', 'a400e6688d68507e9f90e489700ec49dfe17533b9a84dc904be689704565e387d0f0686158ea68b513818cda8f51f8b3e7c8da354d76ac6802d991081f0807f1 : buenaseda', 3, '', 13, 2),
(389, '2021-07-13 03:15:23.954483', '400c6c2edb57c8f2d22fb6217882cb1aa9734a5400340612b926dd6970356232959d931f2b2b52bb52f0305442f39d5ae450a1ba608a352296f05b4432aa92e2', '400c6c2edb57c8f2d22fb6217882cb1aa9734a5400340612b926dd6970356232959d931f2b2b52bb52f0305442f39d5ae450a1ba608a352296f05b4432aa92e2 : buenaseda', 3, '', 13, 2),
(390, '2021-07-13 03:15:33.486877', '181', '181', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(391, '2021-07-13 03:45:06.986749', '46', 'Test Supplier', 3, '', 9, 2),
(392, '2021-07-13 03:45:06.990747', '45', 'Dyanz', 3, '', 9, 2),
(393, '2021-07-13 03:45:06.994745', '44', 'asdfasdfas', 3, '', 9, 2),
(394, '2021-07-13 03:45:06.997745', '43', 'Test NAme', 3, '', 9, 2),
(395, '2021-07-13 03:45:07.001739', '42', 'Test Item', 3, '', 9, 2),
(396, '2021-07-13 03:45:07.004740', '41', 'Test NAmeTest NAme', 3, '', 9, 2),
(397, '2021-07-13 03:45:07.008638', '40', 'QWertyyy', 3, '', 9, 2),
(398, '2021-07-13 03:45:07.011614', '39', 'Unknown Wew', 3, '', 9, 2),
(399, '2021-07-13 03:45:28.362206', '38', 'qprefix+\'{0:04d}\'.format(1)', 3, '', 9, 2),
(400, '2021-07-13 03:45:28.408176', '37', 'Ertrttttt', 3, '', 9, 2),
(401, '2021-07-13 03:45:28.411174', '36', 'qewrqwerqwer', 3, '', 9, 2),
(402, '2021-07-13 03:45:28.415172', '35', 'qewrqewr', 3, '', 9, 2),
(403, '2021-07-13 03:45:28.418169', '34', 'qwertsy', 3, '', 9, 2),
(404, '2021-07-13 03:45:28.422167', '33', 'Erttyy', 3, '', 9, 2),
(405, '2021-07-13 03:45:28.425165', '31', 'Test', 3, '', 9, 2),
(406, '2021-07-13 03:45:28.429163', '13', 'Dynojet', 3, '', 9, 2),
(407, '2021-07-13 04:20:28.276546', '4af8f78d7cae962a4c127eaf14abdd19cf7e399c06f6fa70a32186d1fb6ce7caadd84d37dee00d2a74386e5b08f8d709bd58ca90c8d4172060d726a2109d6daa', '4af8f78d7cae962a4c127eaf14abdd19cf7e399c06f6fa70a32186d1fb6ce7caadd84d37dee00d2a74386e5b08f8d709bd58ca90c8d4172060d726a2109d6daa : buenaseda', 3, '', 13, 2),
(408, '2021-07-13 04:20:36.022793', '182', '182', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(409, '2021-07-13 15:52:33.124520', '40', 'EmployeeUser', 2, '[{\"changed\": {\"fields\": [\"Username\"]}}]', 4, 2),
(410, '2021-07-13 15:52:48.008841', '2', 'OwnerUser', 2, '[{\"changed\": {\"fields\": [\"Username\"]}}]', 4, 2),
(411, '2021-07-16 12:53:20.673242', '195', '195', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(412, '2021-07-16 12:53:25.668191', '194', '194', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(413, '2021-07-16 12:53:32.062175', '192', '192', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(414, '2021-07-16 12:53:40.629042', '191', '191', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(415, '2021-07-16 12:53:45.814002', '190', '190', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(416, '2021-07-16 12:53:52.116743', '189', '189', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(417, '2021-07-16 12:53:58.878667', '188', '188', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(418, '2021-07-16 12:54:07.675843', '196', '196', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(419, '2021-07-16 14:28:35.774620', '197', '197', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(420, '2021-07-16 15:03:35.608368', '201', '201', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(421, '2021-07-16 15:03:40.589335', '202', '202', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(422, '2021-07-16 15:05:35.201226', '203', '203', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(423, '2021-07-16 15:07:45.035671', '204', '204', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(424, '2021-07-16 15:21:14.107108', '205', '205', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(425, '2021-07-16 16:13:26.483236', '206', '206', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(426, '2021-07-17 03:44:04.030849', '207', '207', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(427, '2021-07-18 07:54:59.497091', '243', '243', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(428, '2021-07-18 07:55:04.648736', '242', '242', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(429, '2021-07-18 07:55:09.643393', '241', '241', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(430, '2021-07-18 07:55:15.008057', '240', '240', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(431, '2021-07-18 07:55:20.447468', '239', '239', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(432, '2021-07-18 07:55:24.252248', '239', '239', 2, '[]', 18, 2),
(433, '2021-07-18 07:55:28.935097', '244', '244', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(434, '2021-07-18 07:55:52.004558', '369d10eb41f3cdc87f35473bb04a363cc0fb00e1f02e10c10c64ff1e1352e5bed0242a316b1a50242b62f21ecdc58c5b0e618d0fee632cc3b5352b746ebfe93a', '369d10eb41f3cdc87f35473bb04a363cc0fb00e1f02e10c10c64ff1e1352e5bed0242a316b1a50242b62f21ecdc58c5b0e618d0fee632cc3b5352b746ebfe93a : EmployeeUser', 3, '', 13, 2),
(435, '2021-07-19 01:37:47.583692', '245', '245', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(436, '2021-07-19 01:37:52.582589', '246', '246', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(437, '2021-07-19 01:38:37.886371', 'ac447ee3acecf5e598f3dbaf8238a3d49c4491447bbcd7a1bd466b58ed6cfeb3681c44079dce7d260256bf07fb11a9154413d94d05fa358add38e69fcbc8819d', 'ac447ee3acecf5e598f3dbaf8238a3d49c4491447bbcd7a1bd466b58ed6cfeb3681c44079dce7d260256bf07fb11a9154413d94d05fa358add38e69fcbc8819d : OwnerUser', 3, '', 13, 2),
(438, '2021-07-19 01:38:37.891368', '25f4149a42896614c1adf90cc741acbf8f0ee0197b4aa88e18d0d51f9dc9149270f2f842b1ab168ecb7cb2ecc725625ef9b8f375406511866255377037e1c3c7', '25f4149a42896614c1adf90cc741acbf8f0ee0197b4aa88e18d0d51f9dc9149270f2f842b1ab168ecb7cb2ecc725625ef9b8f375406511866255377037e1c3c7 : OwnerUser', 3, '', 13, 2),
(439, '2021-07-19 04:43:54.406404', '247', '247', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(440, '2021-07-19 04:44:26.730998', '0887dbef1085c75e20f56b43a74195e94ebf3ba4342b9aafc9c27d25cffe9ddc47fd3bdaafbc9bf5ff24f616a63a0fbd7620f4f01693b64a6761ef51ddc53b0b', '0887dbef1085c75e20f56b43a74195e94ebf3ba4342b9aafc9c27d25cffe9ddc47fd3bdaafbc9bf5ff24f616a63a0fbd7620f4f01693b64a6761ef51ddc53b0b : OwnerUser', 3, '', 13, 2),
(441, '2021-07-19 05:03:04.662593', '250', '250', 2, '[{\"changed\": {\"fields\": [\"Logout at\"]}}]', 18, 2),
(442, '2021-07-19 05:03:42.388927', 'a8f9161359f9bcb9cf3478b1ba36fde882bede17f47b3b3f20572dde652b64c85158c0ccefee1749b5e6a04f4895b47f405b792b4293258f8bb1d9174cd5521d', 'a8f9161359f9bcb9cf3478b1ba36fde882bede17f47b3b3f20572dde652b64c85158c0ccefee1749b5e6a04f4895b47f405b792b4293258f8bb1d9174cd5521d : OwnerUser', 3, '', 13, 2);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(20, 'activities_log', 'log_activity'),
(17, 'activity_log', 'activity_log'),
(19, 'activity_log', 'activity_logs'),
(1, 'admin', 'logentry'),
(7, 'articles', 'article'),
(18, 'attendance_log', 'attendance_log'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(15, 'authtoken', 'token'),
(16, 'authtoken', 'tokenproxy'),
(14, 'categories', 'category'),
(5, 'contenttypes', 'contenttype'),
(10, 'inventories', 'inventory'),
(13, 'knox', 'authtoken'),
(8, 'products', 'product'),
(6, 'sessions', 'session'),
(9, 'suppliers', 'supplier'),
(11, 'transactions', 'transaction'),
(12, 'transaction_items', 'transaction_item');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2020-12-21 13:33:48.554940'),
(2, 'auth', '0001_initial', '2020-12-21 13:33:54.777747'),
(3, 'admin', '0001_initial', '2020-12-21 13:34:23.892861'),
(4, 'admin', '0002_logentry_remove_auto_add', '2020-12-21 13:34:31.340328'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2020-12-21 13:34:31.507756'),
(6, 'articles', '0001_initial', '2020-12-21 13:34:32.685592'),
(7, 'contenttypes', '0002_remove_content_type_name', '2020-12-21 13:34:39.180699'),
(8, 'auth', '0002_alter_permission_name_max_length', '2020-12-21 13:34:42.931451'),
(9, 'auth', '0003_alter_user_email_max_length', '2020-12-21 13:34:43.729330'),
(10, 'auth', '0004_alter_user_username_opts', '2020-12-21 13:34:43.898239'),
(11, 'auth', '0005_alter_user_last_login_null', '2020-12-21 13:34:45.853485'),
(12, 'auth', '0006_require_contenttypes_0002', '2020-12-21 13:34:45.968560'),
(13, 'auth', '0007_alter_validators_add_error_messages', '2020-12-21 13:34:46.134164'),
(14, 'auth', '0008_alter_user_username_max_length', '2020-12-21 13:34:47.102884'),
(15, 'auth', '0009_alter_user_last_name_max_length', '2020-12-21 13:34:47.616155'),
(16, 'auth', '0010_alter_group_name_max_length', '2020-12-21 13:34:48.709798'),
(17, 'auth', '0011_update_proxy_permissions', '2020-12-21 13:34:48.912948'),
(18, 'auth', '0012_alter_user_first_name_max_length', '2020-12-21 13:34:49.267606'),
(19, 'suppliers', '0001_initial', '2020-12-21 13:34:50.451198'),
(20, 'products', '0001_initial', '2020-12-21 13:34:51.385191'),
(21, 'products', '0002_auto_20201130_0025', '2020-12-21 13:34:54.776133'),
(22, 'products', '0003_product_supplier', '2020-12-21 13:34:57.623378'),
(23, 'products', '0004_auto_20201201_1508', '2020-12-21 13:35:01.099705'),
(24, 'products', '0005_auto_20201208_0508', '2020-12-21 13:35:06.017018'),
(25, 'inventories', '0001_initial', '2020-12-21 13:35:07.350133'),
(26, 'inventories', '0002_remove_inventory_stock', '2020-12-21 13:35:13.140105'),
(27, 'inventories', '0003_inventory_stock_added', '2020-12-21 13:35:13.756815'),
(28, 'inventories', '0004_auto_20201210_1646', '2020-12-21 13:35:14.131384'),
(29, 'knox', '0001_initial', '2020-12-21 13:35:15.465697'),
(30, 'knox', '0002_auto_20150916_1425', '2020-12-21 13:35:19.463442'),
(31, 'knox', '0003_auto_20150916_1526', '2020-12-21 13:35:23.036718'),
(32, 'knox', '0004_authtoken_expires', '2020-12-21 13:35:23.591930'),
(33, 'knox', '0005_authtoken_token_key', '2020-12-21 13:35:24.202403'),
(34, 'knox', '0006_auto_20160818_0932', '2020-12-21 13:35:28.304714'),
(35, 'knox', '0007_auto_20190111_0542', '2020-12-21 13:35:28.556378'),
(36, 'products', '0006_product_stock', '2020-12-21 13:35:29.652594'),
(37, 'products', '0007_auto_20201210_1654', '2020-12-21 13:35:31.672514'),
(38, 'products', '0008_auto_20201210_1701', '2020-12-21 13:35:33.649131'),
(39, 'sessions', '0001_initial', '2020-12-21 13:35:34.588677'),
(40, 'transactions', '0001_initial', '2020-12-21 13:35:37.091682'),
(41, 'transactions', '0002_transaction_quantity', '2020-12-21 13:35:37.777146'),
(42, 'transactions', '0003_transaction_totalamount', '2020-12-21 13:35:38.179735'),
(43, 'transaction_items', '0001_initial', '2020-12-21 13:35:39.011121'),
(44, 'transaction_items', '0002_auto_20201213_2217', '2020-12-21 13:35:47.997106'),
(45, 'transaction_items', '0003_auto_20201213_2234', '2020-12-21 13:35:49.485226'),
(46, 'transaction_items', '0004_auto_20201214_2223', '2020-12-21 13:35:53.434949'),
(47, 'transaction_items', '0005_auto_20201215_0003', '2020-12-21 13:35:57.426788'),
(48, 'transaction_items', '0006_auto_20201215_1133', '2020-12-21 13:36:01.741130'),
(49, 'transaction_items', '0007_transaction_item_prod_id', '2020-12-21 13:36:02.015539'),
(50, 'transaction_items', '0008_remove_transaction_item_prod_id', '2020-12-21 13:36:02.594671'),
(51, 'transaction_items', '0009_transaction_item_transaction', '2020-12-21 13:36:06.752102'),
(52, 'transaction_items', '0010_remove_transaction_item_price', '2020-12-21 13:36:06.967306'),
(53, 'transaction_items', '0011_auto_20201219_1210', '2020-12-21 13:36:10.316931'),
(54, 'transaction_items', '0012_auto_20201219_1214', '2020-12-21 13:36:14.298134'),
(55, 'transactions', '0004_auto_20201221_0116', '2020-12-21 13:36:14.507453'),
(56, 'transactions', '0005_auto_20201221_2133', '2020-12-21 13:36:14.734537'),
(57, 'transactions', '0006_auto_20201221_2209', '2020-12-21 14:09:41.982126'),
(58, 'categories', '0001_initial', '2020-12-22 15:10:24.915097'),
(59, 'products', '0009_auto_20201222_2310', '2020-12-22 15:10:29.110746'),
(60, 'products', '0010_auto_20201226_1437', '2020-12-26 06:38:05.239930'),
(61, 'products', '0011_product_image', '2020-12-28 12:09:05.349304'),
(62, 'products', '0012_auto_20210115_2328', '2021-01-15 15:28:16.356280'),
(63, 'transactions', '0007_auto_20210115_2328', '2021-01-15 15:28:16.465628'),
(64, 'products', '0013_auto_20210115_2329', '2021-01-15 15:29:23.266316'),
(65, 'suppliers', '0002_auto_20210119_0154', '2021-01-18 17:54:41.519964'),
(66, 'products', '0014_auto_20210119_1054', '2021-01-19 02:54:15.600952'),
(67, 'authtoken', '0001_initial', '2021-03-03 04:25:49.487927'),
(68, 'authtoken', '0002_auto_20160226_1747', '2021-03-03 04:25:49.782045'),
(69, 'authtoken', '0003_tokenproxy', '2021-03-03 04:25:49.799310'),
(70, 'transactions', '0008_alter_transaction_change', '2021-04-10 16:41:42.192863'),
(71, 'transactions', '0009_alter_transaction_change', '2021-04-10 16:51:34.577972'),
(72, 'transactions', '0010_alter_transaction_change', '2021-04-10 16:53:36.943480'),
(73, 'transactions', '0011_alter_transaction_change', '2021-04-10 16:54:13.142650'),
(74, 'transactions', '0012_alter_transaction_change', '2021-04-10 16:58:20.974625'),
(75, 'transactions', '0013_alter_transaction_created_at', '2021-04-11 04:22:11.768219'),
(76, 'activity_log', '0001_initial', '2021-06-23 03:56:18.985289'),
(77, 'activity_log', '0002_auto_20210623_1158', '2021-06-23 03:59:08.891441'),
(78, 'activity_log', '0003_alter_activity_log_logout_at', '2021-06-23 04:00:11.050439'),
(79, 'attendance_log', '0001_initial', '2021-06-24 07:27:29.719349'),
(80, 'activities_log', '0001_initial', '2021-06-24 13:51:13.583907'),
(81, 'transactions', '0014_transaction_creator_account', '2021-06-25 04:58:03.554733'),
(82, 'transactions', '0015_auto_20210625_1329', '2021-06-25 05:29:18.424541'),
(83, 'suppliers', '0003_supplier_supplier_id', '2021-06-26 03:05:34.285752'),
(84, 'activities_log', '0002_log_activity_activity_log_id', '2021-06-26 13:04:10.351519'),
(85, 'attendance_log', '0002_attendance_log_attendance_log_id', '2021-06-26 13:04:10.430471'),
(86, 'categories', '0002_category_category_id', '2021-06-26 13:04:10.467449'),
(87, 'inventories', '0005_inventory_inventory_id', '2021-06-26 13:04:10.529410'),
(88, 'products', '0015_product_product_id', '2021-06-26 13:04:10.571384'),
(89, 'transaction_items', '0013_transaction_item_transaction_item_id', '2021-06-26 13:04:10.617356'),
(90, 'transactions', '0016_transaction_transaction_id', '2021-06-26 13:04:10.690309'),
(91, 'transactions', '0017_transaction_mode_of_payment', '2021-06-28 16:21:44.278611'),
(92, 'products', '0016_alter_product_product_id', '2021-07-07 02:46:14.720244'),
(93, 'products', '0017_alter_product_product_id', '2021-07-07 02:49:03.636627'),
(94, 'activities_log', '0003_alter_log_activity_activity_log_id', '2021-07-07 03:01:28.122510'),
(95, 'attendance_log', '0003_alter_attendance_log_attendance_log_id', '2021-07-07 03:01:28.238486'),
(96, 'inventories', '0006_alter_inventory_inventory_id', '2021-07-07 03:01:28.366352'),
(97, 'suppliers', '0004_alter_supplier_supplier_id', '2021-07-07 03:01:28.488319'),
(98, 'transaction_items', '0014_alter_transaction_item_transaction_item_id', '2021-07-07 03:01:28.616045'),
(99, 'transactions', '0018_alter_transaction_transaction_id', '2021-07-07 03:01:28.739018'),
(100, 'attendance_log', '0004_alter_attendance_log_attendance_log_id', '2021-07-11 06:30:50.884643'),
(101, 'attendance_log', '0005_alter_attendance_log_attendance_log_id', '2021-07-11 06:33:49.449906'),
(102, 'attendance_log', '0006_alter_attendance_log_attendance_log_id', '2021-07-11 06:36:16.093561'),
(103, 'activities_log', '0004_alter_log_activity_activity_log_id', '2021-07-11 06:39:26.112305'),
(104, 'categories', '0003_alter_category_category_id', '2021-07-11 06:39:26.194349'),
(105, 'inventories', '0007_alter_inventory_inventory_id', '2021-07-11 06:39:26.217334'),
(106, 'products', '0018_alter_product_product_id', '2021-07-11 06:39:26.233324'),
(107, 'suppliers', '0005_alter_supplier_supplier_id', '2021-07-11 06:39:26.250314'),
(108, 'transaction_items', '0015_alter_transaction_item_transaction_item_id', '2021-07-11 06:39:26.273328'),
(109, 'transactions', '0019_alter_transaction_transaction_id', '2021-07-11 06:39:26.305354'),
(110, 'attendance_log', '0007_alter_attendance_log_attendance_log_id', '2021-07-11 06:48:53.914546'),
(111, 'categories', '0004_alter_category_category_id', '2021-07-11 06:48:53.982533'),
(112, 'inventories', '0008_alter_inventory_inventory_id', '2021-07-11 06:48:54.079540'),
(113, 'products', '0019_alter_product_product_id', '2021-07-11 06:48:54.190547'),
(114, 'suppliers', '0006_alter_supplier_supplier_id', '2021-07-11 06:48:54.272535'),
(115, 'transaction_items', '0016_alter_transaction_item_transaction_item_id', '2021-07-11 06:48:54.368540'),
(116, 'transactions', '0020_alter_transaction_transaction_id', '2021-07-11 06:48:54.458577'),
(117, 'transactions', '0021_alter_transaction_mode_of_payment', '2021-07-11 15:10:06.178347'),
(118, 'transactions', '0022_alter_transaction_creator', '2021-07-11 15:27:49.086573'),
(119, 'attendance_log', '0008_alter_attendance_log_logout_at', '2021-07-19 04:55:40.311634');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('1lpzpwe6pgl808icf5divwe6drudrimb', '.eJxVjDsOwjAQBe_iGlmOs-sPJT1niDbeDQ4gW4qTCnF3iJQC2jcz76UG2tY8bE2WYWZ1VladfreR0kPKDvhO5VZ1qmVd5lHvij5o09fK8rwc7t9Bppa_tYfkEMX6yAmJIkcXJjZOIMTe4-SpgwQ2IJhJQEbo0LiOIhnrDfa9en8A1Hw28Q:1lxqb1:OObnnaTRvrDWy0Qda_p7IxEfzgD7WW_Yhg5_5O2kGrs', '2021-07-12 12:42:39.447166'),
('4zcskucps09gvkevcd0ly5u7xt91l98z', '.eJxVjDsOwjAQBe_iGlmOs-sPJT1niDbeDQ4gW4qTCnF3iJQC2jcz76UG2tY8bE2WYWZ1VladfreR0kPKDvhO5VZ1qmVd5lHvij5o09fK8rwc7t9Bppa_tYfkEMX6yAmJIkcXJjZOIMTe4-SpgwQ2IJhJQEbo0LiOIhnrDfa9en8A1Hw28Q:1lvu1P:n690IxtEmfEQQyHh3CU7mBenbN8a2I_vaoOcaYpWv2Q', '2021-07-07 03:57:51.291303'),
('573eshmhto9v7r25sw2gd4ngdh7crk22', '.eJxVjDsOwjAQBe_iGlmOs-sPJT1niDbeDQ4gW4qTCnF3iJQC2jcz76UG2tY8bE2WYWZ1VladfreR0kPKDvhO5VZ1qmVd5lHvij5o09fK8rwc7t9Bppa_tYfkEMX6yAmJIkcXJjZOIMTe4-SpgwQ2IJhJQEbo0LiOIhnrDfa9en8A1Hw28Q:1m2CG8:zgFc8erW3aju75BTFWW8ZbSUXHeCvIY0T5CX3QmqwqY', '2021-07-24 12:39:04.462043'),
('8fz36h6jmzqp5dawtyxnw2ycowli8qhy', '.eJxVjMsOwiAQRf-FtSF0xvJw6b7fQAYGpGogKe3K-O_apAvd3nPOfQlP21r81tPiZxYXAeL0uwWKj1R3wHeqtyZjq-syB7kr8qBdTo3T83q4fweFevnWGRCAMZ6ztoCIUQXWCZRzI44WOLJVaGKGbAeFqDMQWaccEw5mNEa8P8VzNuM:1lIDta:eFMOpJw6FX5pnotuYTaPDi2krA6t3wyAMuhvnUpA5P0', '2021-03-19 17:05:46.632225'),
('8upq23lgwodag4zz1bs6fd616gdmu6l1', '.eJxVjMsOwiAQRf-FtSF0xvJw6b7fQAYGpGogKe3K-O_apAvd3nPOfQlP21r81tPiZxYXAeL0uwWKj1R3wHeqtyZjq-syB7kr8qBdTo3T83q4fweFevnWGRCAMZ6ztoCIUQXWCZRzI44WOLJVaGKGbAeFqDMQWaccEw5mNEa8P8VzNuM:1krjKp:Mj2sawFQUBgdoD6NulGdYMaW1I2MMGSuG5ZHcwnAwMo', '2021-01-05 15:12:23.033784'),
('iouj8nhv1za16fm5k9euslgvtruiqkko', '.eJxVjDsOwjAQBe_iGlmOs-sPJT1niDbeDQ4gW4qTCnF3iJQC2jcz76UG2tY8bE2WYWZ1VladfreR0kPKDvhO5VZ1qmVd5lHvij5o09fK8rwc7t9Bppa_tYfkEMX6yAmJIkcXJjZOIMTe4-SpgwQ2IJhJQEbo0LiOIhnrDfa9en8A1Hw28Q:1lqSor:iJ3LBfscBgR3b0uDNp8MuEp3SOXTiq46mAiGZnCbokM', '2021-06-22 03:54:25.883208'),
('m4o8qvviwj98p137y3tcgxm1cp4u37c4', '.eJxVjDsOwjAQBe_iGlmOs-sPJT1niDbeDQ4gW4qTCnF3iJQC2jcz76UG2tY8bE2WYWZ1VladfreR0kPKDvhO5VZ1qmVd5lHvij5o09fK8rwc7t9Bppa_tYfkEMX6yAmJIkcXJjZOIMTe4-SpgwQ2IJhJQEbo0LiOIhnrDfa9en8A1Hw28Q:1laukp:BFHvVHfRWgv4llBl9QVNQyDjBuYWdpTlZoyehY_JfRc', '2021-05-10 06:29:59.157799'),
('oktn9vwiszy7syd618z70iclnru2ypd2', '.eJxVjDsOwjAQBe_iGlmOs-sPJT1niDbeDQ4gW4qTCnF3iJQC2jcz76UG2tY8bE2WYWZ1VladfreR0kPKDvhO5VZ1qmVd5lHvij5o09fK8rwc7t9Bppa_tYfkEMX6yAmJIkcXJjZOIMTe4-SpgwQ2IJhJQEbo0LiOIhnrDfa9en8A1Hw28Q:1lVGjn:dkrZEAIK2cyRmfuh9vffhMZkjoCrbdZuAWjCMoo9rr4', '2021-04-24 16:45:35.295150'),
('pcsztyx8lei1aigb9wx13o0n3vimlkc4', '.eJxVjMsOwiAQRf-FtSF0xvJw6b7fQAYGpGogKe3K-O_apAvd3nPOfQlP21r81tPiZxYXAeL0uwWKj1R3wHeqtyZjq-syB7kr8qBdTo3T83q4fweFevnWGRCAMZ6ztoCIUQXWCZRzI44WOLJVaGKGbAeFqDMQWaccEw5mNEa8P8VzNuM:1lGNYt:GhD4_P-vLPQdrqnZNCs1ooXxeBiXkZT1E2Ep8QsxPdA', '2021-03-14 15:00:47.816135'),
('tumbir47srxx0r2hkubihfddt82b6tow', '.eJxVjDsOwjAQBe_iGlmOs-sPJT1niDbeDQ4gW4qTCnF3iJQC2jcz76UG2tY8bE2WYWZ1VladfreR0kPKDvhO5VZ1qmVd5lHvij5o09fK8rwc7t9Bppa_tYfkEMX6yAmJIkcXJjZOIMTe4-SpgwQ2IJhJQEbo0LiOIhnrDfa9en8A1Hw28Q:1m3I8b:Yn6cj940AUv346nR4mapVcHYEHLXURu4A1n9LcYA98k', '2021-07-27 13:07:49.005135'),
('wi8hd8y1q0fcxzacfteajlsdbjin34h2', '.eJxVjMsOwiAQRf-FtSF0xvJw6b7fQAYGpGogKe3K-O_apAvd3nPOfQlP21r81tPiZxYXAeL0uwWKj1R3wHeqtyZjq-syB7kr8qBdTo3T83q4fweFevnWGRCAMZ6ztoCIUQXWCZRzI44WOLJVaGKGbAeFqDMQWaccEw5mNEa8P8VzNuM:1kyc0O:Mkq2jnrBR01tfqonA2zQ-A9z0gbcKU55plYoJX5Z2a4', '2021-01-24 14:47:44.376534'),
('xfj69h2xffbzk3dhp6cxw6hbp7w4d9kj', '.eJxVjMsOwiAQRf-FtSF0xvJw6b7fQAYGpGogKe3K-O_apAvd3nPOfQlP21r81tPiZxYXAeL0uwWKj1R3wHeqtyZjq-syB7kr8qBdTo3T83q4fweFevnWGRCAMZ6ztoCIUQXWCZRzI44WOLJVaGKGbAeFqDMQWaccEw5mNEa8P8VzNuM:1lOGOM:UXhaLtjKVcJrsW3QygtrkAQe_fQRtRGgfPkgI6fp6Ok', '2021-04-05 08:58:30.897157');

-- --------------------------------------------------------

--
-- Table structure for table `inventories_inventory`
--

CREATE TABLE `inventories_inventory` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `new_stock` int(11) NOT NULL,
  `inventory_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventories_inventory`
--

INSERT INTO `inventories_inventory` (`id`, `created_at`, `product_id`, `supplier_id`, `new_stock`, `inventory_id`) VALUES
(1, '2020-12-21 13:57:54.555438', 11, 5, 110, 'None'),
(2, '2020-12-21 14:03:23.766422', 2, 2, 110, 'None'),
(3, '2020-12-25 14:42:52.488733', 2, 2, 0, 'None'),
(4, '2020-12-25 18:24:47.830711', 3, 2, 10, 'None'),
(5, '2020-12-25 18:26:59.821984', 3, 2, 10, 'None'),
(6, '2020-12-26 03:48:44.111652', 3, 2, 10, 'None'),
(7, '2020-12-26 03:55:24.396432', 3, 2, 110, 'None'),
(12, '2020-12-29 05:49:22.556666', 10, 2, 110, 'None'),
(13, '2020-12-30 17:38:38.149319', 2, 1, 120, 'None'),
(15, '2021-01-03 17:00:13.423589', 2, 1, 12, 'None'),
(16, '2021-01-03 17:05:08.442194', 2, 1, 120, 'None'),
(17, '2021-01-03 17:27:17.522304', 1, 2, 10, 'None'),
(18, '2021-01-03 17:27:59.674056', 3, 2, 30, 'None'),
(19, '2021-01-03 17:45:07.661941', 2, 1, 10, 'None'),
(20, '2021-01-03 17:45:22.496270', 1, 1, 120, 'None'),
(21, '2021-01-03 17:45:39.318380', 11, 1, 120, 'None'),
(22, '2021-01-03 17:45:51.574608', 3, 2, 101, 'None'),
(23, '2021-01-04 06:23:38.313975', 11, 2, 101, 'None'),
(30, '2021-01-17 07:16:15.461606', 17, 4, 10, 'None'),
(31, '2021-01-19 03:18:12.979686', 18, 11, 15, 'None'),
(32, '2021-01-19 03:23:04.610941', 19, 12, 10, 'None'),
(34, '2021-01-19 03:32:50.324706', 21, 14, 15, 'None'),
(35, '2021-01-19 03:37:06.611297', 22, 15, 15, 'None'),
(36, '2021-01-19 03:44:47.671157', 23, 16, 15, 'None'),
(37, '2021-01-19 03:50:24.427237', 24, 18, 15, 'None'),
(38, '2021-01-19 03:53:01.731399', 25, 19, 15, 'None'),
(39, '2021-01-19 03:56:10.001255', 26, 20, 15, 'None'),
(40, '2021-01-19 03:59:16.353875', 27, 21, 15, 'None'),
(41, '2021-01-19 04:49:27.475364', 28, 22, 15, 'None'),
(42, '2021-01-19 04:51:54.405826', 29, 23, 10, 'None'),
(43, '2021-01-19 04:53:58.920321', 30, 24, 10, 'None'),
(44, '2021-01-19 04:56:18.246957', 31, 23, 10, 'None'),
(45, '2021-01-19 04:59:00.091349', 32, 25, 10, 'None'),
(50, '2021-01-20 16:55:29.341843', 35, 6, 10, 'None'),
(51, '2021-01-20 16:57:13.278683', 35, 21, 10, 'None'),
(52, '2021-03-22 09:20:10.412381', 28, 23, 11, 'None'),
(53, '2021-03-22 09:20:47.592838', 32, 20, 110, 'None'),
(54, '2021-04-22 05:05:40.091883', 36, 8, 45, 'None'),
(55, '2021-04-22 05:08:20.149922', 37, 11, 12, 'None'),
(56, '2021-04-22 05:14:22.946903', 38, 11, 12, 'None'),
(57, '2021-04-22 18:18:22.031376', 39, 23, 12, 'None'),
(58, '2021-04-24 07:08:21.494907', 10, 6, 4, 'None'),
(59, '2021-04-24 07:56:30.402600', 2, 4, 19, 'None'),
(60, '2021-04-24 07:59:02.199511', 18, 12, 10, 'None'),
(61, '2021-04-24 07:59:42.441873', 11, 8, 10, 'None'),
(62, '2021-04-24 08:04:15.414299', 10, 12, 1, 'None'),
(63, '2021-04-24 08:04:24.862565', 17, 4, 9, 'None'),
(64, '2021-04-24 08:04:42.758781', 3, 4, 9, 'None'),
(65, '2021-04-24 08:04:57.273096', 17, 8, 9, 'None'),
(66, '2021-04-24 08:11:53.286883', 1, 6, 110, 'None'),
(67, '2021-04-24 08:12:04.434435', 1, 5, 110, 'None'),
(68, '2021-04-24 08:13:02.591638', 1, 7, 110, 'None'),
(69, '2021-04-24 08:13:27.307095', 2, 7, 0, 'None'),
(70, '2021-04-24 08:15:13.091379', 17, 7, 0, 'None'),
(71, '2021-04-24 08:16:28.146975', 17, 7, 5, 'None'),
(72, '2021-04-24 08:17:15.318549', 17, 7, 10, 'None'),
(73, '2021-04-24 08:17:22.530448', 2, 7, 10, 'None'),
(74, '2021-04-24 08:19:38.886437', 10, 7, 10, 'None'),
(75, '2021-04-24 08:19:57.138039', 10, 1, 10, 'None'),
(76, '2021-04-24 08:21:30.105845', 3, 1, 10, 'None'),
(77, '2021-04-24 08:21:40.763446', 4, 1, 10, 'None'),
(78, '2021-04-24 08:28:19.457369', 19, 10, 10, 'None'),
(79, '2021-04-24 08:31:21.571552', 11, 7, 10, 'None'),
(80, '2021-04-24 08:32:48.960294', 10, 6, 10, 'None'),
(81, '2021-04-24 08:33:17.434165', 40, 7, 312, 'None'),
(82, '2021-04-24 08:35:54.187966', 11, 7, 10, 'None'),
(83, '2021-04-24 08:37:26.634839', 41, 6, 12, 'None'),
(84, '2021-04-24 09:43:55.621182', 1, 1, 10, 'None'),
(85, '2021-04-24 09:51:27.919074', 18, 6, 10, 'None'),
(86, '2021-04-24 09:51:50.207752', 19, 7, 10, 'None'),
(87, '2021-04-25 06:41:18.354176', 42, 6, 12, 'None'),
(88, '2021-06-18 11:19:33.643607', 43, 19, 12, 'None'),
(89, '2021-06-18 12:27:06.742472', 44, 17, 344, 'None'),
(90, '2021-06-30 04:00:32.741857', 45, 18, 56, 'II21-0630-0001'),
(91, '2021-06-30 05:02:27.449838', 2, 6, 45, 'II21-0630-0002'),
(92, '2021-06-30 07:43:45.608960', 4, 7, 400, 'II21-0630-0003'),
(93, '2021-07-02 13:16:24.891933', 31, 24, 12, 'II21-0702-0001'),
(94, '2021-07-03 08:50:39.254294', 41, 28, 11, 'II21-0703-0001'),
(95, '2021-07-03 17:43:15.051915', 31, 18, 1101, 'II21-0703-0002'),
(96, '2021-07-03 17:43:59.191982', 31, 22, 90, 'II21-0703-0003'),
(97, '2021-07-03 17:45:53.869170', 31, 20, 700, 'II21-0703-0004'),
(98, '2021-07-03 17:46:29.766799', 30, 19, 677, 'II21-0703-0005'),
(99, '2021-07-03 18:00:52.233260', 31, 18, 11, 'II21-0703-0006'),
(100, '2021-07-03 18:01:09.725157', 27, 19, 190, 'II21-0703-0007'),
(101, '2021-07-03 18:02:56.526747', 42, 23, 6147, 'II21-0703-0008'),
(102, '2021-07-03 18:03:51.029714', 48, 32, 647, 'II21-0703-0009'),
(106, '2021-07-03 18:36:47.866779', 50, 29, 12, 'II21-0703-0013'),
(108, '2021-07-03 18:42:33.563545', 52, 29, 34, 'II21-0703-0015'),
(109, '2021-07-03 18:43:15.166268', 53, 25, 12, 'II21-0703-0016'),
(110, '2021-07-03 18:44:12.169012', 48, 25, 34, 'II21-0703-0017'),
(112, '2021-07-04 04:02:49.860118', 54, 25, 56, 'II21-0704-0001'),
(113, '2021-07-04 04:03:24.027987', 55, 32, 450, 'II21-0704-0002'),
(114, '2021-07-04 04:04:21.588649', 56, 29, 59, 'II21-0704-0003'),
(115, '2021-07-04 12:10:40.853261', 57, 29, 12, 'II21-0704-0004'),
(116, '2021-07-04 12:11:11.268426', 58, 29, 234, 'II21-0704-0005'),
(118, '2021-07-04 12:12:05.293701', 59, 29, 45, 'II21-0704-0007'),
(119, '2021-07-04 17:01:43.765460', 60, 32, 56, 'II21-0704-0008'),
(122, '2021-07-07 03:37:16.714328', 63, 30, 450, 'None'),
(125, '2021-07-09 18:04:27.991437', 61, 32, 789, 'None');

-- --------------------------------------------------------

--
-- Table structure for table `knox_authtoken`
--

CREATE TABLE `knox_authtoken` (
  `digest` varchar(128) NOT NULL,
  `salt` varchar(16) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL,
  `expiry` datetime(6) DEFAULT NULL,
  `token_key` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knox_authtoken`
--

INSERT INTO `knox_authtoken` (`digest`, `salt`, `created`, `user_id`, `expiry`, `token_key`) VALUES
('d3f299e83b3435d32f4bfa3998094100c46faa016a52486e526ccdffade311914aea386b567bd4cd8bba53be67e0fd403727e43846d1a8cd6fbbb02fdef56760', '93f1fe582565ea27', '2021-07-24 12:28:19.762261', 2, '2021-07-24 22:28:19.761261', '45bb066c');

-- --------------------------------------------------------

--
-- Table structure for table `products_product`
--

CREATE TABLE `products_product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `product_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products_product`
--

INSERT INTO `products_product` (`id`, `name`, `description`, `price`, `stock`, `category_id`, `supplier_id`, `image`, `product_id`) VALUES
(1, 'Kenda Ibex K774 Rear Tire', 'Tire Specifications:\nSpeed/load rating: 68M.\nOverall diameter (inches): 27.30.\nSection width (inches): 5.30.\nMaximum load (pounds): 693 @ 20 PSI.\nTread depth (mm): 16.00.\nWeight (pounds): 13.79.\nConstruction: Tube type.', '5900.00', 647, 36, 22, 'KENDA_IBEX_K774_REAR_TIRE.jpeg', 'PI21-0626-0001'),
(2, 'JD Jetting Keihin PWK Carburetor', 'Designed for 2-stroke applications ONLY.\nJD Jetting Kit included.\nThe carb also includes extra main jets and both the red and blue JD needles.\nThis is a GREAT deal, considering competitive carbs at a cost of twice as much or more!\nNote: Carburetors cannot be returned after fuel has been run through them due to shipping regulations. Please check your bike thoroughly to make sure the carburetor is the solution you need before you make your purchase.', '13470.53', 1648, 4, 23, 'Carburetor.jpeg', 'PI21-0626-0004'),
(3, 'Yoshimura R-77 Full System Exhaust', 'The popular R-77 offers outstanding performance, thanks to being developed in the heat of competition. It features a trapezoidal design, which allows a large volume of packing material and in turn delivers top performance. The R-77 muffler\'s front cap is MIG-welded, while the end cap is riveted using high-end 304-L polished stainless steel rivets and bands.', '26376.23', 67, 8, 6, 'Yoshimura_R-77_Full_System_Exhaust_zfVwlOb.jpeg', 'PI21-0626-0002'),
(4, 'Lextek CP Full System Exhaust Kit', 'Lextek Headers are constructed from 304 stainless steel that\'s highly polished with a brushed finish.\n\nLighter, free flowing performance headers.\nQuality welding throughout.\nCompatible with standard O2 sensors.\nCompatible with most Lextek Universal Silencers (sold separately).\nManufacturer\'s lifetime warranty.', '11844.43', 378, 5, 7, 'Lextek_CP_Full_System_Exhaust_Kit.jpeg', 'PI21-0626-0004'),
(10, 'Galfer Front Brake Line Kit', 'Instructions for most applications.Virgin PTFE.64 lines of steel braid.Pre-positioned banjos for easy installation, although adjustable as needed by hand.Made in the U.S.A.Lifetime warranty.', '1491.89', 248, 9, 9, 'Galfer_Front_Brake_Line_Kit.jpeg', 'PI21-0626-0003'),
(11, 'Sunstar 520 Steel Sprocket And Chain Kit', 'Sunstar Steel Rear Sprocket:\n\nManufactured using only the highest quality 1045 high-carbon steel.\nExclusive heat treatment for added strength and wear resistance.\nMost are zinc plated and have a baked-on durable paint process for corrosion resistance.\nThe strongest, longest lasting steel replacement sprocket available.', '5473.20', 356, 8, 20, 'Sunstar_520_Steel_Sprocket_And_Chain_Kit.jpeg', 'PI21-0630-0002'),
(17, 'KTM PowerParts Akrapovic Evolution Header', '\"READY TO RACE\" - for KTM, these three words are far more than a simple slogan. They stand for the entire company philosophy of developing vehicles that can without any modifications comprehensively assert themselves in any race. Direct from the dealer onto the track and into the battle for victory.\n\nTitanium header.\nNote: For closed course competition use ONLY.', '49228.20', 274, 5, 4, 'KTM_PowerParts_Akrapovic_Evolution_Header.jpeg', 'None'),
(18, 'M4 RM1 Full System Exhaust', 'Midpipe is designed to give exhaust gases optimum flow and improved power characteristics.', '33529.48', 27, 5, 11, 'X001-Y004.jpeg', 'PI21-0630-0002'),
(19, 'Driven Racing 520 Steel Sprocket And Chain Kit', 'Designed using Driven Racing\'s proprietary EST Technology.', '7255.22', 36, 8, 12, 'Driven_Racing_520_Steel_Sprocket_And_Chain_Kit.jpeg', 'None'),
(21, 'EBC SRK Complete', 'Kits include DuPont Kevlar fiber-lined friction plates, steel separator plates and springs made to provide a street-going kit for high performance street and road race use.', '7224.64', 28, 4, 14, 'EBC_SRK_Complete_Clutch_Rebuild_Kit.jpeg', 'None'),
(22, 'ASV C5 Series CNC Machined Brake And Clutch Lever Kit', 'CNC-machined from 6061 billet aluminum.', '10663.62', 25, 15, 15, 'C5_Series_CNC_Machined_Brake_And_Clutch_Lever_Kit.jpeg', 'None'),
(23, 'Battery Tender Jr. Battery Charger', 'Perfect for all lead-acid, flooded or sealed maintenance free batteries (AGM and gel cell).', '1761.46', 30, 16, 16, 'Battery_Tender_Jr._Battery_Charger.jpeg', 'None'),
(24, 'SKF Complete Fork Seal & Wiper Kit', 'SKF oil seals and SKF wiper seals developed to achieve superior sealing performance.', '3833.87', 29, 18, 18, 'SKF_Complete_Fork_Seal__Wiper_Kit.jpeg', 'None'),
(25, 'Bridgestone Battlax Racing Street RS11 Tire Combo', 'A new molecular approach of fine carbon particles in terms of compounding has improved the bite to the road surface and enhanced the grip characteristics of the compound itself.', '15235.96', 29, 19, 19, 'Bridgestone_Battlax_Racing_Street_RS11_Tire_Combo.jpeg', 'None'),
(26, 'Slipstreamer SS-20 Stealth Windshield', 'Flowing sculptured curves and excellent protection with anodized aluminum hardware.', '13010.68', 28, 20, 20, 'Slipstreamer_SS-20_Stealth_Windshield.jpeg', 'PI21-0630-0002'),
(27, 'Puig Front and Rear Axle Race Sliders', 'A practical high-resistance front fork \\ swingarm protector with a racing look for your motorcycle.\n\nManufactured from a nylon block.\nProtects forks \\ swingarm.\nWeight of 265 grams (each set).\nSold as a set.', '6394.96', 220, 21, 21, 'Puig_Front_and_Rear_Axle_Race_Sliders.jpeg', 'PI21-0703-0002'),
(28, 'Moose Hour Meter', 'Hour meter keeps track of important maintenance times for oil changes, valve adjustments, spark plugs and more.\n\nUsable with any gas engine.\nRecords and displays up to 9,999.9 hours automatically roll over.\nPeel and stick or attached with supplied hardware.\nConnects to spark plug wire, so no batteries are needed.\nSafely and completely encased in 100% epoxy.', '1811.21', 28, 22, 22, 'Moose_Hour_Meter.jpeg', 'None'),
(29, 'Honda Genuine Accessories Top Case With Mount', 'Honda Genuine Accessories Top Case:\nTop Case features quick-detach mount and a \"1 Key System.\"\n35 liter volume capacity.\nMaximum allowable cargo weight of 13.2 pounds.\nHonda Genuine Accessories P/N: 08L71-MJP-A60.', '8908.37', 20, 23, 23, 'Honda_Genuine_Accessories_Top_Case_With_Mount.jpeg', 'None'),
(30, 'RAM Mounts X-Grip Holder With Motorcycle Stem Base With Ball Kit', 'The included X-Grip cradle has a clean and clever four leg design that sports great holding power without hiding your phone behind foam pads and plastic.', '2616.54', 708, 24, 24, 'RAM_Mounts_X-Grip_Holder_With_Motorcycle_Stem_Base_With_Ball_Kit.jpeg', 'PI21-0703-0002'),
(31, 'OnGuard Beast Chain With X2 Padlock', 'Hexagonal and square links present more hardened surfaces than round links making sawing and cutting virtually impossible.', '7770.86', 1915, 25, 25, 'OnGuard_Beast_Chain_With_X2_Padlock.jpeg', 'PI21-0703-0002'),
(32, 'KTM PowerParts Outdoor Motorcycle Covers', '\"READY TO RACE\" - for KTM, these three words are far more than a simple slogan. They stand for the entire company philosophy of developing vehicles that can without any modifications comprehensively assert themselves in any race. Direct from the dealer onto the track and into the battle for victory.\n\nKTM outdoor bike cover.\nMade from an exclusive, pigmented fabric.\nSold individually.\nKTM PowerParts P/N:', '4352.61', 243, 10, 4, 'KTM_PowerParts_Outdoor_Motorcycle_Cover.jpeg', 'PI21-0704-0003'),
(35, 'Yoshimura RS-9T Full System Exhausts', 'Insanely light at 4.6 pounds.\nIncludes a carbon fiber heel guard.\nSignificant power and torque gains across the spectrum.\n18 mm Lambda / O2 sensor bung.\nMuffler tucked under rear seat body cowling to minimize crash damage.\nRS-9T muffler allows the use of five sound insert options to customize power delivery and sound reduction.', '40246.10', 30, 5, 6, 'Yoshimura_RS-9T_Full_System_Exhaust.jpeg', 'None'),
(36, 'Puig Touring II Windscreen', 'Touring II windshield for non-round headlight model bikes. Improves the aerodynamics of your bike and sets it apart from the others.', '6776.15', 90, 20, 21, 'Puig_Touring_II_Windscreen.jpeg', 'None'),
(37, 'Adjustable Brake Clutch Levers', 'Yana Shiki Adjustable Brake/Clutch Levers-combo includes ONE Yana Shiki Brake Lever and ONE Yana Shiki Clutch Lever with knuckles for both in your choice of either Shorty or Standard lengths and an array of colors with the following features:', '6808.03', 23, 15, 6, 'Adjustable_Brake_Clutch_Levers.jpeg', 'PI21-0704-0003'),
(38, 'Koso Apollo Heated Grips', 'Apollo Heated Grips 7/8\" + 1\" handlebar for twist throttle applications.\nIntegrated thumb switch designed for easy installation and setting.\nAllows the user to change the setting without removing the hands from the handlebar for a safer ride.\n\"Plug & Play\" wiring connections to shorten the installation time.\nWide temperature settings for cold weather conditions.\nLow battery warning protect to ensure the motorcycle have enough power to start.\nFive color LED indicators for the rider to quickly know in which heat level the grips are set.', '7049.04', 146, 15, 28, 'Apollo_Heated_Grips.jpeg', 'PI21-0702-0002'),
(39, 'CRG Arrow Bar End Mirror', 'Unique multi-position mounting system.\nAerodynamic design.\nBillet aluminum construction.\nAutomotive quality convex mirror glass.\nAnodized aluminum with stainless steel hardware.\nUniversal right or left fitment.\nMount: 7/8\" bars or optional CRG Bar End Internal Adapter Mount (sold separately).', '5833.76', 24, 17, 24, 'Arrow_Bar_End_Mirror.jpeg', 'None'),
(40, 'C5 Series CNC Machined Brake And Clutch Lever Kit', 'CNC-machined from 6061 billet aluminum.\nUnbreakable pivot design.\nUses precision sealed bearings in pivot.\nAdjustable reach with four inches of range.\nMicro-adjustable reach with 180 increments.\nLaser-engraved ASV logo.\nFive-year unconditional guarantee.\nMade in the U.S.A.', '10146.40', 621, 15, 15, 'C5_Series_CNC_Machined_Brake_And_Clutch_Lever_Kit_ji1ehmo.jpeg', 'PI21-0706-0001'),
(41, 'F3 Series Forged Brake And Clutch Lever Kit', 'Unbreakable pivot design.\nAdjustable reach with four inches of range.\nMicro-adjustable reach with 180 increments.\nForged 6061 aluminum alloy.\nUses precision sealed bearings in pivot.\nChrome silicon high-tension spring.\nStainless steel fasteners.', '9726.53', 34, 15, 15, 'F3_Series_Forged_Brake_And_Clutch_Lever_Kit.jpeg', 'PI21-0702-0002'),
(42, 'BikeMaster Folding Bar End Mirrors', 'asd asd asd', '2873.65', 1, 4, 30, 'Folding_Bar_End_Mirrors.jpeg', 'PI21-0703-0002'),
(43, 'Garmin eTrex 22x', 'Enhanced ergonomics make this GPS receiver a pleasure to grip, yet this unit retains its legendary toughness and waterproof protection. A 25-hour battery life ensures that you don\'t get left in the woods while hiking, biking, or camping, and the AA battery compatibility makes packing extra juice for extended journeys easier than ever. A wide variety of compatible Garmin mounts (sold separately) attach to ATVs, boats, bicycles, and cars alike.', '10806.72', 330, 24, 32, 'Garmin_-_Etrexx_22x.jpeg', 'PI21-0702-0002'),
(44, 'Garmin GPS MAP 66i', 'The Garmin GPS MAP 66i is our ticket to staying connected to the world, even in the depths of the backcountry wilderness. Satellite communication enables two-way messaging and LiveTrack location sharing to keep our loved ones informed of our whereabouts, and with a subscription to inReach we can trigger an SOS to the GEOS 24/7 emergency response team in case of emergency.', '32421.24', 84, 24, 30, 'Garmin-GPS_MAP_66i.jpeg', 'PI21-0702-0001'),
(45, 'Garmin GPSMAP 64scx', 'Explore, document, photograph, connect, and share with the rugged Garmin GPSMAP 64sc. This handheld navigator features a 3-axis tilt-compensated compass, barometric altimeter, and 8-megapixel autofocus camera that automatically geotags photos with coordinates. The GPSMAP 64sc also features a 2.6-inch sunlight-readable color screen and a high-sensitivity GPS and GLONASS receiver with a quad-helix antenna for superior reception and clear visuals. A built-in worldwide basemap with shaded relief enables you to navigate anywhere with ease and precision.', '24315.79', 179, 24, 30, 'GPSMAP_64scx.jpeg', 'PI21-0630-0001'),
(46, 'Trail Tech Motorcycle Indicator Light Dashboard', 'With eight different indicators included, customize your dashboard your own way.\nSet up low beam, high beam, turn arrow left, turn arrow right, turn arrow left and right (hazard), oil, Neutral, and/or Reverse indicators.\nAttaches to Trail Tech Vapor / Striker and installs easily on the triple clamp of most motorcycles.\nIncludes mounting bracket.', '3239.48', 24, 4, 11, 'Motorcycle_Indicator_Light_Dashboard.jpeg', 'PI21-0703-0001'),
(47, 'RAM Mounts Quick-Grip XL Phone Holder', 'Spring-loaded holder features adjustable side supports that provide a secure fit for a variety of large phones and other devices; easily insert and remove your phone with one hand.\nMade of powder-coated, marine-grade aluminum and high-strength composite for durability and reliability in the most demanding environments.\nBacked by a lifetime warranty.', '3106.55', 294, 24, 24, 'Quick-Grip_XL_Phone_Holder.jpeg', 'PI21-0703-0002'),
(48, 'RAM Mounts Hand Gun Holster Handlebar Mount', 'Safe, secure, and fully adjustable mounting solutions are available from RAM that are so durable and versatile that you\'ll wonder how you got along without them.\nYou already know RAM makes some of the best electronics mounts in the world. Now you can take advantage of the same revolutionary design for your side arm.\nThis mount accommodates rails from 0.5\" To 1.25\" in diameter.', '2701.27', 72, 24, 24, 'RAM_Mounts_-_Hand_gun_holster_handlebar_mount.jpeg', 'PI21-0703-0003'),
(49, 'CRG RC2 Brake / Clutch Lever Combo', '6061-T6 aluminum CNC-machined billet construction.\n6 on-the-fly adjustable positions.\nStandard or \"shorty\" lever lengths.\nScuff resistant, black Delrin, replaceable tip.\nIntegrated, black plated, CNC-machined, Torx hardware.\nLaser-etched graphics.\nApplications for most late model sportbikes.', '7648.30', 24, 15, 2, 'RC2_Brake__Clutch_Lever_Combo.jpeg', 'PI21-0703-0004'),
(50, 'BikeMaster Replacement Mirror', 'At BikeMaster, they understand the quality and performance that motorcycle owners demand. They also understand that quality should be affordable. Not just for professional riders and mechanics, but for the everyday rider / mechanic as well. That is why BikeMaster continues to bring that level of quality and performance to all riders with their complete line of tools, parts and accessories at affordable prices.', '1092.07', 24, 9, 29, 'Replacement_Mirror.jpeg', 'PI21-0703-0005'),
(51, 'Vortex V3 2.0 Brake / Clutch Lever Combo', 'Machined from solid, aerospace-grade billet aluminum.\nSix-way adjustable.\nLarge radius lever surface.\nImproved ergonomics and rider comfort.\nLaser-engraved Vortex logo.\nAvailable in short and long versions.\nNotes: Long levers are the approximate length of the stock levers on most models. Knuckle shown on lever is for illustration purposes only and may not be present on some models based on fitment.', '6861.53', 67, 15, 28, 'V3_2.0_Brake__Clutch_Lever_Combo.jpeg', 'PI21-0703-0006'),
(52, 'Yoshimura RS-9T Full System Exhaust', 'Introducing the ultimate racing exhaust system, the RS-9T high mount for the Honda Grom. Crafted in full titanium made from premium-grade Japanese titanium for significant weight reduction and heat dissipation. Beautiful matte carbon fiber details. If you want to capture every advantage on the race track you need this system.', '32910.00', 112, 5, 6, 'Yoshimura_RS-9T_Full_System_Exhaust_r6lzSAG.jpeg', 'PI21-0703-0007'),
(53, 'Two Brothers M-2 Black Series Full System Exhaust – Shorty', 'The Two Brothers Racing Black Series exhausts downplays the raw power these systems unleash. Dyno tuned and track tested, like all TBR exhausts, the Black Series are aimed at those who want Absolute Top Level performance but smart and understated aesthetics.', '55345.60', 24, 5, 11, 'Two_Brothers_M-2_Black_Series_Full_System_Exhaust_-_Shorty.jpeg', 'PI21-0703-0008'),
(54, 'Scorpion Exhaust RP-1 GP Full System Exhaust', 'The Flagship RP-1 GP system is currently Scorpion\'s most potent exhaust; complete with a distinguished \"RED POWER\" tip inlay. Completely hand-crafted from feather-light aerospace titanium and carbon fiber, the RP-1 GP has been developed to give tangible \"bolt-on\" performance advantages, with strong power gains throughout the power curve and huge weight savings over O.E.', '57823.16', 89, 5, 25, 'Scorpion_Exhaust_RP-1_GP_Full_System_Exhaust.jpeg', 'PI21-0703-0009'),
(55, 'Yoshimura RS-9 Full System Exhaust - Dual', 'This system increases power over the entire spectrum while also increasing torque of the 373cc single-cylinder engine. The sound this system produces with the beautiful Yoshimura RS-9 Dual mufflers is what the KTM RC390 deserves. This system removes the bulky box-muffler and rear pegs.', '40502.91', 87, 5, 32, 'Yoshimura_RS-9_Full_System_Exhaust_-_Dual.jpeg', 'PI21-0704-0001'),
(56, 'RISE Trackday Pro Single Temp Tire Warmers', 'The new RISE \"Trackday-Pro\" Motorcycle Tire Warmers get your Pirelli, Dunlop, Michelin, or Bridgestone tires hot for maximum grip from the start. Includes Windblocking Side Skirts that stretch around the rim and lock the heat in.', '14048.90', 17, 19, 11, 'RISE_Trackday_Pro_Single_Temp_Tire_Warmers.jpeg', 'PI21-0704-0002'),
(57, 'Avon Tire 3D Ultra EVO Tire Combo', 'The 3D Ultra Evo has been developed specifically for hypersport bikes.', '15346.31', 23, 19, 15, 'Avon_Tire_3D_Ultra_EVO_Tire_Combo_mHIWeX8.jpeg', 'PI21-0704-0003'),
(58, 'Bridgestone Battlax Racing Street RS11 Tire Combo V2', 'The Battlax Racing Street RS11 is built with technology derived from the highest levels of racing. Whether you are chasing lap times, or riding your favorite winding road, enjoy Bridgestone\'s most aggressive street sport tire.', '15832.64', 59, 9, 17, 'Bridgestone_Battlax_Racing_Street_RS11_Tire_Combo_Ps1Ov9f.jpeg', 'PI21-0704-0004'),
(59, 'Driven Sintered Brake Pads', 'Driven Sintered brake pads offer a great performance brake pad for motorcycles and ATVs at an affordable price.', '1674.58', 0, 9, 29, 'Driven_Sintered_Brake_Pads.jpeg', 'PI21-0704-0005'),
(60, 'BikeMaster Brake Shoes', 'BikeMaster starts with high pressure aluminum die-casting to make a strong, stable, corrosion resistant shoe. The friction material is chosen for a balance of performance and longevity for the application', '630.06', 105, 9, 32, 'BikeMaster_Brake_Shoes.jpeg', 'PI21-0704-0006'),
(61, 'Braking SM1 Semi-Metallic Brake Pads', 'Perfect alternative to O.E.M. replacement for street and off-road applications. Smoothness, consistency and responsiveness from the lowest to highest possible temperature.', '1350.37', 18, 9, 30, 'Braking_SM1_Semi-Metallic_Brake_Pads.jpeg', 'PI21-0704-0007'),
(62, 'Ohlins STX46 Adventure Rear Shock', 'All Ohlins shock absorbers are developed from the knowledge and experience of top factory race teams around the world. Superior construction, superior materials and superior engineering skills give you the best-quality shock on the market. The shock body is precision-drawn steel with an aluminum shock reservoir. All springs are chrome silicon.', '51333.00', 1, 18, 20, 'Ohlins_STX46_Adventure_Rear_Shock.jpeg', 'PI21-0705-0001'),
(63, 'Ohlins 46ER Front Shock', 'All hlins shock absorbers are developed from the knowledge and experience of top factory race teams around the world. Superior construction, superior materials and superior engineering skills give you the best-quality shock on the market. The shock body is precision-drawn steel with an aluminum shock reservoir. All springs are chrome silicon.', '35123.60', 99, 18, 21, 'Ohlins_46ER_Front_Shock.jpeg', 'None'),
(64, 'Xena X2 Disc-Lock', 'X2 disc-locks for motorcycles, scooters, quads and ATVs. A stronger, more solid disc-lock. Two attack points to increase the force and time required to steal your bike.', '2186.30', 79, 24, 15, 'Xena_X2_Disc-Lock.jpeg', 'PI21-0711-0001'),
(65, 'OnGuard Beast Chain With X4 Padlock', 'OnGuard chain locks offer bicycle owners and powersport enthusiasts extra length for locking versatility plus the highest level of security for use in high crime areas. Massive, titanium-reinforced hexagonal links render hacksaws and bolt cutters virtually useless, while tight inside link dimensions make prying impossible.', '10264.20', 10, 25, 17, 'OnGuard_Beast_Chain_With_X4_Padlock.jpeg', 'PI21-0711-0002');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers_supplier`
--

CREATE TABLE `suppliers_supplier` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(300) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `supplier_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `suppliers_supplier`
--

INSERT INTO `suppliers_supplier` (`id`, `name`, `address`, `phone_number`, `supplier_id`) VALUES
(1, 'Kenda 2', 'Zabarte Rd, Barangay 175, Caloocan, Metro Manila', '+639183662421', 'None'),
(2, 'ZOOM Motorcycle Parts and Accessories', 'Vinkristimar Building, 516 Antero Soriano Hwy, Tanza City, 4108 Cavite', '+639159256949', 'None'),
(4, 'KTM PowerPart', '2925 Finlandia, Makati, 1234 Metro Manila', '+639088638284', 'None'),
(5, 'JD Jetting', '136 P. Burgos St, Marikina, 1800 Metro Manila', '+639603500557', 'None'),
(6, 'Yoshimura', 'Aces Bldg, 17 F Dona Manuela, Las Pinas, 1740 Metro Manila', '+639603500556', 'None'),
(7, 'Lextek', '5 Dunwoody Tech. St., 080 Caloocan City Metro Manila', '+639603500559', 'None'),
(8, 'Avon Tire', '117 Aguirre, Legazpi Village, Makati, 1229 Kalakhang Maynila', '+639603500550', 'None'),
(9, 'Galfer', 'JP Rizal Street Poblacion 3022 Santa Maria, Philippines', '+639603500552', 'None'),
(10, 'Sunstar', '107 West Ave, Project 7, Quezon City, 1105 Metro Manila', '+639603500554', 'None'),
(11, 'M4', 'Blk 2 Lot 11B New Guinea St Annex 25 Better Living Subdivision, Parañaque', '+639088638285', 'None'),
(12, 'Driven Racing', '2 Sparrow Street, Santa Elena, Marikina, 1801 Metro Manila', '+639450936313', 'None'),
(14, 'EBC', '25 Central Ave, Diliman, Quezon City, 1128 Metro Manila', '+639451010837', 'None'),
(15, 'ASV', 'EBC Bldg., Ortigas Avenue, corner Roosevelt, San Juan, Metro Manila', '+639451010831', 'None'),
(16, 'Battery Tender', '2/F SM City Marilao, McArthur Highway, Marilao, 3023 Bulacan', '+639451010832', 'None'),
(17, 'Shogun Motorsports', '326 A. Bonifacio Ave, La Loma, Quezon City, 1115 Metro Manila', '+639359031983', 'None'),
(18, 'SFK', '#11 Sitio Gipit, Santa Maria, 3022 Bulacan', '+639454019852', 'None'),
(19, 'Bridgestone', '333 Col. Bonny Serrano Ave, San Juan, 1502 Metro Manila', '+639453282243', 'None'),
(20, 'Slipstreamer', '534 Halcon Corner Talayan Streets, Mandaluyong Brgy, Mandaluyong, 1550 Metro Manila', '+639453341523', 'None'),
(21, 'Puig', 'BLK 11 Lot 69 Phase 4A Citihomes Subd, Molino IV, Bacoor, Cavite', '+639459031983', 'None'),
(22, 'Moose', 'SM Bacoor, Tirona Highway, Bacoor, 4102 Cavite', '+639458692616', 'None'),
(23, 'Honda Genuine Accessories', 'Modesta Village, Modesta Village B-17 L-23, Yellow Bell, San Mateo, 1850 Rizal', '+639195399933', 'None'),
(24, 'RAMs Mounts', '222 E Rodriguez Sr Avenue, Violago Compound, Quezon City, 1102 Metro Manila', '+639453608946', 'None'),
(25, 'OnGuard', 'Legaspi Suites Bldg, 178 Salcedo, Legazpi Village, Makati, 1200 Metro Manila', '+63948313581', 'None'),
(28, 'Pan Cycle Center Motorcycle Parts And Accessories', 'Osmena St, Cor Ceres Rd, Opon Lapu-Lapu City\nLapu-Lapu City 6015\nCebu Philippines', '+639457008844', 'None'),
(29, 'Yana Shiki Motorcycle Parts', '388 Quezon Ave, Quezon City, 1115 Metro Manila', '+639088638287', 'None'),
(30, 'Innomoto Cycleparts Inc.', '109 Veronica St, Binondo, Manila, 1006 Metro Manila', '+639453992391', 'None'),
(32, 'Pro-Motorcycle Parts Sales and Services', 'Mars Street, Cainta City, Rizal, Philippines, Cainta, 1920 Metro', '+639088638286', 'SI-2106260001');

-- --------------------------------------------------------

--
-- Table structure for table `transactions_transaction`
--

CREATE TABLE `transactions_transaction` (
  `id` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `amount_tendered` decimal(12,2) NOT NULL,
  `change` decimal(12,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `totalAmount` decimal(20,2) DEFAULT NULL,
  `creator_id` int(11) NOT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `mode_of_payment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions_transaction`
--

INSERT INTO `transactions_transaction` (`id`, `created_at`, `amount_tendered`, `change`, `quantity`, `totalAmount`, `creator_id`, `transaction_id`, `mode_of_payment`) VALUES
(1, '2020-12-21 14:05:43.928918', '9000.00', '0.00', 2, '6676.47', 2, 'None', 'Cash'),
(2, '2020-12-21 14:09:59.976107', '10000.00', '0.00', 2, '6676.47', 2, 'None', 'Cash'),
(3, '2020-12-22 15:46:49.955579', '9000.00', '0.00', 21, '8222.23', 2, 'None', 'Cash'),
(4, '2020-12-22 16:05:47.141949', '9000.00', '0.00', 21, '8222.23', 2, 'None', 'Cash'),
(5, '2020-12-22 16:09:30.073101', '9800.00', '0.00', 31, '9767.99', 2, 'None', 'Cash'),
(6, '2020-12-23 04:59:31.391855', '9800.00', '0.00', 31, '9767.99', 2, 'None', 'Cash'),
(7, '2020-12-23 17:12:53.403660', '9800.00', '32.01', 31, '9767.99', 2, 'None', 'Cash'),
(8, '2020-12-24 13:43:10.559809', '7000.00', '816.96', 4, '6183.04', 2, 'None', 'Cash'),
(9, '2021-01-04 17:49:52.679865', '9000.00', '231.96', 6, '8768.04', 2, 'None', 'Cash'),
(10, '2021-01-04 17:50:53.542651', '6000.00', '114.24', 3, '5885.76', 2, 'None', 'Cash'),
(11, '2021-01-04 17:58:04.101024', '5000.00', '1155.00', 2, '3845.00', 2, 'None', 'Cash'),
(12, '2021-01-07 01:43:40.327668', '0.00', '0.00', 15, '8825.00', 2, 'None', 'Cash'),
(13, '2021-01-07 01:44:42.441230', '10000.00', '1175.00', 15, '8825.00', 2, 'None', 'Cash'),
(14, '2021-01-08 16:38:08.207407', '7000.00', '619.29', 2, '6380.71', 2, 'None', 'Cash'),
(15, '2021-01-12 03:06:25.007147', '2000.00', '454.24', 1, '1545.76', 2, 'None', 'Cash'),
(16, '2021-01-12 03:07:15.313744', '2000.00', '454.24', 1, '1545.76', 2, 'None', 'Cash'),
(18, '2021-01-12 03:15:34.857055', '2600.00', '0.00', 1, '2600.00', 2, 'None', 'Cash'),
(19, '2021-01-12 03:27:37.640441', '5200.00', '69.29', 1, '5130.71', 2, 'None', 'Cash'),
(21, '2021-01-13 18:24:42.259303', '1300.00', '55.00', 1, '1245.00', 2, 'None', 'Cash'),
(22, '2021-01-13 18:31:05.523531', '1300.00', '50.00', 1, '1250.00', 2, 'None', 'Cash'),
(23, '2021-01-13 18:31:15.999030', '6000.00', '869.29', 1, '5130.71', 2, 'None', 'Cash'),
(24, '2021-01-13 18:31:22.449114', '1200.00', '90.00', 1, '1110.00', 2, 'None', 'Cash'),
(25, '2021-01-14 03:57:59.438554', '4100.00', '50.00', 2, '4050.00', 2, 'None', 'Cash'),
(26, '2021-01-15 10:42:20.810457', '4300.00', '80.00', 2, '4220.00', 2, 'None', 'Cash'),
(27, '2021-01-15 10:43:27.691189', '4600.00', '40.00', 2, '4560.00', 2, 'None', 'Cash'),
(28, '2021-01-15 10:44:33.067014', '2400.00', '45.00', 2, '2355.00', 2, 'None', 'Cash'),
(29, '2021-01-15 10:49:24.572474', '1300.00', '50.00', 1, '1250.00', 2, 'None', 'Cash'),
(30, '2021-01-15 15:28:47.313893', '13700.00', '10.00', 11, '13690.00', 2, 'None', 'Cash'),
(31, '2021-01-18 21:33:21.184805', '13400.00', '63.68', 2, '13336.32', 2, 'None', 'Cash'),
(32, '2021-01-18 21:39:53.405938', '13400.00', '63.68', 2, '13336.32', 2, 'None', 'Cash'),
(33, '2021-01-19 02:30:27.323427', '50800.00', '79.91', 2, '50720.09', 2, 'None', 'Cash'),
(34, '2021-01-19 05:24:41.672927', '268000.00', '2.96', 32, '267997.04', 2, 'None', 'Cash'),
(35, '2021-01-19 06:36:12.692784', '24000.00', '786.84', 4, '23213.16', 2, 'None', 'Cash'),
(36, '2021-01-19 06:51:50.593203', '29800.00', '9.37', 311, '29790.63', 2, 'None', 'Cash'),
(37, '2021-01-19 07:14:23.899142', '37000.00', '316.31', 41, '36683.69', 2, 'None', 'Cash'),
(39, '2021-01-20 16:53:29.140062', '100900.00', '17.87', 51, '100882.13', 2, 'None', 'Cash'),
(40, '2021-03-12 15:49:17.657299', '68598.73', '0.00', 3, '68598.73', 2, 'None', 'Cash'),
(41, '2021-03-12 15:55:44.435837', '62383.42', '0.00', 3, '62383.42', 2, 'None', 'Cash'),
(42, '2021-03-12 15:57:29.535128', '52900.01', '0.00', 3, '52900.01', 2, 'None', 'Cash'),
(43, '2021-03-12 15:58:37.132531', '52900.01', '0.00', 3, '52900.01', 2, 'None', 'Cash'),
(44, '2021-03-13 03:20:41.733445', '39846.76', '0.00', 2, '39846.76', 2, 'None', 'Cash'),
(45, '2021-03-13 03:36:37.072594', '67600.00', '8.45', 5, '67591.55', 2, 'None', 'Cash'),
(46, '2021-03-22 09:07:36.094808', '37200.00', '40.61', 3, '37159.39', 2, 'None', 'Cash'),
(47, '2021-03-22 09:18:54.898284', '7400.00', '8.11', 2, '7391.89', 2, 'None', 'Cash'),
(48, '2021-04-09 04:32:35.738182', '61909.52', '0.00', 4, '61909.52', 2, 'None', 'Cash'),
(49, '2021-04-09 06:36:30.355218', '27000.00', '58.94', 2, '26941.06', 2, 'None', 'Cash'),
(50, '2021-04-09 07:10:24.000000', '1233.00', '1555.00', 3, '14828.21', 2, 'None', 'Cash'),
(51, '2021-04-09 07:12:06.072540', '0.00', '0.00', 0, '0.00', 2, 'None', 'Cash'),
(52, '2021-04-10 04:01:05.921565', '71986.30', '0.00', 5, '71986.30', 2, 'None', 'Cash'),
(53, '2021-04-10 16:27:24.000000', '79693.52', '0.00', 5, '79693.52', 2, 'None', 'Cash'),
(54, '2021-04-10 16:30:45.000000', '2000.00', '56.00', 2, '2983.78', 2, 'None', 'Cash'),
(55, '2021-04-10 16:42:06.000000', '50000.00', '78.00', 2, '59905.71', 2, 'None', 'Cash'),
(56, '2021-04-10 16:43:14.000000', '30000.00', '12.10', 2, '39846.76', 2, 'None', 'Cash'),
(57, '2021-04-10 16:59:16.051090', '10000.00', '-3470.53', 1, '13470.53', 2, 'None', 'Cash'),
(58, '2021-04-11 03:40:32.000000', '1233.00', '123.00', 12, '123.00', 2, 'None', 'Cash'),
(59, '2021-04-11 03:43:57.926863', '14962.42', '0.00', 2, '14962.42', 2, 'None', 'Cash'),
(60, '2021-04-11 03:45:18.139693', '11800.00', '0.00', 2, '11800.00', 2, 'None', 'Cash'),
(61, '2021-04-11 03:46:19.365544', '11900.00', '55.57', 1, '11844.43', 2, 'None', 'Cash'),
(62, '2021-04-11 03:47:46.154563', '6000.00', '32.44', 4, '5967.56', 2, 'None', 'Cash'),
(63, '2021-04-11 04:11:15.613347', '39846.76', '0.00', 2, '39846.76', 2, 'None', 'Cash'),
(64, '2021-04-11 04:22:36.627896', '39900.00', '53.24', 2, '39846.76', 2, 'None', 'Cash'),
(65, '2021-04-11 04:49:20.312608', '19400.00', '29.47', 2, '19370.53', 2, 'None', 'Cash'),
(66, '2021-04-11 04:50:01.839327', '144.00', '-38076.66', 2, '38220.66', 2, 'None', 'Cash'),
(67, '2021-04-11 14:10:55.196157', '55128.20', '0.00', 2, '55128.20', 2, 'None', 'Cash'),
(68, '2021-04-18 15:36:00.498523', '1221.00', '-51679.01', 3, '52900.01', 2, 'None', 'Cash'),
(69, '2021-04-18 15:40:46.706558', '13470.53', '0.00', 1, '13470.53', 2, 'None', 'Cash'),
(70, '2021-04-19 04:08:56.000223', '0.00', '0.00', 2, '25314.96', 2, 'None', 'Cash'),
(71, '2021-04-19 04:10:32.380916', '0.00', '0.00', 4, '85220.67', 2, 'None', 'Cash'),
(72, '2021-04-19 04:11:31.099651', '0.00', '0.00', 4, '134117.92', 2, 'None', 'Cash'),
(73, '2021-04-19 04:12:04.058011', '0.00', '0.00', 5, '67352.65', 2, 'None', 'Cash'),
(74, '2021-04-19 04:18:15.480507', '0.00', '0.00', 7, '134411.61', 2, 'None', 'Cash'),
(75, '2021-04-19 04:34:20.690850', '122604.44', '0.00', 4, '122604.44', 2, 'None', 'Cash'),
(76, '2021-04-21 03:03:28.095571', '38220.66', '0.00', 2, '38220.66', 2, 'None', 'Cash'),
(77, '2021-04-21 18:07:15.424234', '35021.37', '0.00', 2, '35021.37', 2, 'None', 'Cash'),
(78, '2021-04-21 18:12:39.230895', '5900.00', '0.00', 1, '5900.00', 2, 'None', 'Cash'),
(79, '2021-04-22 02:52:45.745268', '61072.63', '0.00', 2, '61072.63', 2, 'None', 'Cash'),
(80, '2021-04-22 02:54:40.753747', '94602.11', '0.00', 3, '94602.11', 2, 'None', 'Cash'),
(81, '2021-04-22 02:55:07.398656', '94602.11', '0.00', 3, '94602.11', 2, 'None', 'Cash'),
(82, '2021-04-22 03:05:06.422559', '94602.11', '0.00', 3, '94602.11', 2, 'None', 'Cash'),
(83, '2021-04-22 03:07:39.961828', '126451.54', '0.00', 5, '126451.54', 2, 'None', 'Cash'),
(84, '2021-04-22 03:51:18.794028', '121000.00', '21.66', 4, '120978.34', 2, 'None', 'Cash'),
(85, '2021-04-25 10:36:41.383323', '70688.87', '0.00', 4, '70688.87', 2, 'None', 'Cash'),
(86, '2021-04-25 10:37:15.657975', '53000.00', '99.99', 3, '52900.01', 2, 'None', 'Cash'),
(87, '2021-04-25 10:37:55.963691', '73376.24', '0.00', 3, '73376.24', 2, 'None', 'Cash'),
(88, '2021-04-25 10:39:59.757858', '89100.00', '25.04', 3, '89074.96', 2, 'None', 'Cash'),
(89, '2021-04-25 11:31:24.730545', '50900.00', '52.89', 3, '50847.11', 2, 'None', 'Cash'),
(90, '2021-04-25 11:33:21.624794', '85300.00', '79.33', 4, '85220.67', 2, 'None', 'Cash'),
(91, '2021-04-25 11:34:49.219228', '57600.00', '8.81', 4, '57591.19', 2, 'None', 'Cash'),
(92, '2021-05-02 05:53:35.419717', '144700.00', '68.54', 10, '144631.46', 2, 'None', 'Cash'),
(93, '2021-05-05 14:24:45.660137', '300000.00', '650.38', 17, '299349.62', 2, 'None', 'Cash'),
(94, '2021-05-05 14:26:31.819366', '82800.00', '42.32', 2, '82757.68', 2, 'None', 'Cash'),
(95, '2021-06-15 15:12:57.116597', '10000.00', '400.00', 3, '50000.00', 2, 'None', 'Cash'),
(96, '2021-06-21 07:00:01.792520', '145800.00', '39.07', 10, '145760.93', 2, 'None', 'Cash'),
(97, '2021-06-21 07:00:54.527851', '146000.00', '239.07', 10, '145760.93', 2, 'None', 'Cash'),
(98, '2021-06-21 07:18:35.878234', '66400.00', '92.28', 6, '66307.72', 2, 'None', 'Cash'),
(99, '2021-06-24 03:52:07.556882', '57600.00', '8.81', 4, '57591.19', 2, 'None', 'Cash'),
(100, '2021-06-24 07:05:53.008648', '39800.00', '87.45', 3, '39712.55', 2, 'None', 'Cash'),
(101, '2021-06-24 07:07:30.249445', '57000.00', '956.20', 4, '56043.80', 2, 'None', 'Cash'),
(102, '2021-06-24 07:09:56.332450', '54000.00', '816.92', 4, '53183.08', 2, 'None', 'Cash'),
(103, '2021-06-24 14:13:45.915449', '110400.00', '96.96', 9, '110303.04', 2, 'None', 'Cash'),
(104, '2021-06-24 14:15:11.857511', '57600.00', '8.81', 4, '57591.19', 2, 'None', 'Cash'),
(105, '2021-06-25 03:12:09.787552', '59100.00', '16.92', 5, '59083.08', 2, 'None', 'Cash'),
(106, '2021-06-25 03:29:40.234209', '55600.00', '74.94', 4, '55525.06', 2, 'None', 'Cash'),
(107, '2021-06-25 03:33:53.848935', '88300.00', '21.77', 5, '88278.23', 2, 'None', 'Cash'),
(108, '2021-06-25 05:07:44.848112', '66700.00', '46.39', 5, '66653.61', 2, 'None', 'Cash'),
(109, '2021-06-25 05:15:00.919479', '39800.00', '87.45', 3, '39712.55', 2, 'None', 'Cash'),
(110, '2021-06-25 05:21:22.744751', '59100.00', '16.92', 5, '59083.08', 40, 'None', 'Cash'),
(111, '2021-06-26 14:38:47.695367', '32300.00', '23.77', 2, '32276.23', 40, 'TI21-0626-0001', 'Cash'),
(112, '2021-06-26 14:56:53.644835', '53200.00', '16.92', 4, '53183.08', 40, 'TI21-0626-0002', 'Cash'),
(113, '2021-06-26 14:58:53.149585', '57600.00', '8.81', 4, '57591.19', 40, 'None', 'Cash'),
(114, '2021-06-26 15:01:02.571179', '59100.00', '16.92', 5, '59083.08', 40, 'None', 'Cash'),
(115, '2021-06-26 15:05:17.765624', '51700.00', '8.81', 3, '51691.19', 40, 'TI21-0626-0003', 'Cash'),
(116, '2021-06-28 13:04:27.967143', '72122.99', '0.00', 4, '72122.99', 40, 'TI21-0628-0001', 'Cash'),
(117, '2021-06-28 13:25:07.749261', '13400.00', '63.68', 2, '13336.32', 40, 'TI21-0628-0002', 'Cash'),
(118, '2021-06-28 13:26:23.193600', '13336.32', '0.00', 2, '13336.32', 40, 'TI21-0628-0003', 'Cash'),
(119, '2021-06-28 16:32:50.437658', '39846.76', '0.00', 2, '39846.76', 40, 'TI21-0628-0004', 'Paypal'),
(120, '2021-06-28 16:33:14.257203', '19370.53', '0.00', 2, '19370.53', 40, 'TI21-0628-0005', 'Cash'),
(121, '2021-06-28 17:02:51.211159', '45800.00', '53.24', 3, '45746.76', 40, 'TI21-0628-0006', 'Cash'),
(122, '2021-06-30 02:46:13.586219', '38300.00', '79.34', 2, '38220.66', 40, 'TI21-0630-0001', 'Cash'),
(123, '2021-06-30 04:25:36.166709', '39900.00', '53.24', 2, '39846.76', 40, 'TI21-0630-0002', 'Cash'),
(124, '2021-06-30 04:27:13.932993', '19300.00', '63.68', 3, '19236.32', 40, 'TI21-0630-0003', 'Cash'),
(125, '2021-06-30 04:28:03.664406', '39100.00', '97.32', 2, '39002.68', 40, 'TI21-0630-0004', 'Cash'),
(126, '2021-06-30 04:29:32.962609', '13400.00', '63.68', 2, '13336.32', 40, 'TI21-0630-0005', 'Cash'),
(127, '2021-06-30 13:34:31.113985', '24855.11', '0.00', 2, '24855.11', 40, 'TI21-0630-0006', 'Paypal'),
(128, '2021-07-01 12:03:15.390043', '39800.00', '87.45', 3, '39712.55', 2, 'TI21-0701-0001', 'Cash'),
(129, '2021-07-02 13:13:21.259658', '590.00', '0.00', 3, '590.00', 2, 'TI21-0702-0001', 'Paypal'),
(130, '2021-07-02 13:13:51.407884', '500.00', '33.00', 2, '467.00', 2, 'TI21-0702-0002', 'Cash'),
(131, '2021-07-02 13:23:04.932791', '500.00', '33.00', 2, '467.00', 40, 'TI21-0702-0003', 'Cash'),
(132, '2021-07-03 15:26:46.381639', '1400.00', '12.00', 2, '1388.00', 2, 'TI21-0703-0001', 'Cash'),
(133, '2021-07-03 15:27:07.363932', '1388.00', '0.00', 2, '1388.00', 2, 'TI21-0703-0002', 'Paypal'),
(134, '2021-07-04 04:05:12.743128', '16400.00', '63.53', 9, '16336.47', 2, 'TI21-0704-0001', 'Cash'),
(135, '2021-07-04 12:16:09.905130', '68.00', '0.00', 2, '68.00', 2, 'TI21-0704-0002', 'Paypal'),
(136, '2021-07-04 13:27:39.235120', '1800.00', '99.00', 3, '1701.00', 2, 'TI21-0704-0003', 'Cash'),
(137, '2021-07-04 16:58:01.485964', '5800.00', '98.00', 3, '5702.00', 2, 'TI21-0704-0004', 'Cash'),
(138, '2021-07-04 17:17:54.106654', '1200.00', '66.00', 2, '1134.00', 2, 'TI21-0704-0005', 'Cash'),
(139, '2021-07-06 14:42:41.061518', '2300.00', '46.00', 4, '2254.00', 40, 'TI21-0706-0001', 'Cash'),
(140, '2021-07-06 15:05:00.422751', '1000.00', '631.00', 3, '369.00', 2, 'TI21-0706-0002', 'Cash'),
(141, '2021-07-07 03:19:19.151946', '1701.00', '0.00', 3, '1701.00', 2, 'None', 'Paypal'),
(142, '2021-07-07 03:58:17.786868', '1200.00', '66.00', 2, '1134.00', 40, 'None', 'Cash'),
(143, '2021-07-09 18:08:05.394658', '3300.00', '17.00', 6, '3283.00', 2, 'None', 'Cash'),
(144, '2021-07-11 06:50:35.456060', '900.00', '99.00', 2, '801.00', 2, 'TI21-0711-0001', 'Cash'),
(145, '2021-07-11 08:13:46.379494', '1800.00', '99.00', 3, '1701.00', 40, 'TI21-0711-0002', 'Cash'),
(146, '2021-07-11 08:24:39.146624', '900.00', '99.00', 2, '801.00', 40, 'TI21-0711-0003', 'Cash'),
(147, '2021-07-11 08:25:18.663187', '900.00', '99.00', 2, '801.00', 2, 'TI21-0711-0004', 'Cash'),
(148, '2021-07-12 04:57:46.130711', '109297.00', '1000.00', 1901, '108297.00', 40, 'TI21-0712-0001', 'Cash'),
(149, '2021-07-12 13:49:46.980969', '1356.00', '0.00', 2, '1356.00', 2, 'TI21-0712-0002', 'Cash'),
(150, '2021-07-13 04:15:53.839227', '500.00', '44.00', 1, '456.00', 2, 'TI21-0713-0001', 'Cash'),
(151, '2021-07-13 16:21:59.368217', '47600.00', '25.89', 3, '47574.11', 40, 'TI21-0713-0002', 'Cash'),
(152, '2021-07-16 14:28:00.837129', '39499.45', '0.00', 3, '39499.45', 2, 'TI21-0716-0001', 'Cash'),
(153, '2021-07-16 15:02:45.219996', '2873700.00', '2586335.00', 100, '287365.00', 2, 'TI21-0716-0002', 'Cash'),
(154, '2021-07-16 15:05:00.558817', '28736500.00', '25862850.00', 1000, '2873650.00', 2, 'TI21-0716-0003', 'Cash'),
(155, '2021-07-16 15:19:10.467162', '124600.00', '112149.49', 2, '12450.51', 2, 'TI21-0716-0004', 'Cash'),
(156, '2021-07-16 15:22:59.960517', '82700.00', '2.29', 4, '82697.71', 2, 'TI21-0716-0005', 'Cash'),
(157, '2021-07-17 11:12:46.071856', '10270.00', '5.80', 1, '10264.20', 40, 'TI21-0717-0001', 'Cash'),
(158, '2021-07-17 11:23:25.022395', '88650.00', '7.09', 3, '88642.91', 40, 'TI21-0717-0002', 'Cash'),
(159, '2021-07-17 17:19:30.344447', '3936030.00', '0.49', 113, '3936029.51', 2, 'TI21-0717-0003', 'Cash'),
(160, '2021-07-17 18:06:05.959579', '61597.20', '0.00', 2, '61597.20', 40, 'TI21-0717-0004', 'Cash'),
(161, '2021-07-17 18:34:22.203258', '14636.82', '0.00', 3, '14636.82', 40, 'TI21-0717-0005', 'Cash'),
(162, '2021-07-17 18:42:10.632086', '12450.51', '0.00', 2, '12450.51', 40, 'TI21-0717-0006', 'Cash'),
(163, '2021-07-17 19:34:49.425530', '53519.31', '0.00', 2, '53519.31', 40, 'TI21-0717-0007', 'Cash'),
(164, '2021-07-17 20:01:21.349196', '134961.34', '0.00', 5, '134961.34', 40, 'TI21-0717-0008', 'Cash'),
(165, '2021-07-17 20:15:00.907349', '65381.90', '0.00', 2, '65381.90', 40, 'TI21-0717-0009', 'Cash'),
(166, '2021-07-17 20:22:27.428581', '67165.64', '0.00', 2, '67165.64', 40, 'TI21-0717-0010', 'Cash'),
(167, '2021-07-19 05:01:12.839353', '88700.00', '57.09', 3, '88642.91', 2, 'TI21-0719-0001', 'Cash');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_items_transaction_item`
--

CREATE TABLE `transaction_items_transaction_item` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `transaction_item_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction_items_transaction_item`
--

INSERT INTO `transaction_items_transaction_item` (`id`, `quantity`, `product_id`, `transaction_id`, `transaction_item_id`) VALUES
(1, 1, 2, 1, 'None'),
(2, 1, 1, 1, 'None'),
(3, 1, 2, 2, 'None'),
(4, 1, 1, 2, 'None'),
(5, 2, 2, 3, 'None'),
(6, 1, 1, 3, 'None'),
(7, 2, 2, 4, 'None'),
(8, 1, 1, 4, 'None'),
(9, 3, 2, 5, 'None'),
(10, 1, 1, 5, 'None'),
(11, 3, 2, 6, 'None'),
(12, 1, 1, 6, 'None'),
(13, 3, 2, 7, 'None'),
(14, 1, 1, 7, 'None'),
(15, 4, 2, 8, 'None'),
(16, 4, 2, 9, 'None'),
(18, 1, 10, 9, 'None'),
(19, 1, 2, 10, 'None'),
(20, 1, 11, 10, 'None'),
(22, 1, 3, 11, 'None'),
(24, 1, 3, 12, 'None'),
(26, 1, 3, 13, 'None'),
(28, 1, 1, 14, 'None'),
(30, 1, 2, 15, 'None'),
(31, 1, 2, 16, 'None'),
(33, 1, 3, 18, 'None'),
(34, 1, 1, 19, 'None'),
(39, 1, 1, 23, 'None'),
(40, 1, 4, 24, 'None'),
(41, 1, 3, 25, 'None'),
(43, 1, 4, 26, 'None'),
(47, 1, 4, 28, 'None'),
(50, 1, 11, 30, 'None'),
(53, 1, 4, 31, 'None'),
(54, 1, 10, 31, 'None'),
(55, 1, 10, 32, 'None'),
(56, 1, 4, 32, 'None'),
(57, 1, 10, 33, 'None'),
(58, 1, 17, 33, 'None'),
(59, 28, 1, 34, 'None'),
(60, 4, 3, 34, 'None'),
(61, 4, 1, 35, 'None'),
(62, 3, 10, 36, 'None'),
(63, 1, 4, 36, 'None'),
(64, 1, 2, 36, 'None'),
(65, 4, 1, 37, 'None'),
(66, 1, 2, 37, 'None'),
(69, 5, 2, 39, 'None'),
(70, 1, 18, 39, 'None'),
(71, 1, 2, 40, 'None'),
(72, 1, 1, 40, 'None'),
(73, 1, 17, 40, 'None'),
(74, 1, 1, 41, 'None'),
(75, 1, 17, 41, 'None'),
(76, 1, 19, 41, 'None'),
(77, 1, 2, 42, 'None'),
(78, 1, 1, 42, 'None'),
(79, 1, 18, 42, 'None'),
(80, 1, 1, 43, 'None'),
(81, 1, 2, 43, 'None'),
(82, 1, 18, 43, 'None'),
(83, 1, 2, 44, 'None'),
(84, 1, 3, 44, 'None'),
(85, 1, 10, 45, 'None'),
(86, 1, 4, 45, 'None'),
(87, 1, 19, 45, 'None'),
(88, 1, 2, 45, 'None'),
(89, 1, 18, 45, 'None'),
(90, 1, 2, 46, 'None'),
(91, 2, 4, 46, 'None'),
(92, 1, 1, 47, 'None'),
(93, 1, 10, 47, 'None'),
(94, 1, 3, 48, 'None'),
(95, 3, 4, 48, 'None'),
(96, 2, 2, 49, 'None'),
(97, 1, 4, 50, 'None'),
(98, 2, 10, 50, 'None'),
(99, 4, 22, 52, 'None'),
(101, 2, 3, 53, 'None'),
(102, 2, 2, 53, 'None'),
(103, 2, 10, 54, 'None'),
(104, 1, 3, 55, 'None'),
(105, 1, 18, 55, 'None'),
(106, 1, 2, 56, 'None'),
(107, 1, 3, 53, 'None'),
(108, 1, 2, 57, 'None'),
(109, 1, 2, 59, 'None'),
(110, 1, 10, 59, 'None'),
(111, 2, 1, 60, 'None'),
(112, 1, 4, 61, 'None'),
(113, 4, 10, 62, 'None'),
(114, 1, 2, 63, 'None'),
(115, 1, 3, 63, 'None'),
(116, 1, 2, 64, 'None'),
(117, 1, 3, 64, 'None'),
(118, 1, 1, 65, 'None'),
(119, 1, 2, 65, 'None'),
(120, 1, 3, 66, 'None'),
(121, 1, 4, 66, 'None'),
(122, 1, 1, 67, 'None'),
(123, 1, 17, 67, 'None'),
(124, 1, 1, 68, 'None'),
(125, 1, 18, 68, 'None'),
(126, 1, 2, 68, 'None'),
(127, 1, 2, 69, 'None'),
(128, 1, 4, 69, 'None'),
(129, 1, 18, 69, 'None'),
(130, 1, 17, 69, 'None'),
(131, 1, 3, 69, 'None'),
(132, 1, 4, 69, 'None'),
(133, 1, 2, 70, 'None'),
(134, 1, 4, 70, 'None'),
(135, 1, 2, 71, 'None'),
(136, 1, 3, 71, 'None'),
(137, 1, 4, 71, 'None'),
(138, 1, 18, 71, 'None'),
(139, 4, 18, 72, 'None'),
(140, 5, 2, 73, 'None'),
(141, 5, 2, 74, 'None'),
(142, 2, 18, 74, 'None'),
(143, 1, 2, 74, 'None'),
(144, 1, 3, 74, 'None'),
(145, 1, 4, 74, 'None'),
(146, 1, 18, 74, 'None'),
(147, 1, 2, 74, 'None'),
(148, 2, 17, 74, 'None'),
(149, 1, 18, 74, 'None'),
(150, 1, 3, 74, 'None'),
(151, 1, 2, 74, 'None'),
(152, 1, 3, 74, 'None'),
(153, 1, 4, 74, 'None'),
(154, 1, 1, 74, 'None'),
(155, 1, 2, 74, 'None'),
(156, 1, 3, 74, 'None'),
(157, 1, 2, 74, 'None'),
(158, 1, 3, 74, 'None'),
(159, 1, 18, 74, 'None'),
(160, 1, 2, 75, 'None'),
(161, 1, 3, 75, 'None'),
(162, 1, 17, 75, 'None'),
(163, 1, 18, 75, 'None'),
(164, 1, 3, 88, 'None'),
(165, 1, 2, 88, 'None'),
(166, 1, 17, 88, 'None'),
(167, 1, 11, 89, 'None'),
(168, 1, 4, 89, 'None'),
(169, 1, 18, 89, 'None'),
(170, 1, 1, 91, 'None'),
(171, 1, 2, 91, 'None'),
(172, 1, 3, 91, 'None'),
(173, 1, 4, 91, 'None'),
(174, 1, 3, 92, 'None'),
(175, 3, 4, 92, 'None'),
(176, 1, 22, 92, 'None'),
(177, 1, 21, 92, 'None'),
(179, 1, 19, 92, 'None'),
(180, 1, 26, 92, 'None'),
(181, 1, 25, 92, 'None'),
(182, 6, 4, 93, 'None'),
(183, 8, 3, 93, 'None'),
(184, 1, 11, 93, 'None'),
(185, 2, 1, 93, 'None'),
(186, 1, 17, 94, 'None'),
(187, 1, 18, 94, 'None'),
(188, 2, 4, 96, 'None'),
(189, 1, 18, 96, 'None'),
(190, 2, 3, 96, 'None'),
(191, 1, 1, 96, 'None'),
(192, 1, 2, 96, 'None'),
(193, 3, 11, 96, 'None'),
(194, 2, 4, 97, 'None'),
(195, 1, 18, 97, 'None'),
(196, 2, 3, 97, 'None'),
(197, 1, 1, 97, 'None'),
(198, 1, 2, 97, 'None'),
(199, 3, 11, 97, 'None'),
(200, 1, 4, 98, 'None'),
(201, 1, 10, 98, 'None'),
(202, 1, 3, 98, 'None'),
(203, 1, 2, 98, 'None'),
(204, 1, 1, 98, 'None'),
(205, 1, 21, 98, 'None'),
(206, 1, 4, 99, 'None'),
(207, 1, 3, 99, 'None'),
(208, 1, 2, 99, 'None'),
(209, 1, 1, 99, 'None'),
(210, 1, 10, 100, 'None'),
(211, 1, 4, 100, 'None'),
(212, 1, 3, 100, 'None'),
(213, 1, 32, 101, 'None'),
(214, 1, 2, 101, 'None'),
(215, 1, 3, 101, 'None'),
(216, 1, 4, 101, 'None'),
(217, 1, 4, 102, 'None'),
(218, 1, 10, 102, 'None'),
(219, 1, 3, 102, 'None'),
(220, 1, 2, 102, 'None'),
(221, 2, 1, 103, 'None'),
(222, 2, 2, 103, 'None'),
(223, 2, 3, 103, 'None'),
(224, 1, 11, 103, 'None'),
(225, 1, 10, 103, 'None'),
(226, 1, 4, 103, 'None'),
(227, 1, 2, 104, 'None'),
(228, 1, 3, 104, 'None'),
(229, 1, 1, 104, 'None'),
(230, 1, 4, 104, 'None'),
(231, 1, 10, 105, 'None'),
(232, 1, 4, 105, 'None'),
(233, 1, 3, 105, 'None'),
(234, 1, 2, 105, 'None'),
(235, 1, 1, 105, 'None'),
(236, 1, 2, 106, 'None'),
(237, 1, 3, 106, 'None'),
(238, 1, 4, 106, 'None'),
(239, 1, 24, 106, 'None'),
(240, 1, 2, 107, 'None'),
(241, 1, 3, 107, 'None'),
(242, 1, 4, 107, 'None'),
(244, 1, 19, 107, 'None'),
(245, 2, 2, 108, 'None'),
(246, 1, 3, 108, 'None'),
(247, 1, 4, 108, 'None'),
(248, 1, 10, 108, 'None'),
(249, 1, 3, 109, 'None'),
(250, 1, 4, 109, 'None'),
(251, 1, 10, 109, 'None'),
(252, 1, 1, 110, 'None'),
(253, 1, 2, 110, 'None'),
(254, 1, 3, 110, 'None'),
(255, 1, 4, 110, 'None'),
(256, 1, 10, 110, 'None'),
(257, 1, 1, 111, 'TI-I21-0626-0001'),
(258, 1, 3, 111, 'TI-I21-0626-0002'),
(259, 1, 10, 112, 'TI-I21-0626-0003'),
(260, 1, 4, 112, 'TI-I21-0626-0004'),
(261, 1, 3, 112, 'TI-I21-0626-0005'),
(262, 1, 2, 112, 'TI-I21-0626-0006'),
(263, 1, 2, 113, 'TI-I21-0626-0007'),
(264, 1, 1, 113, 'TI-I21-0626-0008'),
(265, 1, 3, 113, 'TI-I21-0626-0009'),
(266, 1, 4, 113, 'TI-I21-0626-0010'),
(267, 1, 10, 114, 'TI-I21-0626-0011'),
(268, 1, 4, 114, 'TI-I21-0626-0012'),
(269, 1, 3, 114, 'TI-I21-0626-0013'),
(270, 1, 2, 114, 'TI-I21-0626-0014'),
(271, 1, 1, 114, 'TI-I21-0626-0015'),
(272, 1, 2, 115, 'TI-I21-0626-0016'),
(273, 1, 3, 115, 'TI-I21-0626-0017'),
(274, 1, 4, 115, 'TI-I21-0626-0018'),
(275, 2, 3, 116, 'TI-I21-0628-0001'),
(276, 1, 2, 116, 'TI-I21-0628-0002'),
(277, 1, 1, 116, 'TI-I21-0628-0003'),
(278, 1, 10, 117, 'TI-I21-0628-0004'),
(279, 1, 4, 117, 'TI-I21-0628-0005'),
(280, 1, 10, 118, 'TI-I21-0628-0006'),
(281, 1, 4, 118, 'TI-I21-0628-0007'),
(282, 1, 3, 119, 'TI-I21-0628-0008'),
(283, 1, 2, 119, 'TI-I21-0628-0009'),
(284, 1, 2, 120, 'TI-I21-0628-0010'),
(285, 1, 1, 120, 'TI-I21-0628-0011'),
(286, 1, 2, 121, 'TI-I21-0628-0012'),
(287, 1, 3, 121, 'TI-I21-0628-0013'),
(288, 1, 1, 121, 'TI-I21-0628-0014'),
(289, 1, 3, 122, 'TI-I21-0630-0001'),
(290, 1, 4, 122, 'TI-I21-0630-0002'),
(291, 1, 2, 123, 'TI-I21-0630-0003'),
(292, 1, 3, 123, 'TI-I21-0630-0004'),
(293, 1, 1, 124, 'TI-I21-0630-0005'),
(294, 1, 4, 124, 'TI-I21-0630-0006'),
(295, 1, 10, 124, 'TI-I21-0630-0007'),
(296, 1, 11, 125, 'TI-I21-0630-0008'),
(297, 1, 18, 125, 'TI-I21-0630-0009'),
(298, 1, 4, 126, 'TI-I21-0630-0010'),
(299, 1, 10, 126, 'TI-I21-0630-0011'),
(300, 1, 26, 127, 'TI-I21-0630-0012'),
(301, 1, 4, 127, 'TI-I21-0630-0013'),
(302, 1, 10, 128, 'TI-I21-0701-0001'),
(303, 1, 4, 128, 'TI-I21-0701-0002'),
(304, 1, 3, 128, 'TI-I21-0701-0003'),
(305, 1, 44, 129, 'TI-I21-0702-0001'),
(306, 1, 45, 129, 'TI-I21-0702-0002'),
(307, 1, 41, 129, 'TI-I21-0702-0003'),
(308, 1, 44, 130, 'TI-I21-0702-0004'),
(309, 1, 43, 130, 'TI-I21-0702-0005'),
(310, 1, 44, 131, 'TI-I21-0702-0006'),
(311, 1, 43, 131, 'TI-I21-0702-0007'),
(312, 1, 42, 132, 'TI-I21-0703-0001'),
(313, 1, 43, 132, 'TI-I21-0703-0002'),
(314, 1, 42, 133, 'TI-I21-0703-0003'),
(315, 1, 43, 133, 'TI-I21-0703-0004'),
(316, 2, 43, 134, 'TI-I21-0704-0001'),
(317, 1, 44, 134, 'TI-I21-0704-0002'),
(318, 1, 42, 134, 'TI-I21-0704-0003'),
(319, 1, 37, 134, 'TI-I21-0704-0004'),
(320, 1, 38, 134, 'TI-I21-0704-0005'),
(321, 1, 31, 134, 'TI-I21-0704-0006'),
(322, 1, 32, 134, 'TI-I21-0704-0007'),
(323, 1, 54, 134, 'TI-I21-0704-0008'),
(324, 1, 52, 135, 'TI-I21-0704-0009'),
(325, 1, 51, 135, 'TI-I21-0704-0010'),
(326, 1, 59, 136, 'TI-I21-0704-0011'),
(327, 2, 58, 136, 'TI-I21-0704-0012'),
(328, 1, 59, 137, 'TI-I21-0704-0013'),
(329, 1, 58, 137, 'TI-I21-0704-0014'),
(330, 1, 57, 137, 'TI-I21-0704-0015'),
(331, 1, 60, 138, 'TI-I21-0704-0016'),
(332, 1, 59, 138, 'TI-I21-0704-0017'),
(333, 1, 59, 139, 'TI-I21-0706-0001'),
(334, 1, 60, 139, 'TI-I21-0706-0002'),
(335, 2, 55, 139, 'TI-I21-0706-0003'),
(336, 3, 40, 140, 'TI-I21-0706-0004'),
(337, 2, 58, 141, 'None'),
(338, 1, 60, 141, 'None'),
(339, 1, 58, 142, 'None'),
(340, 1, 59, 142, 'None'),
(341, 3, 59, 143, 'None'),
(342, 1, 60, 143, 'None'),
(343, 1, 55, 143, 'None'),
(344, 1, 54, 143, 'None'),
(345, 1, 63, 144, 'TI-I21-0711-0001'),
(346, 1, 62, 144, 'TI-I21-0711-0002'),
(347, 1, 61, 145, 'TI-I21-0711-0003'),
(348, 1, 60, 145, 'TI-I21-0711-0004'),
(349, 1, 59, 145, 'TI-I21-0711-0005'),
(350, 1, 63, 146, 'TI-I21-0711-0006'),
(351, 1, 62, 146, 'TI-I21-0711-0007'),
(352, 1, 63, 147, 'TI-I21-0711-0008'),
(353, 1, 62, 147, 'TI-I21-0711-0009'),
(354, 190, 59, 148, 'TI-I21-0712-0001'),
(355, 1, 60, 148, 'TI-I21-0712-0002'),
(356, 1, 64, 149, 'TI-I21-0712-0003'),
(357, 1, 63, 149, 'TI-I21-0712-0004'),
(358, 1, 65, 150, 'TI-I21-0713-0001'),
(359, 1, 64, 151, 'TI-I21-0713-0002'),
(360, 1, 63, 151, 'TI-I21-0713-0003'),
(361, 1, 65, 151, 'TI-I21-0713-0004'),
(362, 1, 63, 152, 'TI-I21-0716-0001'),
(363, 1, 48, 152, 'TI-I21-0716-0002'),
(364, 1, 59, 152, 'TI-I21-0716-0003'),
(365, 100, 42, 153, 'TI-I21-0716-0004'),
(366, 1000, 42, 154, 'TI-I21-0716-0005'),
(367, 1, 65, 155, 'TI-I21-0716-0006'),
(368, 1, 64, 155, 'TI-I21-0716-0007'),
(369, 1, 65, 156, 'TI-I21-0716-0008'),
(370, 2, 63, 156, 'TI-I21-0716-0009'),
(371, 1, 64, 156, 'TI-I21-0716-0010'),
(372, 1, 65, 157, 'TI-I21-0717-0001'),
(373, 1, 64, 158, 'TI-I21-0717-0002'),
(374, 1, 63, 158, 'TI-I21-0717-0003'),
(375, 1, 62, 158, 'TI-I21-0717-0004'),
(376, 112, 63, 159, 'TI-I21-0717-0005'),
(377, 1, 64, 159, 'TI-I21-0717-0006'),
(378, 1, 62, 160, 'TI-I21-0717-0007'),
(379, 1, 65, 160, 'TI-I21-0717-0008'),
(380, 2, 64, 161, 'TI-I21-0717-0009'),
(381, 1, 65, 161, 'TI-I21-0717-0010'),
(382, 1, 65, 162, 'TI-I21-0717-0011'),
(383, 1, 64, 162, 'TI-I21-0717-0012'),
(384, 1, 64, 163, 'TI-I21-0717-0013'),
(385, 1, 62, 163, 'TI-I21-0717-0014'),
(386, 2, 62, 164, 'TI-I21-0717-0015'),
(387, 2, 58, 164, 'TI-I21-0717-0016'),
(388, 1, 60, 164, 'TI-I21-0717-0017'),
(389, 1, 56, 165, 'TI-I21-0717-0018'),
(390, 1, 62, 165, 'TI-I21-0717-0019'),
(391, 1, 62, 166, 'TI-I21-0717-0020'),
(392, 1, 58, 166, 'TI-I21-0717-0021'),
(393, 1, 64, 167, 'TI-I21-0719-0001'),
(394, 1, 62, 167, 'TI-I21-0719-0002'),
(395, 1, 63, 167, 'TI-I21-0719-0003');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities_log_log_activity`
--
ALTER TABLE `activities_log_log_activity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activities_log_log_activity_account_id_9344823b_fk_auth_user_id` (`account_id`);

--
-- Indexes for table `articles_article`
--
ALTER TABLE `articles_article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `articles_article_owner_id_9cf33c2d_fk_auth_user_id` (`owner_id`);

--
-- Indexes for table `attendance_log_attendance_log`
--
ALTER TABLE `attendance_log_attendance_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attendance_log_atten_account_id_c089441e_fk_auth_user` (`account_id`);

--
-- Indexes for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD PRIMARY KEY (`key`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `categories_category`
--
ALTER TABLE `categories_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `inventories_inventory`
--
ALTER TABLE `inventories_inventory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventories_inventory_product_id_8199cb3d_fk_products_product_id` (`product_id`),
  ADD KEY `inventories_inventor_supplier_id_c1910ce3_fk_suppliers` (`supplier_id`);

--
-- Indexes for table `knox_authtoken`
--
ALTER TABLE `knox_authtoken`
  ADD PRIMARY KEY (`digest`),
  ADD UNIQUE KEY `salt` (`salt`),
  ADD KEY `knox_authtoken_user_id_e5a5d899_fk_auth_user_id` (`user_id`),
  ADD KEY `knox_authtoken_token_key_8f4f7d47` (`token_key`);

--
-- Indexes for table `products_product`
--
ALTER TABLE `products_product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `products_product_category_id_9b594869_fk_categories_category_id` (`category_id`),
  ADD KEY `products_product_supplier_id_b9ff64a9_fk_suppliers_supplier_id` (`supplier_id`);

--
-- Indexes for table `suppliers_supplier`
--
ALTER TABLE `suppliers_supplier`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `address` (`address`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Indexes for table `transactions_transaction`
--
ALTER TABLE `transactions_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_transaction_creator_id_5e1086da_fk_auth_user_id` (`creator_id`);

--
-- Indexes for table `transaction_items_transaction_item`
--
ALTER TABLE `transaction_items_transaction_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transaction_items_tr_product_id_e51349c3_fk_products_` (`product_id`),
  ADD KEY `transaction_items_tr_transaction_id_ab096661_fk_transacti` (`transaction_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities_log_log_activity`
--
ALTER TABLE `activities_log_log_activity`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT for table `articles_article`
--
ALTER TABLE `articles_article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attendance_log_attendance_log`
--
ALTER TABLE `attendance_log_attendance_log`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=262;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories_category`
--
ALTER TABLE `categories_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=443;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `inventories_inventory`
--
ALTER TABLE `inventories_inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `products_product`
--
ALTER TABLE `products_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `suppliers_supplier`
--
ALTER TABLE `suppliers_supplier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `transactions_transaction`
--
ALTER TABLE `transactions_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `transaction_items_transaction_item`
--
ALTER TABLE `transaction_items_transaction_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=396;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activities_log_log_activity`
--
ALTER TABLE `activities_log_log_activity`
  ADD CONSTRAINT `activities_log_log_activity_account_id_9344823b_fk_auth_user_id` FOREIGN KEY (`account_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `articles_article`
--
ALTER TABLE `articles_article`
  ADD CONSTRAINT `articles_article_owner_id_9cf33c2d_fk_auth_user_id` FOREIGN KEY (`owner_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `attendance_log_attendance_log`
--
ALTER TABLE `attendance_log_attendance_log`
  ADD CONSTRAINT `attendance_log_atten_account_id_c089441e_fk_auth_user` FOREIGN KEY (`account_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD CONSTRAINT `authtoken_token_user_id_35299eff_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `inventories_inventory`
--
ALTER TABLE `inventories_inventory`
  ADD CONSTRAINT `inventories_inventor_supplier_id_c1910ce3_fk_suppliers` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers_supplier` (`id`),
  ADD CONSTRAINT `inventories_inventory_product_id_8199cb3d_fk_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products_product` (`id`);

--
-- Constraints for table `knox_authtoken`
--
ALTER TABLE `knox_authtoken`
  ADD CONSTRAINT `knox_authtoken_user_id_e5a5d899_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `products_product`
--
ALTER TABLE `products_product`
  ADD CONSTRAINT `products_product_category_id_9b594869_fk_categories_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories_category` (`id`),
  ADD CONSTRAINT `products_product_supplier_id_b9ff64a9_fk_suppliers_supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers_supplier` (`id`);

--
-- Constraints for table `transactions_transaction`
--
ALTER TABLE `transactions_transaction`
  ADD CONSTRAINT `transactions_transaction_creator_id_5e1086da_fk_auth_user_id` FOREIGN KEY (`creator_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `transaction_items_transaction_item`
--
ALTER TABLE `transaction_items_transaction_item`
  ADD CONSTRAINT `transaction_items_tr_product_id_e51349c3_fk_products_` FOREIGN KEY (`product_id`) REFERENCES `products_product` (`id`),
  ADD CONSTRAINT `transaction_items_tr_transaction_id_ab096661_fk_transacti` FOREIGN KEY (`transaction_id`) REFERENCES `transactions_transaction` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
