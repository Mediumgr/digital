import { scrollTriggerRefresh } from "@/helpers/gsap";

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function refreshScrollTriggerByElement(element) {
  const options = {
    rootMargin: "300px 0px 300px 0px",
    // threshold: 1.0,
  };
  const callback = function (entries) {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollTriggerRefresh()
        console.log(`Refreshing ScrollTrigger on [${Array.from(element.classList).join(',')}]`)
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
}

export { getScrollbarWidth, refreshScrollTriggerByElement };
