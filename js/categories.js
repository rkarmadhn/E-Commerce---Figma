const rowCategories = document.querySelector(".categories");
let catData = [];

const loadCatData = async () => {
  try {
    const resCatData = await fetch("/database/categories.json");
    catData = await resCatData.json();
    loadMenuCatData(catData)
  } catch (error) {
    console.log(error);
  }
};

const loadMenuCatData = (categories) => {
  const tampilData = categories
    .map((eCat) => {
      return `<div class="col-lg-1 col-md-2 display-center">
      <a href="#" class="link">
      <div class="logo-category my-2 display-center">
      <img src="images/vector-category/${eCat.logo}" alt="" class="logos"/>
      </div>
      <div class="title-category display-center text-center my-2">
      <p class="paragraph-2">${eCat.title}</p>
      </div>
      </a>
      </div>
      `
    })
    .join("");
    rowCategories.innerHTML = tampilData
};
loadCatData()