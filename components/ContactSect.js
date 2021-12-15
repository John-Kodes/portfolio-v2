import styles from "@/styles/ContactSect.module.scss";

const ContactSect = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section className={styles.section}>
      <h4 className={styles.subTitle}>Interested?</h4>
      <div className={styles.container}>
        <h2 className={styles.title}>Let&apos;s Talk!</h2>
        <form onSubmit={submitHandler} className={styles.form}>
          <div className={styles.split}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder=" "
                className={styles.name}
                id="name"
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
      </div>
    </section>
  );
};

export default ContactSect;
