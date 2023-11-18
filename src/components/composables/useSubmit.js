import { useValidate } from "./useValidate";

export const useSubmit = async (options) => {
  const { name, email, tel, file, regExp, errors, loader, status } = options;

  useValidate({ name, email, tel, file, regExp, errors });

  let connection = checkInternetConnection();
  if (connection === false) {
    status.form = false;
    status.connection = false;
    return;
  }

  let isError = false;
  for (let err in errors.value) {
    if (errors.value[err] === "error") {
      isError = true;
      break;
    }
  }

  if (isError === false) {
    status.connection = true;

    loader.value = true;

    /*     let formData = new FormData();

    formData.append('name', name.value.text);
    formData.append('email', email.value.text);
    formData.append('phone', tel.value.text);
    formData.append('file', file.value);

    let res = await fetch('/upload/', {
      method: 'POST',
      body: formData,
    });

    let response = await res.json();

    if (response.error === true) {
      status.server.failure = true;
      status.server.message = response.message;
      delete status['connection'];
    } */
    setTimeout(() => {
      loader.value = false;
      status.form = false;
    }, 2000);
    // loader.value = false;
    // status.form = false;
  }
};

const checkInternetConnection = () => {
  return navigator.onLine;
};
