<template>
  <div class="process">
    <div class="process-wrapper">
      <div class="process_item process_item_video show">
        <video id="background-video" autoplay loop muted>
          <source src="../assets/video/process/process-b1.mp4" type="video/mp4" />
        </video>
        <div class="process_item_video-header">
          <div class="process_item_video-text">Давай работать вместе</div>
          <div class="process_item_video-text2">Как принимаем в команду</div>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">01</div>
        <div class="process_item_description">
          <div class="process_item_header">Оставь отклик</div>
          <ul>
            <li>
              Посмотри актуальные вакансии на Хабр Карьере или заполни анкету
              ниже
            </li>
            <li>Дождись нашего звонка</li>
          </ul>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">02</div>
        <div class="process_item_description">
          <div class="process_item_header">Пройди интервью</div>
          <ul>
            <li>Обычно мы проводим его онлайн</li>
            <li>Спросим про твой опыт работы и знания</li>
            <li>Расскажем об открытых направлениях работы у нас</li>
            <li>Ответим на любые вопросы</li>
          </ul>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">03</div>
        <div class="process_item_description">
          <div class="process_item_header">Получи обратную связь</div>
          <ul>
            <li>Мы свяжемся с тобой, если интервью прошло успешно</li>
            <li>Уточним твои впечатления от встречи</li>
            <li>Расскажем о командах, которые тебе подойдут</li>
          </ul>
        </div>
      </div>
      <div class="process_item">
        <div class="process_item_header-num">04</div>
        <div class="process_item_description">
          <div class="process_item_header">Познакомься с командой</div>
          <ul>
            <li>Проведем короткую встречу с будущими коллегами</li>
            <li>Уточним твои впечатления от встречи</li>
            <li>Расскажем о командах, которые тебе подойдут</li>
          </ul>
        </div>
      </div>
      <div class="process_item process_item_join">
        <div class="process_item_join-gradient"></div>
        <div class="process_item_join-vector"></div>
        <div class="process_item_join_description">
          <div class="process_item_join_header">Присоединяйся к нам</div>
          <ul>
            <li>Получи приглашение на работу</li>
            <li>Дай свое согласие, и мы начнем оформление</li>
            <li>Если живешь в другом регионе, ехать в Москву не придется</li>
            <li>оформление проходит в представительстве</li>
          </ul>
        </div>
      </div>
      <div class="process_item process_item_bonuses">
        <div class="process_item_bonuses-header">Какие есть бонусы</div>
        <div class="process_item_bonuses-block">
          <div class="process_item_bonuses-video">
            <video id="background-video" autoplay loop muted>
              <source
                src="../assets/video/process/process-bonuses.mp4"
                type="video/mp4"
              />
            </video>
            <p class="process_item_bonuses-video-title">
              Льготные условия<br />для сотрудников <br />по продуктам банка
            </p>
          </div>
          <div class="bonuses_advantages">
            <div class="bonuses_advantages_var1">
              <div class="bonuses_advantages_var1-background"></div>
              <div class="bonuses_advantages_var1-text">
                Техника <br />для работы
              </div>
              <img src="../assets/images/process/image-109374.png" />
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
                Оплата абонемента<br />на фитнес
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
                Компенсация билетов<br />в путешествиях
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

let lastDirection = ref('');

const osHasReducedMotion = () => {
  if (!window.matchMedia) return false;
  var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (matchMediaObj) return matchMediaObj.matches;
  return false;
};

const StackCards = function (element) {
  this.element = element;
  this.items = this.element.getElementsByClassName('process_item');
  this.scrollingFn = false;
  this.scrolling = false;
  this.opacity = 1;
  initStackCardsEffect(this);
  initStackCardsResize(this);
};


function initStackCardsEffect(element) {
  // use Intersection Observer to trigger animation
  setStackCards(element); // store cards CSS properties
  var observer = new IntersectionObserver(stackCardsCallback.bind(element), {
    threshold: [0, 1],
  });
  observer.observe(element.element);
}

function initStackCardsResize(element) {
  // detect resize to reset gallery
  element.element.addEventListener('resize-stack-cards', function () {
    setStackCards(element);
    animateStackCards.bind(element);
  });
}

function stackCardsCallback(entries) {
  // Intersection Observer callback
  if (entries[0].isIntersecting) {
    if (this.scrollingFn) return; // listener for scroll event already added
    stackCardsInitEvent(this);
  } else {
    if (!this.scrollingFn) return; // listener for scroll event already removed
    window.removeEventListener('scroll', this.scrollingFn);
    this.scrollingFn = false;
  }
}

function stackCardsInitEvent(element) {
  element.scrollingFn = stackCardsScrolling.bind(element);
  window.addEventListener('scroll', element.scrollingFn);
}

function handleScroll() {
  if (window.scrollY > this.lastScrollTop || 0) {
      lastDirection.value = 'down';
  } else if (window.scrollY < this.lastScrollTop) {
      lastDirection.value = 'up';
  }
  this.lastScrollTop = window.scrollY;
}

function stackCardsScrolling() {
  if (this.scrolling) return;
  this.scrolling = true;
  window.requestAnimationFrame(animateStackCards.bind(this));
}

function setStackCards(element) {
  // store wrapper properties
  element.marginY = getComputedStyle(element.element).getPropertyValue(
    '--stack-cards-gap'
  );
  getIntegerFromProperty(element); // convert element.marginY to integer (px value)
  element.elementHeight = element.element.offsetHeight;

  // store card properties
  var cardStyle = getComputedStyle(element.items[0]);
  element.cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
  element.cardHeight = Math.floor(
    parseFloat(cardStyle.getPropertyValue('height'))
  );

  // store window property
  element.windowHeight = window.innerHeight;

  // reset margin + translate values
  if (isNaN(element.marginY)) {
    element.element.style.paddingBottom = '0px';
  } else {
    element.element.style.paddingBottom =
      element.marginY * (element.items.length - 1) + 'px';
  }

  for (var i = 0; i < element.items.length; i++) {
    if (isNaN(element.marginY)) {
      element.items[i].style.transform = 'none;';
    } else {
      element.items[i].style.transform =
        'translateY(' + element.marginY * i + 'px)';
    }
  }
}

function getIntegerFromProperty(element) {
  var node = document.createElement('div');
  node.setAttribute(
    'style',
    'opacity:0; visbility: hidden;position: absolute; height:' + element.marginY
  );
  element.element.appendChild(node);
  element.marginY = parseInt(getComputedStyle(node).getPropertyValue('height'));
  element.element.removeChild(node);
}

function animateStackCards() {
  if (isNaN(this.marginY)) {
    // --stack-cards-gap not defined - do not trigger the effect
    this.scrolling = false;
    return;
  }

  var top = this.element.getBoundingClientRect().top;

  if (
    this.cardTop -
      top +
      this.element.windowHeight -
      this.elementHeight -
      this.cardHeight +
      this.marginY +
      this.marginY * this.items.length >
    0
  ) {
    this.scrolling = false;
    return;
  }

  let previousElement = '';

  for (var i = 0; i < this.items.length; i++) {
    // use only scale
    var scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);

    if (scrolling > 0) {
      var scaling =
        i == this.items.length - 1
          ? 1
          : (this.cardHeight - scrolling * 0.05) / this.cardHeight;

      if ((previousElement = this.items[i - 1])) {

        var scaleX = this.items[i].getBoundingClientRect().top;
        var scaleX1 = previousElement.getBoundingClientRect().top;

        let diff = scaleX - scaleX1;

        let opacity = previousElement.style.opacity;

        if (!opacity && diff <= 12 && lastDirection.value == 'down') {
          previousElement.style.opacity = this.opacity;
          this.opacity -= 0.1;
        }

        if (opacity && diff >= 12 && lastDirection.value  == 'up') {
          previousElement.style.removeProperty('opacity');
          this.opacity += 0.1;
        }
      }

      this.items[i].style.transform =
        'translateY(' + this.marginY * i + 'px) scale(' + scaling + ')';
    } else {
      this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px)';
    }
  }

  this.scrolling = false;
}

onMounted(async () => {
  var stackCards = document.getElementsByClassName('process-wrapper'),
    intersectionObserverSupported =
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype,
    reducedMotion = osHasReducedMotion();

  if (
    stackCards.length > 0 &&
    intersectionObserverSupported &&
    !reducedMotion
  ) {
    var stackCardsArray = [];
    for (var i = 0; i < stackCards.length; i++) {
      (function (i) {
        stackCardsArray.push(new StackCards(stackCards[i]));
      })(i);
    }

    var resizingId = false,
      customEvent = new CustomEvent('resize-stack-cards');

    window.addEventListener('resize', function () {
      clearTimeout(resizingId);
      resizingId = setTimeout(doneResizing, 500);
    });
  }

  function doneResizing() {
    for (var i = 0; i < stackCardsArray.length; i++) {
      (function (i) {
        stackCardsArray[i].element.dispatchEvent(customEvent);
      })(i);
    }
  }

  window.addEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
:root {

  --space-unit: 1em;
  --space-sm: calc(0.75 * 1em);
  --space-md: calc(1.25 * 1em);
  --component-padding: var(--space-md);
}

.process {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 120px 20px;
  position: relative;
  align-items: center;
  flex: 0 0 auto;
  background-color: rgba(247, 247, 247, 1);
  width: 100%;
}

.process .process-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  position: relative;
  flex: 0 0 auto;
  width: 335px;
  --stack-cards-gap: calc(0.75 * 1em);
}

.process .process_item video {
  position: absolute;
  border-radius: 20px;
  object-fit: cover;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-position: left;
}

.process .process_item_video-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0px 20px 0px;
  position: relative;
  top: 183px;
}

.process .process_item_video-text {
  font-size: 48px;
  letter-spacing: -2.88px;
  position: relative;
  align-self: stretch;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-style: normal;
  line-height: 90%;
}

.process .process_item_video-text2 {
  opacity: 0.6;
  font-size: 16px;
  letter-spacing: -0.48px;
  position: relative;
  align-self: stretch;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-style: normal;
}

.process .process_item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 544px;
  align-items: flex-start;
  padding: 0px 50px 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.07);

  position: sticky;
  top: calc(1.25 * 1em);
  padding-bottom: 50%;
  -webkit-transform-origin: center top;
  transform-origin: center top;
}

.process .process_item_description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  flex: 1;
  align-self: stretch;
  width: 100%;
}

.process .process_item_header-num {
  font-size: 170px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -6.8px;
  background: linear-gradient(
    357deg,
    rgba(168, 182, 255, 0.1) 10%,
    #8e54f5 45.97%,
    #ff4236 61.03%,
    #ffb55c 84.91%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.process .process_item_header {
  position: relative;
  align-self: stretch;
  font-weight: 500;
  color: rgba(19, 20, 75, 1);
  font-size: 30px;
  letter-spacing: -1.2px;
  line-height: 100%;
  font-style: normal;
}

.process .process_item_description li {
  color: rgba(19, 20, 75, 1);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.48px;
  margin-left: 16px;
  list-style-type: disc;
}

.process .process_item_bonuses {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
}

.process .process_item_bonuses-header {
  color: rgba(19, 20, 75, 1);
  font-size: 30px;
  text-align: center;
  letter-spacing: -1.2px;
  line-height: 100%;
  position: relative;
  font-family: var(--h3-phone-font-family);
  font-weight: 500;
  font-style: normal;
}

.process .process_item_bonuses-video {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  width: auto;
  height: 201px;
}

.process .process_item_bonuses-video-title {
  position: relative;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  letter-spacing: -0.48px;
  line-height: 110%;
  font-style: normal;
  z-index: 1;
  padding: 30px;
}

.process .bonuses_advantages_var1-text {
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  letter-spacing: -0.36px;
  line-height: 120%;
  position: relative;
  font-weight: 500;
  font-style: normal;
  z-index: 1;
}

.process .bonuses_video video {
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.process .bonuses_advantages {
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  flex: 1;
  align-self: stretch;
  flex-grow: 1;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 50% 50%;
  padding-top: 10px;
}

.process .bonuses_advantages_var1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 16px;
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  border-radius: 20px;
  overflow: hidden;
  height: 114px;
  width: 142.5px;
}

.process .bonuses_advantages_var2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  border-radius: 20px;
  height: 114px;
  width: 142.5px;
}

.process .bonuses_advantages_var2-text {
  color: rgba(19, 20, 75, 1);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.26px;
}

.process .bonuses_advantages_var1 img {
  position: absolute;
  height: 90px;
  top: 23px;
  left: 66px;
  object-fit: cover;
}

.process .bonuses_advantages_var1-background {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 142.5px;
  height: 144px;
  background: var(
    --radial,
    radial-gradient(
      182.79% 156.21% at 7.63% -11.7%,
      #ffa848 0%,
      #ff954d 15.63%,
      #f94037 39.58%,
      #7e24cc 70.62%,
      #13144b 100%
    )
  );
}

.process .bonuses_advantages_var2-wrapper {
  display: inline-flex;
  align-items: flex-start;
  gap: 6px;
  padding: 6px;
  position: relative;
  flex: 0 0 auto;
  background-color: rgba(19, 20, 75, 1);
  border-radius: 48px;
}

.process .bonuses_advantages_var2-group {
  position: relative;
  width: 15.43px;
  height: 15.43px;
}

.process .bonuses_advantages_var2-overlap {
  position: relative;
  width: 15px;
  height: 15px;
}

.process .bonuses_advantages_var2-rectangle {
  position: absolute;
  width: 1px;
  height: 15px;
  top: 0;
  left: 7px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.86px;
}

.process .bonuses_advantages_var2-rectangle2 {
  transform: rotate(90deg);
  position: absolute;
  width: 1px;
  height: 15px;
  top: 0;
  left: 7px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.86px;
}

.process .process_item_join {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 30px !important;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
}

.process .process_item_join_header {
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  letter-spacing: -1.2px;
  line-height: 100%;
  position: relative;
  font-weight: 500;
  font-style: normal;
  padding-bottom: 20px;
}

.process .process_item_join_description {
  z-index: 1;
}

.process .process_item_join_description li {
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-left: 20px;
  list-style-type: disc;
  font-size: 16px;
  letter-spacing: -0.48px;
}

.process .process_item_join-gradient {
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0;
  background: radial-gradient(
    192.34% 144.79% at 2.54% -1.56%,
    #ffb966 0%,
    #ff4236 33.65%,
    #73f 70.62%,
    #13144b 100%
  );
  width: 335px;
  height: 544px;
}

.process .process_item_join-vector {
  width: 104px;
  height: 232px;
  background-image: url("data:image/svg+xml,%3Csvg width='104' height='104' viewBox='0 0 104 104' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath id='Vector 42' d='M39 104L0 65L19.5 45.5L39 65L104 0V39L39 104Z' fill='white'/%3E%3C/svg%3E%0A");
  background-repeat: repeat-x;
  z-index: 1;
}

@media screen and (min-width: 768px) {
  .process {
    gap: 100px;
    padding: 160px 40px;
  }

  .process .process-wrapper {
    width: 688px;
  }

  .process .process_item_bonuses-block {
    width: 100%;
  }

  .process .process_item video {
  }

  .process .process_item_video-header {
    gap: 30px;
    padding: 0px 20px 0px;
  }

  .process .process_item_video-text {
    font-size: 96px;
    letter-spacing: -5.76px;
    line-height: 90%;
  }

  .process .process_item_video-text2 {
    font-size: 20px;
    letter-spacing: -0.6px;
  }

  .process .process_item {
    height: 700px;
    padding: 0px 50px 100px;
    border-radius: 50px;
  }

  .process .process_item_header-num {
    font-size: 300px;
    letter-spacing: -12px;
    background: linear-gradient(
      357deg,
      rgba(168, 182, 255, 0.1) 25%,
      #8e54f5 49.93%,
      #ff4236 67.57%,
      #ffb55c 84.91%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .process .process_item_header {
    font-size: 48px;
    letter-spacing: -0.96px;
  }

  .process .process_item_description li {
    font-size: 20px;
    letter-spacing: -0.6px;
  }

  .process .process_item_bonuses {
    gap: 30px;
    padding: 40px;
  }

  .process .process_item_bonuses-header {
    font-size: 48px;
    letter-spacing: -0.96px;
  }

  .process .process_item_bonuses-video {
    height: 266px;
    padding: 0px;
    border-radius: 20px;
  }

  .process .process_item_bonuses-video-title {
    font-size: 36px;
    line-height: 110%;
    letter-spacing: -0.72px;
  }

  .process .bonuses_advantages_var1-text {
    width: 168px;
    font-size: 24px;
    letter-spacing: -0.48px;
  }

  .process .bonuses_advantages_var1 {
    padding: 20px;
    height: 128px;
    width: 299px;
  }

  .process .bonuses_advantages_var2 {
    gap: 20px;
    padding: 20px;
    height: 128px;
    width: 299px;
  }

  .process .bonuses_advantages_var2-text {
    font-size: 16px;
    line-height: 120%;
    letter-spacing: -0.32px;
  }

  .process .bonuses_advantages_var2-rectangle {
    height: 15px;
    left: 7px;
  }

  .process .bonuses_advantages_var2-rectangle2 {
    height: 15px;
    left: 7px;
  }

  .process .bonuses_advantages_var1 img {
    position: absolute;
    width: 115px;
    height: 128px;
    top: 0;
    left: 184px;
    object-fit: cover;
  }

  .process .bonuses_advantages_var1-background {
    position: absolute;
    left: -350px;
    top: -300px;
    bottom: 0;
    width: 700px;
    height: 600px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 168, 72) 0%,
      rgb(255, 149, 77) 15.62%,
      rgb(249, 64, 55) 39.58%,
      rgb(126.46, 36, 204) 70.62%,
      rgb(19, 20, 75) 100%
    );
  }

  .process .process_item_join {
    padding: 60px 50px 0px 50px !important;
    gap: 140px;
  }

  .process .process_item_join_header {
    font-size: 48px;
    letter-spacing: -0.96px;
  }

  .process .process_item_join_description li {
    font-size: 20px;
    letter-spacing: -0.6px;
  }

  .process .process_item_join-gradient {
    position: absolute;
    left: -1000px;
    top: -950px;
    bottom: 0px;
    width: 2000px;
    height: 2200px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 168, 72) 0%,
      rgb(255, 149, 77) 15.62%,
      rgb(249, 64, 55) 39.58%,
      rgb(126, 36, 204) 70.62%,
      rgb(19, 20, 75) 100%
    );
  }

  .process .process_item_join-vector {
    width: 160px;
    height: 160px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160' fill='none'%3E%3Cpath d='M60 160L0 100L30 70L60 100L160 0V60L60 160Z' fill='white'/%3E%3C/svg%3E");
  }
}

@media screen and (min-width: 1440px) {
  .process {
    gap: 100px;
    padding: 200px 140px;
  }

  .process .process-wrapper {
    width: 1280px;
    gap: 120px;
  }

  .process .process_item_video-header {
    gap: 50px;
    padding: 0px 0px 0px;
  }

  .process .process_item_video-text {
    font-size: 150px;
    letter-spacing: -9px;
  }

  .process .process_item_video-text2 {
    font-size: 32px;
    letter-spacing: -0.96px;
  }

  .process .process_item {
    height: 700px;
    padding: 0px 100px 100px;
    border-radius: 50px;
  }

  .process .process_item_description {
    margin-top: -130px;
  }

  .process .process_item_header-num {
    font-size: 400px;
    letter-spacing: -16px;
    background: linear-gradient(
      357deg,
      rgba(168, 182, 255, 0.1) 30.29%,
      #8e54f5 49.93%,
      #ff4236 67.57%,
      #ffb55c 84.91%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .process .process_item_header {
    font-size: 64px;
    letter-spacing: -2.56px;
  }

  .process .process_item_description li {
    font-size: 24px;
    letter-spacing: -0.72px;
    opacity: 0.8;
    margin-left: 22px;
  }

  .process .process_item_join {
    gap: 90px;
    padding: 80px 100px !important;
  }

  .process .process_item_join_description li {
    font-size: 24px;
    letter-spacing: -0.72px;
  }

  .process .process_item_bonuses {
    gap: 50px;
    padding: 60px;
  }

  .process .process_item_bonuses-header {
    font-size: 64px;
    letter-spacing: -2.56px;
  }

  .process .process_item_bonuses-video {
    height: 100%;
    width: 50%;
    padding: 0px;
    border-radius: 20px;
  }

  .process .process_item_bonuses-video-title {
    font-size: 48px;
    letter-spacing: -1.44px;
    line-height: 110%;
  }

  .process .bonuses_advantages_var1-text {
    font-size: 32px;
    letter-spacing: -0.96px;
  }

  .process .bonuses_advantages {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 0px;
  }

  .process .bonuses_advantages_var1 {
    gap: 20px;
    padding: 40px;
    position: relative;
    width: 100%;
    flex-grow: 1;
    height: 269px;
  }

  .process .bonuses_advantages_var1 img {
    position: absolute;
    width: 294px;
    height: 269px;
    top: 0;
    left: 288px;
    object-fit: cover;
  }

  .process .bonuses_advantages_var2 {
    gap: 20px;
    padding: 20px;
    flex: 1;
    flex-grow: 1;
    height: 187px;
  }

  .process .bonuses_advantages_var2-text {
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.64px;
  }

  .process .bonuses_advantages_var2-group {
    width: 21.6px;
    height: 21.6px;
  }

  .process .bonuses_advantages_var2-overlap {
    width: 22px;
    height: 22px;
  }

  .process .bonuses_advantages_var2-rectangle {
    height: 22px;
    left: 10px;
    border-radius: 1.2px;
  }

  .process .bonuses_advantages_var2-rectangle2 {
    height: 22px;
    left: 10px;
  }

  .process .bonuses_advantages_var1-background {
    position: absolute;
    left: -500px;
    top: -650px;
    bottom: 0;
    width: 1200px;
    height: 1200px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 168, 72) 0%,
      rgb(255, 149, 77) 15.62%,
      rgb(249, 64, 55) 39.58%,
      rgb(126.46, 36, 204) 70.62%,
      rgb(19, 20, 75) 100%
    );
  }

  .process .process_item_bonuses-block {
    display: flex;
    width: 1173px;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    flex: 1;
    flex-grow: 1;
  }

  .process .overlap-group {
    height: 700px;
    background-color: #00000080;
    border-radius: 50px;
  }

  .process .process_item_join_header {
    font-size: 64px;
    letter-spacing: -2.56px;
  }

  .process .process_item_join-gradient {
    position: absolute;
    left: -1000px;
    top: -950px;
    bottom: 0;
    width: 2500px;
    height: 2200px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 168, 72) 0%,
      rgb(255, 149, 77) 15.62%,
      rgb(249, 64, 55) 39.58%,
      rgb(126.46, 36, 204) 70.62%,
      rgb(19, 20, 75) 100%
    );
  }

  .process .process_item_join-vector {
    width: 200px;
    height: 200px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none'%3E%3Cpath d='M75 200L0 125L37.5 87.5L75 125L200 0V75L75 200Z' fill='white'/%3E%3C/svg%3E");
  }
}

@media screen and (min-width: 1920px) {
  .process {
    padding: 266.667px;
  }

  .process .process-wrapper {
    width: 1706.667px;
  }

  .process .process_item {
    height: 866.667px;
  }

  .process .process_item_video-text {
    font-size: 200px;
    letter-spacing: -12px;
  }

  .process .process_item_video-text2 {
    font-size: 41.6px;
  }

  .process .process_item_header-num {
    font-size: 520px;
  }

  .process .process_item_header {
    font-size: 83.2px;
  }

  .process .process_item_description li {
    font-size: 31.2px;
  }

  .process .process_item_join_description li {
    font-size: 31.2px;
  }

  .process .process_item_bonuses-header {
    font-size: 83.2px;
  }

  .process .process_item_bonuses-video-title {
    font-size: 62.4px;
  }

  .process .bonuses_advantages_var1-text {
    font-size: 41.6px;
  }

  .process .bonuses_advantages_var2-text {
    font-size: 20.8px;
  }

  .process .process_item_join_header {
    font-size: 83.2px;
  }

  .process .process_item_join-gradient {
    position: absolute;
    left: -1200px;
    top: -1000px;
    bottom: 0;
    width: 3000px;
    height: 2400px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 168, 72) 0%,
      rgb(255, 149, 77) 15.62%,
      rgb(249, 64, 55) 39.58%,
      rgb(126.46, 36, 204) 70.62%,
      rgb(19, 20, 75) 100%
    );
  }

  .process .process_item_bonuses-block {
    width: 100%;
  }

  .process .bonuses_advantages_var1 img {
    left: 488px;
  }

  .process .bonuses_advantages_var1-background {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      182.79% 156.21% at 7.63% -11.7%,
      #ffa848 0%,
      #ff954d 15.63%,
      #f94037 39.58%,
      #7e24cc 70.62%,
      #13144b 100%
    );
  }

  .process .bonuses_advantages_var1 {
    height: 57.7%;
  }
  .process .bonuses_advantages_var2 {
    height: 42.3%;
  }
}

.process .process_item {
  position: sticky;
}
</style>
