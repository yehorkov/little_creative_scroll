gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.heroes-section', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.heroes-section',
            start: 'center',
            end: '800',
            scrub: true
        }
    })

   function animateGalleryItems(selector) {
    const items = gsap.utils.toArray(selector);

    items.forEach(item => {
        gsap.fromTo(item, {x: selector.includes('left') ? -100 : 100, opacity: 0}, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '100',
                scrub: true
            }
        });
    });
}

animateGalleryItems('.gallery__left .gallery__item');
animateGalleryItems('.gallery__right .gallery__item');
}
