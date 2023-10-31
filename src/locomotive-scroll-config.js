import LocomotiveScroll from 'locomotive-scroll';

export default function createScroll() {

  const scrollContainer = document.querySelector('[data-scroll-container]');
  const scroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    repeat: true,
    class: 'animate',
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  })

//  scroll.destroy([document.querySelector('#leftImageSlide')]);
//  scroll.destroy([document.querySelector('.leftImageSlide2')]);
//  scroll.destroy([document.querySelector('.rightImageSlide')]);
//  scroll.destroy([document.querySelector('.rightImageSlide2')]);

  window.addEventListener('resize', () => {
    scroll.update();
  })

  return scroll;
};
