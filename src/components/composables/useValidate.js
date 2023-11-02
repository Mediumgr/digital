export const useValidate = (options) => {
  const { name, email, tel, file, regExp, errors } = options;

  if (regExp.value.name.test(name.value.text)) {
    errors.value['name'] = '';
  } else {
    errors.value['name'] = 'error';
  }

  if (regExp.value.email.test(email.value.text)) {
    errors.value['email'] = '';
  } else {
    errors.value['email'] = 'error';
  }

  if (regExp.value.phone.test(tel.value.text) && tel.value.textLength === 11) {
    errors.value['tel'] = '';
  } else {
    errors.value['tel'] = 'error';
  }

  if (file.value.name !== undefined) {
    errors.value['file'] = '';
  } else {
    errors.value['file'] = 'error';
  }
};
