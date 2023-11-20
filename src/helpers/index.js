import { scrollTriggerRefresh } from "@/helpers/gsap";

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function refreshScrollTriggerByElement(element) {
  const options = {
    rootMargin: "150px 0px 150px 0px",
    // threshold: 1.0,
  };
  const callback = function (entries) {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollTriggerRefresh()
        console.log(
          `Refreshing ScrollTrigger on [${Array.from(element.classList).join(
            ","
          )}]`
        );
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
}

// // Браузер и ОС
// function cth(c) { document.documentElement.classList.add(c) }
// 'ontouchstart' in window ? cth('touch') : cth('no-touch');
// if (typeof InstallTrigger !== 'undefined') cth('firefox');
// if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]" })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) cth('safari');
// if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) cth('chrome');
// if (~navigator.appVersion.indexOf("Win")) cth('windows');
// if (~navigator.appVersion.indexOf("Mac")) cth('osx');
// if (~['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform)) cth('ios');
// if (~navigator.appVersion.indexOf("Linux")) cth('linux');

const heightVH = () => {
  // Добавление 1vh (использование: height: 100vh; height: calc(var(--vh, 1vh) * 100);) для фикса 100vh на мобилках
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
  window.addEventListener("resize", function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  });
};

const isMobile = () => {
  return window.matchMedia(`(min-width: 0px) and (max-width: 767px)`).matches;
};

const isTablet = () => {
  return window.matchMedia(`(min-width: 768px) and (max-width: 1199px)`)
    .matches;
};
const isDesktop = () => {
  return window.matchMedia(`(min-width: 1200px)`).matches;
};

export {
  getScrollbarWidth,
  refreshScrollTriggerByElement,
  isMobile,
  isTablet,
  isDesktop,
  heightVH,
};
