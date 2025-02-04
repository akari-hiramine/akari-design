const header = document.getElementsByClassName('header');

window.addEventListener('scroll', () => {
  const scrollValue = document.scrollingElement.scrollTop;

  if(scrollValue >=300){
    header.style.display = inline;
  }

  else{
    header.style.display = 'none';
  }
});