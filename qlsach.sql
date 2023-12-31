-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 26, 2023 lúc 11:06 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlsach`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `hoten` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `hoten`, `username`, `password`) VALUES
(1, 'Nguyễn Đắc Hùng 2', 'hung', '123'),
(2, 'Nguyễn Công Hào', 'hao', '123'),
(3, 'Nguyễn Thành Nam', 'nam', '123'),
(4, 'Phùng Mạnh Hùng', 'hung1', '123'),
(5, 'Nguyễn Văn A', 'quanga', '123'),
(6, 'Nhân vật vừa bị xóa', 'hung1', '123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dondathang`
--

CREATE TABLE `dondathang` (
  `madh` varchar(10) NOT NULL,
  `makh` varchar(50) NOT NULL,
  `masp` varchar(10) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tongtien` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `dondathang`
--

INSERT INTO `dondathang` (`madh`, `makh`, `masp`, `soluong`, `tongtien`) VALUES
('1', '11', 's1', 1, 98000),
('11', '11', 's1', 2, 196000),
('2', '12', 's2', 3, 450000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `makh` varchar(50) NOT NULL,
  `hoten` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `sdt` varchar(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `diachi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`makh`, `hoten`, `username`, `password`, `sdt`, `email`, `diachi`) VALUES
('1', 'hugn', 'hungkdo', '12345', '095828748', 'kking@gmail.com', 'hanoi'),
('2', 'hugn13333', 'hungkdoddd', '12345', '095828748', 'kking@gmail.com', 'hanoi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sach`
--

CREATE TABLE `sach` (
  `masp` varchar(10) NOT NULL,
  `tensach` varchar(255) NOT NULL,
  `tacgia` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `mota` varchar(255) NOT NULL,
  `gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sach`
--

INSERT INTO `sach` (`masp`, `tensach`, `tacgia`, `image`, `mota`, `gia`, `soluong`) VALUES
('hung1', 'Tên sách mới lan 6', 'Tác giả mới', 'Đường dẫn hình ảnh mới', 'Mô tả mới', 100000, 50),
('s1', 'BÍ QUYẾT LÀM GIÀU CỦA NAPOLEON HILL', 'NAPOLEON HILL', 'https://product.hstatic.net/200000301138/product/sach-bi-quyet-lam-giau-cua-napoleon-hill_7afd4d479a284a179022bf0c7e4e99ea_large.jpg', 'Bí Quyết Làm Giàu Của Napoleon Hill\r\nBí Quyết Làm Giàu Của Napoleon Hill - Nếu đã sẵn sàng tìm hiểu và áp dụng những nguyên tắc chung hết sức đơn giản này, ngay bây giờ ta có thể tự chuẩn bị bằng cách xác định chính xác mục tiêu mà mình muốn đạt được. Khi', 98000, 60),
('s2', 'Harry Potter Và Hòn Đá Phù Thuỷ', 'J. K . Rowling', 'https://product.hstatic.net/200000301138/product/8934974179672_df75d418490a41b3bfbffca01e1488ef_large.jpg', 'Khi một lá thư được gởi đến cho cậu bé Harry Potter bình thường và bất hạnh, cậu khám phá ra một bí mật đã được che giấu suốt cả một thập kỉ. Cha mẹ cậu chính là phù thủy và cả hai đã bị lời nguyền của Chúa tể Hắc ám giết hại khi Harry mới chỉ là một đứa ', 150000, 47),
('s3', 'Harry Potter Và Phòng Chứa Bí Mật', 'J. K . Rowling', 'https://product.hstatic.net/200000301138/product/8934974182290_808c50e562ac46738ea3b4e92189cc92_large.jpg', 'Harry khổ sở mong ngóng cho kì nghỉ hè kinh khủng với gia đình Dursley kết thúc. Nhưng một con gia tinh bé nhỏ tội nghiệp đã cảnh báo cho Harry biết về mối nguy hiểm chết người đang chờ cậu ở trường Hogwarts.\r\n\r\nTrở lại trường học, Harry nghe một tin đồn ', 170000, 68),
('s4', 'Harry Potter Và Tên Tù Nhân Ngục Azkaban', 'J. K . Rowling', 'https://product.hstatic.net/200000301138/product/2_1e16caf13de7460b8b0dc7f454e7cc0f_large.png', 'Harry Potter may mắn sống sót đến tuổi 13, sau nhiều cuộc tấn công của Chúa tể hắc ám.\r\n\r\nNhưng hy vọng có một học kỳ yên ổn với Quidditch của cậu đã tiêu tan thành mây khói khi một kẻ điên cuồng giết người hàng loạt vừa thoát khỏi nhà tù Azkaban, với sự ', 205000, 100),
('s5', 'Harry Potter Và Chiếc Cốc Lửa', 'J. K . Rowling', 'https://product.hstatic.net/200000301138/product/1_568e89b8232f4bb68d8da7770ee114c0_large.jpg', 'Khi giải Quidditch Thế giới bị cắt ngang bởi những kẻ ủng hộ Chúa tể Voldemort và sự trở lại của Dấu hiệu hắc ám khủng khiếp, Harry ý thức được rõ ràng rằng, Chúa tể Voldemort đang ngày càng mạnh hơn. Và để trở lại thế giới phép thuật, Chúa tể hắc ám cần ', 310000, 68),
('s6', 'Harry Potter Và Hội Phượng Hoàng', 'J. K . Rowling', 'https://product.hstatic.net/200000301138/product/3_21e553400def4f018c589c0d79060918_large.png', 'Harry tức giận vì bị bỏ rơi ở nhà Dursley trong dịp hè, cậu ngờ rằng Chúa tể hắc ám Voldemort đang tập hợp lực lượng, và vì cậu có nguy cơ bị tấn công, những người Harry luôn coi là bạn đang cố che giấu tung tích cậu. Cuối cùng, sau khi được giải cứu, Har', 355000, 35);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thanhtoan`
--

CREATE TABLE `thanhtoan` (
  `matt` varchar(10) NOT NULL,
  `madh` varchar(10) NOT NULL,
  `tongtien` int(11) NOT NULL,
  `pttt` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vanphongpham`
--

CREATE TABLE `vanphongpham` (
  `masp` varchar(10) NOT NULL,
  `tensp` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `mota` varchar(255) NOT NULL,
  `gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `vanphongpham`
--

INSERT INTO `vanphongpham` (`masp`, `tensp`, `image`, `mota`, `gia`, `soluong`) VALUES
('sp1', 'Vỉ 10 Bút Bi Bấm Pentel Wow BK440 1.0mm Màu Xanh', 'https://product.hstatic.net/200000301138/product/vi_10_but_bi_bam_pentel_wow_bk440_1.0mm_mau_xanh_95f928601b1a4a5a863a30c2c004ea58_large.jpg', 'Vỉ 10 bút bi bấm Pentel Wow BK440 1.0mm màu xanh\r\nBút bi bấm Pentel Wow K440 viết rất êm, mực ra đều, không bị đọng mực ở đầu ngòi bút sau khi viết nhé, hàng chất lượng chính hãng.\r\n Xuất xứ: Nhật bản\r\nQuy cách: vĩ 10 cây.', 296000, 253),
('sp2', 'Máy Tính FLEXIO - FX680VN', 'https://product.hstatic.net/200000301138/product/z4226743844039_970f2b3e624b2346765ab090922206e8_7d532166a42441e49cbeb7fcfa1588d7_large.jpg', '', 762000, 324),
('sp3', 'Sổ Tay Lò Xo - Lớn', 'https://product.hstatic.net/200000301138/product/so_tay_lo_xo_-_lon_b35b48cddb7a437abeee92f1d9ecb9ef_78cd214498ac425f91b30310766ce3d5_large.jpg', '', 180000, 124),
('sp4', 'Hộp Bút Captain American', 'https://product.hstatic.net/200000301138/product/7220_1c39b1a73a89718d4f50c910dd0b214e_930eb8bdb86f4d31ac0ca697a6740bbe_c3f8bb3e40204f50a2f86cf3fb85b2dd_large.jpg', '', 237600, 76),
('sp5', 'Đèn Biến Tần FGL 13W', 'https://product.hstatic.net/200000301138/product/cad79310eb1e1a40430f_f5e84b54feed428a9579e17541a29d7c_14bd744ad8c4495daa1205ece0310220_1024x1024.jpg', 'Ánh sáng không đủ là một nguyên nhân chính dẫn tới các bệnh về mắt,vì vậy cần biết cách chăm sóc để có được đôi mắt sáng,thị lực khỏe.Đặc biệt khi đọc sách,làm việc và học tập luôn cần sử dụng ánh sáng hợp lý để bảo vệ đôi mắt. Trong nổ lực kêu gọi \"người', 299250, 127),
('sp9', 'Vỉ 10 Bút Bi Bấm Pentel Wow BK440 1.0mm Màu Xanh', 'https://product.hstatic.net/200000301138/product/vi_10_but_bi_bam_pentel_wow_bk440_1.0mm_mau_xanh_95f928601b1a4a5a863a30c2c004ea58_large.jpg', 'Vỉ 10 bút bi bấm Pentel Wow BK440 1.0mm màu xanh\r\nBút bi bấm Pentel Wow K440 viết rất êm, mực ra đều, không bị đọng mực ở đầu ngòi bút sau khi viết nhé, hàng chất lượng chính hãng.\r\n Xuất xứ: Nhật bản\r\nQuy cách: vĩ 10 cây.', 296000, 253);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `dondathang`
--
ALTER TABLE `dondathang`
  ADD PRIMARY KEY (`madh`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`makh`);

--
-- Chỉ mục cho bảng `sach`
--
ALTER TABLE `sach`
  ADD PRIMARY KEY (`masp`);

--
-- Chỉ mục cho bảng `thanhtoan`
--
ALTER TABLE `thanhtoan`
  ADD PRIMARY KEY (`matt`);

--
-- Chỉ mục cho bảng `vanphongpham`
--
ALTER TABLE `vanphongpham`
  ADD PRIMARY KEY (`masp`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
