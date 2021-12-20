export const scrollToHandler = (id) => {
  const element = document.getElementById(id);

  const y = element.getBoundingClientRect().top + window.scrollY + scrollY(id);
  window.scrollTo({ top: y, behavior: "smooth" });
};
