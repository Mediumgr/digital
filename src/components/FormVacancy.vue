<template>
  <div class="vacancy__section">
    <p class="vacancy__title">Вакансии</p>
    <div class="vacancy__container">
      <a
        class="vacancy__card"
        target="_blank"
        href="https://habr.com/"
        :style="backgroundStyle"
        @mouseover="mouseover($event)"
        @mouseleave="mouseleave()"
      >
        <p
          class="vacancy__look"
          @mouseover="mouseover($event)"
          @mouseleave="mouseleave()"
        >
          Посмотреть все вакансии можно здесь
        </p>
        <div
          class="vacancy__bottom"
          @mouseover="mouseover($event)"
          @mouseleave="mouseleave()"
        >
          <p class="vacancy__text">Хабр Карьера</p>
          <div class="vacancy__arrow"></div>
        </div>
      </a>
      <form v-if="status.form" @submit.stop.prevent="submit()" class="form">
        <p class="title">Отправь резюме напрямую</p>
        <BaseInput
          v-model.trim="name"
          type="text"
          :error="errors['name']"
          placeholder="Имя и&nbsp;Фамилия"
        >
        </BaseInput>
        <BaseInput
          v-model.trim="email"
          type="email"
          :error="errors['email']"
          placeholder="Email"
        ></BaseInput>
        <BaseInput
          v-model.trim="tel"
          type="tel"
          :error="errors['tel']"
          placeholder="Телефон"
        ></BaseInput>
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          @change="change($event)"
          ref="inputNode"
          placeholder="В формате"
          class="file"
        />
        <div
          class="resume"
          ref="resumeNode"
          @click.stop="attachResume()"
          @dragover="handleDragOver"
          @dragleave="handleDragLeave"
          @drop="handleDrop"
        >
          <p class="resume__title" ref="titleNode">{{ resumeTitle }}</p>
          <p
            class="resume__placeholder"
            ref="placeholderNode"
            @click="removeFile($event)"
          >
            {{ resumePlaceholder }}
          </p>
        </div>
        <p class="resume__text">
          Нажимая кнопку &laquo;Отправить&raquo;, я&nbsp;соглашаюсь
          на&nbsp;обработку персональных данных и&nbsp;передачу
          их&nbsp;в&nbsp;ПАО &laquo;Промсвязьбанк&raquo;
        </p>
        <button
          class="resume__btn"
          v-if="!loader"
          @mousemove="mousemove($event)"
        >
          <span>Отправить</span>
        </button>
        <span class="loader" v-if="loader"></span>
      </form>
      <FormStatus v-else :status="status"></FormStatus>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, reactive } from 'vue';
import BaseInput from './BaseElements/BaseInput.vue';
import FormStatus from './FormStatus.vue';
import { useSubmit } from './composables/useSubmit';
import { useWatchers } from './composables/useWatchers';

const loader = ref(false);
const status = reactive({
  form: true,
  connection: true,
  server: { failure: false, message: '' },
});
const file = ref({});
let name = ref({ text: '' });
let email = ref({ text: '' });
let tel = ref({ text: '', textLength: '' });
let resumeTitle = ref('Добавить резюме');
let resumePlaceholder = ref(
  'В\u00A0формате DOC, PDF не\u00A0тяжелее 100\u00A0MB'
);
let titleNode = ref(null);
let placeholderNode = ref(null);
let inputNode = ref('');
let resumeNode = ref('');
let imageURLs = ref([
  'vacancy_1.png',
  'vacancy_2.png',
  'vacancy_3.png',
  'vacancy_4.png',
  'vacancy_5.png',
  'vacancy_6.png',
  'vacancy_7.png',
  'vacancy_8.png',
  'vacancy_9.png',
  'vacancy_10.png',
  'vacancy_11.png',
  'vacancy_12.png',
  'vacancy_13.png',
]);
let currentIndex = ref(-1);
let interval = ref(null);
let initialBackground = ref(true);
let errors = ref({});

/* eslint-disable */
const regExp = ref({
  name: /^[A-Za-zА-Яа-я]+ [A-Za-zА-Яа-я]+$/,
  phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
});

const submit = async () =>
  await useSubmit({ name, email, tel, file, regExp, errors, loader, status });

useWatchers({ name, email, tel, file, regExp, errors });

const attachResume = () => {
  if (!inputNode.value.files[0]) {
    inputNode.value.click();
  }
};

const change = (event) => {
  file.value = event.target.files[0];
  handleFile();
};

const handleFile = () => {
  const fileSizeInMB = file.value.size / 1024 / 1024;
  const uploadedSize = Math.ceil(fileSizeInMB);
  const allowedExtensions = ['pdf', 'doc', 'docx'];
  const fileExtension = file.value.name.split('.').pop();
  let allowedFormat = allowedExtensions.includes(fileExtension.toLowerCase());
  if (uploadedSize > 100 || !allowedFormat) {
    resumeTitle.value = 'Не\u00A0удалось загрузить резюме';
    resumePlaceholder.value =
      'Нужен файл в\u00A0формате DOC или PDF не\u00A0тяжелее 100\u00A0мб';
    placeholderNode.value.classList.add('fileError');
    titleNode.value.classList.add('fileError');
    resumeNode.value.classList.add('borderError');
    inputNode.value.value = '';
    file.value = '';
  } else {
    resumeTitle.value = 'Файл добавлен';
    resumePlaceholder.value = 'Удалить';
    placeholderNode.value.classList.add('remove');
    placeholderNode.value.classList.remove('fileError');
    titleNode.value.classList.remove('fileError');
    resumeNode.value.classList.remove('borderError');
  }
};

const removeFile = (event) => {
  resumeTitle.value = 'Добавить резюме';
  resumePlaceholder.value =
    'В\u00A0формате DOC, PDF не\u00A0тяжелее 100\u00A0MB';
  inputNode.value.value = '';
  file.value = '';
  placeholderNode.value.classList.remove('fileError');
  titleNode.value.classList.remove('fileError');
  resumeNode.value.classList.remove('borderError');
  if (event.target.classList.contains('remove')) {
    placeholderNode.value.classList.remove('remove');
    event.stopPropagation();
  }
};

const mouseover = (event) => {
  if (event.target.classList.contains('vacancy__card')) {
    interval.value = setInterval(() => {
      initialBackground.value = false;
      currentIndex.value = (currentIndex.value + 1) % imageURLs.value.length;
    }, 150);
  }
};

const mouseleave = () => {
  clearInterval(interval.value);
  currentIndex.value = -1;
  initialBackground.value = true;
};

const backgroundStyle = computed(() => {
  return initialBackground.value === false
    ? {
        'background-image': `url(${require(`@/assets/images/${
          imageURLs.value[currentIndex.value]
        }`)})`,
      }
    : { background: '#424ed1' };
});

/* drag & drop file */
const handleDragOver = (e) => {
  e.preventDefault();
  resumeNode.value.classList.add('active');
};
const handleDragLeave = () => {
  resumeNode.value.classList.remove('active');
};
const handleDrop = (e) => {
  e.preventDefault();
  resumeNode.value.classList.remove('active');
  file.value = e.dataTransfer.files[0];
  handleFile();
};

watch(
  () => errors.value.file,
  (error) => {
    if (error === 'error') {
      placeholderNode.value.classList.add('fileError');
      titleNode.value.classList.add('fileError');
      resumeNode.value.classList.add('borderError');
    }
  }
);

/* hover кнопки button */
const mousemove = (e) => {
  let btn = document.querySelector('.resume__btn');
  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
};
</script>

<style lang="scss" scoped>
.vacancy {
  &__section {
    height: 1126px;
    background: url('../assets/images/vacancy_375.png');
    background-size: cover;

    @media screen and (min-width: 768px) {
      height: 1525px;
      background: url('../assets/images/vacancy_768.png');
      background-size: cover;
    }

    @media screen and (min-width: 1440px) {
      height: 1840px;
      background: url('../assets/images/vacancy_1440.png');
      background-size: cover;
    }

    @media screen and (min-width: 1440px) {
      height: 1737px;
      background: url('../assets/images/vacancy_1920.png');
      background-size: cover;
    }
  }

  &__container {
    margin: 0 auto;
    width: 335px;

    @media screen and (min-width: 768px) {
      width: 688px;
    }

    @media screen and (min-width: 1440px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 1108px;
      margin-bottom: 200px;
    }

    @media screen and (min-width: 1920px) {
      width: 1450px;
      margin-bottom: 267px;
    }
  }

  &__title {
    color: var(--color-white, #fff);
    text-align: center;
    font-size: 48px;
    line-height: 90%;
    letter-spacing: -2.88px;
    padding: 120px 0 60px;

    @media screen and (min-width: 768px) {
      font-size: 96px;
      line-height: 90%;
      letter-spacing: -5.76px;
      padding: 160px 0 80px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 150px;
      letter-spacing: -9px;
      padding: 200px 0 100px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 200px;
      letter-spacing: -12px;
      padding: 267px 0 133px;
    }
  }

  &__card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    height: 250px;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 768px) {
      padding: 40px;
      height: 405px;
      margin-bottom: 40px;
    }

    @media screen and (min-width: 1440px) {
      height: 664px;
      width: 514px;
      margin-bottom: 0;
    }

    @media screen and (min-width: 1920px) {
      padding: 53px;
      height: 885px;
      width: 685px;
    }
  }

  &__look {
    color: var(--color-white, #fff);
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -1.2px;

    @media screen and (min-width: 768px) {
      font-size: 48px;
      letter-spacing: -0.96px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 64px;
      line-height: 100%;
      letter-spacing: -2.56px;
    }

    @media screen and (min-width: 1920px) {
      letter-spacing: -2.56px;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    color: var(--color-white, #fff);
  }

  &__text {
    color: var(--color-white, #fff);
    line-height: 120%;
    letter-spacing: -0.48px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 32px;
      letter-spacing: -0.96px;
    }
  }

  &__arrow {
    height: 19px;
    width: 19px;
    background: url('../assets/images/arrow_375.svg') no-repeat;

    @media screen and (min-width: 768px) {
      width: 29px;
      height: 29px;
      background: url('../assets/images/arrow_765.svg') no-repeat;
    }

    @media screen and (min-width: 1440px) {
      height: 38px;
      width: 38px;
      background: url('../assets/images/arrow.svg') no-repeat;
    }

    @media screen and (min-width: 1920px) {
      height: 51px;
      width: 51px;
      background: url('../assets/images/arrow_1920.svg') no-repeat;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background: var(--color-white);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.07);

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px;
    height: 664px;
    width: 514px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1920px) {
    padding: 53px;
    height: 885px;
    width: 685px;
  }

  & .title {
    color: #13144b;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: -0.48px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
      font-size: 36px;
      letter-spacing: -0.72px;
      margin-bottom: 30px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 48px;
      letter-spacing: -1.44px;
      margin-bottom: 25px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 64px;
      letter-spacing: -1.92px;
      margin-bottom: 35px;
    }
  }
}

.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 100px;
  padding: 20px;
  gap: 10px;
  border-radius: 20px;
  border: 1px dashed rgba(19, 20, 75, 0.2);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 608px;
  }
  @media screen and (min-width: 1440px) {
    width: 434px;
    height: 94px;
  }

  @media screen and (min-width: 1920px) {
    width: 579px;
    height: 127px;
    padding: 27px;
    border-radius: 27px;
    border: 1.3px dashed rgba(19, 20, 75, 0.2);
  }

  &.active {
    background-color: #f9f9f9;
    border: 1px dashed rgba(232, 143, 87, 0.2);
  }

  &__title {
    color: #13144b;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: -0.26px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 120%;
      letter-spacing: -0.32px;
    }

    @media screen and (min-width: 1440px) {
      line-height: 140%;
      letter-spacing: -0.64px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 21px;
      letter-spacing: -0.853px;
    }
  }

  &__placeholder {
    margin: 0 auto;
    color: #13144b;
    opacity: 0.5;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: -0.26px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 120%;
      letter-spacing: -0.32px;
    }

    @media screen and (min-width: 1440px) {
      line-height: 140%;
      letter-spacing: -0.64px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 21px;
      letter-spacing: -0.853px;
    }
  }

  &__text {
    color: #13144b;
    opacity: 0.5;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: -0.26px;
    padding: 10px 0 20px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 120%;
      letter-spacing: -0.32px;
    }

    @media screen and (min-width: 1440px) {
      line-height: 140%;
      letter-spacing: -0.64px;
      padding: 0 0 20px;
    }

    @media screen and (min-width: 1920px) {
      padding: 3px 0 25px;
      font-size: 21px;
      letter-spacing: -0.853px;
    }
  }

  &__btn {
    color: var(--color-white);
    width: 295px;
    transition: all 200ms ease;
    position: relative;
    background: #13144b;
    padding: 20px;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 1px 1px 0 rgba(25, 25, 25, 0.25);
    font-size: 13px;
    line-height: 120%;
    letter-spacing: -0.26px;
    width: 235px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 11px 30px rgba(25, 25, 25, 0.25);
      &::before {
        --size: 70vw;
      }
    }

    &::before {
      --size: 0;
      content: '';
      position: absolute;
      left: var(--x);
      top: var(--y);
      width: var(--size);
      height: var(--size);
      background: radial-gradient(
          15% 88.6% at 50.5% 25.85%,
          #ff4236 0%,
          rgba(142, 84, 245, 0) 155%
        ),
        #424ed1;
      transform: translate(-50%, -50%);
    }

    & > span {
      position: relative;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
      width: 608px;
      line-height: 120%;
      letter-spacing: -0.32px;
    }

    @media screen and (min-width: 1440px) {
      width: 434px;
      line-height: 140%;
      letter-spacing: -0.64px;
    }

    @media screen and (min-width: 1920px) {
      border-radius: 27px;
      font-size: 21px;
      width: 579px;
      letter-spacing: -0.85px;
    }
  }
}

.remove {
  &:hover {
    color: red;
  }
}

.file {
  position: absolute;
  top: -100px;
  visibility: hidden;
  opacity: 0;
  height: 0;
  z-index: -100;
}

.fileError {
  color: #f00;

  @media screen and (min-width: 1440px) {
    text-align: center;
    padding: 0 30px;
  }
}

.borderError {
  border: 1px dashed rgba(255, 0, 0, 0.2);
}

.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #424ed1 #424ed1 transparent transparent;
  box-sizing: border-box;
  margin: 0 auto;
  animation: rotation 1s linear infinite;
}

.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent transparent #ff4236 #ff3d00;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

.loader::before {
  width: 32px;
  height: 32px;
  border-color: #ffb55c #ffb55c transparent transparent;
  animation: rotation 1.5s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
