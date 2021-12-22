import Head from "next/head";
// Components
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import AboutMeSection from "@/components/AboutMeSect";
import ProjectsSection from "@/components/ProjectsSect";
import ContactSect from "@/components/ContactSect";
import Footer from "@/components/Footer";
// Observer
import { useInView } from "react-intersection-observer";

export default function Home() {
  // For navbar, to know if user has scrolled down
  const [element, inView] = useInView();

  return (
    <>
      <Head>
        <title>John Daniel Semine Macaranas</title>
        <meta
          name="description"
          content="John Daniel Semine Macaranas is a full stack developer that specializes in front-end development to create exceptional digital experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={element} style={{ height: "0.01px" }}></div>
      <Nav inView={inView} />
      <Header />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSect />
      <Footer />
    </>
  );
}
