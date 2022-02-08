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
          content="Github, Git, frontend development, JavaScript, Tutorial, writing commits, github commits, Mahad Mohamood, conventional commits, commit with scope, git and github, commit with scope,  github projects, vscode github, github repository"
        />
        <meta
          name="description"
          content="In this tutorial, you will learn about conventional commit messages, and how to use type, scope, and subject to write an effective commit message"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to write a conventional commit with scope
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
          your code to your repository, you will be able to see your commits in
          the commit history. If your commits were written properly, then the
          commit history will tell a story of how the project progressed over
          time; and as a result, other developers will be able to trace the
          projects progression, and easily find and fix bugs.
        </Sentence>
        <SubHeading>How are commit messages written ?</SubHeading>
        <Sentence>
          There a few different formats for writing commit messages. Today we
          will focus on{" "}
          <UrlLink href="https://www.conventionalcommits.org/en/v1.0.0-beta.2/">
            conventional commits
          </UrlLink>{" "}
          . More specifically, we will deconstruct the process of writing a
          commit message with scope.
        </Sentence>

        <Sentence>
          Here is what a commit message with scope looks like:
        </Sentence>

        <Code> type(scope): subject</Code>
        <Sentence>
          When we break down this format, we notice that it is made of three
          parts (type, scope, subject). Each of these parts has a specific
          definition. We will now break down each part individually.
        </Sentence>
        <SubHeading>What does type mean ? </SubHeading>
        <Sentence>
          Type is a tag that identifies the type of change that you are making.{" "}
        </Sentence>
        <Sentence>These are some of the well-known commit types:</Sentence>
        <Litem>Feat – identifies changes regarding a new feature. </Litem>
        <Litem>Fix – identifies that a bug has been fixed.</Litem>
        <Litem>
          Docs – identifies updates to the documentation such as the readme
          file, or the code comments.
        </Litem>
        <Litem>
          Style – identifies updates to the css styles, code formatting, missing
          semi-colons, etc.
        </Litem>
        <Litem>
          Refactor – identifies updates involving code refactoring, such as
          renaming files, moving functions above objects in a file, moving a
          file into a folder
        </Litem>
        <Litem>
          Chore – identifies changes such as adding / removing / updating
          assets, dependencies etc.
        </Litem>
        <Litem> Test – identifies updates about tests. </Litem>
        <Litem>Perf – identifies updates about performance improvements.</Litem>
        <Litem>
          Build – identifies updates that affect the build system or external
          dependencies.
        </Litem>
        <Litem> Revert – reverts a previous commit. </Litem>

        <Sentence>
          I believe that the conventional types mentioned above aren't
          exhaustive. Therefore, i've created a custom types for myself. I will
          now list these types and their meanings. Feel free to use them, but
          keep in mind that these are not standard types.
        </Sentence>

        <Litem>
          Content - identifies content updates, such as adding or modifying
          texts and images etc.
        </Litem>

        {/*  */}

        <SubHeading>What does scope mean ? </SubHeading>

        <Sentence>
          The scope identifies the area (file / files / specific parts) in the
          code where something has changed.
        </Sentence>

        <SubHeading>What does subject mean ?</SubHeading>

        <Sentence>
          Subject refers to a sentence that’s usually 50 characters long that
          describes changes that you've made, and why you’ve made these changes.
        </Sentence>

        <Sentence> Rules when writing the subject:</Sentence>

        <Litem>
          The first word in your commit should identify an action. Example: add,
          create, document, modify, update, remove etc.
        </Litem>

        <Litem> Write the commit in present-tense, imperative-style. </Litem>

        <LitemTwo>
          {" "}
          Write it as if you are giving orders to a person on how to change the
          code, or to the codebase on how it should change its behaviour.
        </LitemTwo>

        <Litem> Remove unnecessary punctuation marks. </Litem>

        <Litem> Do not end the subject line with a period. </Litem>

        <SubHeading>Final words and commit examples</SubHeading>
        <Sentence>
          Now that you have an overall understanding of what the terms type,
          scope, and subject mean, we have one more key point to mention. When
          you are writing conventional commits,{" "}
          <em>the whole message should be in lowercase.</em> With that said,
          here are a few examples of conventional commits with scope:
        </Sentence>

        <Code>
          feat(nav): add a new feature to the nav component <br />
          fix(header): fix a useEffect bug in the header <br />
          doc(readme): add a component hierarchy section to the readme file{" "}
          <br />
          style(font): change font type from ubuntu to roboto{" "}
        </Code>
      </BlogBody>
      <Resources
        //
        topic="git commit messages"
        firstResTitle="How to Write a Great Git Commit Message"
        firstLink="https://www.youtube.com/watch?v=JiZACkPNm8U"
        secondResTitle="Write git commit messages like a PRO with Conventional Commits"
        secondLink="https://www.youtube.com/watch?v=OJqUWvmf4gg"
        thirdResTitle="Git and GitHub explained for beginners"
        thirdLink="https://www.youtube.com/watch?v=8Dd7KRpKeaE"
      />
    </div>
  );
}

export default WritingCommits;
