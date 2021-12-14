import Image from "next/image";
import Link from "next/link";
// Icons
import githubSmall from "@/icons/githubSmall.svg";
import ExternalLink from "@/icons/ExternalLink.svg";
// Images
import InternetFlicksThumb from "@/images/InternetFlicksThumb.jpg";
import RestaurantThumb from "@/images/RestaurantThumb.jpg";
import Poly from "@/images/polyBg.svg";
import BlackJaxApiThumb from "@/images/BlackJaxApiThumb.svg";
// Styles
import styles from "@/styles/ProjectsSect.module.scss";

const ProjectsSection = () => {
  const space = <>&ensp;&ensp;</>;

  const BlackJaxThumbnailStyle = {
    backgroundImage: `linear-gradient(185deg, rgba(0, 0, 0, 0.9), #0f091ae2),
url('../public/polyBg.svg')`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h4>Stuff i&apos;ve made</h4>
        <h2>My Projects</h2>
      </div>

      <div className={styles.projectBox}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>BlackJax (front-end)</h3>
          <p className={styles.description}>
            A recreation of the game “BlackJack” in the form of a web app
            experience. Practice your skills, earn points and see how you place
            on the leaderboard to see how you compare to other players.
          </p>
          <p className={styles.tags}>
            React{space}Redux{space}Router{space}Styled-Components
          </p>
          <div className={styles.btnsBox}>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={`${styles.thumbnail} ${styles.thumbnailBlackJax}`}>
          {/* TODO: add framer-motion */}
          <h4>BlackJax</h4>
        </div>
      </div>

      <div className={styles.projectBox}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>BlackJax API</h3>
          <p className={styles.description}>
            This RESTful API allows for users to create accounts which will be
            stored using MongoDB. Sensitive user data is prevented from leaking
            during API calls. bcrypt is used to encrypt user passwords.
          </p>
          <p className={styles.tags}>
            Heroku{space}Node.js{space}Express.js{space}MongoDB{space}NoSQL
          </p>
          <div className={styles.btnsBox}>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.thumbnail}>
          <Image
            src={InternetFlicksThumb}
            alt="Internet Flicks"
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
          />
        </div>
      </div>

      <div className={styles.projectBox}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Internet Flicks</h3>
          <p className={styles.description}>
            An online database of information relating to movies, TV shows and
            cast members. This project uses the TMDB API. The UI is inspired by
            the streaming service, Netflix.
          </p>
          <p className={styles.tags}>
            Next.js{space}TMDB API{space}Authentication
          </p>
          <div className={styles.btnsBox}>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.thumbnail}>
          <Image
            src={BlackJaxApiThumb}
            alt="BlackJax Api"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className={styles.projectBox}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Restaurant Landing Page</h3>
          <p className={styles.description}>
            John Daniel&apos;s, the place to get the best burgers in Dubai (yes
            this is based on a real restaurant). This is a mock up landing page
            for a restaurant to answer the most common questions from current
            and potentially new customers for high conversion rate.
          </p>
          <p className={styles.tags}>
            React{space}Framer-motion{space}Styled-Components{space}Flexbox
          </p>
          <div className={styles.btnsBox}>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={githubSmall}
                  alt="github"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
            <Link href="/" passHref>
              <button className={styles.btn}>
                <Image
                  src={ExternalLink}
                  alt="external link"
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.thumbnail}>
          <Image
            src={RestaurantThumb}
            alt="John Daniel's Resturant Dubai"
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
