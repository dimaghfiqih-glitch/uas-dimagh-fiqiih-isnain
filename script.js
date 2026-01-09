function validasi() {
  let barang = document.getElementById("barang").value;
  let kategori = document.getElementById("kategori").value;
  let jumlah = document.getElementById("jumlah").value;

  if (barang === "" || kategori === "" || jumlah === "") {
    alert("Semua data wajib diisi!");
    return false;
  }

  alert("Transaksi berhasil disimpan");
  return true;
}
