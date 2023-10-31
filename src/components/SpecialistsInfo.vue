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
  <!--   <div class="canvas__wrapper">
    <canvas class="canvas" id="canvas"></canvas>
  </div> -->
  <div class="canvas__wrapper"></div>
</template>

<!-- <script setup>
import { onMounted } from 'vue';

const canvasAnimation = () => {
  const show = 5; // Количество точек
  const canvas = document.getElementById('canvas');
  const scene = canvas.getContext('2d');
  let canvasWidth = 335; // Максимальная ширина canvas
  let canvasHeight = (canvas.height = window.innerHeight);

  // Создаем точку
  class Dot {
    constructor() {
      this.size = 6;
      this.dx = Math.random() * 2 - 1; // Рандомное начальное движение по X от -1 до 1
      this.dy = Math.random() * 2 - 1; // Рандомное начальное движение по Y от -1 до 1
      this.px = Math.random() * canvasWidth;
      this.py = Math.random() * canvasHeight;
      this.targetX = this.px;
      this.targetY = this.py;
      this.animationTimeout = 2000;
      this.randomizeMovement();
    }

    // Обновляем положение точки и рисуем
    update() {
      this.bounds();

      if (this.animationTimeElapsed()) {
        this.randomizeMovement();
      }

      this.px += this.dx;
      this.py += this.dy;

      this.draw();
    }

    // Рисуем точку
    draw() {
      scene.beginPath();
      scene.arc(this.px, this.py, this.size, 0, Math.PI * 2);
      scene.closePath();
      scene.fillStyle = '#a8ffd6';
      scene.fill();
    }

    // Проверяем, не ударились ли о стенку и меняем направление
    bounds() {
      if (this.px < 0 || this.px > canvasWidth) this.dx *= -1;
      if (this.py < 0 || this.py > canvasHeight) this.dy *= -1;
    }

    // Проверяем, наступило ли время для случайного движения
    animationTimeElapsed() {
      return Date.now() - this.lastAnimationTime >= this.animationTimeout;
    }

    // Создаем случайное движение
    randomizeMovement() {
      this.dx = Math.random() * 2 - 1; // Рандомное движение по X от -1 до 1
      this.dy = Math.random() * 2 - 1; // Рандомное движение по Y от -1 до 1
      this.lastAnimationTime = Date.now();
    }
  }

  // Создаем точки
  const dots = [
    ...Array(show)
      .fill()
      .map(() => new Dot()),
  ];

  // Рисуем сцену
  function draw() {
    scene.clearRect(0, 0, canvasWidth, canvasHeight);

    dots.forEach((dot) => {
      dot.update();
    });

    connectDots();

    requestAnimationFrame(draw);
  }

  // Соединяем точки для образования пятиугольника
  function connectDots() {
    scene.beginPath();
    scene.lineWidth = 1;
    scene.strokeStyle = 'rgba(168, 255, 214, 0.5)';
    dots.forEach((dot, index) => {
      const nextDot = dots[(index + 1) % show];
      scene.moveTo(dot.px, dot.py);
      scene.lineTo(nextDot.px, nextDot.py);
    });
    scene.stroke();
  }

  draw();

  // Меняем размер canvas
  window.addEventListener('resize', () => {
    canvasHeight = canvas.height = window.innerHeight;
    if (window.innerWidth < 335) {
      canvasWidth = canvas.width = window.innerWidth;
    } else {
      canvasWidth = canvas.width = 335;
    }
  });
};

onMounted(() => {
  canvasAnimation();
});
</script> -->

<style lang="scss" scoped>
.canvas {
  /*   height: 200px;
  color: var(--color-white);
  margin: 0 auto; */
  &__wrapper {
    margin: 0 auto;
    background: url('../assets/images/canvas-common.png') no-repeat center;
    background-color: rgb(224, 110, 110);
    height: 488px;
    width: auto;
    @media screen and (min-width: 425px) {
      height: 588px;
      background-size: cover;
    }
    @media screen and (min-width: 768px) {
      height: 500px;
      background: url('../assets/images/canvas.png') no-repeat center;
      background-size: cover;
    }
    @media screen and (min-width: 1024px) {
      height: 800px;
    }
    @media screen and (min-width: 1440px) {
      height: 1200px;
      background: url('../assets/images/canvas_1440.png') no-repeat center;
    }
    @media screen and (min-width: 1920px) {
      height: 1900px;
      background-size: cover;
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
    width: 1920px;
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
