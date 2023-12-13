const openContactButtons = document.querySelectorAll('a[data-contact-target]');
const closeContactButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openContactButtons.forEach(button => {
    button.addEventListener('click', () => {
       event.preventDefault();  // Prevent default anchor behavior
       const contact = document.querySelector(button.dataset.contactTarget);
       openContact(contact);
    });
});

closeContactButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contact = button.closest('.contact');
        closeContact(contact);
    });
});

function openContact(contact) {
    if (contact == null) return;
    contact.classList.add('active');
    overlay.classList.add('active');
}

function closeContact(contact) {
    if (contact == null) return;
    contact.classList.remove('active');
    overlay.classList.remove('active');
}

const img = new Image();
img.src = "../images/pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg";
const canvasXSize = 4000;
const canvasYSize = 6000;
const scale = 1.3;
let imgW;
let imgH;
let clearX;
let clearY;
let ctx;

img.onload = () => {
  imgW = img.width * scale;
  imgH = img.height * scale;

  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

  ctx = document.getElementById("canvas").getContext("2d");

  // Draw initial image
  draw(0);
};

window.addEventListener('scroll', () => {
  // Calculate vertical scroll position
  const scrollPosition = window.scrollY;
  const yPos = -scrollPosition % imgH;

  draw(yPos);
});

function draw(y) {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // Adjust as needed to ensure continuous loop
  if (y + imgH < canvasYSize) {
    ctx.drawImage(img, 0, y + imgH, imgW, imgH);
  }

  ctx.drawImage(img, 0, y, imgW, imgH);
}

