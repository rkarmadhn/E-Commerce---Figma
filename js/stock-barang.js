const cardSection = document.querySelector(".card-section");
const cardPrice = document.querySelector(".testjs");

let stock = [];

const loadStock = async () => {
  try {
    const resStock = await fetch("/database/stock-barang.json");
    stock = await resStock.json();
    loadStockBarang(stock);
  } catch (error) {
    console.log(error);
  }
};

const loadStockBarang = (stocks) => {
  let postingan = stocks.stock.pilihan;

  let gadgetElectronic = postingan.map((jenis) => {
    const type = jenis.gadgetElectronic;
    console.log(type);
});
};

loadStock();
