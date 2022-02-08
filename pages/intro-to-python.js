import Head from "next/head";
import {
  //
  BlogBody,
  Code,
  Litem,
  PostTitle,
  Sentence,
  SubHeading,
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
      <BlogBody>
        <Sentence>
          {" "}
          In this post, i will record some of the notes from datacamps intro to
          python course. I am big fan of javascript, and i noticed that there
          are a lot of similarities between javascript and python. Therefore,
          wherever I see similarities between javascript and python, i will
          point them out.{" "}
        </Sentence>
        <SubHeading>How to declare variables/constants in python ?</SubHeading>
        <Sentence>
          When declaring constants, you don’t have to preface the name of the
          constant with the world ‘var’ or ‘const’, instead you just write the
          word itself.{" "}
        </Sentence>
        <Code>
          const height = 1.79 (javascript) <br />
          height = 1.79 (python)
        </Code>
        <Sentence>
          Print plays a similar role as console log. Here is a javascript
          console log:
        </Sentence>
        <Code>
          console.log(height) <br />
          1.79 // this is the output
        </Code>
        <Sentence>Here is a python print statement:</Sentence>
        <Code>
          print(height) <br />
          1.79 # this is the output
        </Code>
        <SubHeading>How many data types does Python have ?</SubHeading>
        <Sentence> These are some of the popular Python data types: </Sentence>

        <Litem> Text Type: str (string) </Litem>

        <Litem>
          {" "}
          Numeric Types: int (integer solid number : 20), float (decimal number
          : 20.5){" "}
        </Litem>

        <Litem> Sequence Types: list, tuple, range </Litem>

        <Litem>Mapping Type: dict </Litem>

        <Litem> Boolean Type: bool </Litem>

        <SubHeading>Adding different data types in python </SubHeading>
        <Sentence>
          Adding different data types often leads to different behaviours.{" "}
        </Sentence>
        <Sentence>When you add integers they get added properly.</Sentence>
        <Code>2 + 3 = 5</Code>

        <Sentence>
          When you add strings they just get attached to each other.
        </Sentence>
        <Code>‘Ab’ + ‘cd’ = ‘Abcd’</Code>
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
