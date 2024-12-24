-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2024 at 04:27 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `penelitian`
--

-- --------------------------------------------------------

--
-- Table structure for table `penelitian`
--

CREATE TABLE `penelitian` (
  `kd_penelitian` int(11) NOT NULL,
  `judul` text NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `thn_akademik` varchar(9) NOT NULL,
  `tanggal` date NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `penelitian`
--

INSERT INTO `penelitian` (`kd_penelitian`, `judul`, `lokasi`, `thn_akademik`, `tanggal`, `status`) VALUES
(1, 'Pengaruh Digital Marketing terhadap Keputusan Mahasiswa Baru', 'Universitas Binaniaga Indonesia', '2023/2024', '2023-02-25', 2),
(2, 'Penerapan Metode Algoritma C4.5 Untuk Prediksi Mahaiswa Non Aktif', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-03-03', 2),
(3, 'Penerapan Web Service Untuk Meningkatkan Performa Kecepatan Data Pada Sistem TPA', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-12-01', 2),
(4, 'Penerapan Algoritma N-Gram Dan Winnowing Untuk Deteksi Plagiarisme Usulan Dokumen Perguruan Tinggi', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-12-02', 2),
(5, 'Penerapan Internet Of Things Untuk Pengontrolan Lampu Rumah Melalui Chatting Via Telegram', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-12-07', 2),
(6, 'Penerapan Internet Of Things Untuk Notifikasi Ketersediaan Pakan Ayam Menggunakan Aplikasi Chat', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-12-02', 2),
(7, 'Pengembangan Sistem IoT untuk Monitoring Ketersediaan Air di Kampus', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-12-05', 2),
(8, 'Aplikasi Keamanan Data Gambar Menggunakan Algoritma RSA (Rivest Shamir Adleman) Berbasis Desktop', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-12-08', 2),
(9, 'Analisis Perbandingan Algoritma Support Vector Machine dan Random Forest untuk Prediksi Kelulusan Mahasiswa Berdasarkan Riwayat Nilai Akademik Kampus', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-12-05', 2),
(10, 'Sistem Informasi Nilai Akademik Mahasiswa Menggunakan Teknik Json dan NFC', 'Universitas Binaniaga Indonesia', '2021/2022', '2021-12-08', 2),
(11, 'Studi Keamanan Data pada Sistem Informasi Akademik Kampus', 'Universitas Binaniaga Indonesia', '2024/2025', '2024-12-01', 1),
(12, 'Efektivitas Iklan Media Sosial untuk Optimasi Digital Marketing UMKM', 'Bogor', '2022/2023', '2023-01-04', 2),
(13, 'Rancang Bangun Sistem Informasi Absensi Mahasiswa', 'Universitas Binaniaga Indonesia', '2022/2023', '2023-01-05', 2),
(14, '	Pengembangan Sistem Informasi Kepegawaian Berbasis Web dengan Fitur Integrasi API untuk Kemudahan Manajemen Data', 'Kota Bogor', '2022/2023', '2023-01-02', 2),
(15, 'Pengembangan Internet of Things untuk Monitoring Kelas', 'Universitas Binaniaga Indonesia', '2022/2023', '2023-01-05', 2),
(16, 'Penerapan Metode Naive Bayes Classifier Untuk Penentuan Topik Tugas Akhir', 'Universitas Binaniaga Indonesia', '2022/2023', '2023-01-07', 1),
(17, 'Penerapan Algoritma Naive Bayes untuk Prediksi Kelulusan Mahasiswa', 'Universitas Binaniaga Indonesia ', '2022/2023', '2023-01-08', 1),
(18, 'Strategi Pemasaran Dan Rencana Bisnis Sebagai Upaya Peningkatan Penjualan Bagi IKM Universitas Binaniaga', 'IKM Universitas Binaniaga', '2022/2023', '2023-01-22', 0),
(19, 'Analisis arus uang arus barang dalam rangka pembuktian faktur pajak cacat terhadap pemeriksa pajak tahun 2019', 'PT.Pionirbeton Industri', '2022/2023', '2022-08-01', 0),
(20, 'Sistem Pendukung Keputusan Penentuan Beasiswa Menggunakan Metode AHP', 'Universitas Binaniaga Indonesia', '2023/2024', '2023-05-01', 2),
(21, 'Pengaruh Lingkungan Kerja dan Beban Kerja terhadap Produktivitas Kerja Karyawan PT. Alva Karya Perkasa Cabang Jakarta Selatan', 'PT. Alva Karya Perkasa Jakarta Selatan', '2023/2024', '2024-04-21', 0),
(22, 'Studi Penggunaan Teknologi Blockchain untuk Sistem Manajemen Sertifikat Akademik Guna Meningkatkan Transparansi dan Keamanan Data', 'Universitas Binaniaga Indonesia', '2024/2025', '2024-09-08', 1),
(23, 'Analisis Data Mining untuk Prediksi Kelulusan Mahasiswa', 'Universitas Binaniaga Indonesia', '2023/2024', '2023-01-14', 3),
(24, 'Pengembangan Aplikasi Mobile untuk Monitoring Kehadiran Dosen', 'Universitas Binaniaga Indonesia', '2023/2024', '2023-03-25', 3),
(26, 'Penerapan Sistem Informasi Geografis untuk Pemilihan Lokasi Magang', 'Universitas Binaniaga Indonesia', '2023/2024', '2023-09-25', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `penelitian`
--
ALTER TABLE `penelitian`
  ADD PRIMARY KEY (`kd_penelitian`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `penelitian`
--
ALTER TABLE `penelitian`
  MODIFY `kd_penelitian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
