<template>
  <input
    :value="modelValue.text"
    :type="type"
    :placeholder="placeholder"
    :class="{ errorClass: error === 'error' }"
    @input="onInput($event)"
  />
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';
/* eslint-disable */
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: Object,
    default: '',
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

let formattedDigits = ref('');

const onInput = (event) => {
  let value = event.target.value;
  let type = event.target.type;
  if (type === 'tel') {
    let numbers = value.replace(/\D/g, '');
    let length = numbers.length;
    if (length < 12) {
      formattedDigits.value =
        '+7 ' +
        numbers.slice(1, 4) +
        ' ' +
        numbers.slice(4, 7) +
        ' ' +
        numbers.slice(7, 9) +
        ' ' +
        numbers.slice(9, 11);

      emit('update:modelValue', {
        text: formattedDigits.value,
        textLength: numbers.length,
      });
    } else {
      event.target.value = formattedDigits.value;
    }
  } else {
    emit('update:modelValue', {
      text: value,
    });
  }
};
</script>

<style lang="scss" scoped>
input {
  color: #13144b;
  font-family: 'Onest';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.64px;
  padding: 15px 20px;
  width: 295px;
  height: 46px;
  border-radius: 20px;
  border: 1px solid rgba(19, 20, 75, 0.2);
  margin-bottom: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    padding: 20px;
    width: 608px;
    height: 59px;
  }
  @media screen and (min-width: 1440px) {
    padding: 15px 20px;
    width: 434px;
    height: 52px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 20px 27px;
    width: 579px;
    height: 60px;
  }
}

::placeholder {
  color: #13144b;
  font-family: 'Onest';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.26px;
  opacity: 0.5;
  line-height: 140%;
  letter-spacing: -0.64px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }
  @media screen and (min-width: 1440px) {
    letter-spacing: -0.64px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 21px;
    letter-spacing: -0.853px;
  }
}

.errorClass {
  border: 1px solid #f00;
  color: #f00;
  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }
}
</style>
