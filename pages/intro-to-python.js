import Head from "next/head";
import {
  //
  BlogBody,
  Chapter,
  Code,
  Litem,
  PostTitle,
  Sentence,
  SubHeading,
} from "../styles/Styles.js";
// import Resources from "../components/Resources";
import style from "../styles/Home.module.css";

function IntroPython() {
  return (
    <div>
      <Head>
        <title>Intro to python</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PostTitle className={style.weight100}>Intro to python</PostTitle>
      <BlogBody>
        <Sentence>
          {" "}
          In this post, i will record some of the notes from datacamps intro to
          python course. I am big fan of javascript, and i noticed that there
          are a lot of similarities between javascript and python. Therefore,
          wherever I see similarities between javascript and python, i will
          point them out.{" "}
        </Sentence>
        <Chapter> Chapter 1</Chapter>
        <SubHeading>How to declare variables/constants in python ?</SubHeading>
        <Sentence>
          When declaring constants, you don’t have to preface the name of the
          constant with the world ‘var’ or ‘const’, instead you just write the
          word itself.{" "}
        </Sentence>
        <Code>
          const height = 1.79 (javascript) <br />
          height = 1.79 (python)
        </Code>
        <Sentence>
          Print plays a similar role as console log. Here is a javascript
          console log:
        </Sentence>
        <Code>
          console.log(height) <br />
          1.79 // this is the output
        </Code>
        <Sentence>Here is a python print statement:</Sentence>
        <Code>
          print(height) <br />
          1.79 # this is the output
        </Code>
        <SubHeading>How many data types does Python have ?</SubHeading>
        <Sentence> These are some of the popular Python data types: </Sentence>

        <Litem> Text Type: str (string) </Litem>

        <Litem>
          {" "}
          Numeric Types: int (integer solid number : 20), float (decimal number
          : 20.5){" "}
        </Litem>

        <Litem> Sequence Types: list, tuple, range </Litem>

        <Litem>Mapping Type: dict </Litem>

        <Litem> Boolean Type: bool </Litem>

        <SubHeading>Adding different data types in python </SubHeading>
        <Sentence>
          Adding different data types often leads to different behaviours.{" "}
        </Sentence>
        <Sentence>When you add integers they get added properly.</Sentence>
        <Code>2 + 3 = 5</Code>

        <Sentence>
          When you add strings they just get attached to each other.
        </Sentence>
        <Code>‘Ab’ + ‘cd’ = ‘Abcd’</Code>
        {/*  */}
        <Chapter> Chapter 2</Chapter>

        <SubHeading>What is a list ?</SubHeading>
        <Sentence>
          In JavaScript, an array is a list of values. <br />
          This is a javascript array : [1.73, 1.68, 1.71, 1.89] <br />
          Each value is called an element and it’s identified through its index.{" "}
          <br />
          So the element in index 2 is 1.71.{" "}
        </Sentence>
        <Sentence>
          In python, the word ‘list’ refers to the same construct as a
          javascript ‘array’. <br />
          This is a python list : [1.73, 1.68, 1.71, 1.89]{" "}
        </Sentence>

        <Sentence>
          A python lists can contain different data types. For example:
        </Sentence>
        <Code>
          [ "liz", 1.73, "emma", 2, 1.68, "mom" , 1.71, 5, "dad" , 1.89] <br />#
          the above list contains strings, integers, and floats{" "}
        </Code>

        <SubHeading>How to select elements in a list ?</SubHeading>

        <Sentence>
          In python, you can select list elements by using minus values. For
          example:
        </Sentence>

        <Code>
          fam = [ "liz", 1.73, "emma", 1.68, "mom" , 1.71, "dad" , 1.89] <br />
          # the above variable fam stores a list with strings and numbers <br />
          # in this list, the item on the left end has the index of 0 (“liz”){" "}
          <br />
          # the item on the right end has the index of -1 (1.89) <br /># you can
          count up from 0 or you can count down from -1
        </Code>

        <Code>
          print(Fam[6]) <br />
          # print out the element in the 6th index <br />
          dad <br /># output
        </Code>

        <Code>
          print(Fam[-1]) <br />
          # print out the element in the index -1 <br />
          1.89 <br /># output
        </Code>

        <SubHeading>Can Lists can contain other lists ?</SubHeading>
        <Sentence>
          Yes. In python, lists (i.e, javascript arrays), can contain lists. For
          example:
        </Sentence>

        <Code>
          fam2 = [ <br />
          ["liz", 1.73], <br />
          ["emma", 1.68], <br />
          ["mom" , 1.71], <br />
          ["dad", 1.89] <br />
          ] <br />
          # the above variable fam2 stores a list with strings and floats <br />
          # the main list, contains 4 other lists
        </Code>

        <Code>
          Print (fam2[1,1]) <br /># print out the element in row 1, index 1 =
          1.68
        </Code>

        <SubHeading>
          How to get select a range of elements in a list ?{" "}
        </SubHeading>
        <Sentence>
          We can select a range of elements in a list through a process which is
          formally known as list slicing. <br />
          This is the format for list slicing : <br />
          [start of selected portion: end of the selected portion ] <br />
          The starting index is included in the output, but the ending index is
          excluded from the output. For example:
        </Sentence>
        <Code>
          fam = [ "liz", 1.73, "emma", 1.68, "mom" , 1.71, "dad" , 1.89]
          <br /># the above variable fam has a list with strings and floats
        </Code>

        <Code>
          print(fam[3:5])
          <br />
          # print out the 3rd and 4th index: [1.68, ‘mom] <br />
          # the 3rd index is printed out because according to the format it is
          supposed to be included in the output <br /># the 5th index is not
          printed out because according to the format it is supposed to be
          excluded from the output
        </Code>

        <Code>
          print(fam[:4]) <br /># print out everything until 4th index : [ "liz",
          1.73, "emma", 1.68 ] <br /># since no starting index is provided,
          python starts counting from 0 <br /># the 4th index is not printed out
          because according to the format it is supposed to be excluded from the
          output
        </Code>

        <Code>
          print(fam[5:]) <br /># print out everything after the 5th index:
          [1.71, "dad" , 1.89] <br />
          # the 5th index is the starting point; according to the format it is
          supposed to be included in the output <br /># Since no ending index is
          provided, python counts to the end of the list
        </Code>

        <SubHeading>How to change a list element ?</SubHeading>

        <Sentence>
          In the below example, we are going to change the value of a list
          element by redefining it. For example:
        </Sentence>

        <Code>
          fam = [ "liz", 1.73, "emma", 1.68, "mom" , 1.71, "dad" , 1.89] <br />#
          the above variable fam has a list with strings and floats <br />
          print(Fam[7]) <br /># print out the 7th index :1.89
        </Code>

        <Code>
          Fam[7] = 1.80 <br />
          # change the element in the 7th index <br />
          # replace the last number 1.89 with the number 1.80 <br />
        </Code>

        <Code>
          print(fam) <br /># print out the fam list, with the 7th index changed:{" "}
          <br />
          [ "liz", 1.73, "emma", 1.68, "mom" , 1.71, "dad" , 1.80] <br />#
          output
        </Code>

        <Code>
          fam[0:2] = ["lisa”, 1.74] <br />
          # change the elements in the index 0 and 1 <br />
          # the element in Index 0 will be Lisa <br />
          # the element in index 1 will be 1.74 <br />
          # the 2nd index is not changed because according to the format it is
          supposed to be excluded <br />
        </Code>

        <Code>
          print(fam) <br />
          # print out the fam list, with index 0 and 1 changed <br />
          [ "lisa”, 1.74, "emma", 1.68, "mom" , 1.71, "dad" , 1.80] <br />#
          output
        </Code>

        <SubHeading>How to add and remove elements ?</SubHeading>

        <Sentence>
          In the below example we are going to add elements to, and remove
          elements from, a list. For example:
        </Sentence>

        <Code>
          fam = [ "liz", 1.73, "emma", 1.68, "mom" , 1.71, "dad" , 1.89] <br />#
          the above variable fam has a list with strings and floats
        </Code>

        <Code>
          fam + ["me", 1.79] <br /># add the elements in the new list to the end
          of the fam list
        </Code>

        <Code>
          print(fam) <br /># print out the fam list with the new elements added
          to its end. <br />[ "liz", 1.73, "emma", 1.68, "mom" , 1.71, "dad" ,
          1.89, "me", 1.79 ] <br /># output
        </Code>

        <Code>
          del(fam[2]) <br />
          # delete the item in the 2nd index. <br />
          print(fam) <br />
          # print the new fam list after index 2 (Emma) got deleted.
          <br />
          [ "liz", 1.73, 1.68, "mom" , 1.71, "dad" , 1.89, "me", 1.79 ] <br />#
          output
        </Code>

        <SubHeading>
          How to copy elements in a list into another list, and only making
          changes to the 2nd list ?
        </SubHeading>

        <Sentence>
          In the below example we will copy the items from one list, into
          another list. Then replace one of the elements in the second list.{" "}
        </Sentence>

        <Code>
          x = ["a", "b", "c"] <br />
          # the variable x contains a list <br />
          y = list(x) <br />
          # the variable y contains a copy of the list x <br />
          y = x[:] <br />
          # the variable y contains the list inside the variable x <br />
          y[1] = "z" <br /># the element in the index 1 of only the list y will
          be changed to “z”
        </Code>

        <Code>
          print(x) <br />
          # print elements stored in x <br />
          x: ["a", "b", "c"] <br />
          # output; Notice that the item in index 1 maintained its original
          value. <br />
          Print(y) <br />
          # print elements stored in y <br />
          y: ["a", “z”, "c"] <br />
          # output ; notice that the element in index 1 has the new changed
          value. <br />
        </Code>
      </BlogBody>
      {/* <Resources
        //
        topic="intro to python"
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

export default IntroPython;
