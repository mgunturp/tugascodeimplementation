const pijarFood = (harga, voucher, jarak, pajak) => {
  let potongan = 0;
  let biayaAntar = 5000;
  
  if (voucher === "PIJARFOODS") {
      if (harga >= 50000) {
          potongan = (harga * 50) / 100;
          
          if (potongan > 50000) {
        potongan = 50000;
      }
    }
} else if (voucher === "DITRAKTIRPIJAR") {
    if (harga >= 25000) {
      potongan = (harga * 60) / 100;
      
      if (potongan > 30000) {
          potongan = 30000;
        }
    }
}
if (jarak > 2) {
    biayaAntar += (jarak - 2) * 3000;
} 

let biayaPajak;
if (pajak) {
  biayaPajak = (harga * 5) / 100;
} else {
  biayaPajak = 0;
}

  const subtotal = harga - potongan + biayaAntar + biayaPajak

  console.log(`
Harga:${harga}
Potongan:${potongan}
Biaya Antar:${biayaAntar}
Pajak:${biayaPajak}
SubTotal:${subtotal}`);
};
pijarFood(75000, "PIJARFOODS", 5, true);
