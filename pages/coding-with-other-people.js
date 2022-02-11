import Head from "next/head";
import {
  //
  BlogBody,
  Litem,
  Sentence,
  PostTitle,
  Code,
  LiCode,
  CodeRes,
  LitemTwo,
  UrlLink,
  Paragraph,
} from "../styles/Styles.js";
import style from "../styles/Home.module.css";
//

function Collab() {
  return (
    <div>
      <Head>
        <title>How to code with other people</title>
        <meta
          name="keywords"
          content="Github, Git, frontend development, git test, JavaScript, Tutorial, Pair progamming"
        />
        <meta
          name="description"
          content="Programming with other people. Github workflow. Pair programming."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to code with other people
      </PostTitle>
      <BlogBody>
        <Paragraph>
          When i was learning how to code, i spent a lot of time coding by
          myself. During this time, the one question that i consistently asked
          myself was:{" "}
          <span style={{ color: "darkblue" }}>
            Is the code that i'm writing going to work ?
          </span>{" "}
          No other questions occupied my mind. Everytime that my code worked, i
          felt a sense of accomplishment; and everytime that it didn't work, i
          found myself haunted by the new question:{" "}
          <span style={{ color: "darkblue" }}>Why didn't it work ? </span>
          Eventually, i started to collaborate with other developers; and here,
          i found myself haunted by a new set of questions:{" "}
          <span style={{ color: "darkblue" }}>
            Can another person understand my coding process, by simply reading
            my commits ?
          </span>{" "}
          This question indicated a major shift in my persepective.
        </Paragraph>
        <Paragraph>
          When your’e coding with other people, you’ll often find yourself
          managing branches, handling pull requests, engaging in code reviews
          and many other things. As you engage in these activities, you should
          always strive for continuous integration. According to Martin fowler,
          continuous engagement is “a software development practice where
          members of a team integrate their work frequently, usually each person
          integrates at least daily — leading to multiple integrations per day.”
          <UrlLink href="http://martinfowler.com/articles/continuousIntegration.html">
            (Martin fowler, 2006)
          </UrlLink>
          . Jon Arild Tørresdal further elaborates on this when he states that
          developer’s should be “adding small changes incrementally over time”
          by branching efficiently, committing frequently, and merging
          constantly.{" "}
          <UrlLink href="https://mrdevops.io/if-you-still-insist-on-feature-branching-you-are-hurting-your-business-and-our-profession-32e1109d4594">
            (Jon arild tørresdal, 2017 )
          </UrlLink>
          . Generally, there are different opinions on how branches should be
          managed. Keeping this in mind, here are some general best practices
          for branch management that reinforce continuous integration:
        </Paragraph>

        <Litem>
          Branches should have very short lifetimes (less than a day) before
          being merged.
        </Litem>

        <Litem>
          Developers should add small changes incrementally over time.{" "}
        </Litem>

        <Litem>
          Developers should have less than three active branches in total.{" "}
        </Litem>

        <Sentence>On the other hand, some bad practices include: </Sentence>

        <Litem>Having many branches simultaneously. </Litem>

        <Litem>Having branches with long lifetimes (more than 4 days). </Litem>

        <Litem>Submitting many changes at once in a large batch.</Litem>

        <LitemTwo> This is disruptive and it makes finding bugs hard.</LitemTwo>

        <LitemTwo> This also leads to missed feedback opportunities.</LitemTwo>

        <Sentence>
          With these quick overview, we will now look at a few different
          processes for collaborating with others:{" "}
        </Sentence>
        {/*  */}
        <Sentence>1. Pull the repo</Sentence>
        <Litem>If the main code is in the branch ‘master’ then </Litem>
        <LiCode>git pull master</LiCode>
        <Sentence>2. Work on a issues</Sentence>
        <Litem>
          Before you create a branch, write an issue outlining all the new tasks
          that you will be working on.
        </Litem>
        <Sentence>3. Create a branch of the master branch</Sentence>
        <Litem>
          For example, if you want to create a branch called header of the
          master branch, first make sure that you are on the master branch:
        </Litem>
        <LiCode>
          git branch <br />
          <CodeRes>master</CodeRes>
        </LiCode>

        <Litem>Then create the header branch:</Litem>
        <LiCode>git branch header</LiCode>
        <Litem>Enter the header branch:</Litem>
        <LiCode>git checkout header</LiCode>
        <Litem>Check which branch you are currenlty in:</Litem>
        <LiCode>
          git branch <br />
          <CodeRes> Switched to branch 'header'</CodeRes>
        </LiCode>

        <Litem>
          Finally, write the code for the header feature in this branch.
        </Litem>

        <Sentence>4. Push your new branch into the master branch:</Sentence>
        <Litem>
          If you just finished writing all your code for the header branch, then
          in the terminal write:
        </Litem>
        <LiCode>
          git add . <br />
          git commit -m 'Add header code' <br />
          git push <br />
        </LiCode>

        <Litem>
          If this is your first push, then you will get this response:
        </Litem>

        <LiCode>git push --set-upstream origin master</LiCode>

        <Litem>
          Copy and paste this into the terminal so that from now onwards
          whenever you want to push to your branch you will only type ‘git
          push’.
        </Litem>

        <Sentence>5. Create a pull request:</Sentence>

        <Litem>
          Make sure that the branch that you are requesting to merge your branch
          into, is the correct branch.
        </Litem>

        <LitemTwo>
          For example: If you are working on a branch called ‘header’ and you
          want to merge this header branch into the ‘master’, then on the top of
          the pull request it should say that you want to merge header into
          master.
        </LitemTwo>

        <Litem>
          In the pull request message, explain all the things that happened in
          this branch. Specify next steps.
        </Litem>

        <Litem>
          Assign a reviewer. If your’e working by yourself then you can leave
          this as blank.
        </Litem>

        <Litem>
          Assign an assignee. If your’e working by yourself assign this to
          yourself.
        </Litem>

        <Litem>Fill out the other specifications.</Litem>

        <Litem>Submit the pull request.</Litem>

        <Litem>
          After its submitted, attach the issue name that was associated with
          this pull request in the add issue block on the bottom right.
        </Litem>

        <Litem>
          If your’e working with a group, wait for the reviewer to review it and
          either accept it or reject it.
        </Litem>

        <Litem>
          If your’e working by yourself, go to the bottom of the pull request
          and click on merge.
        </Litem>

        <Sentence>6. Create a new branch:</Sentence>

        <Litem>
          Change the branch back to the master or whatever the branch that
          you're going to be merging into is called. In this example we will
          simply switch back into the master branch.
        </Litem>

        <LiCode>git checkout master</LiCode>

        <Litem>
          Update your local repo master branch with the latest changes:
        </Litem>

        <LiCode>git pull master</LiCode>
        <Litem>
          This is an important step, especially when your’e working with
          multiple people who are all working on different branches.
        </Litem>

        <LitemTwo>
          For example: Imagine that you were working on the header branch, and
          another person was working on the menu branch.
        </LitemTwo>

        <LitemTwo>
          Then you finished working on the header branch, submitted it, and it
          got merged into the master.
        </LitemTwo>

        <LitemTwo>
          Also, the other person finished working on the menu branch, they
          submitted it, and it got merged into the master.
        </LitemTwo>

        <LitemTwo>
          Now, imagine your next branch is about creating a button.
        </LitemTwo>

        <LitemTwo>
          Before you create the button branch, you must first update your local
          repo with all the code that has been merged into it so far (ie, header
          + menu).
        </LitemTwo>

        <Litem>
          Once you update your local repo, double check to make sure that it has
          in fact been updated.:
        </Litem>
        <LiCode>
          git pull master <br />
          <CodeRes>Already up to date</CodeRes>
        </LiCode>
        <LitemTwo>
          {" "}
          The response `Already up to date` is prove that you are already
          updated.{" "}
        </LitemTwo>

        <Litem>
          Create a new branch called button, off the updated local repo master
          branch:
        </Litem>

        <LiCode>git branch ‘button’</LiCode>

        <Litem>Enter the new button branch:</Litem>

        <LiCode>git checkout button</LiCode>
      </BlogBody>
    </div>
  );
}

export default Collab;
