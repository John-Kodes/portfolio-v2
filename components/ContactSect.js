import Image from "next/image";
import { useEffect, useState } from "react";
// Icons
import emailIcon from "@/icons/email.svg";
// Images
import EnvelopeFront from "@/images/EnvelopeFront.svg";
import EnvelopeBack from "@/images/EnvelopeBack.svg";
// Styles
import styles from "@/styles/ContactSect.module.scss";
// Util
import { floatTextMaker } from "@/utils";
// config
import { URL } from "@/config";

const ContactSect = () => {
  // FORM IS VALID
  const [isValid, setIsValid] = useState(false);
  // FORM STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const saveToClipboard = () => {
    navigator.clipboard.writeText("johndanielsemine@gmail.com");
  };

  useEffect(() => {
    if (name !== "" && email !== "" && subject !== "" && message !== "")
      setIsValid(true);
    else setIsValid(false);
  }, [name, email, subject, message]);

  return (
    <section className={styles.section} id="section-contact">
      <h4 className={styles.subTitle}>{floatTextMaker("Interested?")}</h4>
      <div className={styles.container}>
        <h2 className={styles.title}>{floatTextMaker("Let's Talk!")}</h2>
        <form
          className={styles.form}
          action="https://formsubmit.co/dc50902942819f9d99efb118269560aa"
          method="POST"
        >
          <input type="hidden" name="_next" value={URL} />
          <div className={styles.split}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder=" "
                className={styles.name}
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
            </div>
            <div className={styles.inputBox}>
              <input
                type="email"
                placeholder=" "
                className={styles.email}
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
            </div>
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder=" "
              className={styles.subject}
              id="subject"
              name="_subject"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
          </div>
          <div className={styles.inputBox}>
            <textarea
              placeholder=" "
              className={styles.message}
              id="message"
              name="message"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
          </div>
          <button
            className={styles.submitBtn}
            disabled={!isValid}
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className={styles.envelopeFront}>
          <div className={styles.imageBox}>
            <Image
              src={EnvelopeFront}
              alt="Envelope Front"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              draggable="false"
            />
          </div>
        </div>
        <div className={styles.envelopeBack}>
          <div className={styles.imageBox}>
            <Image
              src={EnvelopeBack}
              alt="Envelope Back"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <a className={styles.myEmail} onClick={saveToClipboard}>
          <div className={styles.icon}>
            <Image
              src={emailIcon}
              alt="email"
              layout="fill"
              objectFit="contain"
            />
          </div>
          johndanielsemine@gmail.com
          <span>saved to clipboard!</span>
        </a>
        <p>
          I will get back to you within one to two days through email. Also
          please don&apos;t forget to check your spam account just in case!
        </p>
      </div>
    </section>
  );
};

export default ContactSect;
