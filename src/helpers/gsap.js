import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function scrollTriggerRefresh() {
  ScrollTrigger.refresh();
}

export { gsap, scrollTriggerRefresh }
