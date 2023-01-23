const cardSection = document.querySelector(".card-section");
const cardPrice = document.querySelector(".testjs");
let bilangan = 0.1;
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
  const outputSmartphone = stocks.map((a) => {
    return a.smartphone.map((ab) => {
      return ab.hp
        .map((abc) => {
          return `<div class="card-display card-price">
        <div class="card-image">
          <img src="images/stock/${abc.image}.png" alt="" class="" />
        </div>
        <div class="group card-text">
          <div class="card-text-head">
            <p class="p-mini my-2" style="color: #828282">${abc.jenis}</p>
            <p class="paragraph-2 my-2">${abc.title}</p>
          </div>
          <div class="group card-text-body">
            <p class="p-mini text-decoration-line-through">Rp. ${abc.price} ,-</p>
            <div class="group display-between-center">
              <p class="paragraph-2 my-2">Rp. ${abc.price - (abc.price * bilangan) } ,-</p>
              <div class="group discount-group">
                <p class="discount-text">- 10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
        })
        .join("");
    });
  });
  cardSection.innerHTML = outputSmartphone;
};

loadStock();
