window.onload = function init() {
    let navBtn = document.querySelector('#navbtn');
    let topNav = document.querySelector('.top-nav');

    navBtn.addEventListener('click', function displayNav(evt) {
        topNav.classList.toggle('active');
    });

    let getImages = document.querySelectorAll(".small-image");
    let displayDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const displayBiggerImages = document.createElement('img');
    let imgCont = document.querySelector('#gallery');

    getImages.forEach(function (n) {
        n.addEventListener('click', function (evt) {
            let attr = n.getAttribute('src');

            imgCont.appendChild(displayDiv);
            displayDiv.classList.add('large-images');
            displayDiv.appendChild(displayBiggerImages);

            displayBiggerImages.src = attr;
            displayBiggerImages.title = n.title;

        })
    });

    displayDiv.appendChild(removeBtn);
    removeBtn.textContent = "X";
    removeBtn.classList.add('close-large-images');
    removeBtn.addEventListener('click', function (evt) {
        imgCont.removeChild(displayDiv);
    });

    let services = document.querySelector('#services');
    let servicesOffer = document.querySelector('#services-offer');
    let servicesOfferStyle = servicesOffer.offsetLeft;


    if(servicesOfferStyle > window.innerWidth) {
        servicesOffer.style.overflow = 'scroll';
    }
}



window.onscroll = function scrollIt() {
    let siteHeader = document.querySelector(".site-nav");
    let services = document.querySelector('#services');
    let gettingStarted = document.querySelector('#gettingStarted');
    let logo = document.querySelector('.logo-h1');
    let sticky = siteHeader.offsetTop;
    let servicesPopUp = services.offsetTop;


    if (window.pageYOffset > sticky) {
        siteHeader.classList.add("sticky");
        logo.classList.add("changelogo")
    } else {
        siteHeader.classList.remove("sticky");
        logo.classList.remove("changelogo");
    }

    if(window.pageYOffset > servicesPopUp && window.innerWidth > 776) {
        gettingStarted.style.display = "block";
    }

    let gettingStartedBtn = document.querySelector('#gettingStarted button');
    gettingStartedBtn.addEventListener('click', function(evt) {
        gettingStarted.style.display = "none";
    });

}