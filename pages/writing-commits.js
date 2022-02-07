import Head from "next/head";
import {
  //
  BlogBody,
  PostTitle,
  Litem,
  Sentence,
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to write commits properly
        {/* Testing */}
      </PostTitle>
      <BlogBody>
        <Sentence>
          A commit is a set of instructions for how to go from a previous state
          to a new state.
        </Sentence>

        <Sentence>Write a commit as if you are giving orders to:</Sentence>

        <Litem>a person on how to change the code.</Litem>

        <Litem>the codebase to change its behaviour.</Litem>

        <Sentence>
          The preference for present-tense, imperative-style commit messages
          comes from Git itself.
        </Sentence>

        <Sentence>
          {" "}
          Example: commit -m “Add all images to the assets folder.”
        </Sentence>
      </BlogBody>
    </div>
  );
}

export default WritingCommits;
