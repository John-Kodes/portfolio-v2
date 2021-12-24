import Image from "next/image";
// Images
import InternetFlicksThumb from "@/images/InternetFlicksThumb.jpg";
import RestaurantThumb from "@/images/RestaurantThumb.jpg";
import BlackJaxApiThumb from "@/images/BlackJaxApiThumb.svg";
// Styles
import styles from "@/styles/ProjectsSect.module.scss";
// Utils
import { floatTextMaker } from "@/utils";

const data = [
  {
    title: "BlackJax (front-end)",
    description:
      "A recreation of the game “BlackJack” in the form of a web app experience. Practice your skills, earn points and see how you place on the leaderboard to see how you compare to other players.",
    tags: ["React", "Redux", "Router", "Styled-Components"],
    thumbnail: (
      <div className={`${styles.thumbnail} ${styles.thumbnailBlackJax}`}>
        <div className={styles.title}>{floatTextMaker("BlackJax")}</div>
      </div>
    ),
    github: "https://github.com/John-Kodes/BlackJax",
    externalLink: "https://blackjax.netlify.app/",
  },
  {
    title: "Internet Flicks",
    description:
      "An online database of information relating to movies, TV shows and cast members. This project uses the TMDB API. The UI is inspired by the streaming service, Netflix.",
    tags: ["Next.js", "TMDB API", "Authentication", "Cookies"],
    thumbnail: (
      <div className={`${styles.thumbnail} ${styles.thumbnailInternetFlicks}`}>
        <Image
          src={InternetFlicksThumb}
          alt="Internet Flicks"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          placeholder="blur"
        />
      </div>
    ),
    github: "https://github.com/John-Kodes/internet-flicks",
    externalLink: "https://internet-flicks.vercel.app/",
  },
  {
    title: "BlackJax API",
    description:
      "This RESTful API allows for users to create accounts which will be stored using MongoDB. Sensitive user data is prevented from leaking during API calls. bcrypt is used to encrypt user passwords.",
    tags: ["Node.js", "Express.js", "MongoDB", "NoSQL", "Heroku"],
    thumbnail: (
      <div className={styles.thumbnail}>
        <Image
          src={BlackJaxApiThumb}
          alt="BlackJax Api"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    ),
    github: "https://github.com/John-Kodes/blackjax-backend",
    externalLink: "https://documenter.getpostman.com/view/16760268/UV5XhxFm",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "John Daniel's, the place to get the best burgers in Dubai (yes this is based on a real restaurant). This is a mock up landing page for a restaurant to answer the most common questions from current and potentially new customers for high conversion rate.",
    tags: ["React", "Google Maps", "Styled-Components", "Flexbox"],
    thumbnail: (
      <div className={`${styles.thumbnail} ${styles.thumbnailJDR}`}>
        <Image
          src={RestaurantThumb}
          alt="John Daniel's Resturant Dubai"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          placeholder="blur"
        />
      </div>
    ),
    github: "https://github.com/John-Kodes/JDR-V2",
    externalLink: "https://johndanielsrestaurant.vercel.app/",
  },
];

export default data;
