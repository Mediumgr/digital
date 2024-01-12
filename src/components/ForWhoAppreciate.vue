<template>
  <section class="for-who-appreciate">
    <GradientBG />

    <div class="for-who-appreciate__wrapper">
      <div class="for-who-appreciate__heading-wrapper">
        <h3 class="for-who-appreciate__heading heading-h3">
          Для тех,<br />кто ценит
        </h3>
      </div>

      <svg
        class="for-who-appreciate__svg for-who-appreciate__svg--desktop"
        xmlns="http://www.w3.org/2000/svg"
        width="1200"
        height="758"
        fill="none"
        viewBox="0 0 1200 758"
      >
        <path
          class="for-who-appreciate__path"
          stroke="#fff"
          stroke-opacity=".2"
          d="M 344 480 L 390 190 L 679 144 L 812 405 L 605 613 L 344 480 Z"
        />

        <g
          class="for-who-appreciate__point for-who-appreciate__point--1"
          data-coorinates="344 480"
          transform="translate(344 480)"
        >
          <circle r="5" fill="#fff" />
          <circle r="8" stroke="#fff" stroke-opacity=".1" stroke-width="6" />
          <text
            x="-32"
            y="3"
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
            text-anchor="end"
          >
            Гибкость
          </text>
        </g>
        <g
          class="for-who-appreciate__point for-who-appreciate__point--2"
          data-coorinates="390 190"
          transform="translate(390 190)"
        >
          <circle r="5" fill="#fff" />
          <circle r="8" stroke="#fff" stroke-opacity=".1" stroke-width="6" />
          <text
            x="-32"
            y="3"
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
            text-anchor="end"
          >
            Потенциал
          </text>
        </g>
        <g
          class="for-who-appreciate__point for-who-appreciate__point--3"
          data-coorinates="679 144"
          transform="translate(679 144)"
        >
          <circle r="5" fill="#fff" />
          <circle r="8" stroke="#fff" stroke-opacity=".1" stroke-width="6" />
          <text
            x="26"
            y="3"
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
          >
            Свободу идей
          </text>
        </g>
        <g
          class="for-who-appreciate__point for-who-appreciate__point--4"
          data-coorinates="812 405"
          transform="translate(812 405)"
        >
          <circle r="5" fill="#fff" />
          <circle r="8" stroke="#fff" stroke-opacity=".1" stroke-width="6" />
          <text
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
          >
            <tspan x="27" dy="-5">Личную</tspan>
            <tspan x="27" dy="36">ответственность</tspan>
          </text>
        </g>
        <g
          class="for-who-appreciate__point for-who-appreciate__point--5"
          data-coorinates="605 613"
          transform="translate(605 613)"
        >
          <circle r="5" fill="#fff" />
          <circle r="8" stroke="#fff" stroke-opacity=".1" stroke-width="6" />
          <text
            x="26"
            y="3"
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
          >
            Экспертизу
          </text>
        </g>
      </svg>

      <svg
        class="for-who-appreciate__svg for-who-appreciate__svg--mobile"
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="375"
        viewBox="0 0 375 375"
        fill="none"
      >
        <path
          class="for-who-appreciate__path"
          d="M 105 224 L 117 97 L 242 105 L 259 227 L 188 257 L 105 224 Z"
          stroke="white"
          stroke-opacity="0.2"
          stroke-width="0.558266"
        />

        <g
          class="for-who-appreciate__point for-who-appreciate__point--1"
          data-coorinates="105 224"
          transform="translate(105 224)"
        >
          <circle cx="0" cy="0" r="2" fill="white" />
          <text
            x="-8"
            y="1"
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
            text-anchor="end"
          >
            Гибкость
          </text>
        </g>

        <g
          class="for-who-appreciate__point for-who-appreciate__point--2"
          data-coorinates="117 97"
          transform="translate(117 97)"
        >
          <circle cx="0" cy="0" r="2" fill="white" />
          <text
            x="-5"
            y="-10"
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
            text-anchor="end"
          >
            Потенциал
          </text>
        </g>

        <g
          class="for-who-appreciate__point for-who-appreciate__point--3"
          data-coorinates="242 105"
          transform="translate(242 105)"
        >
          <circle cx="0" cy="0" r="2" fill="white" />
          <text
            x="8"
            y="2"
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
            text-anchor="start"
          >
            Свободу идей
          </text>
        </g>

        <g
          class="for-who-appreciate__point for-who-appreciate__point--4"
          data-coorinates="259 227"
          transform="translate(259 227)"
        >
          <circle cx="0" cy="0" r="2" fill="white" />
          <text
            x="8"
            y="2"
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
            text-anchor="start"
          >
            Экспертизу
          </text>
        </g>

        <g
          class="for-who-appreciate__point for-who-appreciate__point--5"
          data-coorinates="188 257"
          transform="translate(188 257)"
        >
          <circle cx="0" cy="0" r="2" fill="white" />
          <text
            alignment-baseline="middle"
            class="for-who-appreciate__text-svg"
            text-anchor="middle"
          >
            <tspan x="0" dy="25">Личную</tspan>
            <tspan x="0" dy="22">ответственность</tspan>
          </text>
        </g>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { isDesktop, isTablet } from "@/helpers";
import { EASE_FOR_WHO_APPRECIATE, gsap } from "@/helpers/gsap";

let svgPath = null;
let points = [];

const getRangeParams = () => {
  let range = 20;
  let increment = 10;

  if (isTablet()) {
    range = 45;
    increment = 15;
  }

  if (isDesktop()) {
    range = 70;
    increment = 20;
  }

  return { range, increment };
};

const getNewPoints = (coordinates) => {
  return coordinates.map((point) => {
    const sda = getRangeParams();
    return gsap.utils.random(
      point - sda.range,
      point + sda.range,
      sda.increment
    );
  });
};

const animate = () => {
  const newPointsForPath = [];

  points.forEach((point) => {
    const newPoints = getNewPoints(point.coordinates);

    newPointsForPath.push(newPoints);

    gsap.to(point.el, {
      duration: 2.1,
      ease: EASE_FOR_WHO_APPRECIATE,
      x: newPoints[0],
      y: newPoints[1],
    });
  });

  let st = newPointsForPath.reduce((acc, item) => {
    return acc + item.join(" ") + " L ";
  }, "M ");

  st += `${newPointsForPath[0].join(" ")} Z`;

  gsap.to(svgPath, {
    duration: 2.1,
    ease: EASE_FOR_WHO_APPRECIATE,
    attr: {
      d: st,
    },
  });
};

const svg = () => {
  const svgSelector = `.for-who-appreciate__svg--${
    isDesktop() ? "desktop" : "mobile"
  }`;
  const svg = document.querySelector(svgSelector);
  svgPath = svg.querySelector(".for-who-appreciate__path");

  points = Array.from(svg.querySelectorAll(".for-who-appreciate__point")).map(
    (el) => {
      const coordinates = el.dataset.coorinates
        .split(" ")
        .map((point) => parseInt(point));
      return {
        el,
        coordinates,
      };
    }
  );
};

const intersectionSvg = () => {
  let options = {
    rootMargin: "0px 0px 200px 0px",
    threshold: [0],
  };

  let interval;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        animate();
        clearInterval(interval);
        interval = setInterval(() => {
          animate();
        }, 2000);
      } else {
        clearInterval(interval);
      }
    });
  }, options);

  observer.observe(document.querySelector(".for-who-appreciate"));
};

onMounted(() => {
  svg();
  intersectionSvg();
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/for-who-appreciate";
</style>
