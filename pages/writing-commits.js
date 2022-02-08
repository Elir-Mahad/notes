import Head from "next/head";
import {
  //
  BlogBody,
  PostTitle,
  Litem,
  Sentence,
  Code,
  SubHeading,
  UrlLink,
  LitemTwo,
} from "../styles/Styles.js";
import Resources from "../components/Resources";
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
        {/* Testing 9*/}
      </PostTitle>
      <BlogBody>
        <Sentence>
          In this tutorial, we are going to discuss commit messages. Commit
          messages are very imporant part of the git{" "}
          <UrlLink href="https://www.youtube.com/watch?v=3a2x1iJFJWc">
            workflow
          </UrlLink>
          . At its core, a commit message is a set of instructions for how the
          code should change from a previous state to a new state. When you push
          your code to your repository, you will be able to see your commit in
          the commit history. If your commits were written properly, then the
          commit message log will tell a story of how the project progressed
          over time; and as a result, other developers will be able to trace the
          projects progression, and easily find and fix bugs.
        </Sentence>
        <SubHeading>How are commit messages written ?</SubHeading>
        <Sentence>
          There a few different formats for writing commit messages. Today we
          will consider this format <Code> type(scope): subject</Code>
        </Sentence>
        <Sentence>
          If we break down this format, we notice that it is made of three parts
          (type, scope, subject). Each part has a specific definition.
        </Sentence>
        <SubHeading>What does type mean ? </SubHeading>
        <Sentence>
          Type is a tag that identifies the type of change that you are making.{" "}
        </Sentence>
        <Sentence>These are some of the well-known commit types:</Sentence>
        <Litem>feat – identifies changes regarding a new feature </Litem>
        <Litem>fix – identifies that a bug has been fixed</Litem>
        <Litem>
          {" "}
          docs – identifies updates to the documentation such as the readme
          file, or the code comments{" "}
        </Litem>
        <Litem>
          {" "}
          style – identifies updates to the css styles, code formatting, missing
          semi-colons, etc
        </Litem>
        <Litem>
          {" "}
          refactor – identifies updates involving code refactoring{" "}
        </Litem>
        <Litem>
          {" "}
          chore – identifies changes such as adding / removing / updating
          assets, dependencies etc{" "}
        </Litem>
        <Litem> test – identifies updates about tests </Litem>
        <Litem>
          {" "}
          perf – identifies updates about performance improvements{" "}
        </Litem>
        <Litem>
          {" "}
          build – identifies updates that affect the build system or external
          dependencies{" "}
        </Litem>
        <Litem> revert – reverts a previous commit </Litem>

        <SubHeading>What does scope mean ? </SubHeading>

        <Sentence>
          The scope identifies the area (file/files/specific parts) in the code
          where something has changed.
        </Sentence>

        <SubHeading>What does subject mean ?</SubHeading>

        <Sentence>
          Subject refers to a sentence that’s usually 50 characters long that
          describes changes that you've made, and why you’ve made these changes.
        </Sentence>

        <Sentence> Rules when writing the subject:</Sentence>

        <Litem>
          {" "}
          The first word in your commit should identify an action. Example: Add,
          Create, Document, Modify, Update, Remove etc{" "}
        </Litem>

        <LitemTwo> Capitalize the first word </LitemTwo>

        <Litem> Use all lower case in the subject line</Litem>

        <Litem> Write the commit in present-tense, imperative-style </Litem>

        <Litem>
          {" "}
          Write it as if you are giving orders to a person on how to change the
          code, or to the codebase on how it should change its behaviour{" "}
        </Litem>

        <Litem> Remove unnecessary punctuation marks </Litem>

        <Litem> Do not end the subject line with a period </Litem>

        <SubHeading>Commit examples</SubHeading>
        <Sentence>
          Now that you have an overall understanding of what the terms type,
          scope, and subject mean, here are a few commit examples:
        </Sentence>

        <Code>
          type(scope): subject <br />
          feat(nav): add a new feature to the nav component <br />
          fix(header): fix a useEffect bug in the header <br />
          doc(readme): add a component hierarchy section to the readme file{" "}
          <br />
          style(font): change font type from ubuntu to roboto{" "}
        </Code>

        <Resources
          //
          topic="git commit message"
          firstResTitle="How to Write a Great Git Commit Message"
          firstLink="https://www.youtube.com/watch?v=JiZACkPNm8U"
          secondResTitle="Write git commit messages like a PRO with Conventional Commits"
          secondLink="https://www.youtube.com/watch?v=OJqUWvmf4gg"
          thirdResTitle="Git and GitHub explained for beginners"
          thirdLink="https://www.youtube.com/watch?v=8Dd7KRpKeaE"
        />
      </BlogBody>
    </div>
  );
}

export default WritingCommits;
