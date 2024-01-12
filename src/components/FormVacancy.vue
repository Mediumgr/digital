<template>
  <div class="gradient-group__vacancy">
    <GradientBG />
    <div class="vacancy__section">
      <p class="vacancy__title">Вакансии</p>
      <div class="vacancy__container">
        <a
          class="vacancy__card"
          target="_blank"
          href="https://career.habr.com/companies/psb/vacancies"
          @mouseover="mouseover()"
          @mouseleave="mouseleave()"
          @touchstart="mouseover()"
          @touchend="mouseleave()"
        >
          <video
            v-show="videoShow"
            autoplay
            muted
            playsinline
            loop="loop"
            playbackRate="0.5"
          >
            <source
              src="../assets/video/vacancies/hover.mp4"
              type="video/mp4"
            />
          </video>
          <p class="vacancy__look">Посмотреть все вакансии можно здесь</p>
          <div class="vacancy__bottom">
            <p class="vacancy__text">Хабр Карьера</p>
            <div class="vacancy__arrow"></div>
          </div>
        </a>
        <form v-if="status.form" @submit.stop.prevent="submit()" class="form">
          <p class="title">Отправь резюме напрямую</p>
          <BaseInput
            v-model="name"
            type="text"
            :error="errors['name']"
            placeholder="Фамилия Имя Отчество"
          >
          </BaseInput>
          <BaseInput
            v-model="email"
            type="email"
            :error="errors['email']"
            placeholder="Email"
          ></BaseInput>
          <BaseInput
            v-model="tel"
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
            @dragover="handleDragOver($event)"
            @dragleave="handleDragLeave($event)"
            @drop="handleDrop($event)"
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
            При нажатии кнопки «Отправить» дается согласие на обработку
            персональных данных и передачу их в ПАО «Промсвязьбанк»
          </p>
          <BaseButton class="resume__btn" v-if="!loader">
            <span>Отправить</span>
          </BaseButton>
          <span class="loader" v-if="loader"></span>
        </form>
        <FormStatus
          v-else
          :status="status"
          @resend="
            () => {
              status.form = true;
            }
          "
        ></FormStatus>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive, onMounted } from "vue";
import FormStatus from "./FormStatus.vue";
import { useSubmit } from "./composables/useSubmit";
import { useWatchers } from "./composables/useWatchers";

const loader = ref(false);
const videoShow = ref(false);
const status = reactive({
  form: true,
  connection: true,
  server: { failure: false, message: "" },
});
const file = ref({});
let name = ref({ text: "" });
let email = ref({ text: "" });
let tel = ref({ text: "", textLength: "" });
let resumeTitle = ref("Добавить резюме");
let resumePlaceholder = ref(
  "В\u00A0формате DOC, PDF не\u00A0тяжелее 10\u00A0MB"
);
let titleNode = ref(null);
let placeholderNode = ref(null);
let inputNode = ref("");
let resumeNode = ref("");
let errors = ref({});

/* eslint-disable */
const regExp = ref({
  name: /^[A-Za-zА-Яа-я]+ [A-Za-zА-Яа-я]+(?: [A-Za-zА-Яа-я]+)?$/,

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
  const allowedExtensions = ["pdf", "doc", "docx"];
  const fileExtension = file.value.name.split(".").pop();
  let allowedFormat = allowedExtensions.includes(fileExtension.toLowerCase());
  if (uploadedSize > 10 || !allowedFormat) {
    resumeTitle.value = "Не\u00A0удалось загрузить резюме";
    resumePlaceholder.value =
      "Нужен файл в\u00A0формате DOC или PDF не\u00A0тяжелее 10\u00A0мб";
    placeholderNode.value.classList.add("fileError");
    titleNode.value.classList.add("fileError");
    resumeNode.value.classList.add("borderError");
    inputNode.value.value = "";
    file.value = "";
  } else {
    resumeTitle.value = "Файл добавлен";
    resumePlaceholder.value = "Удалить";
    placeholderNode.value.classList.add("remove");
    placeholderNode.value.classList.remove("fileError");
    titleNode.value.classList.remove("fileError");
    resumeNode.value.classList.remove("borderError");
  }
};

const removeFile = (event) => {
  resumeTitle.value = "Добавить резюме";
  resumePlaceholder.value =
    "В\u00A0формате DOC, PDF не\u00A0тяжелее 10\u00A0MB";
  inputNode.value.value = "";
  file.value = "";
  placeholderNode.value.classList.remove("fileError");
  titleNode.value.classList.remove("fileError");
  resumeNode.value.classList.remove("borderError");
  if (event.target.classList.contains("remove")) {
    placeholderNode.value.classList.remove("remove");
    event.stopPropagation();
  }
};

const mouseover = () => {
  videoShow.value = true;
};

const mouseleave = () => {
  videoShow.value = false;
};

// const backgroundStyle = computed(() => {
//   return initialBackground.value === false
//     ?
//       {
//         "background-image": `url(${require(`@/assets/images/vacancies/${
//           imageURLs.value[currentIndex.value]
//         }`)})`,
//       }
//     : { background: "#424ed1" };
// });

/* загрузка изображения на случай отсутствия интернета */
const preLoadImages = () => {
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = reject;
    img.src = `${require(`@/assets/images/vacancies/status_bad.svg`)}`;
    img.onload = () => resolve(img);
  });
};

/* drag & drop file */
const handleDragOver = (e) => {
  e.preventDefault();
  resumeNode.value.classList.add("active");
};
const handleDragLeave = () => {
  resumeNode.value.classList.remove("active");
};
const handleDrop = (e) => {
  e.preventDefault();
  resumeNode.value.classList.remove("active");
  file.value = e.dataTransfer.files[0];
  handleFile();
};

watch(
  () => errors.value.file,
  (error) => {
    if (error === "error") {
      placeholderNode.value.classList.add("fileError");
      titleNode.value.classList.add("fileError");
      resumeNode.value.classList.add("borderError");
    }
  }
);

onMounted(() => {
  preLoadImages();
});
</script>

<style lang="scss" scoped>
.gradient-group__vacancy {
  position: relative;
  z-index: 1;
}

.vacancy {
  &__section {
    height: 112.6rem;
    position: relative;

    @include mq(768) {
      height: 152.5rem;
    }

    @include mq(1440) {
      height: 130rem;
    }
  }

  &__container {
    margin: 0 auto;
    width: 33.5rem;

    @include mq(768) {
      width: 68.8rem;
    }

    @include mq(1440) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 108.8rem;
    }
  }

  &__title {
    color: var(--color-white, #fff);
    text-align: center;
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding: 12rem 0 6rem;

    @include mq(768) {
      font-size: 9.6rem;
      line-height: 90%;
      letter-spacing: -0.576rem;
      padding: 16rem 0 8rem;
    }

    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
      padding: 20rem 0 10rem;
    }
  }

  &__card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 2rem;
    height: 25rem;
    margin-bottom: 2rem;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    background: #424ed1;

    @include mq(768) {
      height: 38.5rem;
      width: 68.8rem;
      margin-bottom: 2rem;
    }

    @include mq(1440) {
      height: 66.4rem;
      width: 51.4rem;
      margin-bottom: 0;
    }
  }

  &__look {
    color: var(--color-white, #fff);
    font-size: 3rem;
    line-height: 100%;
    letter-spacing: -0.12rem;
    position: absolute;
    top: 0;
    padding: 2rem;

    @include mq(768) {
      font-size: 4.8rem;
      letter-spacing: -0.096rem;
      padding: 4rem;
    }

    @include mq(1440) {
      font-size: 6.4rem;
      line-height: 94%;
      letter-spacing: -0.256rem;
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    color: var(--color-white, #fff);
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    padding: 0 2rem 2rem;

    @include mq(768) {
      padding: 0 4rem 4rem;
    }
  }

  &__text {
    color: var(--color-white, #fff);
    line-height: 120%;
    letter-spacing: -0.048rem;

    @include mq(768) {
      font-size: 2.4rem;
    }
    @include mq(1440) {
      font-size: 3.2rem;
      letter-spacing: -0.096rem;
    }
  }

  &__arrow {
    height: 1.9rem;
    width: 1.9rem;
    background: url("../assets/images/vacancies/arrow_375.svg") no-repeat;
    background-position: center;

    @include mq(768) {
      width: 2.9rem;
      height: 2.9rem;
      background: url("../assets/images/vacancies/arrow_765.svg") no-repeat;
    }
    @include mq(1024) {
      height: 3.5rem;
      width: 3.5rem;
    }
    @include mq(1440) {
      height: 3.8rem;
      width: 3.8rem;
      background: url("../assets/images/vacancies/arrow.svg") no-repeat;
    }
  }
}

video {
  object-fit: cover;
  border-radius: 2rem;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 2rem;
  background: var(--color-white);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

  @include mq(768) {
    align-items: flex-start;
    padding: 4rem;
  }
  @include mq(1440) {
    padding: 4rem;
    height: 66.4rem;
    width: 51.4rem;
    justify-content: space-between;
  }

  & .title {
    color: #13144b;
    font-size: 2.4rem;
    line-height: 110%;
    letter-spacing: -0.048rem;
    margin-bottom: 2rem;

    @include mq(768) {
      font-size: 3.6rem;
      letter-spacing: -0.072rem;
      margin-bottom: 3rem;
    }
    @include mq(1440) {
      font-size: 4.8rem;
      letter-spacing: -0.144rem;
      margin-bottom: 2.5rem;
    }
  }
}

.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29.5rem;
  height: 10rem;
  padding: 2rem;
  gap: 1rem;
  border-radius: 2rem;
  border: 0.1rem dashed rgba(19, 20, 75, 0.2);
  cursor: pointer;

  @include mq(768) {
    width: 60.8rem;
  }
  @include mq(1440) {
    width: 43.4rem;
    height: 9.4rem;
  }

  &.active {
    background-color: #f9f9f9;
    border: 0.1rem dashed rgba(232, 143, 87, 0.2);
  }

  &__title {
    color: #13144b;
    font-size: 1.3rem;
    line-height: 120%;
    letter-spacing: -0.026000000000000002rem;

    @include mq(768) {
      font-size: 1.6rem;
      line-height: 120%;
      letter-spacing: -0.032rem;
    }

    @include mq(1440) {
      line-height: 140%;
      letter-spacing: -0.064rem;
    }
  }

  &__placeholder {
    margin: 0 auto;
    color: #13144b;
    opacity: 0.5;
    font-size: 1.3rem;
    line-height: 120%;
    letter-spacing: -0.026000000000000002rem;

    @include mq(768) {
      font-size: 1.6rem;
      line-height: 120%;
      letter-spacing: -0.032rem;
    }

    @include mq(1440) {
      line-height: 140%;
      letter-spacing: -0.064rem;
    }
  }

  &__text {
    color: #13144b;
    opacity: 0.5;
    font-size: 1.3rem;
    line-height: 120%;
    letter-spacing: -0.026000000000000002rem;
    padding: 1rem 0 2rem;

    @include mq(768) {
      font-size: 1.6rem;
      line-height: 120%;
      letter-spacing: -0.032rem;
    }

    @include mq(1440) {
      line-height: 140%;
      letter-spacing: -0.064rem;
      padding: 0 0 2rem;
    }
  }

  &__btn {
    color: var(--color-white);
    transition: all 200ms ease;
    position: relative;
    background: #13144b;
    padding: 2rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0.1rem 0.1rem 0 rgba(25, 25, 25, 0.25);
    font-size: 1.3rem;
    line-height: 120%;
    letter-spacing: -0.026000000000000002rem;
    width: 23.5rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0 1.1rem 3rem rgba(25, 25, 25, 0.25);
      background: #424ed1;

      &::before {
        --size: 70vw;
      }
    }

    &::before {
      --size: 0;
      content: "";
      position: absolute;
      left: var(--x);
      top: var(--y);
      width: var(--size);
      height: var(--size);
      background: radial-gradient(
          15% 88.6% at 40.5% 25.85%,
          #ff4236 0%,
          rgba(142, 84, 245, 0) 155%
        ),
        #424ed1;
      transform: translate(-50%, -50%);
    }

    & > span {
      position: relative;
    }

    @include mq(768) {
      font-size: 1.6rem;
      width: 60.8rem;
      line-height: 120%;
      letter-spacing: -0.032rem;
    }

    @include mq(1440) {
      width: 43.4rem;
      line-height: 140%;
      letter-spacing: -0.064rem;
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
  top: -10rem;
  visibility: hidden;
  opacity: 0;
  height: 0;
  z-index: -100;
}

.fileError {
  color: #f00;

  @include mq(1440) {
    text-align: center;
    padding: 0 3rem;
  }
}

.borderError {
  border: 0.1rem dashed rgba(255, 0, 0, 0.2);
}

.loader {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 0.3rem solid;
  border-color: #424ed1 #424ed1 transparent transparent;
  box-sizing: border-box;
  margin: 0 auto;
  animation: rotation 1s linear infinite;
}

.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 0.3rem solid;
  border-color: transparent transparent #ff4236 #ff3d00;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

.loader::before {
  width: 3.2rem;
  height: 3.2rem;
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
