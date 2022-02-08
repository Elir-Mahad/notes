import Head from "next/head";
import {
  //
  BlogBody,
  PostTitle,
} from "../styles/Styles.js";
// import Resources from "../components/Resources";
import style from "../styles/Home.module.css";

function IntroPython() {
  return (
    <div>
      <Head>
        <title>Intro to python</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>Intro to python</PostTitle>
      <BlogBody></BlogBody>
      {/* <Resources
        //
        topic="intro to python"
        firstResTitle=""
        firstLink=""
        secondResTitle=""
        secondLink=""
        thirdResTitle=""
        thirdLink=""
      /> */}
    </div>
  );
}

export default IntroPython;
