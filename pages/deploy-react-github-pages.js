import Head from "next/head";
import {
  //
  BlogBody,
  Litem,
  LitemTwo,
  Sentence,
  Code,
  PostTitle,
} from "../styles/Styles.js";
import style from "../styles/Home.module.css";

function DeployReactSiteGit() {
  return (
    <div>
      <Head>
        <title>How to deploy a react site on github pages</title>
        <meta
          name="keywords"
          content="Github, Git, frontend development, JavaScript, React, Github pages, Deploy website"
        />
        <meta
          name="description"
          content="Instructions on how to deploy a react application on github pages"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to deploy a react site on github pages
      </PostTitle>
      <BlogBody className={style.weight100}>
        <Sentence>
          1. Connect your local folder to your repo and make your first commit.
        </Sentence>
        <Sentence>2. Add github pages dependency.</Sentence>
        <Code>yarn add gh-pages</Code>
        <Sentence>3. Grab github pages url.</Sentence>
        <Litem>Go into the settings of your repository.</Litem>
        <Litem>Go into the pages tab.</Litem>
        <Litem>Change the branch to master branch & click save.</Litem>
        <Litem>Refresh the page, and you will see your react apps url.</Litem>
        <Litem>Copy and paste the url.</Litem>
        <Sentence>4. Make edits to the package.json .</Sentence>
        <Litem>Open the 'package.json' file.</Litem>
        <Litem>In the package.json, under [ private : true ] type:</Litem>
        <Code>'homepage': 'https://elir-mahad.github.io/reactapp/',</Code>
        <Litem>
          In the package.json, in the scripts object, under [ eject :
          react-scripts-eject ] type:
        </Litem>
        <Code>
          'predeploy': 'yarn build',
          <br />
          'deploy': 'gh-pages -d build'
        </Code>
        <Sentence>5. Deploy the app.</Sentence>
        <Litem>In the laptop or vsc terminal:</Litem>
        <Code>
          {" "}
          git commit -m “Add Github Pages config.” <br />
          yarn run deploy{" "}
        </Code>
        <Litem>In the github website:</Litem>
        <LitemTwo>
          go to settings, enter the branches tab, and change the branch from
          master to gh-pages branch.
        </LitemTwo>
        <LitemTwo>
          Insert your react apps url into the browser. The react site should be
          live.
        </LitemTwo>
        <Sentence> 6. To make changes to your app</Sentence>
        <Litem>
          After pushing your code, in the terminal type: yarn run deploy.
        </Litem>
        <Litem>
          yarn run deploy will update the github pages the site with the new
          changes.
        </Litem>
      </BlogBody>
    </div>
  );
}

export default DeployReactSiteGit;
