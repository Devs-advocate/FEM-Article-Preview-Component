const shareSVG = document.querySelector('.share-btn svg path');
const shareBtn = document.querySelector('.personal .share-btn');
const links = document.querySelector('.social-media-links');

shareSVG.setAttribute('fill', '#6E8098');

if (links.style.display === 'none') {
  links.style.display = '';
  links.classList.add('off');
}

shareBtn.addEventListener('click', toggleLinks);

function toggleLinks() {
  links.classList.toggle('off');

  window.innerWidth > 849
    ? links.classList.contains('off')
      ? shareSVG.setAttribute('fill', '#6E8098')
      : shareSVG.setAttribute('fill', 'white')
    : '';

  window.innerWidth > 849
    ? links.classList.contains('off')
      ? (shareBtn.style.backgroundColor = '')
      : (shareBtn.style.backgroundColor = '#6E8098')
    : '';
}
