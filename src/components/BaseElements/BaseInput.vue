<template>
  <input
    class="input"
    ref="input"
    :value="modelValue.text"
    :type="type"
    :placeholder="placeholder"
    :class="{ errorClass: error === 'error' }"
    @input="onInput($event)"
    @focus="onFocus()"
    @blur="onBlur()"
  />
</template>

<script setup>
import { defineEmits, defineProps, ref } from "vue";
const input = ref(null);
/* eslint-disable */
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Object,
    default: "",
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    required: false,
  },
});

let formattedDigits = ref("");

const onInput = (event) => {
  let value = event.target.value;
  let type = event.target.type;
  if (type === "tel") {
    let numbers = value.replace(/\D/g, "");
    let length = numbers.length;
    if (length < 12 && event.inputType !== "deleteContentBackward") {
      formattedDigits.value =
        "+7 " +
        numbers.slice(1, 4) +
        " " +
        numbers.slice(4, 7) +
        " " +
        numbers.slice(7, 9) +
        " " +
        numbers.slice(9, 11);

      emit("update:modelValue", {
        text: formattedDigits.value,
        textLength: numbers.length,
      });
    } else if (event.inputType === "deleteContentBackward") {
      formattedDigits.value = formattedDigits.value.slice(0, -1);
      emit("update:modelValue", {
        text: formattedDigits.value,
        textLength: length,
      });
    } else {
      event.target.value = formattedDigits.value;
    }
  } else {
    emit("update:modelValue", {
      text: value.trimLeft(),
    });
  }
};

const onFocus = () => {
  input.value.classList.add("focus");
};
const onBlur = () => {
  input.value.classList.remove("focus");
};
</script>

<style lang="scss" scoped>
.focus {
  border: 0.2rem solid rgba(19, 20, 75, 0.2) !important;
}
.input {
  color: #13144b;
  font-family: "Onest";
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.064rem;
  padding: 1.5rem 2rem;
  width: 100%;
  height: 4.6rem;
  border-radius: 2rem;
  border: 0.1rem solid rgba(19, 20, 75, 0.2);
  margin-bottom: 1rem;
  outline: none;
  @include mq(768) {
    padding: 2rem;
    height: 5.9rem;
    font-size: 1.6rem;
  }

  @include mq(1440) {
    padding: 1.5rem 2rem;
    height: 5.2rem;
    margin-bottom: 0;
  }
}

::placeholder {
  color: #13144b;
  font-family: "Onest", serif;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  opacity: 0.5;
  line-height: 140%;
  letter-spacing: -0.064rem;
  @include mq(768) {
    font-size: 1.6rem;
    letter-spacing: -0.032rem;
  }
  @include mq(1440) {
    font-size: 1.8rem;
    letter-spacing: -0.064rem;
  }
}

.errorClass {
  border: 0.1rem solid #f00;
  color: #f00;
}
</style>
