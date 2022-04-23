import Head from "next/head";
import {
  //
  BlogBody,
  PostTitle,
  Sentence,
} from "../styles/Styles.js";
// import Resources from "../components/Resources";
import style from "../styles/Home.module.css";
import CheckList from "../components/react-checklist-chaps/CheckList.js";
//
function ReactBpCheckList() {
  return (
    <div>
      <Head>
        <title>React best practices</title>
        <meta
          name="keywords"
          content="react best practices, react.js, react, props, naming, jsx, javascript, javascript frameworks"
        />
        <meta
          name="description"
          content="In this tutorial, you will learn about react best practices. Each rule will contain code snippets showing bad code vs good code."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>React best practices</PostTitle>
      <BlogBody>
        <CheckList />
      </BlogBody>
      {/* <Resources
        //
        topic=""
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

export default ReactBpCheckList;
