import React from "react";
import { Code, Sentence, SubHeading } from "../../styles/Styles";

function InterPyTwo() {
  return (
    <div>
      <SubHeading> What are dictionaries ?</SubHeading>

      <Sentence>
        A dictionary is essentially a javascript object. It’s an object with key
        value pairs, and you can use the keys to pull the specific value
        associated with them. More importantly, a dictionary solves the problem
        of trying to match data from two different lists. Imagine that you have
        these two lists:
      </Sentence>

      <Code>
        Pop =[ 20.5, 2.77, 39.21 ] <br />
        Countries = [“Afghanistan”, “Albania”, “algeria” ]
      </Code>

      <Sentence>
        In this format, the two lists are disconnected. If the population of
        Albania is 20.5, then the task of pulling the population based on the
        country, would require you to use index or some other multi-step
        process. On the other hand, putting the lists in a dictionary,
        automatically connects the lists by creating key value pairs, and it
        allows us to pull values based on the keys.
      </Sentence>

      <Sentence>
        Hence, if we wanted to put the pop and countries lists into a dictionary
        called world. Then the dictionary would look like this:
      </Sentence>

      <Code>
        World = {"{"}
        <br />
        "afghanistan": 30.55, <br />
        "albania": 2.77, <br />
        "Algeria": 39.21 <br />
        {"}"}
        <br />
      </Code>

      <Sentence>
        Now if we want to print the population of Albania, we can do that that
        with:
      </Sentence>

      <Code>print(world[“albania”])</Code>
    </div>
  );
}

export default InterPyTwo;
