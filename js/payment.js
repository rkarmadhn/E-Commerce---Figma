const listBill = document.querySelector(".list-bill");
const btnPaymentMore = document.querySelector(".btn-more-payment");

btnPaymentMore.onclick = () => {
  btnPaymentMore.classList.toggle("fade-animation");
  btnPaymentMore.classList.toggle("hide");
  listBill.classList.toggle("fade-animation");
  listBill.classList.toggle("hide");
};

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
