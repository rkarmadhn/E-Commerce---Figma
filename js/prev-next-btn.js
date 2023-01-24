var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");
var overflowContainer = document.getElementById("cardSection")
var scrollAmount = 500;
var scrollSpeed = 50;

prevButton.addEventListener("click", function () {
  scroll(-scrollAmount);
});

nextButton.addEventListener("click", function () {
  scroll(scrollAmount);
});

function scroll(amount) {
  var start = overflowContainer.scrollLeft;
  var end = start + amount;
  var currentFrame = 0;
  var totalFrames = scrollSpeed;

  function animate() {
    currentFrame++;
    overflowContainer.scrollLeft = easeInOutQuad(currentFrame, start, end, totalFrames);
    if (currentFrame < totalFrames) {
      window.requestAnimationFrame(animate);
    }
  }

  animate();
}

function easeInOutQuad(currentFrame, start, end, totalFrames) {
  currentFrame /= totalFrames / 2;
  if (currentFrame < 1) {
    return ((end - start) / 2) * currentFrame * currentFrame + start;
  }
  currentFrame--;
  return (-(end - start) / 2) * (currentFrame * (currentFrame - 2) - 1) + start;
}
