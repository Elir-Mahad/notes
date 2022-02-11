import Head from "next/head";
import {
  //
  BlogBody,
  PostTitle,
  Sentence,
} from "../styles/Styles.js";
// import Resources from "../components/Resources";
import style from "../styles/Home.module.css";
import InterPythonToc from "../components/tableofcontents/InterPythonToc";
import InterPyOne from "../components/interpychaps/InterPyOne.js";
//
function InterPython() {
  return (
    <div>
      <Head>
        <title>Intermediate python</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>Intermediate python</PostTitle>
      {/* <PostMenu /> */}
      <BlogBody>
        <Sentence>
          {" "}
          In this post, i will record some of my notes from datacamps
          intermediate python course. I am big fan of javascript, and i noticed
          that there are a lot of similarities between javascript and python.
          Therefore, wherever I see similarities between javascript and python,
          i will point them out.{" "}
        </Sentence>
        {/*  */}
        <InterPythonToc />
        <InterPyOne />
      </BlogBody>
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

export default InterPython;
