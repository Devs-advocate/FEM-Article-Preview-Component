const shareBtn1 = document.querySelector('.personal .share-btn');
const shareBtn2 = document.querySelector('.social-media-links .share-btn');
const personal = document.querySelector('.personal');
const links = document.querySelector('.social-media-links');

if (links.style.display === 'none') {
  links.style.display = '';
  links.classList.add('off');
}

shareBtn1.addEventListener('click', toggleLinks);
shareBtn2.addEventListener('click', toggleLinks);

function toggleLinks() {
  personal.classList.toggle('off');
  links.classList.toggle('off');
}
