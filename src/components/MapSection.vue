<template>
  <section class="map-offices js-map-offices">
    <h2 class="map-offices__title heading-h2">
      Карта наших <br/>офисов
    </h2>

    <div class="map-offices__subtitle heading-h5">
      Можно работать в&nbsp;любом офисе, полностью удаленно или&nbsp;в&nbsp;гибридном формате
    </div>

    <div class="map-offices__map">
      <div class="map-offices__map-wrapper">
        <div class="map-offices__bg"></div>

        <div class="map-offices__pointers">
          <template v-for="point in mapPointers.pointers" :key="point.id">
            <div class="map-offices__pointer"
                 :class="'map-offices__pointer--' + point.id"
                 :data-city-name="point.id">
              <div class="map-offices__pointer-name"
                   :class="point.id === 'moscow' ? 'heading-h5' : 'heading-h6'">
                {{ point.name }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="map-cards">
      <template v-for="city in mapData.cities" :key="city.id">
        <div class="map-cards__item"
             :class="'map-cards__item--' + city.id"
             :data-id-city="city.id">
          <button class="map-cards__btn-close js-map-close-btn"></button>

          <div class="map-cards__item-inner">
            <div class="map-cards__header">
              <img class="map-cards__image" :src="require(`@/assets/images/map/${city.img}`)"/>
              <div class="map-cards__name heading-h6">{{ city.name }}</div>
            </div>
            <div class="map-cards__content js-map-tab-content">
              <div class="map-cards__tabs-buttons">
                <template v-for="(tab, index) in city.tabs" :key="tab.name">
                  <button class="map-cards__tabs-button"
                          :class="{'_active': index === 0}"
                          :data-index-button="index">
                    {{ tab.name }}
                  </button>
                </template>
              </div>

              <template v-for="(tab, index) in city.tabs" :key="tab.name">
                <div class="map-cards__tabs-content"
                     :class="{'_active': index === 0}"
                     :data-index-content="index">

                  <template v-for="content in tab.content" :key="content.title">
                    <div class="map-cards__tabs-title heading-h6" v-html="content.title"></div>

                    <ul class="map-cards__tabs-list">
                      <li v-for="item in content.list"
                          :key="item" v-html="item">
                      </li>
                    </ul>
                  </template>
                </div>
              </template>

              <a class="map-cards__link" target="_blank" :href="city.link.href">{{ city.link.text }}</a>
            </div>
          </div>
        </div>
      </template>

      <div class="map-cards__overlay"></div>
    </div>
  </section>

</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from '@/helpers/gsap';
import { getScrollbarWidth, isMobile, refreshScrollTriggerByElement } from '@/helpers';

import mapData from '@/assets/data/map.json';
import mapPointers from '@/assets/data/map-pointers.json';

let currentAnimationCard = null
let currentOpenedModal = null

function init() {
  const ACTIVE_TAB_CLASS = '_active'

  const mapContainerEl = document.querySelector('.js-map-offices')
  if (!mapContainerEl) {
    return;
  }

  // TABS
  const mapTabsContainerEl = Array.from(mapContainerEl.querySelectorAll('.js-map-tab-content'))
  const closeButtonsEl = Array.from(mapContainerEl.querySelectorAll('.js-map-close-btn'))
  const mapPointerContainerEl = mapContainerEl.querySelector('.map-offices__pointers')

  const headingEl = Array.from(mapContainerEl.querySelectorAll('.map-offices__title, .map-offices__subtitle'))
  const pointersEl = Array.from(mapContainerEl.querySelectorAll('.map-offices__pointer'))

  //modal
  const mapCardsContainerEl = mapContainerEl.querySelector('.map-cards')
  const overlayEl = mapContainerEl.querySelector('.map-cards__overlay')

  function initializeAnimation() {
    // заголовки Блока
    gsap.from(headingEl, {
      autoAlpha: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: mapContainerEl,
        start: "top 60%",
        end: "+=400px",
        scrub: 1,
      },
    })

    gsap.from(pointersEl, {
      autoAlpha: 0,
      duration: 0.3,
      stagger: .2,
      scrollTrigger: {
        trigger: mapPointerContainerEl,
        toggleActions: 'play none none reset',
        start: "top 70%",
        end: "clamp(+=100px)",
        // scrub: 1,
      },
    })
  }

  function tabHandler(event) {
    const btnEl = event.target
    const indexActive = btnEl.dataset.indexButton
    const containerEl = event.currentTarget

    if (!indexActive) {
      return
    }

    containerEl.querySelectorAll(`.${ACTIVE_TAB_CLASS}`).forEach(el => {
      el.classList.remove(ACTIVE_TAB_CLASS)
    })

    btnEl.classList.add(ACTIVE_TAB_CLASS)

    containerEl.querySelector(`[data-index-content="${indexActive}"]`).classList.add(ACTIVE_TAB_CLASS)
  }

  function escHandler(e) {
    if ((e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27)) {
      closeModal()
    }
  }

  function hideScrollbar() {
    document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    document.body.style.backgroundColor = "var(--bg-eggplant)";
    document.body.style.overflow = "hidden";
  }

  function showScrollbar() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.body.style.backgroundColor = "";
  }

  function closeModal(event) {
    event && event.preventDefault();

    showScrollbar()

    const currentCard = currentOpenedModal || (event && event.target.parentElement)

    if (currentAnimationCard) {
      !isMobile() && (currentCard.style.overflow = 'hidden')
      const newDuration = (currentAnimationCard.totalDuration() / 2.2).toFixed(2)

      currentAnimationCard.totalDuration(newDuration)
      currentAnimationCard.totalDuration(newDuration)
      currentAnimationCard.reverse();

      currentCard.classList.remove('_active')

      setTimeout(() => {
        mapCardsContainerEl.style.zIndex = "-11";

        if (isMobile()) {
          currentCard.style.zIndex = "-4";
          currentCard.style.visibility = "hidden";
        }

        if (!isMobile()) {
          currentCard.style.display = "none";
        }
      }, newDuration * 1000)
    }

    currentOpenedModal = null
    document.removeEventListener('keydown', escHandler)
  }

  function showModalMap(event) {
    const btnEl = event.target
    const cityName = btnEl.dataset.cityName

    if (!cityName) {
      return
    }

    const currentCardEl = mapContainerEl.querySelector(`[data-id-city="${cityName}"]`)
    currentOpenedModal = currentCardEl

    const cardInnerEl = currentCardEl.querySelector('.map-cards__item-inner')
    const cardContentEl = currentCardEl.querySelector('.js-map-tab-content')

    const btnSize = btnEl.getBoundingClientRect()

    mapCardsContainerEl.style.zIndex = 1

    currentAnimationCard && currentAnimationCard.kill()
    currentAnimationCard = gsap.timeline()

    if (isMobile()) {
      currentCardEl.classList.add('_active')
      gsap.set(currentCardEl, {
        zIndex: 4,
        autoAlpha: 1,
      })

      currentAnimationCard
        .to([overlayEl, cardContentEl], {
          autoAlpha: 1,
          duration: 0.4,
        })
    } else {
      // Desktop
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)

      console.log(btnSize.height)

      gsap.set(currentCardEl, {
        left: btnSize.x,
        top: btnSize.y - rem * 3,
        width: btnSize.width,
        height: btnSize.height + rem * 3,
        zIndex: 4,
        display: 'flex',
        overflow: 'hidden',
      })

      const poxCenterX = (window.innerWidth - cardInnerEl.getBoundingClientRect().width) / 2
      let poxCenterY = (window.innerHeight - cardInnerEl.getBoundingClientRect().height) / 2 - rem * 3
      if (poxCenterY < 0) {
        poxCenterY = 0
      }

      console.log(rem)
      console.log(`poxCenterY=====`, poxCenterY)

      currentAnimationCard
        .to([currentCardEl, overlayEl], {
          autoAlpha: 1,
          duration: 0.35,
        })
        .to(currentCardEl, {
          duration: 0.35,
          width: 'auto',
          left: poxCenterX
        })
        .to(currentCardEl, {
          duration: 0.35,
          height: 'auto',
          top: poxCenterY,
          onComplete: () => {
            console.log('Complete')
            currentCardEl.style.overflow = 'visible'
          }
        })
        .to(cardContentEl, {
          autoAlpha: 1,
          duration: 0.25,
        }, "-=0.15")
    }

    console.log(cityName)

    hideScrollbar()
    document.addEventListener('keydown', escHandler);
  }

  mapTabsContainerEl.forEach(tab => {
    tab.addEventListener('click', tabHandler)
  })

  closeButtonsEl.forEach(btn => {
    btn.addEventListener('click', closeModal)
  })

  mapPointerContainerEl.addEventListener('click', showModalMap)

  overlayEl.addEventListener('click', () => {
    closeModal()
  })

  initializeAnimation()

  refreshScrollTriggerByElement(mapContainerEl)
}

onMounted(() => {
  init()
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/map-offices";
@import "@/assets/styles/components/map-cards";
</style>
