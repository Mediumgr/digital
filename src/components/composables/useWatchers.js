import { watch } from 'vue';

export const useWatchers = (options) => {
  const { name, email, tel, file, regExp, errors } = options;

  watch(
    () => name.value,
    (nameValue) => {
      if (regExp.value.name.test(nameValue.text)) {
        errors.value['name'] = '';
      }
    }
  );
  watch(
    () => email.value,
    (emailValue) => {
      if (regExp.value.email.test(emailValue.text)) {
        errors.value['email'] = '';
      }
    }
  );

  watch(
    () => tel.value,
    (phoneValue) => {
      if (
        regExp.value.phone.test(phoneValue.text) &&
        phoneValue.textLength === 11
      ) {
        errors.value['tel'] = '';
      }
    }
  );

  watch(
    () => file.value.name,
    (name) => {
      if (name !== undefined) {
        errors.value['file'] = '';
      }
    }
  );
};
