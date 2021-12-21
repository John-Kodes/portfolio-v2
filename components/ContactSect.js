import Image from "next/image";
// Icons
import email from "@/icons/email.svg";
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
              required
            />
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
          </div>
          <button className={styles.submitBtn} type="submit">
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
        <a className={styles.myEmail}>
          <div className={styles.icon}>
            <Image src={email} layout="fill" objectFit="contain" />
          </div>
          johndanielsemine@gmail.com
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
