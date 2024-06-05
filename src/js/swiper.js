import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', () => {

        function setSwiper() {
            let slideWidth = document.getElementsByClassName('swiper-slide')[0].offsetWidth;

            if (window.innerWidth < 850) {
                document.querySelector('.blog-slider').style.width = `${slideWidth}px`;
            } else if (window.innerWidth < 1200 && window.innerWidth >= 850) {
                document.querySelector('.blog-slider').style.width = `${slideWidth * 2}px`;
            } else if (window.innerWidth >= 1200) {
                document.querySelector('.blog-slider').style.width = `${slideWidth * 3}px`;
            }

            if (window.innerWidth < 430) {
                document.querySelectorAll('.swiper-slide').width = 90 + 'vh';
            }
            const swiper = new Swiper('.blog-slider', {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '#right-slider-button',
                    prevEl: '#left-slider-button',
                },
                breakpoints: {
                    850: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }
            });
        }

        setSwiper();

        window.addEventListener('resize', setSwiper);
    }
);