import { motion } from "framer-motion";

export const scrollToHandler = (id) => {
  const element = document.getElementById(id);

  const y = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export const floatTextMaker = (text, y = -8) => {
  const textArr = Array.from(text);

  const style = {
    display: "inline-flex",
    fontSize: "inherit",
    color: "inherit",
    lineHeight: "inherit",
    fontWeight: "inherit",
  };

  /* 
    font-size: 8rem;
  font-family: "Yeseva One", sans-serif;
  color: inherit;
  line-height: 0.6;
  font-weight: normal;
*/

  return textArr.map((letter, i) => (
    <motion.span key={i} whileHover={{ y }} style={style}>
      {letter !== " " ? letter : <>&nbsp;</>}
    </motion.span>
  ));
};
