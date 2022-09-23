let title = document.getElementById('title');

let istrue = true;
title.addEventListener('click', () => {
  if (istrue === true) {
    istrue = false;
    title.style.color = "salmon";
  } else {
    istrue = true;
    title.style.color = "black"
  }
})