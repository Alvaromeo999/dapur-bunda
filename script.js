// PREVIEW BUKTI PEMBAYARAN
const buktiInput = document.getElementById("bukti");
const preview = document.getElementById("preview");

if (buktiInput) {
  buktiInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    }
  });
}

// SUBMIT FORM
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const produk = document.getElementById("produk").value;
  const jumlah = Number(document.getElementById("jumlah").value);
  const harga = Number(document.getElementById("harga").value);
  const alamat = document.getElementById("alamat").value;

  const total = harga * jumlah;
  const tanggal = new Date().toLocaleString("id-ID");
  const kodeOrder = "DB-" + Date.now().toString().slice(-6);

  // PESAN WHATSAPP
  const pesan = `
🧾 PESANAN DAPUR BUNDA
Kode Order : ${kodeOrder}

Nama        : ${nama}
Produk      : ${produk}
Jumlah      : ${jumlah}
Harga       : Rp ${harga.toLocaleString("id-ID")}
Total Bayar : Rp ${total.toLocaleString("id-ID")}

Alamat      : ${alamat}

💳 Pembayaran: QRIS
📸 Bukti     : Dilampirkan via chat

📍 Jalan Kepodang VII No.7
`;

  // TAMPILKAN NOTA
  document.getElementById("nota").innerHTML = `
    <div class="nota-box">
      <h2>DAPUR BUNDA</h2>
      <p>Jalan Kepodang VII No.7<br>Wonogiri 57611</p>
      <hr>

      <p><b>Tanggal:</b> ${tanggal}</p>
      <p><b>Kode Order:</b> ${kodeOrder}</p>
      <p><b>Nama:</b> ${nama}</p>
      <p><b>Produk:</b> ${produk}</p>
      <p><b>Jumlah:</b> ${jumlah}</p>
      <p><b>Harga Satuan:</b> Rp ${harga.toLocaleString("id-ID")}</p>
      <p><b>Total Bayar:</b> 
        <span style="color:green;font-size:18px">
          Rp ${total.toLocaleString("id-ID")}
        </span>
      </p>

      <hr>
      <p>Status: <b>Menunggu Konfirmasi Admin</b></p>
    </div>
  `;

  document.querySelector(".nota-actions").style.display = "block";

  // BUKA WHATSAPP
  const nomorWA = "6285229455301";
  const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(urlWA, "_blank");
});

// CETAK NOTA
function printNota() {
  window.print();
}
