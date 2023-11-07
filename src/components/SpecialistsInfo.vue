<template>
  <div class="specialists">
    <h1 class="specialists__number">3000+</h1>
    <h1 class="specialists__title">специалистов</h1>
    <p class="specialists__info_title">
      С&nbsp;нами ты&nbsp;можешь создавать финтех-сервисы и&nbsp;не&nbsp;только.
    </p>
    <p class="specialists__info_text">
      Нашими продуктами пользуются миллионы людей. И&nbsp;нам всегда нужны
      классные специалисты,которые усилят команду
    </p>
  </div>
  <div class="canvas__wrapper">
    <canvas class="canvas" id="canvas"></canvas>
    <!-- <span class="text">Для тех,<br />кто ценит</span> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
/*     'Личную\nответственность', */
const canvasAnimation = () => {
  const show = 5; // Количество точек
  const labels = [
    'Экспертизу',
    'Личную\nответственность',
    'Гибкость',
    'Потенциал',
    'Свободу идей',
  ];
  const labelSpacing = 20; // Увеличил расстояние между точкой и названием
  const labelOffset = 2; // Сдвиг надписи вперед
  const canvas = document.getElementById('canvas');
  let scene = canvas.getContext('2d');
  let clientWidth = document.documentElement.clientWidth;
  let canvasWidth = (canvas.width = clientWidth);
  let canvasHeight = (canvas.height = clientWidth);

  if (clientWidth > 767.98) {
    canvasWidth = canvas.width = 545;
    canvasHeight = canvas.height = 545;
  }
  if (clientWidth > 1439.98) {
    canvasWidth = canvas.width = 800;
    canvasHeight = canvas.height = 800;
  }

  // Создаем точку
  class Dot {
    constructor(x, y, label) {
      this.size = 3;
      this.px = x;
      this.py = y;
      this.startX = x;
      this.startY = y;
      this.speed = 18; // Расстояние 15px за 1 секунду
      this.animationTimeout = 3000; // Время движения и остановки в 3 секунды
      this.lastPauseTime = Date.now();
      this.paused = true; // Начнем с паузы
      this.direction = 40;
      this.randomizeMovement();
      // this.rotation = (150 * Math.PI) / 10; // Поворот на 150 градусов
      this.rotation = (150 * Math.PI) / 15; // Поворот на 150 градусов
      this.label = label;
      this.labelOffset = labelOffset;
      this.animationStarted = false;
    }
    update() {
      if (!this.animationStarted) {
        // Синхронный старт
        setTimeout(() => {
          this.paused = false;
          this.animationStarted = true;
          this.lastPauseTime = Date.now();
        }, Math.random() * this.animationTimeout); // Рандомизированный старт
      }

      if (
        this.paused &&
        Date.now() - this.lastPauseTime >= this.animationTimeout
      ) {
        this.paused = false;
        this.randomizeMovement();
        this.lastPauseTime = Date.now();
        this.animationStarted = false; // Устанавливаем флаг остановки анимации

        // Задержка в 2 секунды перед следующим синхронным стартом всех точек
        setTimeout(() => {
          for (const dot of dots) {
            dot.animationStarted = false;
          }
        }, 2000);
      }

      if (!this.paused) {
        this.bounds();
        this.px += (this.speed / 120) * this.direction; // Скорость пересчитана в пикселях в миллисекунду
        this.py = this.startY + 18 * Math.sin(this.px * 0.2); // Пересчет Y позиции для плавного вертикального движения
      }

      this.draw();
    }

    draw() {
      scene.save();
      scene.translate(this.px, this.py);
      scene.rotate(this.rotation);
      scene.beginPath();
      scene.arc(0, 0, this.size, 0, Math.PI * 8);
      scene.closePath();
      scene.fillStyle = '#fff';
      scene.fill();
      scene.restore();

      // Стиль надписи
      scene.font = '500 16px Onest';
      scene.fillStyle = '#fff';
      scene.textAlign = 'center';
      scene.textBaseline = 'bottom';

      // Вычисление позиции надписи
      let labelX =
        this.px +
        (this.size + labelSpacing + this.labelOffset) *
          Math.cos(this.rotation - Math.PI / 2);
      let labelY = this.py;

      if (this.label === 'Потенциал') {
        labelX -= labelSpacing + 30;
        labelY -= labelSpacing - 25;
      } else if (this.label === 'Свободу идей') {
        labelX += labelSpacing + 40;
        labelY -= labelSpacing - 25;
      } else if (this.label === 'Экспертизу') {
        labelX += labelSpacing + 30;
        labelY -= labelSpacing - 30;
      } else if (this.label === 'Гибкость') {
        labelX -= labelSpacing + 25;
        labelY += labelSpacing - 15;
      } else if (this.label === 'Личную\nответственность') {
        const lines = this.label.split('\n');
        scene.fillText(lines[0], labelX, labelY + 20);
        scene.fillText(lines[1], labelX, labelY + 33);
        return;
      }
      scene.font = '500 16px Onest'; // Возвращаем настройки стиля
      scene.fillText(this.label, labelX, labelY);

      // Стиль для фразы "Для тех, кто ценит"
      scene.font = 'normal 500 22px Onest';
      scene.fillStyle = '#fff';
      scene.textAlign = 'center';
      scene.textBaseline = 'middle';

      // Координаты центра холста
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;

      // Отобразить фразу "Для тех, кто ценит" в центре холста
      scene.fillText('Для тех,', centerX-10, centerY);
      scene.fillText('кто ценит', centerX-10, centerY + 20);
    }

    bounds() {
      // ограничивает расстояние которое может пройти точка, предел ее
      if (this.px > this.startX + 14 || this.px < this.startX - 14) {
        this.paused = true;
        this.direction = -this.direction;
        this.lastPauseTime = Date.now();
      }
    }

    randomizeMovement() {
      this.direction = Math.random() < 0.5 ? 1 : -1; // Случайное направление движения
    }
  }

  const dots = [];
  /*   const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const space = 90; // увеличивает размер всей фигуры

  for (let i = 0; i < show; i++) {
    const x = centerX + space * Math.cos((i / show) * Math.PI * 2) - 12;
    const y = centerY + space * Math.sin((i / show) * Math.PI * 2) - 20; // меняет положение по вертикали канвас
    dots.push(new Dot(x, y, labels[i]));
  } */

  for (let i = 0; i < show; i++) {
    const angle = (i / show) * Math.PI * 2;
    const radius = 90;
    const x = canvasWidth / 2 + radius * Math.cos(angle) - 9; // меняет канвас положение по горизонтали
    const y = canvasHeight / 2 + radius * Math.sin(angle); // меняет канвас положение по вертикали
    dots.push(new Dot(x, y, labels[i]));
  }

  function draw() {
    scene.clearRect(0, 0, canvasWidth, canvasHeight);
    dots.forEach((dot) => {
      dot.update();
    });

    connectDots();

    requestAnimationFrame(draw);
  }

  function connectDots() {
    scene.beginPath();
    scene.lineWidth = 0.5;
    scene.strokeStyle = '#fff';

    dots.forEach((dot, index) => {
      const nextDot = dots[(index + 1) % show];
      scene.moveTo(dot.px, dot.py);
      scene.lineTo(nextDot.px, nextDot.py);
    });

    scene.stroke();
  }

  draw();

  window.addEventListener('resize', () => {
    canvasWidth = canvas.width = 400;
    canvasHeight = canvas.height = 400;
  });
};

onMounted(() => {
  canvasAnimation();
});
</script>

<style lang="scss" scoped>
.canvas {
  /*   height: 600px; */
  color: var(--color-white);
  display: flex;
  margin: 0 auto;
  &__wrapper {
    margin: 0 auto;
    position: relative;
    // background: url('../assets/images/canvas-common.png') no-repeat center;
    background-color: rgb(230, 134, 134);
    /*     height: 488px; */
    /*    width: auto; */
    @media screen and (min-width: 425px) {
      /*   height: 588px; */
      /*   background-size: cover; */
    }
    @media screen and (min-width: 768px) {
      /*   height: 500px; */
      // background: url('../assets/images/canvas.png') no-repeat center;
      /*    background-size: cover; */
    }
    @media screen and (min-width: 1024px) {
      /*    height: 800px; */
    }
    @media screen and (min-width: 1440px) {
      height: 1200px;
      // background: url('../assets/images/canvas_1440.png') no-repeat center;
    }
    @media screen and (min-width: 1920px) {
      /*  height: 1900px; */
      /*     background-size: cover; */
    }
    & > .text {
      position: absolute;
      top: 150px;
      left: 125px;
      text-align: center;
      color: var(--color-white, #fff);
      font-family: Onest;
      font-size: 28px;
      line-height: 100%;
      letter-spacing: -1.2px;
      @media screen and (min-width: 425px) {
        top: 170px;
        left: 160px;
      }
      @media screen and (min-width: 768px) {
        top: 350px;
        left: 320px;
        font-size: 30px;
      }
    }
  }
}
.specialists {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
  @media screen and (min-width: 375px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 210px;
  }
  @media screen and (min-width: 1920px) {
    margin: 120px auto;
  }
  &__number {
    background: var(
      --Gradient,
      linear-gradient(86deg, #8e54f5 1.34%, #ff4236 48.48%, #ffb55c 95.63%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 48px;
    line-height: 90%;
    letter-spacing: -2.88px;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 96px;
      letter-spacing: -5.76px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 150px;
      letter-spacing: -9px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 200px;
      letter-spacing: -12px;
    }
  }
  &__title {
    font-size: 48px;
    line-height: 90%;
    letter-spacing: -2.88px;
    text-align: center;
    padding-bottom: 20px;
    @media screen and (min-width: 768px) {
      font-size: 96px;
      letter-spacing: -5.76px;
      padding-bottom: 40px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 150px;
      letter-spacing: -9px;
      padding-bottom: 60px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 200px;
      letter-spacing: -12px;
      padding-bottom: 80px;
    }
  }
  &__info {
    opacity: 0.8;
    &_title {
      color: #13144b;
      text-align: center;
      opacity: 0.8;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: -0.36px;
      @media screen and (min-width: 768px) {
        font-size: 24px;
        letter-spacing: -0.48px;
        padding-bottom: 40px;
      }
      @media screen and (min-width: 1440px) {
        font-size: 32px;
        letter-spacing: -0.96px;
      }
      @media screen and (min-width: 1920px) {
        font-size: 42px;
        letter-spacing: -1.28px;
      }
    }
    &_text {
      color: #13144b;
      text-align: center;
      opacity: 0.8;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: -0.36px;
      @media screen and (min-width: 768px) {
        font-size: 24px;
        letter-spacing: -0.48px;
      }
      @media screen and (min-width: 1440px) {
        font-size: 32px;
        letter-spacing: -0.96px;
      }
      @media screen and (min-width: 1920px) {
        font-size: 42px;
        letter-spacing: -1.28px;
      }
    }
  }
}
</style>
