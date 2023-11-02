import { useValidate } from './useValidate';

export const useSubmit = async (options) => {
  const { name, email, tel, file, regExp, errors, loader, status } = options;

  let connection = checkInternetConnection();
  if (connection === false) {
    status.form = false;
    status.connection = false;
  }

  useValidate({ name, email, tel, file, regExp, errors });

  let isError = false;
  for (let err in errors.value) {
    if (errors.value[err] === 'error') {
      isError = true;
      break;
    }
  }

  if (isError === false) {
    //   status.connection = true;

    loader.value = true;
    let formData = new FormData();

    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('phone', tel.value);
    formData.append('file', file.value);
    /* 
        let res = await fetch('/upload/', {
          method: 'POST',
          body: formData,
        });
    
        let response = await res.json();
    
        if (response.error === true) {
          status.server.failure = true; 
          status.server.message = response.message;
          delete status['connection'];
        }

        
    loader.value = false; */

    status.form = false;
  } 
};

const checkInternetConnection = () => {
  return navigator.onLine;
};
