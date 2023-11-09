<template>
  <section class="which-stack-to-use">
    <div class="_gradient"></div>

    <h2 class="which-stack-to-use__title heading-h2" v-html="whichStackToUse.title"></h2>

    <div class="cards-stack">
      <div v-for="stack in whichStackToUse.items" :key="stack.name" class="cards-stack__wrapper-item">
        <span class="cards-stack__label heading-h6">{{ stack.name }}</span>

        <div class="cards-stack__item">
          <div class="cards-stack__name heading-h3">{{ stack.name }}</div>
          <ul class="cards-stack__stack-list">
            <li v-for="item in stack.stack" :key="item" class="cards-stack__stack-item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import { onMounted } from 'vue';
import whichStackToUse from '@/assets/data/which-stack-to-use.json';

const CLASS_PREFIX = '_stack-';

const LEFT_ClASS = CLASS_PREFIX + 'left';
const RIGHT_ClASS = CLASS_PREFIX + 'right';

const ACTIVE_ClASS = CLASS_PREFIX + 'active';
const ACTIVE_LEFT_ClASS = ACTIVE_ClASS + '-left';
const ACTIVE_RIGHT_ClASS = ACTIVE_ClASS + '-right';

const classes = [
  LEFT_ClASS, RIGHT_ClASS, ACTIVE_ClASS, ACTIVE_LEFT_ClASS, ACTIVE_RIGHT_ClASS
]


function init() {
  const cardsEl = document.querySelectorAll('.cards-stack__wrapper-item');
  if (!cardsEl.length) {
    return;
  }

  const cardsStackContainerEl = document.querySelector('.cards-stack')
  const cardsStackWrapperEl = Array.from(document.querySelectorAll('.cards-stack__wrapper-item'))
  const cardsStackItemEl = Array.from(document.querySelectorAll('.cards-stack__item'))

  function handleClick(event) {
    const card = event.target;

    if (card.classList.contains('_stack-active')) {
      return true;
    }

    const index = getNodeIndex(card)

    cardsStackWrapperEl.forEach((item) => {
      item.classList.remove(...classes)
    })
    card.classList.add(ACTIVE_ClASS)

    changeClassesByIndex(index)
  }

  function changeClassesByIndex(centerIndex) {
    //left active
    if (centerIndex - 1 >= 0) {
      cardsStackWrapperEl[centerIndex - 1]?.classList.add(ACTIVE_LEFT_ClASS)
    }

    //right active
    if (centerIndex < cardsStackWrapperEl.length) {
      cardsStackWrapperEl[centerIndex + 1]?.classList.add(ACTIVE_RIGHT_ClASS)
    }

    cardsStackWrapperEl.forEach((item, index) => {
      // left others
      if (index < centerIndex - 1) {
        item.classList.add(LEFT_ClASS)
      }

      // right others
      if (index > centerIndex + 1) {
        item.classList.add(RIGHT_ClASS)
      }
    })

    console.log('index::: ', centerIndex)

    // правые карточки без активных классов
    const rightElements = cardsStackWrapperEl.slice(centerIndex + 2)

    // левые карточки без активных классов
    const leftElements = centerIndex - 1 > 0 ? cardsStackWrapperEl.slice(0, centerIndex - 1) : []

    cardsStackItemEl.forEach((item) => {
      item.style.opacity = ''
    })

    setOpacity(leftElements.reverse())
    setOpacity(rightElements)
  }

  function setOpacity(array) {
    array.forEach((item, index) => {
      let opacity = 0.5 - (index) / 10
      if (opacity < 0.1) {
        opacity = 0.1
      }
      // console.log(opacity)

      item.querySelector('.cards-stack__item').style.opacity = opacity.toString()
    })
  }

  function getNodeIndex(element) {
    return [...element.parentNode.children].indexOf(element)
  }

  let mql = window.matchMedia("(min-width: 1200px)");
  if (mql.matches) {
    mql.matches && cardsEl[1]?.classList.add(ACTIVE_ClASS)
    changeClassesByIndex(1)
  } else {
    changeClassesByIndex(-1)
  }

  cardsStackContainerEl.addEventListener('click', handleClick)
}

onMounted(() => {
  init()
  console.log('WhichStackToUseSection')
});
</script>

<style lang="scss">
@import "@/assets/styles/components/which-stack-to-use";
@import "@/assets/styles/components/cards-stack";
</style>
