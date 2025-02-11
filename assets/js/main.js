const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollValue = document.scrollingElement.scrollTop;

  if (scrollValue >= 300) {
    header.style.display = 'flex';
  } else{
    header.style.display = 'none';
  }

});
