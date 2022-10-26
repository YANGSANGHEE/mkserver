alert('자바스크립트불러옴');

let Title = document.getElementById('title');
let isTrue = true;

Title.addEventListener('click', () => {
  if (isTrue) {
    isTrue = false
    Title.style.color = 'blue';
  } else {
    isTrue = true;
    Title.style.color = 'red';
  }
})
