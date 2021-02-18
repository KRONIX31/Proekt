document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openmodal_45"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
    });
    document.querySelector('[href="#!"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openmodal_45').style.marginLeft = '0px';
    });
  });