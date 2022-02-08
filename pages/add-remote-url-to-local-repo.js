import Head from "next/head";
import {
  //
  BlogBody,
  Sentence,
  HighlightedSentence,
  PostTitle,
  // Code,
  LiCode,
  UrlLink,
  Litem,
  CodeRes,
  LitemTwo,
} from "../styles/Styles.js";
import style from "../styles/Home.module.css";
import Resources from "../components/Resources.js";
//
function RemoteOriginUrl() {
  return (
    <div>
      <Head>
        <title>How to add a remote url to your local project folder</title>
        <meta
          name="keywords"
          content="Github, Git, frontend development, JavaScript, Tutorial, add remote origin url, remove remote orign url, Mahad Mohamood, github projects, vscode github, github repository"
        />
        <meta
          name="description"
          content="In this tutorial, you will learn about Github’s remote url, and then use visual studio code and git to upload a folder to your GitHub repository. "
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to add a remote url to your local project folder
      </PostTitle>
      <BlogBody>
        {/*  */}
        <Sentence>
          If you have a folder on your computer with some files, and you want to
          upload it to Github, then you must utilize something that's called the
          'remote url'. A remote url is the{" "}
          <UrlLink href="https://www.techtarget.com/searchnetworking/definition/URL">
            url
          </UrlLink>{" "}
          that connects your local folder to the repository that you have
          created on github. In this tutorial, i will show you how to use the
          remote url to establish this connection.
        </Sentence>

        <HighlightedSentence>
          {" "}
          Important things: In this post, we will be using{" "}
          <UrlLink href="https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/">
            the terminal commands
          </UrlLink>{" "}
          . To follow along, you should already be logged into visual studio
          code with your github account. In the code snippets,{" "}
          <CodeRes>the green code is the terminal response</CodeRes>, elir is my
          computers username, and Elir-Mahad is my github username. When you are
          trying out the code, elir will be replaced by your computers username,
          and Elir-Mahad will be replaced by your github username.
        </HighlightedSentence>

        {/* 1ST STEP ------------------------------------------ */}

        <Sentence>
          1. Create the project folder and files on your desktop.
        </Sentence>

        <Litem>
          For this tutorial, the name of the project folder will be 'game'.
        </Litem>

        <Litem>Open your terminal.</Litem>

        <Litem>Navigate into your Desktop folder.</Litem>

        <LiCode>cd Desktop</LiCode>

        <Litem>Confirm that you are in the Desktop folder.</Litem>

        <LiCode>
          pwd <br />
          <CodeRes> /Users/elir/Desktop</CodeRes>
        </LiCode>

        <Litem>Create a folder called 'game'.</Litem>

        <LiCode>mkdir game</LiCode>

        <Litem>Navigate into the game folder.</Litem>

        <LiCode>cd game</LiCode>

        <Litem>Confirm that you are in the game folder.</Litem>

        <LiCode>
          pwd <br />
          <CodeRes>game</CodeRes>
        </LiCode>

        <Litem>Create the file index.html inside the game folder.</Litem>

        <LiCode>touch index.html</LiCode>

        <Litem>Create the file styles.css inside the game folder.</Litem>

        <LiCode>touch styles.css</LiCode>

        <Litem>List all items in the game folder.</Litem>

        <LiCode>
          ls <br />
          <CodeRes>index.html styles.css</CodeRes>
        </LiCode>

        {/* 2ND STEP -------------------------------------------- */}

        <Sentence>
          2. Open the project folder inside visual studio code.
        </Sentence>

        <Litem>Open visual studio code.</Litem>

        <Litem>
          In the top left corner, click on the explorer tab (right above the
          magnifying glass) .
        </Litem>

        <Litem>Click on the open folder button.</Litem>

        <Litem>Navigate to your folder.</Litem>

        <Litem>Click open.</Litem>

        <Litem>Minimize the visual studio code program.</Litem>

        {/* 3RD STEP ---------------------------------------------*/}

        <Sentence>
          3. Create the github repository and copy its remote url.
        </Sentence>

        <Litem>Open your browser, go to github.com, and login.</Litem>

        <Litem>
          In your github account,{" "}
          <UrlLink href="https://docs.github.com/en/get-started/quickstart/create-a-repo">
            create a repository
          </UrlLink>{" "}
          called game.
        </Litem>

        <Litem>
          After you click on create repository, you will be automatically
          redirected to a Quick setup Page.
        </Litem>

        <Litem>
          Inside the box that starts with "…or create a new repository on the
          command line", you will find the line:{" "}
        </Litem>

        <LiCode>
          git remote add origin https://github.com/Elir-Mahad/game.git
        </LiCode>

        <LitemTwo>
          In your page, Elir-mahad will be replaced by your username.
        </LitemTwo>

        <Litem>Copy the git remote add origin line to your clipboard.</Litem>

        {/* 4TH STEP ------------------------------------------- */}

        <Sentence>
          4. Add the remote url of the github repository to your local folder.
        </Sentence>

        <Litem>Navigate back into your visual studio code.</Litem>

        <Litem>Open the visual studio code terminal.</Litem>

        <Litem>
          Verify that you are logged in with the correct github username.
        </Litem>

        <LiCode>
          {" "}
          git config --list <br />
          <CodeRes>
            user.name=elir-mahad <br />
            user.email=mahad@gmail.com
          </CodeRes>
        </LiCode>

        <LitemTwo>
          {" "}
          In your terminal, elir-mahad should be replaced with your github
          username; and mahad@gmail.com should be replaced with your email.
        </LitemTwo>

        <Litem>
          If you are logged in, then{" "}
          <UrlLink href="https://www.javatpoint.com/git-init">
            {" "}
            initialize your folder.
          </UrlLink>
        </Litem>

        <LiCode>
          git init <br />
          <CodeRes>
            Initialized empty Git repository in /Users/elir/Desktop/game/.git/
          </CodeRes>
        </LiCode>

        <Litem>
          After initialzing your folder, paste the remote url in the visual
          studio code terminal.
        </Litem>

        <LiCode>
          git remote add origin https://github.com/Elir-Mahad/game.git
        </LiCode>

        <Litem>
          Confirm that your local folder is connected to your github repository.
        </Litem>

        <LiCode>
          git remote -v <br />
          <CodeRes>
            {" "}
            origin https://github.com/Elir-Mahad/game.git (fetch) <br />
            origin https://github.com/Elir-Mahad/game.git (push){" "}
          </CodeRes>
        </LiCode>

        <LitemTwo>
          This terminal response is evidence that the game folder on your
          desktop, is now connected to the game repository that's in your
          github.
        </LitemTwo>

        {/* 5TH STEP -------------------------------------------- */}

        <Sentence>
          5. How to Remove an old remote url from a project and add a new one.
        </Sentence>

        <Litem>
          If you've already added a remote url to your project folder, but you
          want to replace it with a new remote url, then in your visual studio
          terminal type:
        </Litem>

        <LiCode>git remote remove origin</LiCode>

        <LitemTwo>This should remove the previous remote url.</LitemTwo>

        <Litem>Verify that the previous url has been removed.</Litem>

        <LiCode>git remote -v</LiCode>
        <LitemTwo>
          If there is no response, then the previous url has been removed.
        </LitemTwo>

        <Litem>If you already have a new remote url, then repeat step 4.</Litem>
      </BlogBody>
      <Resources
        //
        topic="github's remote url"
        firstResTitle="GitHub - Create Local Repository and push to github | Push an existing repository to github"
        firstLink="https://www.youtube.com/watch?v=vbQ2bYHxxEA"
        secondResTitle="Add, Rename & Remove Remote origin url to the Git Repo. What is Origin in Remote - GIT"
        secondLink="https://www.youtube.com/watch?v=YxTmfSuI74o"
        thirdResTitle="Git and GitHub explained for beginners"
        thirdLink="https://www.youtube.com/watch?v=8Dd7KRpKeaE"
      />
    </div>
  );
}

export default RemoteOriginUrl;
