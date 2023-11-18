<template>
  <div class="gradient-group__vacancy">
    <div class="blue"></div>
    <div class="purple"></div>
    <div class="red"></div>
    <div class="yellow"></div>
    <div class="vacancy__section">
      <p class="vacancy__title">Вакансии</p>
      <div class="vacancy__container">
        <a
          class="vacancy__card"
          target="_blank"
          :style="backgroundStyle"
          href="https://career.habr.com/companies/psb/vacancies"
          @mouseover="mouseover($event)"
          @mouseleave="mouseleave()"
        >
          <p class="vacancy__look">Посмотреть все вакансии можно здесь</p>
          <div class="vacancy__bottom">
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
            placeholder="Имя Фамилия"
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
  </div>
</template>

<script setup>
import { ref, computed, watch, reactive, onMounted } from "vue";
import BaseInput from "./BaseElements/BaseInput.vue";
import FormStatus from "./FormStatus.vue";
import { useSubmit } from "./composables/useSubmit";
import { useWatchers } from "./composables/useWatchers";

const loader = ref(false);
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
let imageURLs = ref([
  "vacancy_1.png",
  "vacancy_2.png",
  "vacancy_3.png",
  "vacancy_4.png",
  "vacancy_5.png",
  "vacancy_6.png",
  "vacancy_7.png",
  "vacancy_8.png",
  "vacancy_9.png",
  "vacancy_10.png",
  "vacancy_11.png",
  "vacancy_12.png",
  "vacancy_13.png",
]);
let currentIndex = ref(-1);
let interval = ref(null);
let initialBackground = ref(true);
let errors = ref({});

/* eslint-disable */
const regExp = ref({
  name: /^[A-Za-zА-Яа-я]+(?: [A-Za-zА-Яа-я]+)?(?: [A-Za-zА-Яа-я]+)?$/,

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

const mouseover = (event) => {
  clearInterval(interval.value);
  if (event.target.classList.contains("vacancy__card")) {
    interval.value = setInterval(() => {
      initialBackground.value = false;
      currentIndex.value = (currentIndex.value + 1) % imageURLs.value.length;
    }, 300);
  }
};
/*  */
const mouseleave = () => {
  clearInterval(interval.value);
  currentIndex.value = -1;
  initialBackground.value = true;
};

const backgroundStyle = computed(() => {
  return initialBackground.value === false
    ? /*   {
        "background-image": `url(${loadedImages.value[currentIndex.value]})`,
      } */
      {
        "background-image": `url(${require(`@/assets/images/vacancies/${
          imageURLs.value[currentIndex.value]
        }`)})`,
      }
    : { background: "#424ed1" };
});

// const loadedImages = ref([]);
const preLoadImages = () => {
  /* загрузка всех изображений для вакансий в кэш браузера */
  // const imagePromises =
  imageURLs.value.forEach((url) => {
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onerror = reject;
      img.src = `${require(`@/assets/images/vacancies/${url}`)}`;
      img.onload = () => resolve(img);
    });
  });

  // Promise.all(imagePromises)
  //   .then((images) => {
  //     images.forEach((img) => {
  //       const regex = /^.*\/img\//;
  //       // debugger;
  //       const result = img.src.replace(regex, "");
  //       loadedImages.value.push(result);
  //       console.log("img_vacancy", img);
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Ошибка при загрузке изображений:", error);
  //   });

  /* загрузка изображения на случай отсутствия интернета у пользователя */
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

/* hover кнопки button */
const mousemove = (e) => {
  let btn = document.querySelector(".resume__btn");
  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;
  btn.style.setProperty("--x", x / 10 + "rem");
  btn.style.setProperty("--y", y / 1000 + "rem");
};

onMounted(() => {
  preLoadImages();
});
</script>

<style lang="scss" scoped>
.gradient-group__vacancy {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.gradient-group__vacancy .blue {
  background-color: #733ff5;
  position: absolute;
  top: 0;
  left: 0;
  height: 300rem;
  width: 300rem;
  margin: 0 auto;
  animation: gradientBlue 1.5s ease forwards;
}

.gradient-group__vacancy .purple {
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
  height: 130rem;
  width: 130rem;
  top: -40rem;
  left: -40rem;
  animation: slideInGradient 1.5s ease forwards,
    gradientPurple_375 8s ease infinite;

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

.gradient-group__vacancy .red {
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
  width: 85rem;
  height: 85rem;
  top: -25rem;
  left: -15rem;
  animation: slideInGradient 1.5s ease forwards,
    gradientRed_375 8s ease infinite;

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

.gradient-group__vacancy .yellow {
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
  width: 40rem;
  height: 40rem;
  top: 40rem;
  left: 18rem;
  animation: slideInGradient 1.5s ease forwards,
    gradientYellow_375 8s ease infinite;

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
      width: 110.8rem;
      margin-bottom: 20rem;
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
    padding: 2rem;
    border-radius: 2rem;
    height: 25rem;
    margin-bottom: 2rem;
    background-repeat: no-repeat;
    background-size: cover;

    @include mq(768) {
      padding: 4rem;
      height: 40.5rem;
      margin-bottom: 4rem;
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

    @include mq(768) {
      font-size: 4.8rem;
      letter-spacing: -0.096rem;
    }

    @include mq(1440) {
      font-size: 6.4rem;
      line-height: 100%;
      letter-spacing: -0.256rem;
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

    /*     @include mq(1920) {
      font-size: 2.1rem;
      letter-spacing: -0.0853rem;
    } */
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

    /*    @include mq(1920) {
      font-size: 2.1rem;
      letter-spacing: -0.0853rem;
    } */
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

    /*     @include mq(1920) {
      padding: 0.3rem 0 2.5rem;
      font-size: 2.1rem;
      letter-spacing: -0.0853rem;
    } */
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
