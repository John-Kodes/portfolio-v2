import Head from "next/head";
// Components
import Header from "@/components/Header";
import AboutMeSection from "@/components/AboutMeSect";
import ProjectsSection from "@/components/ProjectsSect";
import Footer from "@/components/Footer";

export default function Home() {
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
      <Header />
      <AboutMeSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
