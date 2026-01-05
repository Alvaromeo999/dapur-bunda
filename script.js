document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nama = nama.value;
  const produk = document.getElementById("produk").value;
  const jumlah = document.getElementById("jumlah").value;

  document.getElementById("nota").innerHTML = `
    <h3>🧾 Nota Pesanan</h3>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Produk:</strong> ${produk}</p>
    <p><strong>Jumlah:</strong> ${jumlah}</p>
    <p>Status: <b>Menunggu Konfirmasi Admin</b></p>
  `;
});
