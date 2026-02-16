
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('.slider');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  if (slider && next && prev) {
    next.onclick = () => slider.scrollLeft += 420;
    prev.onclick = () => slider.scrollLeft -= 420;
  }
});
