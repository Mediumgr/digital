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

    let { utmMedium, utmSource, utmCampaign, clickId } = extractUTMParams(
      window.location.search
    );

    let formData = new FormData();

    formData.append("name", name.value.text);
    formData.append("email", email.value.text);
    formData.append("phone", tel.value.text);
    formData.append("file", file.value);
    formData.append("utm[utm_source]", utmSource);
    formData.append("utm[utm_medium]", utmMedium);
    formData.append("utm[utm_campaign]", utmCampaign);
    formData.append("click_id", clickId);

    let res = await fetch("/upload/", {
      method: "POST",
      body: formData,
    });

    let response = await res.json();

    if (response.error === true) {
      status.server.failure = true;
      status.server.message = response.message;
      delete status["connection"];
    } else {
      console.log("yaReachGoal invoked");
      yaReachGoal("target");
    }

    loader.value = false;
    status.form = false;
  }
};

const yaReachGoal = (idTarget) => {
  if (typeof ym == "function") {
    try {
      /* eslint-disable */
      ym(95461603, "reachGoal", idTarget);
      console.log("ReachGoal push");
    } catch (e) {
      console.log("ReachGoal error", e);
    }
  }
};

const extractUTMParams = (params) => {
  const urlParams = new URLSearchParams(params);
  const utmMedium = urlParams.get("utm_medium") || "";
  const utmSource = urlParams.get("utm_source") || "";
  const utmCampaign = urlParams.get("utm_campaign") || "";
  const clickId = urlParams.get("click_id") || "";

  return { utmMedium, utmSource, utmCampaign, clickId };
};

const checkInternetConnection = () => {
  return navigator.onLine;
};
