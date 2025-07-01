import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css/bundle";

function initSlider() {
  return new Swiper(".slider", {
    modules: [Pagination],
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: null,
      prevEl: null,
    },
    simulateTouch: true,
    touchRatio: 1,
    grabCursor: true,
  });
}

export default initSlider;
