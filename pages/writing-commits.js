import Head from "next/head";
import {
  //
  BlogBody,
  Litem,
  PostTitle,
  LitemTwo,
} from "../styles/Styles.js";
import style from "../styles/Home.module.css";

function WritingCommits() {
  return (
    <div>
      <Head>
        <title>Writing commits</title>
        <meta
          name="keywords"
          content="Github, Git, frontend development, JavaScript, Tutorial, writing commits"
        />
        <meta name="description" content="How to write commits properly" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to write commits properly
      </PostTitle>
      <BlogBody className={style.weight100}>
        <Litem>
          A commit is a set of instructions for how to go from a previous state
          to a new state.
        </Litem>

        <Litem>Write a commit as if you are giving orders to:</Litem>

        <LitemTwo>a person on how to change the code.</LitemTwo>

        <LitemTwo>the codebase to change its behaviour.</LitemTwo>

        <Litem>
          The preference for present-tense, imperative-style commit messages
          comes from Git itself.
        </Litem>

        <Litem>
          {" "}
          Example: commit -m “Add all images to the assets folder.”
        </Litem>
      </BlogBody>
    </div>
  );
}

export default WritingCommits;
