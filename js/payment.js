const listBill = document.querySelector(".list-bill");
let listData = [];

const loadListBill = async () => {
  try {
    const resBill = await fetch("/database/db.json");
    listData = await resBill.json();
    loadUserListBill(listData);
    loadSearch(listData);
  } catch (error) {
    console.log(error);
  }
};

const loadUserListBill = (pay) => {
  const outputPay = pay
    .map((el) => {
      return `<a class="text-purple a-link">${el.nama}</a>`;
    })
    .join("");

  listBill.innerHTML = outputPay;
};

loadListBill();
