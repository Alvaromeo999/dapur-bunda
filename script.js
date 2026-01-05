document.getElementById("orderForm").addEventListener("submit",function(e){
e.preventDefault();
const n=nama.value,p=produk.value,j=jumlah.value,h=harga.value;
const t=h*j;
const pesan=`PESANAN DAPUR BUNDA%0ANama:${n}%0AProduk:${p}%0AJumlah:${j}%0ATotal:Rp ${t}`;
document.getElementById("nota").innerHTML=`<b>Total Bayar:</b> Rp ${t}`;
document.querySelector(".nota-actions").style.display="block";
window.open(`https://wa.me/6285229455301?text=${pesan}`,"_blank");
});
function printNota(){window.print();}
