function transaksi(coin, total) {
  let fee = 0.5;
  let biaya = 0;

  // sort descending js
  // bandingkan 2 nilai apabila return hasil minus maka sort desc
  coin.sort((a, b) => {
    return b - a;
  });

  // index sudah ditambahkan sebelum hasil total minus
  for (var index = 0; total > 0; index++) {
    total = total + fee - coin[index];
    biaya = biaya + fee;
  }
  //new var
  let sisa = coin.slice(index);
  // jika total coin yg telah menjadi minus perlu di abs dahulu
  // unshift/push sisa total coin index pertama ke array sisa
  sisa.unshift(Math.abs(total));

  console.log(
    "Coin diperlukan : " + coin.slice(0, index),
    " Biaya : " + biaya,
    " Sisa Coin : " + sisa
  );

}

transaksi([10, 5, 2, 3, 6, 7], 23);
