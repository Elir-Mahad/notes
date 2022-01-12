import Head from "next/head";
import {
  //
  BlogBody,
  Litem,
  Sentence,
  PostTitle,
} from "../styles/Styles.js";
import style from "../styles/Home.module.css";

function DeployNetlifySite() {
  return (
    <div>
      <Head>
        <title>How to deploy a regular site on netlify</title>
        <meta
          name="keywords"
          content="Frontend Development, JavaScript, Netlify, Deploy website"
        />
        <meta
          name="description"
          content="Instructions on how to deploy a basic html and css website on netlify"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to deploy a site on netlify
      </PostTitle>
      <BlogBody className={style.weight100}>
        <Sentence>
          1. Get a domain from namecheap, hover, godaddy, or any other preferred
          site.
        </Sentence>

        <Sentence>2. Create a netlify account.</Sentence>

        <Sentence>
          3. Connect your github repository to your netlify account to set up
          continuous deployment.
        </Sentence>

        <Litem>
          This{" "}
          <a href="https://www.youtube.com/watch?v=-I_6kVPrX2o">Tutorial</a>{" "}
          captures the process. If you have any errors or warnings when you
          push, netlify will throw an error and not build or publish.
        </Litem>

        <Sentence>4. Connect your domain name to netlify </Sentence>

        <Litem>
          {" "}
          This{" "}
          <a href="https://www.youtube.com/watch?v=qlrCptpwtgs">
            Tutorial
          </a>{" "}
          captures the whole process. The domain thats used is hosted with go
          daddy.
        </Litem>

        <Sentence>
          5. To download your sites code from the netlify dashboard, check out
          this{" "}
          <a href="https://docs.netlify.com/site-deploys/manage-deploys/">
            guide.
          </a>
        </Sentence>
      </BlogBody>
    </div>
  );
}

export default DeployNetlifySite;
