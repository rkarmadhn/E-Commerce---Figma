let slideIndexPay = 1;
showSlidesPay(slideIndexPay);

function plusSlides(n) {
  showSlidesPay((slideIndexPay += n));
}

function currentSlidesPay(n) {
  showSlidesPay((slideIndexPay = n));
}

function showSlidesPay(n) {
  let i;
  let slides = document.getElementsByClassName("list-bill");
  let headSlides = document.getElementsByClassName("a-link");

  if (n > slides.length && n > headSlides.length) {
    slideIndexPay = 1;
  }

  if (n < 1) {
    slideIndexPay = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    headSlides[slideIndexPay - 1].style.color = "#52057B";
  }
  headSlides[i].style.color = "#828282";
}
