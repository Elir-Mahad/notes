import Head from "next/head";
import {
  //
  BlogBody,
  Litem,
  Sentence,
  PostTitle,
  Code,
  LitemTwo,
} from "../styles/Styles.js";
import style from "../styles/Home.module.css";
//

function CodingWithOthers() {
  return (
    <div>
      <Head>
        <title>How to code with other people</title>
        <meta
          name="keywords"
          content="Github, Git, frontend development, JavaScript, Tutorial, Pair progamming"
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
        <Sentence>
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
        </Sentence>
        <Sentence>
          Eventually, i started to collaborate with other developers; and here,
          i found myself haunted by a new set of questions:
          <span style={{ color: "darkblue" }}>
            Can another person understand my coding process, by simply reading
            my commits ?
          </span>{" "}
          This question indicated a major philosophical shift in my
          persepective. I'll dig into this shift, and its meaning, in another
          post. For now, i will leave you with a set of instructions that i
          often return to whenever i'm coding with others.
        </Sentence>
        <Sentence>1. Pull the repo</Sentence>
        <Litem>If the main code is in the branch ‘master’ then </Litem>
        <Code>git pull master</Code>
        <Sentence>2. Work on a issues</Sentence>
        <Litem>
          Before you create a branch, write an issue outlining all the new tasks
          / features that you will be coding out.
        </Litem>
        <Sentence>3. Create a branch of the master branch</Sentence>
        <Litem>
          For example, if you want to create a branch called header of the
          master branch, first make sure that you are on the master branch:
        </Litem>
        <Code>git branch</Code>
        <Litem>terminal response: </Litem>
        <Code>master</Code>

        <Litem>Then create the header branch:</Litem>
        <Code>git branch header</Code>
        <Litem>Enter the header branch:</Litem>
        <Code>git checkout header</Code>
        <Litem>Check which branch you are currenlty in:</Litem>
        <Code>git branch</Code>
        <Litem>Terminal response:</Litem>
        <Code>Switched to branch 'header'</Code>
        <litem>
          Finally, write the code for the header feature in this branch.
        </litem>

        <Sentence>4. Push your new branch into the master branch:</Sentence>
        <Litem>
          For example, if you just finished writing all your code for the header
          branch then in the terminal write:
        </Litem>
        <Code>
          git add . <br />
          git commit -m 'Add header code' <br />
          git push <br />
        </Code>

        <Litem>
          If this is your first push, then you will get this response:
        </Litem>

        <Code>git push --set-upstream origin master</Code>

        <Litem>
          Copy and paste this into the terminal so that from now onwards
          whenever you want to push to your branch you will only type ‘git push’
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
          you're going to be merging into is called.
        </Litem>

        <Litem>Switch to the master branch</Litem>

        <Code>git checkout master</Code>

        <Litem>
          Update your local repo master branch with the latest changes:
        </Litem>

        <Code>git pull master</Code>
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
          If your local repo is updated, then you should see ‘Already up to
          date’ in the terminal.
        </Litem>

        <Litem>
          Create a new branch called button, off the updated local repo master
          branch:
        </Litem>

        <Code>git branch ‘button’</Code>

        <Litem>Enter the new button branch:</Litem>

        <Code>git checkout button</Code>
      </BlogBody>
    </div>
  );
}

export default CodingWithOthers;
