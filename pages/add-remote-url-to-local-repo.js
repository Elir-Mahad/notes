import Head from "next/head";
import {
  //
  BlogBody,
  Sentence,
  PostTitle,
  Code,
  // PicWrapper,
  UrlLink,
  Litem,
} from "../styles/Styles.js";
import style from "../styles/Home.module.css";
// import createrepo from "../assets/createrepo.png";
// import remoteurl from "../assets/remoteurl.png";
// import openrepoinvsc from "../assets/openrepoinvsc.png";
// import Image from "next/image";

function RemoteOriginUrl() {
  return (
    <div>
      <Head>
        <title>How to add a remote url to your local repository</title>
        <meta
          name="keywords"
          content="Github, Git, frontend development, JavaScript, Tutorial, remote origin url"
        />
        <meta
          name="description"
          content="How to add a remote url to your local repository"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to add a remote url to your local repository
      </PostTitle>
      <BlogBody className={style.weight100}>
        {/*  */}
        <Sentence>
          If you have a folder on your computer with some files, and you want to
          upload it to Github, then you must utilize something that's called the
          'remote url'. A remote url is the{" "}
          <UrlLink href="https://www.techtarget.com/searchnetworking/definition/URL">
            url
          </UrlLink>{" "}
          that connects your local folder to the repository that you have
          created on github. In this post, i will show you how to use the remote
          url to establish this connection.
        </Sentence>
        <Sentence>1. In your github account, create a repository:</Sentence>
        {/* <PicWrapper>
          <Image
            //
            src={createrepo}
            alt="Github page for creating a new repository"
          />
        </PicWrapper> */}
        <Sentence>2. Copy the remote origin url:</Sentence>
        {/* <PicWrapper>
          <Image
            //
            src={remoteurl}
            alt="Github repository quick set up page"
          />
        </PicWrapper> */}
        <Sentence>
          3. Open your visual studio code, then open your project inside it:
        </Sentence>
        {/* <PicWrapper style={{ width: "40rem" }}>
          <Image
            //
            src={openrepoinvsc}
            alt="Visual studio code with the game repository opened inside it"
          />
        </PicWrapper> */}
        <Sentence>
          4. Open the visual studio code terminal and paste the remote url:
        </Sentence>
        <Code>
          git remote add origin https://github.com/Elir-Mahad/game.git
        </Code>
        <Sentence>
          4. Confirm that your local folder is connected to your github
          repository:
        </Sentence>
        <Code>git remote -v</Code>
        <Litem>Terminal response should be:</Litem>
        <Code>
          origin https://github.com/Elir-Mahad/game.git (fetch) <br />
          origin https://github.com/Elir-Mahad/game.git (push)
        </Code>
        <Sentence>
          5. Removing an old remote url from a project and adding a new one.
        </Sentence>
        <Litem>
          If you've already added a remote url to your folder, but you want to
          replace it with a new remote url then in your terminal type:
        </Litem>
        <Code>git remote remove origin</Code>
      </BlogBody>
    </div>
  );
}

export default RemoteOriginUrl;
