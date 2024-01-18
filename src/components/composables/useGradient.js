import { onMounted } from "vue";

export const useGradient = ({ animationAction, classElement }) => {
  const intersection = () => {
    let options = {
      threshold: [0.2],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        isIntersecting
          ? (animationAction.value = true)
          : (animationAction.value = false);
      });
    }, options);

    observer.observe(document.querySelector(`.${classElement.value}`));
  };

  onMounted(() => {
    intersection();
  });
};
