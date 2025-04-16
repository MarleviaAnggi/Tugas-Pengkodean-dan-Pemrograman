CREATE DATABASE IF NOT EXISTS alat_tulis;
USE alat_tulis;

CREATE TABLE IF NOT EXISTS barang (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama_barang VARCHAR(100),
  jumlah INT,
  harga INT
);
