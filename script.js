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
Harga       : Rp ${Number(harga).toLocaleString("id-ID")}
Total Bayar : Rp ${Number(total).toLocaleString("id-ID")}

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
  const tanggal = new Date().toLocaleString("id-ID");

document.getElementById("nota").innerHTML = `
  <div class="nota-box">
    <h2>DAPUR BUNDA</h2>
    <p>Jalan Kepodang VII No.7<br>Wonogiri 57611</p>
    <hr>

    <p><b>Harga Satuan:</b> Rp ${Number(harga).toLocaleString("id-ID")}</p>
<p><b>Total Bayar:</b> <span style="color:green;font-size:18px">
Rp ${Number(total).toLocaleString("id-ID")}
</span></p>

    <hr>
    <p>Status: <b>Menunggu Konfirmasi Admin</b></p>
  </div>
`;

document.querySelector(".nota-actions").style.display = "block";

const harga = document.getElementById("harga").value;
const total = harga * jumlah;
  
  // buka WhatsApp
  window.open(urlWA, "_blank");
});

function printNota(){
  window.print();
}
