<?php
include 'koneksi.php';

$nama = $_POST['nama'];
$jumlah = $_POST['jumlah'];
$harga = $_POST['harga'];

mysqli_query($conn, "INSERT INTO barang (nama_barang, jumlah, harga) VALUES ('$nama', $jumlah, $harga)");
