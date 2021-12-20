import { motion } from "framer-motion";

export const scrollToHandler = (id) => {
  const element = document.getElementById(id);

  const y = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export const floatTextMaker = (text) => {
  const textArr = Array.from(text);
  return textArr.map((letter, i) => (
    <motion.span key={i} whileHover={{ y: -8 }}>
      {letter !== " " ? letter : <>&nbsp;</>}
    </motion.span>
  ));
};
