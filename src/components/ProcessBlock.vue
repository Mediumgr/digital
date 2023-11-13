<template>
  <div class="process">
    <div class="process-wrapper">
      <div class="process_item process_item_video show">
        <video id="background-video" autoplay loop muted playsinline>
          <source src="../assets/video/process/process-b1.mp4" type="video/mp4"/>
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
          <ul class="process_item-ul">
            <li>
              Посмотри актуальные вакансии на <a class="process_item-href" href="">Хабр Карьере</a> или заполни <a class="process_item-href" href="">анкету</a>
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
          <ul class="process_item-ul">
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
          <ul class="process_item-ul">
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
          <ul class="process_item-ul">
            <li>Проведем короткую встречу с будущими коллегами</li>
            <li>Уточним твои впечатления от встречи</li>
            <li>Расскажем о командах, которые тебе подойдут</li>
          </ul>
        </div>
      </div>
      <div class="process_item process_item_join">
        <div class="process_item_join-gradient"></div>
        <img class="process_item_join-vector" src="../assets/images/process/vector.svg">
        <div class="process_item_join_description">
          <div class="process_item_join_header">Присоединяйся к нам</div>
          <ul class="process_item-ul">
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
            <video id="background-video" autoplay loop muted playsinline>
              <source
                src="../assets/video/process/process-bonuses.mp4"
                type="video/mp4"
              />
            </video>
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
                Компенсация билетов<br/>в путешествиях
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
  console.log('1-',this.marginY);
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

      var scaling = i == this.items.length - 1 ? 1 : (this.cardHeight - scrolling * 0.05) / this.cardHeight;

      if ((previousElement = this.items[i - 1])) {

        var scaleX = this.items[i].getBoundingClientRect().top;
        var scaleX1 = previousElement.getBoundingClientRect().top;

        let diff = scaleX - scaleX1;

        let opacity = previousElement.style.opacity;

        if (!opacity && diff == this.marginY && lastDirection.value == 'down') {
          previousElement.style.opacity = this.opacity;
          previousElement.style.backdropFilter = 'blur(20px)';
          previousElement.style.background = 'rgba(255, 255, 255, 0.50)';
          this.opacity -= 0.1;
        }

        if (opacity && diff == this.marginY && lastDirection.value == 'up') {
          previousElement.style.removeProperty('opacity');
          previousElement.style.removeProperty('backdropFilter');
          previousElement.style.removeProperty('background');
          this.opacity += 0.1;
        }
      }

      this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px) scale(' + scaling + ')';
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
  gap: 1rem;
  padding: 12rem 2rem;
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
  gap: 10rem;
  position: relative;
  flex: 0 0 auto;
  width: 33.5rem;
  --stack-cards-gap: calc(0.75 * 1em);
}

.process .process_item video {
  position: absolute;
  border-radius: 2rem;
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
  gap: 1rem;
  padding: 0 2rem 0;
  position: relative;
  top: 18.3rem;
}

.process .process_item_video-text {
  font-size: 4.8rem;
  letter-spacing: -0.288rem;
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
  font-size: 1.6rem;
  letter-spacing: -0.048rem;
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
  height: 54.4rem;
  align-items: flex-start;
  padding: 0 5rem 10rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

  position: sticky;
  top: calc(1.25 * 1em);
  padding-bottom: 50%;
  -webkit-transform-origin: center top;
  transform-origin: center top;
}

.process .process_item-href{
  color: #DE745A;
}

.process .process_item_description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
  flex: 1;
  align-self: stretch;
  width: 100%;
}

.process .process_item_header-num {
  font-size: 17rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.6799999999999999rem;
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
  font-size: 3rem;
  letter-spacing: -0.12rem;
  line-height: 100%;
  font-style: normal;
}

.process .process_item_description li {
  color: rgba(19, 20, 75, 1);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.048rem;
  margin-left: 1.6rem;
  list-style-type: disc;
}

.process .process_item_bonuses {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4rem;
}

.process .process_item_bonuses-header {
  color: rgba(19, 20, 75, 1);
  font-size: 3rem;
  text-align: center;
  letter-spacing: -0.12rem;
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
  border-radius: 2rem;
  overflow: hidden;
  width: auto;
  height: 20.1rem;
}

.process .process_item_bonuses-video-title {
  position: relative;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  font-size: 2.4rem;
  letter-spacing: -0.048rem;
  line-height: 110%;
  font-style: normal;
  z-index: 1;
  padding: 3rem;
}

.process .bonuses_advantages_var1-text {
  color: rgba(255, 255, 255, 1);
  font-size: 1.8rem;
  letter-spacing: -0.036rem;
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
  gap: 1rem;
  position: relative;
  flex: 1;
  align-self: stretch;
  flex-grow: 1;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 50% 50%;
  padding-top: 1rem;
}

.process .bonuses_advantages_var1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.6rem;
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  border-radius: 2rem;
  overflow: hidden;
  height: 11.4rem;
  width: 14.25rem;
}

.process .bonuses_advantages_var2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.6rem;
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  border-radius: 2rem;
  height: 11.4rem;
  width: 14.25rem;
}

.process .bonuses_advantages_var2-text {
  color: rgba(19, 20, 75, 1);
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.026000000000000002rem;
}

.process .bonuses_advantages_var1 img {
  position: absolute;
  height: 9rem;
  top: 2.3rem;
  left: 6.6rem;
  object-fit: cover;
}

.process .bonuses_advantages_var1-background {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 14.25rem;
  height: 14.4rem;
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
  gap: 0.6rem;
  padding: 0.6rem;
  position: relative;
  flex: 0 0 auto;
  background-color: rgba(19, 20, 75, 1);
  border-radius: 4.8rem;
}

.process .bonuses_advantages_var2-group {
  position: relative;
  width: 1.543rem;
  height: 1.543rem;
}

.process .bonuses_advantages_var2-overlap {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
}

.process .bonuses_advantages_var2-rectangle {
  position: absolute;
  width: 0.1rem;
  height: 1.5rem;
  top: 0;
  left: 0.7rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.086rem;
}

.process .bonuses_advantages_var2-rectangle2 {
  transform: rotate(90deg);
  position: absolute;
  width: 0.1rem;
  height: 1.5rem;
  top: 0;
  left: 0.7rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.086rem;
}

.process .process_item_join {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 3rem !important;
  position: relative;
  border-radius: 5rem;
  overflow: hidden;
}

.process .process_item_join_header {
  color: rgba(255, 255, 255, 1);
  font-size: 3rem;
  letter-spacing: -0.12rem;
  line-height: 100%;
  position: relative;
  font-weight: 500;
  font-style: normal;
  padding-bottom: 2rem;
}

.process_item-ul {
  padding: 0;
}

.process .process_item_join_description {
  z-index: 1;
}

.process .process_item_join_description li {
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-left: 2rem;
  list-style-type: disc;
  font-size: 1.6rem;
  letter-spacing: -0.048rem;
}

.process .process_item_join-gradient {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: radial-gradient(
      192.34% 144.79% at 2.54% -1.56%,
      #ffb966 0%,
      #ff4236 33.65%,
      #73f 70.62%,
      #13144b 100%
  );
  width: 33.5rem;
  height: 54.4rem;
}

.process .process_item_join-vector {
  width: 10.4rem;
  height: 23.2rem;
  z-index: 1;
}

@include mq(768) {
  .process {
    gap: 10rem;
    padding: 16rem 4rem;
  }

  .process .process-wrapper {
    width: 68.8rem;
  }

  .process .process_item_bonuses-block {
    width: 100%;
  }

  .process .process_item video {
  }

  .process .process_item_video-header {
    gap: 3rem;
    padding: 0 2rem 0;
  }

  .process .process_item_video-text {
    font-size: 9.6rem;
    letter-spacing: -0.576rem;
    line-height: 90%;
  }

  .process .process_item_video-text2 {
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }

  .process .process_item {
    height: 70rem;
    padding: 0 5rem 10rem;
    border-radius: 5rem;
  }

  .process .process_item_header-num {
    font-size: 30rem;
    letter-spacing: -1.2rem;
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
    font-size: 4.8rem;
    letter-spacing: -0.096rem;
  }

  .process .process_item_description li {
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }

  .process .process_item_bonuses {
    gap: 3rem;
    padding: 4rem;
  }

  .process .process_item_bonuses-header {
    font-size: 4.8rem;
    letter-spacing: -0.096rem;
  }

  .process .process_item_bonuses-video {
    height: 26.6rem;
    padding: 0;
    border-radius: 2rem;
  }

  .process .process_item_bonuses-video-title {
    font-size: 3.6rem;
    line-height: 110%;
    letter-spacing: -0.072rem;
  }

  .process .bonuses_advantages_var1-text {
    width: 16.8rem;
    font-size: 2.4rem;
    letter-spacing: -0.048rem;
  }

  .process .bonuses_advantages_var1 {
    padding: 2rem;
    height: 12.8rem;
    width: 29.9rem;
  }

  .process .bonuses_advantages_var2 {
    gap: 2rem;
    padding: 2rem;
    height: 12.8rem;
    width: 29.9rem;
  }

  .process .bonuses_advantages_var2-text {
    font-size: 1.6rem;
    line-height: 120%;
    letter-spacing: -0.032rem;
  }

  .process .bonuses_advantages_var2-rectangle {
    height: 1.5rem;
    left: 0.7rem;
  }

  .process .bonuses_advantages_var2-rectangle2 {
    height: 1.5rem;
    left: 0.7rem;
  }

  .process .bonuses_advantages_var1 img {
    position: absolute;
    width: 11.5rem;
    height: 12.8rem;
    top: 0;
    left: 18.4rem;
    object-fit: cover;
  }

  .process .bonuses_advantages_var1-background {
    position: absolute;
    left: -35rem;
    top: -30rem;
    bottom: 0;
    width: 70rem;
    height: 60rem;
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
    padding: 6rem 5rem 0 5rem !important;
    gap: 14rem;
  }

  .process .process_item_join_header {
    font-size: 4.8rem;
    letter-spacing: -0.096rem;
  }

  .process .process_item_join_description li {
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }

  .process .process_item_join-gradient {
    position: absolute;
    left: -100rem;
    top: -95rem;
    bottom: 0;
    width: 200rem;
    height: 220rem;
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
    width: 16rem;
    height: 16rem;
  }
}

@include mq(1440) {
  .process {
    gap: 10rem;
    padding: 20rem 14rem;
  }

  .process .process-wrapper {
    width: 128rem;
    gap: 12rem;
  }

  .process .process_item_video-header {
    gap: 5rem;
    padding: 0 0 0;
  }

  .process .process_item_video-text {
    font-size: 15rem;
    letter-spacing: -0.9rem;
  }

  .process .process_item_video-text2 {
    font-size: 3.2rem;
    letter-spacing: -0.096rem;
  }

  .process .process_item {
    height: 70rem;
    padding: 0 10rem 10rem;
    border-radius: 5rem;
  }

  .process .process_item_description {
    margin-top: -13rem;
  }

  .process .process_item_header-num {
    font-size: 40rem;
    letter-spacing: -1.6rem;
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
    font-size: 6.4rem;
    letter-spacing: -0.256rem;
  }

  .process .process_item_description li {
    font-size: 2.4rem;
    letter-spacing: -0.072rem;
    opacity: 0.8;
    margin-left: 2.2rem;
  }

  .process .process_item_join {
    gap: 9rem;
    padding: 8rem 10rem !important;
  }

  .process .process_item_join_description li {
    font-size: 2.4rem;
    letter-spacing: -0.072rem;
  }

  .process .process_item_bonuses {
    gap: 5rem;
    padding: 6rem;
  }

  .process .process_item_bonuses-header {
    font-size: 6.4rem;
    letter-spacing: -0.256rem;
  }

  .process .process_item_bonuses-video {
    height: 100%;
    width: 50%;
    padding: 0;
    border-radius: 2rem;
  }

  .process .process_item_bonuses-video-title {
    font-size: 4.8rem;
    letter-spacing: -0.144rem;
    line-height: 110%;
  }

  .process .bonuses_advantages_var1-text {
    font-size: 3.2rem;
    letter-spacing: -0.096rem;
  }

  .process .bonuses_advantages {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 0;
  }

  .process .bonuses_advantages_var1 {
    gap: 2rem;
    padding: 4rem;
    position: relative;
    width: 100%;
    flex-grow: 1;
    height: 26.9rem;
  }

  .process .bonuses_advantages_var1 img {
    position: absolute;
    width: 29.4rem;
    height: 26.9rem;
    top: 0;
    left: 28.8rem;
    object-fit: cover;
  }

  .process .bonuses_advantages_var2 {
    gap: 2rem;
    padding: 2rem;
    flex: 1;
    flex-grow: 1;
    height: 18.7rem;
  }

  .process .bonuses_advantages_var2-text {
    font-size: 1.6rem;
    line-height: 140%;
    letter-spacing: -0.064rem;
  }

  .process .bonuses_advantages_var2-group {
    width: 2.16rem;
    height: 2.16rem;
  }

  .process .bonuses_advantages_var2-overlap {
    width: 2.2rem;
    height: 2.2rem;
  }

  .process .bonuses_advantages_var2-rectangle {
    height: 2.2rem;
    left: 1rem;
    border-radius: 0.12rem;
  }

  .process .bonuses_advantages_var2-rectangle2 {
    height: 2.2rem;
    left: 1rem;
  }

  .process .bonuses_advantages_var1-background {
    position: absolute;
    left: -50rem;
    top: -65rem;
    bottom: 0;
    width: 120rem;
    height: 120rem;
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
    width: 117.3rem;
    align-items: flex-start;
    gap: 1rem;
    position: relative;
    flex: 1;
    flex-grow: 1;
  }

  .process .overlap-group {
    height: 70rem;
    background-color: #00000080;
    border-radius: 5rem;
  }

  .process .process_item_join_header {
    font-size: 6.4rem;
    letter-spacing: -0.256rem;
  }

  .process .process_item_join-gradient {
    position: absolute;
    left: -100rem;
    top: -95rem;
    bottom: 0;
    width: 250rem;
    height: 220rem;
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
    width: 20rem;
    height: 20rem;
  }
}

@include mq(1920) {
  .process {
    padding: 26.6667rem;
  }

  .process .process-wrapper {
    width: 170.6667rem;
  }

  .process .process_item {
    height: 86.6667rem;
  }

  .process .process_item_video-text {
    font-size: 20rem;
    letter-spacing: -1.2rem;
  }

  .process .process_item_video-text2 {
    font-size: 4.16rem;
  }

  .process .process_item_header-num {
    font-size: 52rem;
  }

  .process .process_item_header {
    font-size: 8.32rem;
  }

  .process .process_item_description li {
    font-size: 3.12rem;
  }

  .process .process_item_join_description li {
    font-size: 3.12rem;
  }

  .process .process_item_bonuses-header {
    font-size: 8.32rem;
  }

  .process .process_item_bonuses-video-title {
    font-size: 6.24rem;
  }

  .process .bonuses_advantages_var1-text {
    font-size: 4.16rem;
  }

  .process .bonuses_advantages_var2-text {
    font-size: 2.08rem;
  }

  .process .process_item_join_header {
    font-size: 8.32rem;
  }

  .process .process_item_join-gradient {
    position: absolute;
    left: -120rem;
    top: -100rem;
    bottom: 0;
    width: 300rem;
    height: 240rem;
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
    left: 48.8rem;
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
