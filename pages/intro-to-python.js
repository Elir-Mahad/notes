import Head from "next/head";
import {
  //
  BlogBody,
  PostTitle,
  Sentence,
} from "../styles/Styles.js";
// import Resources from "../components/Resources";
import style from "../styles/Home.module.css";
import IntroPyOne from "../components/intropychaps/IntroPyOne";
import IntroPyTwo from "../components/intropychaps/IntroPyTwo";
import IntroPyThree from "../components/intropychaps/IntroPyThree.js";
import IntroPyFour from "../components/intropychaps/IntroPyFour.js";
import IntroPythonToc from "../components/tableofcontents/IntroPythonToc";
//
function IntroPython() {
  return (
    <div>
      <Head>
        <title>Intro to python</title>
        <meta
          name="keywords"
          content="python, Mahad Mohamood, datacamp, data science, python list, numpy, numpy arrays, 2d numpy arrays, python matrix, datacamp python data science, python functions"
        />
        <meta
          name="description"
          content="In this tutorial, you will learn how to use python lists, numpy arrays, and 2d numpy arrays."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>Intro to python</PostTitle>
      {/* <PostMenu /> */}
      <BlogBody>
        <Sentence>
          {" "}
          In this post, i will record some of my notes from datacamps intro to
          python course. I am big fan of javascript, and i noticed that there
          are a lot of similarities between javascript and python. Therefore,
          wherever I see similarities between javascript and python, i will
          point them out.{" "}
        </Sentence>
        {/*  */}
        <IntroPythonToc />
        <IntroPyOne />
        <IntroPyTwo />
        <IntroPyThree />
        <IntroPyFour />
        {/*  */}
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

export default IntroPython;
