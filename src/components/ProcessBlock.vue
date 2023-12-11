<template>
  <div class="process">
    <div class="process-wrapper">
      <div class="process_item_wrapper">
        <div class="process_item process_item_1 process_item_video show">
          <video poster="../assets/images/process/process-b1.jpg" id="background-video" autoplay loop muted playsinline>
            <source src="../assets/video/process/process-b1.mp4" type="video/mp4"/>
          </video>
          <div class="process_item-overlay50"></div>
          <div class="process_item_video-header">
            <div class="process_item_video-text">Давай работать вместе</div>
            <div class="process_item_video-text2">Как принимаем в команду</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_2">
          <div class="process_item_header-num">01</div>
          <div class="process_item_description">
            <div class="process_item_header">Оставь отклик</div>
            <ul class="process_item-ul">
              <li>
                Посмотри актуальные вакансии на <a class="process_item-href" target="_blank"
                                                   href="https://career.habr.com/companies/psb/vacancies">Хабр
                Карьере</a>
                или заполни <a
                @click.stop="scrollTo('vacancy__section', $event)" class="process_item-href" href="#">анкету</a>
                ниже
              </li>
              <li>Дождись нашего звонка</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_3">
          <div class="process_item_header-num">02</div>
          <div class="process_item_description">
            <div class="process_item_header">Пройди интервью</div>
            <ul class="process_item-ul">
              <li>Обычно мы проводим его онлайн</li>
              <li>Спросим про твой опыт работы и знания</li>
              <li>Расскажем об открытых направлениях работы у нас</li>
              <li>Ответим на любые вопросы</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_4">
          <div class="process_item_header-num">03</div>
          <div class="process_item_description">
            <div class="process_item_header">Получи обратную связь</div>
            <ul class="process_item-ul">
              <li>Мы свяжемся с тобой, если интервью прошло успешно</li>
              <li>Уточним твои впечатления от встречи</li>
              <li>Расскажем о командах, которые тебе подойдут</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_5">
          <div class="process_item_header-num">04</div>
          <div class="process_item_description">
            <div class="process_item_header">Познакомься с командой</div>
            <ul class="process_item-ul">
              <li>Проведем короткую встречу с будущими коллегами</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_join process_item_6">
          <div class="process_item_join-gradient"></div>
          <img class="process_item_join-vector" src="../assets/images/process/vector.svg">
          <div class="process_item_join_description">
            <div class="process_item_join_header">Присоединяйся к&nbsp;нам</div>
            <ul class="process_item-ul">
              <li>Получи приглашение на&nbsp;работу</li>
              <li>Дай свое согласие, и&nbsp;мы&nbsp;начнем оформление</li>
              <li>
                Если живешь в&nbsp;другом регионе, ехать в&nbsp;Москву не&nbsp;придется&nbsp;&mdash; оформление проходит
                в&nbsp;представительстве
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_bonuses process_item_7">
          <div class="process_item_bonuses-header">Какие есть бонусы</div>
          <div class="process_item_bonuses-block">
            <div class="process_item_bonuses-video">
              <video poster="../assets/images/process/process-bonuses.jpg" id="background-video" autoplay loop muted
                     playsinline>
                <source
                  src="../assets/video/process/process-bonuses.mp4"
                  type="video/mp4"
                />
              </video>
              <div class="process_item-overlay30"></div>
              <p class="process_item_bonuses-video-title">
                Льготные условия<br/>для сотрудников <br/>по продуктам банка
              </p>
            </div>
            <div class="bonuses_advantages">
              <div class="bonuses_advantages_var1">
                <div class="bonuses_advantages_var1-background"></div>
                <div class="bonuses_advantages_var1-text">
                  Техника <br/>для работы
                </div>
                <img src="../assets/images/process/image-109374.png"/>
              </div>

              <div class="bonuses_advantages_var2">
                <div class="bonuses_advantages_var2-wrapper">
                  <div class="bonuses_advantages_var2-group">
                    <div class="bonuses_advantages_var2-overlap">
                      <div class="bonuses_advantages_var2-rectangle"></div>
                      <div class="bonuses_advantages_var2-rectangle2"></div>
                    </div>
                  </div>
                </div>
                <div class="bonuses_advantages_var2-text">
                  Оплата абонемента<br/>на фитнес
                </div>
              </div>
              <div class="bonuses_advantages_var2">
                <div class="bonuses_advantages_var2-wrapper">
                  <div class="bonuses_advantages_var2-group">
                    <div class="bonuses_advantages_var2-overlap">
                      <div class="bonuses_advantages_var2-rectangle"></div>
                      <div class="bonuses_advantages_var2-rectangle2"></div>
                    </div>
                  </div>
                </div>
                <div class="bonuses_advantages_var2-text">
                  ДМС со стоматологией
                </div>
              </div>
              <div class="bonuses_advantages_var2">
                <div class="bonuses_advantages_var2-wrapper">
                  <div class="bonuses_advantages_var2-group">
                    <div class="bonuses_advantages_var2-overlap">
                      <div class="bonuses_advantages_var2-rectangle"></div>
                      <div class="bonuses_advantages_var2-rectangle2"></div>
                    </div>
                  </div>
                </div>
                <div class="bonuses_advantages_var2-text">
                  Компенсация билетов в путешествиях
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="process_end_element"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap, ScrollTrigger, scrollTriggerRefresh } from "@/helpers/gsap";
import { isDesktop } from "@/helpers";

function initAnimation() {
  const cardsArray = Array.from(document.querySelectorAll(".process_item_wrapper"))
  const lastItem = cardsArray[cardsArray.length - 1].querySelector('.process_item')
  // const card2 = cardsArray[1]
  // const card3 = cardsArray[2]
  // const card4 = cardsArray[3]
  // const card5 = cardsArray[4]
  // const card6 = cardsArray[5]
  // const card7 = cardsArray[6]

  cardsArray.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      // start: "top-=" + 10 * index + " 10%",
      start: "top 10%",
      end: "top bottom",
      endTrigger: ".process_end_element",
      // pin: true,
      // anticipatePin: 1,
      // markers: true,
      onEnter: () => {
        if (index < 1) return;
        const previousCards = cardsArray.slice(0, index).reverse()

        console.log('onEnter')
        previousCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1 - (idx + 1) / 10,
            duration: 0.15
          })
        })
      },
      onLeaveBack: () => {
        if (index < 1) return;
        const previousCards = cardsArray.slice(0, index).reverse()

        previousCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1 - idx / 10,
            duration: 0.15
          })
        })
      },
      onComplete: (self) => {
        console.log(self)
      }
    });

    if (index !== cardsArray.length - 1) {
      let options = {}

      if (isDesktop()) {
        options = {
          scaleX: 1 - (0.02 * (cardsArray.length - (index + 1))),
          y: `-=${cardsArray.length - index}rem`,
        }
      } else {
        options = {
          scaleX: 1 - (0.05 * (cardsArray.length - (index + 1))),
          y: `-=${(cardsArray.length - index)}rem`,
        }

        if (index === 0) {
          options.scaleX = 0.65
        }
      }

      const item = card.querySelector('.process_item')
      const itemNext = cardsArray[index + 1].querySelector('.process_item')

      gsap.to(item, {
        scaleX: options.scaleX,
        y: options.y,
        ease: "none",
        immediateRender: true,
        scrollTrigger: {
          trigger: itemNext,
          start: "top bottom",
          end: "bottom bottom",
          endTrigger: lastItem,
          scrub: true,
          preventOverlaps: "group1",
          // markers: { indent: 50 },
        }
      });

    }
  });

  // gsap.to('.process_item_1', {
  //   scaleX: 1 - (0.01 * 2 * 6),
  //   y: `-=7rem`,
  //   ease: "none",
  //   immediateRender: true,
  //   scrollTrigger: {
  //     trigger: card2,
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     endTrigger: card7,
  //     scrub: true,
  //     preventOverlaps: "group1",
  //     markers: { indent: 50 },
  //   }
  // });
  //
  // gsap.to('.process_item_2', {
  //   scaleX: 1 - (0.01 * 2 * 5),
  //   y: `-=6rem`,
  //   ease: "none",
  //   immediateRender: true,
  //   scrollTrigger: {
  //     trigger: card3,
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     // endTrigger: ".process_end_element",
  //     endTrigger: card7,
  //     scrub: true,
  //     preventOverlaps: "group1",
  //     // invalidateOnRefresh: true,
  //     // markers: { indent: 50 },
  //   }
  // });
  //
  // gsap.to('.process_item_3', {
  //   scaleX: 1 - (0.01 * 2 * 4),
  //   y: `-=5rem`,
  //   ease: "none",
  //   immediateRender: true,
  //   scrollTrigger: {
  //     trigger: card4,
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     // endTrigger: ".process_end_element",
  //     endTrigger: card7,
  //     scrub: true,
  //     preventOverlaps: "group1",
  //     // invalidateOnRefresh: true,
  //     // markers: { indent: 50 },
  //   }
  // });
  //
  // gsap.to('.process_item_4', {
  //   scaleX: 1 - (0.01 * 2 * 3),
  //   y: `-=4rem`,
  //   ease: "none",
  //   immediateRender: true,
  //   scrollTrigger: {
  //     trigger: card5,
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     // endTrigger: ".process_end_element",
  //     endTrigger: card7,
  //     scrub: true,
  //     preventOverlaps: "group1",
  //     // invalidateOnRefresh: true,
  //     // markers: { indent: 50 },
  //   }
  // });
  //
  // gsap.to('.process_item_5', {
  //   scaleX: 1 - (0.01 * 2 * 2),
  //   y: `-=3rem`,
  //   ease: "none",
  //   immediateRender: true,
  //   scrollTrigger: {
  //     trigger: card6,
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     // endTrigger: ".process_end_element",
  //     endTrigger: card7,
  //     scrub: true,
  //     preventOverlaps: "group1",
  //     // invalidateOnRefresh: true,
  //     // markers: { indent: 50 },
  //   }
  // });
  //
  // gsap.to('.process_item_6', {
  //   scaleX: 1 - (0.01 * 2 * 1),
  //   y: `-=2rem`,
  //   ease: "none",
  //   immediateRender: true,
  //   scrollTrigger: {
  //     trigger: card7,
  //     start: "top bottom",
  //     end: "bottom bottom",
  //     // endTrigger: ".process_end_element",
  //     endTrigger: card7,
  //     scrub: true,
  //     preventOverlaps: "group1",
  //     // invalidateOnRefresh: true,
  //     // markers: { indent: 50 },
  //   }
  // });


  scrollTriggerRefresh()
}

onMounted(() => {
  initAnimation()
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/process";
</style>
