<template>
  <form
    @submit.stop.prevent="submit()"
    class="form"
    v-if="status.form"
    key="form"
  >
    <slot name="cross"></slot>
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
      При нажатии кнопки «Отправить» дается согласие на обработку персональных
      данных и передачу их в ПАО «Промсвязьбанк»
    </p>
    <BaseButton class="resume__btn" v-if="!loader">
      <span>Отправить</span>
    </BaseButton>
    <span class="loader" v-if="loader"></span>
  </form>
  <FormStatus
    v-else
    :status="status"
    :modalSettings="modalSettings"
    @customEvent="handleEvent($event)"
    key="status"
  ></FormStatus>
</template>

<script setup>
import FormStatus from "./BaseStatus.vue";
import { ref, watch, defineEmits, defineProps, reactive } from "vue";
import { useSubmit } from "../composables/useSubmit";
import { useWatchers } from "../composables/useWatchers";

const emit = defineEmits(["update:modelValue", "closeModal"]);
defineProps({
  modalSettings: {
    type: Object,
    required: false,
  },
});

let status = reactive({
  form: true,
  connection: true,
  server: { failure: false, message: "" },
});

const loader = ref(false);
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
const regExp = ref({
  name: /^[a-zа-я]+\s[a-zа-я]+(\s[a-zа-я]+)?$/i,

  phone: /^((8|\+7)\s)\d{3}[\d\s]{10}$/,
  email: /^[\w.-]+@([\w-]+\.)+[\w-]+$/i,
});

const submit = async () =>
  await useSubmit({ name, email, tel, file, regExp, errors, loader, status });

const handleEvent = (action) => {
  if (action === "close") {
    emit("closeModal", "close");
  } else if (action === "changeStatus") {
    status.form = true;
  }
};

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
</script>

<style lang="scss" scoped>
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
  width: 100%;
  height: 10rem;
  padding: 2rem;
  gap: 1rem;
  border-radius: 2rem;
  border: 0.1rem dashed rgba(19, 20, 75, 0.2);
  cursor: pointer;

  @include mq(1440) {
    // width: 43.4rem;
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
    letter-spacing: -0.026rem;

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
    letter-spacing: -0.026rem;

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
    letter-spacing: -0.026rem;
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
    & > span {
      position: relative;
    }
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

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
