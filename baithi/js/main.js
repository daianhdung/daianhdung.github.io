// scroll to top

const scrollTopBtn = document.querySelector('.scrollToTop-btn')

window.addEventListener('scroll', function () {
    scrollTopBtn.classList.toggle('active', window.scrollY > 500)
})

scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Scrollreveal animations

ScrollReveal({
    reset: false,
    distance: '55px',
    duration: 1400,
    delay: 100
});

// Target elements

ScrollReveal().reveal('.shop-item-list img', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.dog-item img', {delay: 400, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.dog-img', {delay: 400, origin: 'top'});
ScrollReveal().reveal('.descrip-item h4', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.main-banner-left h1, .main-banner-left p, .main-banner-left span, .main-banner-left h2, .banner-bottom .btn-now', {delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.descrip-item', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.btn-icon', {delay: 500, origin: 'right'});
ScrollReveal().reveal('.best-deal-item', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.best-deal-item h1, .best-deal-item span, .best-deal-item h3', {delay: 300, origin: 'left', interval: 100});

ScrollReveal().reveal('.img-user1', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.img-user2', {delay: 300, origin: 'top'});
ScrollReveal().reveal('.img-user3', {delay: 300, origin: 'right'});

ScrollReveal().reveal('.customer-bot div img', {delay: 300, origin: 'right'});
ScrollReveal().reveal('.col-top img', {delay: 300, origin: 'bottom'});


ScrollReveal().reveal('.spring-pet-item h3, .spring-pet-item h4, .spring-pet-item span', {delay:300, origin:'right', interval:100})

ScrollReveal().reveal('.time', {delay:300, origin:'left', reset:true})
ScrollReveal().reveal('.count', {delay:300, origin:'top', })
ScrollReveal().reveal('.card-01-left-top', {delay:300, origin:'top', })
ScrollReveal().reveal('.card-01-left-bottom', {delay:300, origin:'bottom', })
ScrollReveal().reveal('.card-01-right-top', {delay:300, origin:'top', })
ScrollReveal().reveal('.card-01-right-bottom h3', {delay:300, origin:'top', })
ScrollReveal().reveal('.card-01-right-bottom h5', {delay:300, origin:'bottom', })
