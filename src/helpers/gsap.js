import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

const EASE_FOR_WHO_APPRECIATE = "M0,0 C0.6,0 0.4,1 1,1"

CustomEase.create("for-who-appreciate", EASE_FOR_WHO_APPRECIATE)

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase)

function scrollTriggerRefresh() {
  ScrollTrigger.refresh();
}

export { gsap, scrollTriggerRefresh, EASE_FOR_WHO_APPRECIATE, ScrollTrigger }
