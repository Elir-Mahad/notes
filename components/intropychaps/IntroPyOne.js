import {
  //
  Chapter,
  Code,
  Litem,
  Sentence,
  SubHeading,
} from "../../styles/Styles.js";

function IntroPyOne() {
  return (
    <div>
      <Chapter id="chap1.1"> Chapter 1</Chapter>
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
        Print plays a similar role as console log. Here is a javascript console
        log:
      </Sentence>
      <Code>
        console.log(height) <br />
        1.79 // this is the output
      </Code>
      <Sentence>Here is a python print statement:</Sentence>
      <Code id="chap1.2">
        print(height) <br />
        1.79 # this is the output
      </Code>
      <SubHeading>How many data types does Python have ?</SubHeading>
      <Sentence> These are some of the popular Python data types: </Sentence>

      <Litem> Text Type: str (string) </Litem>

      <Litem>
        {" "}
        Numeric Types: int (integer solid number : 20), float (decimal number :
        20.5){" "}
      </Litem>

      <Litem> Sequence Types: list, tuple, range </Litem>

      <Litem>Mapping Type: dict </Litem>

      <Litem id="chap1.3"> Boolean Type: bool </Litem>

      <SubHeading>Adding different data types </SubHeading>
      <Sentence>
        Adding different data types often leads to different behaviours.{" "}
      </Sentence>
      <Sentence>When you add integers they get added properly.</Sentence>
      <Code>2 + 3 = 5</Code>

      <Sentence>
        When you add strings they just get attached to each other.
      </Sentence>
      <Code>‘Ab’ + ‘cd’ = ‘Abcd’</Code>
    </div>
  );
}

export default IntroPyOne;
