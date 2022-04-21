import Head from "next/head";
import {
  //
  BlogBody,
  PostTitle,
  Sentence,
} from "../styles/Styles.js";
// import Resources from "../components/Resources";
import style from "../styles/Home.module.css";
import FolderStructure from "../components/react-checklist-chaps/FolderStructure.js";
//
function ReactBpCheckList() {
  return (
    <div>
      <Head>
        <title>React best practices</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>React best practices</PostTitle>
      <BlogBody>
        <FolderStructure />
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
