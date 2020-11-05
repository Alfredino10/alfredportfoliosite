window.onload = function init() {
    let navBtn = document.querySelector('#navbtn');
    let topNav = document.querySelector('.top-nav');

    navBtn.addEventListener('click', function displayNav(evt) {
        topNav.classList.toggle('active');
    });
}



window.onscroll = function scrollIt() {
    let siteHeader = document.querySelector(".site-nav");
    let logo = document.querySelector('.logo-h1');
    let sticky = siteHeader.offsetTop;


    if (window.pageYOffset > sticky) {
        siteHeader.classList.add("sticky");
        logo.classList.add("changelogo")
      } else {
        siteHeader.classList.remove("sticky");
        logo.classList.remove("changelogo");
      }

}