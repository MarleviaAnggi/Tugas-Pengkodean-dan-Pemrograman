document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-barang');
  const tabel = document.getElementById('tabel-barang');

  function tampilkanData() {
    fetch('proses/tampil.php')
      .then(res => res.text())
      .then(data => {
        tabel.innerHTML = data;
        pasangHapus();
      });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const harga = document.getElementById('harga').value;

    fetch('proses/tambah.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `nama=${nama}&jumlah=${jumlah}&harga=${harga}`
    })
    .then(res => res.text())
    .then(() => {
      form.reset();
      tampilkanData();
    });
  });

  function pasangHapus() {
    document.querySelectorAll('.hapus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        fetch(`proses/hapus.php?id=${id}`)
          .then(() => tampilkanData());
      });
    });
  }

  tampilkanData();
});
