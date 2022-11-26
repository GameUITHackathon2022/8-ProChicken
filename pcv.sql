-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2022 lúc 12:19 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `pcv`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `event`
--

CREATE TABLE `event` (
  `id` bigint(20) NOT NULL,
  `company` varchar(2550) DEFAULT NULL,
  `description` mediumtext DEFAULT NULL,
  `green_point` bigint(20) DEFAULT NULL,
  `location` varchar(2550) DEFAULT NULL,
  `name` varchar(2550) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `user_created_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `event`
--

INSERT INTO `event` (`id`, `company`, `description`, `green_point`, `location`, `name`, `time`, `user_created_id`) VALUES
(1, 'Khoa học tự nhiên', 'Tình nguyện viên sẽ quét rác dọc theo bờ biển Vũng Tàu từ lúc 7h sáng tới 11h trưa. Sau đó sẽ có một buổi ăn trưa vào lúc 11h30. Tiếp theo các tình nguyện viên tiếp tục công việc vào lúc 2h chiều. Các sinh viên thuộc trường Khoa học tự nhiên tham gia sẽ được cộng điểm rèn luyện.', 500, 'Vũng Tàu', 'Dọn rác ven biển Vũng Tàu', '2022-11-27 04:45:41', 1),
(2, 'Đại học sư phạm', 'Tình nguyện viên sẽ trồng cây dọc theo ven đường Võ Văn Kiệt từ lúc 7h sáng tới 11h trưa. Các sinh viên trường đại học Sư phạm sẽ có xe đưa đón đến chỗ tình nguyện. Tình nguyện viên sẽ được điểm bằng mã QR gửi về email.', 1000, 'Tp Hồ Chí Minh ', 'Trồng cây ven đường Võ Văn Kiệt', '2022-11-27 04:49:50', 1),
(3, 'Đại học sự phạm', 'Tình nguyện viên sẽ trồng cây dọc theo ven đường Võ Văn Kiệt từ lúc 7h sáng tới 11h trưa. Các sinh viên trường đại học Sư phạm sẽ có xe đưa đón đến chỗ tình nguyện. Tình nguyện viên sẽ được điểm bằng mã QR gửi về email.', 1000, 'Tp Hồ Chí Minh ', 'Trồng cây ven đường Võ Văn Kiệt ', '2022-11-27 04:50:36', 1),
(4, 'Đại học Quốc Gia TPHCM', 'Sinh viên có mặt đúng giờ vào lúc 7h để điểm danh trước khi vào dọn vệ sinh. Vào lúc 11h sẽ có phần ăn trưa dành cho sinh viên. Ca làm việc cuối cùng sẽ kết thúc vào lúc 5h chiều. Sinh viên trước khi về sẽ được điểm danh một lần nữa. Tất cả sinh viên thuộc các trường đại học Quốc Gia sẽ được cộng điểm rèn luyện.', 2000, 'Thủ Đức ', 'Dọn vệ sinh nhà văn hoá sinh viên ', '2022-11-27 04:53:27', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `company` varchar(2550) DEFAULT NULL,
  `email` varchar(2550) DEFAULT NULL,
  `green_point` bigint(20) DEFAULT NULL,
  `location` varchar(2550) DEFAULT NULL,
  `name` varchar(2550) DEFAULT NULL,
  `password` varchar(2550) DEFAULT NULL,
  `student_code` varchar(2550) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `company`, `email`, `green_point`, `location`, `name`, `password`, `student_code`) VALUES
(1, 'Khoa học tự nhiên ', 'ducanh@gmail.com', 0, 'Quận 7', 'Đức Anh ', 'ducanh123', '21127005'),
(2, 'Đại học Công Nghệ Thông Tin', 'quyhoa@gmail.com', 0, 'Thủ Đức ', 'Quý Hoà', 'quyhoa123', '21127574'),
(3, 'Khoa học tự nhiên ', 'vinhdo@gmail.com', 500, 'Lê Tấn Bê', 'Vĩnh Đồ ', 'vinhdo123', '21127571'),
(4, 'Khoa học tự nhiên ', 'thanhdat@gmail.com', 0, 'Quận 12', 'Thành Đạt', 'thanhdat123', '21127274'),
(5, 'Khoa học tự nhiên ', 'huuloc@gmail.com', 0, 'Quận Tân Phú', 'Hữu Lộc', 'huuloc123', '21127573');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_event`
--

CREATE TABLE `user_event` (
  `user_id` bigint(20) NOT NULL,
  `event_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user_event`
--

INSERT INTO `user_event` (`user_id`, `event_id`) VALUES
(5, 1),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(4, 1),
(4, 2),
(4, 3),
(4, 4);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKtmhk2k194069083a0whklyy66` (`user_created_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_event`
--
ALTER TABLE `user_event`
  ADD KEY `FKspe8srtv69gubpphvrnd7wekt` (`event_id`),
  ADD KEY `FKk3smcqwou8absq8qjt3wk4vy9` (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `event`
--
ALTER TABLE `event`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `FKtmhk2k194069083a0whklyy66` FOREIGN KEY (`user_created_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `user_event`
--
ALTER TABLE `user_event`
  ADD CONSTRAINT `FKk3smcqwou8absq8qjt3wk4vy9` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKspe8srtv69gubpphvrnd7wekt` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
