<template>
  <section class="which-stack-to-use js-stack-use">
    <GradientBG/>

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
import { gsap } from "@/helpers/gsap";
import { isDesktop } from "@/helpers";

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
  const stackContainerEl = document.querySelector('.js-stack-use');
  if (!stackContainerEl) {
    return;
  }

  const titleEl = stackContainerEl.querySelector('.which-stack-to-use__title')
  const gradientEl = stackContainerEl.querySelector('.gradient')

  const cardsStackContainerEl = stackContainerEl.querySelector('.cards-stack')
  const cardsEl = stackContainerEl.querySelectorAll('.cards-stack__wrapper-item');
  const cardsStackWrapperEl = Array.from(stackContainerEl.querySelectorAll('.cards-stack__wrapper-item'))

  // const cardsStackItemEl = Array.from(stackContainerEl.querySelectorAll('.cards-stack__item'))

  function animation() {
    // заголовки
    gsap.from(titleEl, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: stackContainerEl,
        start: "top 50%",
        end: "clamp(center +=300px)",
        scrub: 1,
      },
    })

    gsap.from(cardsStackContainerEl, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: stackContainerEl,
        start: "top 50%",
        end: "clamp(center +=300px)",
        scrub: 1,
      },
    })

    gsap.from(gradientEl, {
      autoAlpha: 0.2,
      scrollTrigger: {
        trigger: stackContainerEl,
        start: "top 70%",
        end: "clamp(center +=300px)",
        scrub: 1,
      },
    })
  }

  function stackAnimate({ current, left = null, right = null, leftElementsWrapper = [], rightElementsWrapper = [] }) {
    const duration = 0.3
    const backgroundColorActive = '#424ed1'
    const backgroundColorDefault = '#13144b'
    const currentCard = getCardItems(current)

    const OPTIONS = !isDesktop() ? {
      //mobile options
      setLeftPositionCard: {
        top: 0,
        bottom: 'auto',
        transformOrigin: 'top',
        transformPerspective: '62rem',
        borderTopLeftRadius: '2rem 3.5rem',
        borderTopRightRadius: '2rem 3.5rem',
      },
      setRightPositionCard: {
        top: 'auto',
        bottom: 0,
        transformOrigin: 'bottom',
        borderBottomLeftRadius: '2rem 3.5rem',
        borderBottomRightRadius: '2rem 3.5rem',
        transformPerspective: '62rem',
      },
      currentSize: {
        height: () => {
          return currentCard[0].clientHeight
        },
        duration,
      },
      currentCard: {
        rotateX: 0,
        backgroundColor: backgroundColorActive,
        opacity: 1,
        duration,
      },
      leftActiveSize: {
        height: '5.3rem',
        duration,
      },
      rightActiveSize: {
        height: '5.3rem',
        duration,
      },
      leftRightOpacityCard: {
        opacity: 0.8,
        duration,
      },
      leftRightWrapperSize: {
        height: '4.7rem',
        duration,
      },
      rotateLeftAnimation: {
        rotateX: -52,
        backgroundColor: backgroundColorDefault,
        duration
      },
      rotateRightAnimation: {
        rotateX: 52,
        backgroundColor: backgroundColorDefault,
        duration
      },
    } : {
      //desktop options
      setLeftPositionCard: {
        left: 0,
        right: 'auto',
        transformPerspective: '60rem',
        transformOrigin: "left",
      },
      setRightPositionCard: {
        left: 'auto',
        right: 0,
        transformPerspective: '60rem',
        transformOrigin: "right",
      },
      currentSize: {
        width: '60rem',
        duration,
      },
      currentCard: {
        rotateY: 0,
        backgroundColor: backgroundColorActive,
        opacity: 1,
        duration,
      },
      leftActiveSize: {
        width: '15rem',
        duration,
      },
      rightActiveSize: {
        width: '15rem',
        duration,
      },
      leftRightOpacityCard: {
        opacity: 0.8,
        duration,
      },
      leftRightWrapperSize: {
        width: '9rem',
        duration,
      },
      rotateLeftAnimation: {
        rotateY: 28,
        backgroundColor: backgroundColorDefault,
        duration
      },
      rotateRightAnimation: {
        rotateY: -28,
        backgroundColor: backgroundColorDefault,
        duration
      },
    }


    const timeline = gsap.timeline({ ease: 'for-who-appreciate' })
    window.timeline = timeline

    function getCardItems(wrapper) {
      let elements = Array.from(wrapper)

      if (wrapper instanceof HTMLElement) {
        elements = [wrapper]
      }

      return elements.map((wrapper) => {
        return wrapper.querySelector('.cards-stack__item')
      })
    }

    const setLeftPositionCard = (elements) => {
      gsap.set(elements, OPTIONS.setLeftPositionCard)
    }
    const setRightPositionCard = (elements) => {
      gsap.set(elements, OPTIONS.setRightPositionCard)
    }

    const setOpacity = (elements) => {
      elements.forEach((item, index) => {
        let opacity = 0.5 - (index) / 10
        if (opacity < 0.1) {
          opacity = 0.1
        }

        timeline.to(item, {
          opacity: opacity.toString(),
          duration,
        }, 0)
      })
    }

    const animateRotate = (element, options) => {
      timeline.to(element, options, 0)
    }

    const animateLeftRotation = (element) => {
      animateRotate(element, OPTIONS.rotateLeftAnimation)
    }

    const animateRightRotation = (element) => {
      animateRotate(element, OPTIONS.rotateRightAnimation)
    }

    gsap.set(current, { zIndex: 2 })
    timeline.to(current, OPTIONS.currentSize, 0)

    !isDesktop() && gsap.set(currentCard, { borderRadius: '2rem' })
    timeline.to(currentCard, OPTIONS.currentCard, 0)

    const leftRightWrapActive = [left, right].filter(Boolean)
    gsap.set(leftRightWrapActive, { zIndex: 1 })

    if (left) {
      const leftCard = getCardItems(left)
      setLeftPositionCard(leftCard)
      animateLeftRotation(leftCard)

      timeline.to(leftCard, OPTIONS.leftRightOpacityCard, 0)

      timeline.to(left, OPTIONS.leftActiveSize, 0)
    }

    if (right) {
      const rightCard = getCardItems(right)
      setRightPositionCard(rightCard)
      animateRightRotation(rightCard)

      timeline.to(rightCard, OPTIONS.leftRightOpacityCard, 0)

      timeline.to(right, OPTIONS.rightActiveSize, 0)
    }

    timeline.to([...leftElementsWrapper, ...rightElementsWrapper], OPTIONS.leftRightWrapperSize, 0)

    const leftCards = getCardItems(leftElementsWrapper)
    if (leftCards.length) {
      setLeftPositionCard(leftCards)
      animateLeftRotation(leftCards)
      setOpacity(leftCards.reverse())
    }

    const rightCards = getCardItems(rightElementsWrapper)
    if (rightCards.length) {
      setRightPositionCard(rightCards)
      animateRightRotation(rightCards)
      setOpacity(rightCards)
    }
  }

  function handleClick(event) {
    const card = event.target

    if (card.classList.contains('_stack-active')) {
      return true
    }

    const index = getNodeIndex(card)

    cardsStackWrapperEl.forEach((item) => {
      item.classList.remove(...classes)
    })
    card.classList.add(ACTIVE_ClASS)

    changeClassesByIndex(index)
  }

  function changeClassesByIndex(centerIndex) {
    const current = cardsStackWrapperEl[centerIndex]
    const left = cardsStackWrapperEl[centerIndex - 1]
    const right = cardsStackWrapperEl[centerIndex + 1]

    //left active
    if ((centerIndex - 1 >= 0) && left) {
      left.classList.add(ACTIVE_LEFT_ClASS)
    }

    //right active
    if (centerIndex < cardsStackWrapperEl.length && right) {
      right.classList.add(ACTIVE_RIGHT_ClASS)
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
    const rightElementsWrapper = cardsStackWrapperEl.slice(centerIndex + 2)

    // левые карточки без активных классов
    const leftElementsWrapper = centerIndex - 1 > 0 ? cardsStackWrapperEl.slice(0, centerIndex - 1) : []


    stackAnimate({ current, left, right, leftElementsWrapper, rightElementsWrapper })
  }

  function getNodeIndex(element) {
    return [...element.parentNode.children].indexOf(element)
  }

  cardsEl[1] && cardsEl[1].classList.add(ACTIVE_ClASS)
  changeClassesByIndex(1)

  cardsEl.forEach(card => {
    const eventType = isDesktop() ?  'mouseover' : 'click'
    card.addEventListener(eventType, handleClick)
  })

  animation()
  // refreshScrollTriggerByElement(stackContainerEl)
}

onMounted(() => {
  init()
  window.gsap = gsap
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/which-stack-to-use";
@import "@/assets/styles/components/cards-stack";
</style>
