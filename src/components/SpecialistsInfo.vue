<template>
  <div class="specialists">
    <h1 ref="number" class="specialists__number">3000+</h1>
    <h1 ref="specialists" class="specialists__title">специалистов</h1>
    <p ref="info" class="specialists__info_title">
      С&nbsp;нами ты&nbsp;можешь создавать финтех-сервисы и&nbsp;не&nbsp;только.
    </p>
    <p ref="text" class="specialists__info_text">
      Нашими продуктами пользуются миллионы людей. И&nbsp;нам всегда нужны
      классные специалисты,которые усилят команду
    </p>
  </div>

<!--  <div ref="gradientCanvas" class="gradient-group__canvas">-->
<!--    <div class="blue"></div>-->
<!--    <div class="purple"></div>-->
<!--    <div class="red"></div>-->
<!--    <div class="yellow"></div>-->
<!--    <div class="canvas__wrapper">-->
<!--      <canvas class="canvas" id="canvas"></canvas>-->
<!--      &lt;!&ndash; <span class="text">Для тех,<br />кто ценит</span> &ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
</template>

<script setup>
import { onMounted, ref } from 'vue';

let number = ref(null);
let specialists = ref(null);
let info = ref(null);
let text = ref(null);
// let gradientCanvas = ref(null);

/*     'Личную\nответственность', */

// const canvasAnimation = () => {
//   const show = 5; // Количество точек
//   const labels = [
//     'Экспертизу',
//     'Личную\nответственность',
//     'Гибкость',
//     'Потенциал',
//     'Свободу идей',
//   ];
//   const labelSpacing = 20; // Увеличил расстояние между точкой и названием
//   const labelOffset = 2; // Сдвиг надписи вперед
//   const canvas = document.getElementById('canvas');
//   let scene = canvas.getContext('2d');
//   let clientWidth = document.documentElement.clientWidth;
//   let canvasWidth = (canvas.width = clientWidth);
//   let canvasHeight = (canvas.height = clientWidth);
//
//   if (clientWidth > 767.98) {
//     canvasWidth = canvas.width = 545;
//     canvasHeight = canvas.height = 545;
//   }
//   if (clientWidth > 1439.98) {
//     canvasWidth = canvas.width = 800;
//     canvasHeight = canvas.height = 800;
//   }
//
//   // Создаем точку
//   class Dot {
//     constructor(x, y, label) {
//       this.size = 3;
//       this.px = x;
//       this.py = y;
//       this.startX = x;
//       this.startY = y;
//       this.speed = 18; // Расстояние 15px за 1 секунду
//       this.animationTimeout = 3000; // Время движения и остановки в 3 секунды
//       this.lastPauseTime = Date.now();
//       this.paused = true; // Начнем с паузы
//       this.direction = 40;
//       this.randomizeMovement();
//       // this.rotation = (150 * Math.PI) / 10; // Поворот на 150 градусов
//       this.rotation = (150 * Math.PI) / 15; // Поворот на 150 градусов
//       this.label = label;
//       this.labelOffset = labelOffset;
//       this.animationStarted = false;
//     }
//
//     update() {
//       if (!this.animationStarted) {
//         // Синхронный старт
//         setTimeout(() => {
//           this.paused = false;
//           this.animationStarted = true;
//           this.lastPauseTime = Date.now();
//         }, Math.random() * this.animationTimeout); // Рандомизированный старт
//       }
//
//       if (
//         this.paused &&
//         Date.now() - this.lastPauseTime >= this.animationTimeout
//       ) {
//         this.paused = false;
//         this.randomizeMovement();
//         this.lastPauseTime = Date.now();
//         this.animationStarted = false; // Устанавливаем флаг остановки анимации
//
//         // Задержка в 2 секунды перед следующим синхронным стартом всех точек
//         setTimeout(() => {
//           for (const dot of dots) {
//             dot.animationStarted = false;
//           }
//         }, 2000);
//       }
//
//       if (!this.paused) {
//         this.bounds();
//         this.px += (this.speed / 120) * this.direction; // Скорость пересчитана в пикселях в миллисекунду
//         this.py = this.startY + 18 * Math.sin(this.px * 0.2); // Пересчет Y позиции для плавного вертикального движения
//       }
//
//       this.draw();
//     }
//
//     draw() {
//       scene.save();
//       scene.translate(this.px, this.py);
//       scene.rotate(this.rotation);
//       scene.beginPath();
//       scene.arc(0, 0, this.size, 0, Math.PI * 8);
//       scene.closePath();
//       scene.fillStyle = '#fff';
//       scene.fill();
//       scene.restore();
//
//       // Стиль надписи
//       scene.font = '500 16px Onest';
//       scene.fillStyle = '#fff';
//       scene.textAlign = 'center';
//       scene.textBaseline = 'bottom';
//
//       // Вычисление позиции надписи
//       let labelX =
//         this.px +
//         (this.size + labelSpacing + this.labelOffset) *
//         Math.cos(this.rotation - Math.PI / 2);
//       let labelY = this.py;
//
//       if (this.label === 'Потенциал') {
//         labelX -= labelSpacing + 30;
//         labelY -= labelSpacing - 25;
//       } else if (this.label === 'Свободу идей') {
//         labelX += labelSpacing + 40;
//         labelY -= labelSpacing - 25;
//       } else if (this.label === 'Экспертизу') {
//         labelX += labelSpacing + 30;
//         labelY -= labelSpacing - 30;
//       } else if (this.label === 'Гибкость') {
//         labelX -= labelSpacing + 25;
//         labelY += labelSpacing - 15;
//       } else if (this.label === 'Личную\nответственность') {
//         const lines = this.label.split('\n');
//         scene.fillText(lines[0], labelX, labelY + 20);
//         scene.fillText(lines[1], labelX, labelY + 33);
//         return;
//       }
//       scene.font = '500 16px Onest'; // Возвращаем настройки стиля
//       scene.fillText(this.label, labelX, labelY);
//
//       // Стиль для фразы "Для тех, кто ценит"
//       scene.font = 'normal 500 22px Onest';
//       scene.fillStyle = '#fff';
//       scene.textAlign = 'center';
//       scene.textBaseline = 'middle';
//
//       // Координаты центра холста
//       const centerX = canvasWidth / 2;
//       const centerY = canvasHeight / 2;
//
//       // Отобразить фразу "Для тех, кто ценит" в центре холста
//       scene.fillText('Для тех,', centerX - 10, centerY);
//       scene.fillText('кто ценит', centerX - 10, centerY + 20);
//     }
//
//     bounds() {
//       // ограничивает расстояние которое может пройти точка, предел ее
//       if (this.px > this.startX + 14 || this.px < this.startX - 14) {
//         this.paused = true;
//         this.direction = -this.direction;
//         this.lastPauseTime = Date.now();
//       }
//     }
//
//     randomizeMovement() {
//       this.direction = Math.random() < 0.5 ? 1 : -1; // Случайное направление движения
//     }
//   }
//
//   const dots = [];
//   /*   const centerX = canvasWidth / 2;
//   const centerY = canvasHeight / 2;
//   const space = 90; // увеличивает размер всей фигуры
//
//   for (let i = 0; i < show; i++) {
//     const x = centerX + space * Math.cos((i / show) * Math.PI * 2) - 12;
//     const y = centerY + space * Math.sin((i / show) * Math.PI * 2) - 20; // меняет положение по вертикали канвас
//     dots.push(new Dot(x, y, labels[i]));
//   } */
//
//   for (let i = 0; i < show; i++) {
//     const angle = (i / show) * Math.PI * 2;
//     const radius = 90;
//     const x = canvasWidth / 2 + radius * Math.cos(angle) - 9; // меняет канвас положение по горизонтали
//     const y = canvasHeight / 2 + radius * Math.sin(angle); // меняет канвас положение по вертикали
//     dots.push(new Dot(x, y, labels[i]));
//   }
//
//   function draw() {
//     scene.clearRect(0, 0, canvasWidth, canvasHeight);
//     dots.forEach((dot) => {
//       dot.update();
//     });
//
//     connectDots();
//
//     requestAnimationFrame(draw);
//   }
//
//   function connectDots() {
//     scene.beginPath();
//     scene.lineWidth = 0.5;
//     scene.strokeStyle = '#fff';
//
//     dots.forEach((dot, index) => {
//       const nextDot = dots[(index + 1) % show];
//       scene.moveTo(dot.px, dot.py);
//       scene.lineTo(nextDot.px, nextDot.py);
//     });
//
//     scene.stroke();
//   }
//
//   draw();
//
//   window.addEventListener('resize', () => {
//     canvasWidth = canvas.width = 400;
//     canvasHeight = canvas.height = 400;
//   });
// };

const intersection = () => {
  number.value.style.opacity =
    specialists.value.style.opacity =
      info.value.style.opacity =
        text.value.style.opacity =
          '0';
  let options = {
    rootMargin: '0px 0px -100px 0px',
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        target.style.opacity = '1';
      }
    });
  }, options);

  observer.observe(number.value);
  observer.observe(specialists.value);
  observer.observe(text.value);
  observer.observe(info.value);
};

// const intersectionCanvas = () => {
//   let options = {
//     threshold: 0.9,
//   };
//
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const { target, isIntersecting, intersectionRatio } = entry;
//       if (isIntersecting && intersectionRatio > 0.9) {
//         target.classList.add('active');
//       }
//     });
//   }, options);
//   observer.observe(gradientCanvas.value);
// };

onMounted(() => {
  // canvasAnimation();
  intersection();
  // intersectionCanvas();
});
</script>

<style lang="scss" scoped>

.gradient-group__canvas {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  opacity: 0.6;
  transform: scale(0.6, 0.6);
  transition: all 1s ease;

  @include mq(425) {
    height: 42.5rem;
  }
  @include mq(768) {
    height: 54.5rem;
  }

  @include mq(1024) {
    height: 75rem;
  }

  @include mq(1440) {
    height: 110rem;
  }
  @include mq(1920) {
    height: 120rem;
    width: 168rem;
  }
}

.active {
  transform: scale(1, 1);
  opacity: 1;
}

.gradient-group__canvas .blue {
  background-color: #733ff5;
  position: absolute;
  top: 0;
  left: 0;
  height: 300rem;
  width: 300rem;
  margin: 0 auto;
  animation: gradientBlue 1.5s ease forwards;
}

.gradient-group__canvas .purple {
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(143, 20, 186) 0%,
      rgba(143, 20, 186, 0.99) 11.79%,
      rgba(143, 20, 186, 0.97) 21.38%,
      rgba(143, 20, 186, 0.93) 29.12%,
      rgba(143, 20, 186, 0.88) 35.34%,
      rgba(143, 20, 186, 0.82) 40.37%,
      rgba(143, 20, 186, 0.75) 44.56%,
      rgba(143, 20, 186, 0.67) 48.24%,
      rgba(143, 20, 186, 0.59) 51.76%,
      rgba(143, 20, 186, 0.5) 55.44%,
      rgba(143, 20, 186, 0.41) 59.63%,
      rgba(143, 20, 186, 0.33) 64.66%,
      rgba(143, 20, 186, 0.24) 70.88%,
      rgba(143, 20, 186, 0.15) 78.62%,
      rgba(143, 20, 186, 0.07) 88.21%,
      rgba(143, 20, 186, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    height: 130rem;
    width: 130rem;
    top: -40rem;
    left: -40rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientPurple_375 8s ease infinite;
  }

  @include mq(768) {
    height: 160rem;
    width: 160rem;
    top: -40rem;
    left: -35rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientPurple_768 8s ease infinite;
  }

  @include mq(1024) {
    height: 200rem;
    width: 200rem;
    top: -70rem;
    left: -35rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientPurple_1024 8s ease infinite;
  }

  @include mq(1440) {
    height: 250rem;
    width: 250rem;
    top: -80rem;
    left: -50rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientPurple_1440 8s ease infinite;
  }

  @include mq(1920) {
    height: 300rem;
    width: 300rem;
    top: -80rem;
    left: -30rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientPurple_1920 8s ease infinite;
  }

  @include mq(2560) {
    top: -110rem;
    left: -60rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientPurple_2560 8s ease infinite;
  }
}

.gradient-group__canvas .red {
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 80, 48) 0%,
      rgba(254.66, 79.88, 48.43, 0.99) 11.3%,
      rgba(253.67, 79.55, 49.67, 0.97) 21.16%,
      rgba(252.1, 79.01, 51.63, 0.93) 29.76%,
      rgba(250.01, 78.3, 54.24, 0.89) 37.27%,
      rgba(247.46, 77.43, 57.42, 0.83) 43.87%,
      rgba(244.53, 76.43, 61.09, 0.76) 49.76%,
      rgba(241.26, 75.32, 65.17, 0.69) 55.1%,
      rgba(237.73, 74.11, 69.58, 0.61) 60.08%,
      rgba(234.01, 72.84, 74.24, 0.52) 64.88%,
      rgba(230.14, 71.53, 79.07, 0.44) 69.68%,
      rgba(226.21, 70.18, 83.99, 0.35) 74.66%,
      rgba(222.26, 68.84, 88.92, 0.26) 80%,
      rgba(218.37, 67.51, 93.79, 0.17) 85.88%,
      rgba(214.59, 66.22, 98.51, 0.08) 92.49%,
      rgba(211, 65, 103, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    width: 85rem;
    height: 85rem;
    top: -25rem;
    left: -15rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientRed_375 8s ease infinite;
  }

  @include mq(768) {
    width: 110rem;
    height: 110rem;
    top: -30rem;
    left: 5rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientRed_768 8s ease infinite;
  }

  @include mq(1024) {
    width: 150rem;
    height: 150rem;
    top: -35rem;
    left: 0;
    animation: slideInGradient 1.5s ease forwards,
    gradientRed_1024 8s ease infinite;
  }

  @include mq(1440) {
    top: -45rem;
    left: 35rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientRed_1440 8s ease infinite;
  }

  @include mq(1920) {
    width: 240rem;
    height: 240rem;
    top: -60rem;
    left: 10rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientRed_1920 8s ease infinite;
  }

  @include mq(2560) {
    top: -70rem;
    left: 80rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientRed_2560 8s ease infinite;
  }
}

.gradient-group__canvas .yellow {
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 168, 72) 0%,
      rgba(255, 167.23, 71.79, 0.99) 11.31%,
      rgba(255, 165.19, 71.23, 0.97) 21.19%,
      rgba(255, 162, 70.36, 0.93) 29.81%,
      rgba(255, 157.8, 69.22, 0.88) 37.35%,
      rgba(255, 152.71, 67.83, 0.83) 44%,
      rgba(255, 146.84, 66.23, 0.76) 49.92%,
      rgba(255, 140.33, 64.45, 0.69) 55.29%,
      rgba(255, 133.3, 62.54, 0.61) 60.3%,
      rgba(255, 125.88, 60.51, 0.52) 65.12%,
      rgba(255, 118.18, 58.41, 0.43) 69.92%,
      rgba(255, 110.34, 56.27, 0.34) 74.89%,
      rgba(255, 102.47, 54.13, 0.26) 80.21%,
      rgba(255, 94.71, 52.01, 0.17) 86.05%,
      rgba(255, 87.18, 49.96, 0.08) 92.59%,
      rgba(255, 80, 48, 0) 100%
  );
  border-radius: 13rem;
  position: absolute;

  @include mq(375) {
    width: 40rem;
    height: 40rem;
    top: 40rem;
    left: 18rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientYellow_375 8s ease infinite;
  }

  @include mq(768) {
    width: 70rem;
    height: 70rem;
    top: 45rem;
    left: 35rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientYellow_768 8s ease infinite;
  }

  @include mq(1024) {
    width: 80rem;
    height: 80rem;
    top: 35rem;
    left: 55rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientYellow_1024 8s ease infinite;
  }

  @include mq(1440) {
    width: 100rem;
    height: 100rem;
    top: 20rem;
    left: 95rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientYellow_1440 8s ease infinite;
  }

  @include mq(1920) {
    width: 150rem;
    height: 150rem;
    top: 30rem;
    left: 100rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientYellow_1920 8s ease infinite;
  }

  @include mq(2560) {
    top: 30rem;
    left: 170rem;
    animation: slideInGradient 1.5s ease forwards,
    gradientYellow_2560 8s ease infinite;
  }
}

.canvas {
  color: var(--color-white);
  display: flex;
  margin: 0 auto;

  &__wrapper {
    margin: 0 auto;
    position: relative;
    background: radial-gradient(
        54.01% 50.01% at 50% 50%,
        rgba(248, 248, 248, 0) 33.85%,
        #f7f7f7 100%
    );
    @include mq(768) {
      background: radial-gradient(
          38.01% 50.01% at 50% 50%,
          rgba(248, 248, 248, 0) 33.85%,
          #f7f7f7 100%
      );
    }
    @include mq(1024) {
      height: 75rem;
    }
    @include mq(1440) {
      height: 110rem;
    }
    @include mq(1920) {
      height: 120rem;
    }

    & > .text {
      position: absolute;
      top: 15rem;
      left: 12.5rem;
      text-align: center;
      color: var(--color-white, #fff);
      font-family: Onest;
      font-size: 2.8rem;
      line-height: 100%;
      letter-spacing: -0.12rem;
      @include mq(425) {
        top: 17rem;
        left: 16rem;
      }
      @include mq(768) {
        top: 35rem;
        left: 32rem;
        font-size: 3rem;
      }
    }
  }
}

.specialists {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 12rem 0 6rem;

  @include mq(375) {
    padding: 0 2rem;
  }
  @include mq(768) {
    padding: 0 4rem;
    margin: 12rem 0 8rem;
  }
  @include mq(1024) {
    padding: 0 14.5rem;
    margin: 12rem 0 20rem;
  }
  @include mq(1440) {
    padding: 0 21rem;
  }
  @include mq(1920) {
    margin: 12rem auto 26rem;
  }
  @include mq(2056) {
    padding: 0;
    width: 126rem;
  }

  &__number {
    background: var(
        --Gradient,
        linear-gradient(86deg, #8e54f5 1.34%, #ff4236 48.48%, #ffb55c 95.63%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.288rem;
    text-align: center;
    transition: opacity 2.5s ease;
    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
    @include mq(1920) {
      font-size: 20rem;
      letter-spacing: -1.2rem;
    }
  }

  &__title {
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.288rem;
    text-align: center;
    padding-bottom: 2rem;
    transition: opacity 2.5s ease;
    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
      padding-bottom: 4rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
      padding-bottom: 6rem;
    }
    @include mq(1920) {
      font-size: 20rem;
      letter-spacing: -1.2rem;
      padding-bottom: 8rem;
    }
  }

  &__info {
    opacity: 0.8;

    &_title {
      color: #13144b;
      text-align: center;
      opacity: 0.8;
      font-size: 1.8rem;
      line-height: 120%;
      letter-spacing: -0.036rem;
      transition: opacity 2.5s ease;
      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
        padding-bottom: 4rem;
      }
      @include mq(1440) {
        font-size: 3.2rem;
        letter-spacing: -0.096rem;
      }
      @include mq(1920) {
        font-size: 4.2rem;
        letter-spacing: -0.128rem;
      }
    }

    &_text {
      color: #13144b;
      text-align: center;
      opacity: 0.8;
      font-size: 1.8rem;
      line-height: 120%;
      letter-spacing: -0.036rem;
      transition: opacity 2.5s ease;
      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
      }
      @include mq(1440) {
        font-size: 3.2rem;
        letter-spacing: -0.096rem;
      }
      @include mq(1920) {
        font-size: 4.2rem;
        letter-spacing: -0.128rem;
      }
    }
  }
}
</style>
