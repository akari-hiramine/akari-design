// const header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//   const scrollValue = document.scrollingElement.scrollTop;

//   if (scrollValue >= 200) {
//     header.style.display = 'flex';
//   } else{
//     header.style.display = 'none';
//   }

// });


$(function(){
 //  リンクホバー時アニメーション
 $('#header-logo a, #nav-pc a, #works-container img, #bt-detail, #footer-link a, #bt-pagetop-pc, .bt-back').hover(
  function(){
    $(this).animate({
      opacity: 0.5,
    }, 300);  
  },
  function(){
    $(this).animate({
      opacity: 1.0,
    }, 300);
  }
 );

});