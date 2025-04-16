<?php
include 'koneksi.php';

$result = mysqli_query($conn, "SELECT * FROM barang");

echo "<table>
<tr><th>ID</th><th>Nama</th><th>Jumlah</th><th>Harga</th><th>Aksi</th></tr>";
while ($row = mysqli_fetch_assoc($result)) {
  echo "<tr>
    <td>{$row['id']}</td>
    <td>{$row['nama_barang']}</td>
    <td>{$row['jumlah']}</td>
    <td>Rp " . number_format($row['harga'], 0, ',', '.') . "</td>
    <td><button class='hapus' data-id='{$row['id']}'>Hapus</button></td>
  </tr>";
}
echo "</table>";
