document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const produk = document.getElementById("produk").value;
  const jumlah = document.getElementById("jumlah").value;
  const alamat = document.getElementById("alamat").value;

  const pesan = `
🧾 PESANAN DAPUR BUNDA

Nama        : ${nama}
Produk      : ${produk}
Jumlah      : ${jumlah}
Alamat      : ${alamat}

💳 Pembayaran: QRIS
📸 Bukti     : Dilampirkan via chat

📍 Jalan Kepodang VII No.7
`;

const buktiInput = document.getElementById("bukti");
const preview = document.getElementById("preview");
const statusBukti = document.getElementById("statusBukti");

buktiInput.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
    statusBukti.innerHTML = "✅ Bukti pembayaran siap dikirim";
  }
});

  
  const nomorWA = "6285229455301";
  const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  // tampilkan nota di web
  document.getElementById("nota").innerHTML = `
    <h3>🧾 Nota Pesanan</h3>
    <p><b>Nama:</b> ${nama}</p>
    <p><b>Produk:</b> ${produk}</p>
    <p><b>Jumlah:</b> ${jumlah}</p>
    <p><b>Status:</b> Menunggu konfirmasi admin</p>
    <p>📲 Pesanan akan dikirim ke WhatsApp</p>
  `;

  // buka WhatsApp
  window.open(urlWA, "_blank");
});
