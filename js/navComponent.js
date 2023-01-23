const nav = document.querySelector("#navbar-component");

const navComponent = function () {
  return `<!-- Top Nav -->
  <div class="container-fluid top-nav">
    <div class="group">
      <a href="http://" class="top-nav-link">Open Sponsorship</a>
      <a href="http://" class="top-nav-link">Call Center</a>
      <a href="http://" class="top-nav-link">Help</a>
      <a href="http://" class="top-nav-link">Tutorial</a>
    </div>
    <div class="group">
      <a href="http://" class="top-nav-link">Be Partners</a>
      <a href="http://" class="top-nav-link">Open Shop</a>
      <a href="http://" class="top-nav-link">Download</a>
      <a href="http://" class="top-nav-link">English</a>
    </div>
  </div>
  <!-- Navigation -->
  <div class="container-fluid container-navbar">
    <div class="navbar-logo">
      <a href="http://" class="display-center gap-2 m-0 nav-link p-0">
        <img src="images/logo-brand.png" alt="" class="logo-brand" />
        <p class="navbar-logo-name">Slabshop</p>
      </a>
    </div>
    <div class="navbar-location">
      <i class="fa-solid fa-location-dot"></i>
      <p class="paragraph-1">Indonesia, Bekasi</p>
    </div>
    <form class="form-search">
      <input type="search" class="input-search" placeholder="Search in Slabshop" />
    </form>
    <div class="dropdown category">
      <button class="btn btn-purple dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Category</button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <div class="icon-group">
      <a href="/" class="link"><i class="fa-regular fa-bell"></i></a>
      <a href="/" class="link"><i class="fa-solid fa-shop"></i></a>
      <a href="/" class="link"><i class="fa-solid fa-basket-shopping"></i></a>
    </div>
    <div class="users">
      <img src="images/users.png" alt="" />
      <div class="group">
        <p class="username paragraph-1">Rakay</p>
        <p class="status text-success paragraph-1">Online</p>
      </div>
    </div>
  </div>
  <div class="container-fluid bottom-nav">
    <div class="group">
      <p class="paragraph-1 display-center gap-1" style="color: #31353b">Popular Search :<span class="searchs display-center gap-2"></span></p>
    </div>
    <div class="group">
      <p class="paragraph-1" style="color: #31353b">Hide</p>
    </div>
  </div>`;
};

nav.innerHTML = navComponent();

let positionScroll = 0;

window.addEventListener("scroll", function () {
  if (positionScroll > this.scrollY) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-200px";
  }
  positionScroll = this.scrollY;
});

const searchz = document.querySelector(".searchs");
const randomNumber = Math.floor(Math.random() * 10) + 1;
const randomNum = Math.floor(Math.random() * 3);

const loadSearch = (pay) => {
  const outputSearch = pay
    .map((el) => {
      if (el.id % randomNumber == randomNum) {
        return `<a href="${el.url}.html" class="text-purple text-decoration-none m-0">${el.nama}</a>`;
      }
    })
    .join("");

  searchz.innerHTML = outputSearch;
}; 

