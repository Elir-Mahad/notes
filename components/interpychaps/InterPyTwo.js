import React from "react";
import { Code, Sentence, SubHeading } from "../../styles/Styles";

function InterPyTwo() {
  return (
    <div>
      {/* First section below */}
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

      {/* Second section below  */}

      <SubHeading>
        What happens if you assign two values to one key ?
      </SubHeading>

      <Sentence>
        If you already assigned a key to a value, and then you assign the same
        key to another value, then the latter value overrides the first value.
        For example:{" "}
      </Sentence>

      <Code>
        world = {"{"} <br />
        "afghanistan": 30.55, <br />
        "albania": 2.77, <br />
        "Algeria": 39.21, <br />
        "albania": 2.92 {"}"} <br /># the dictionary world has the following key
        value pairs
      </Code>

      <Code>
        print(world) <br />
        # print the dictionary <br />
        {"{"}
        "afghanistan": 30.55, <br />
        "albania": 2.92, <br />
        "Algeria": 39.2 {"}"} <br /># output - here you can see that the first
        value of Albania was overridden by the second value
      </Code>

      <Sentence>
        The keys have have to be immutable objects which means that they cannot
        be changed. The values can be mutable, which means that they can be
        changed.
      </Sentence>

      {/* Third section below */}

      <SubHeading>
        How to add new key / value pair to an existing list ?
      </SubHeading>

      <Code>
        world = {"{"} <br />
        "afghanistan": 30.55, <br />
        "albania": 2.77, <br />
        "Algeria": 39.21, <br />
        "albania": 2.92 <br />
        {"}"} # the dictionary world has the following key value pairs
      </Code>

      <Code>
        world [‘’sealand’’ ] = 0.00027 <br />
        # add the key value pair sealand / 0.00027 to this dictionary <br />
      </Code>

      <Code>
        print(world) <br />
        # print the dictionary <br />
        {"{"} "afghanistan": 30.55, <br />
        "albania": 2.77, <br />
        "Algeria": 39.21, <br />
        "albania": 2.92, <br />
        "sealand": 0.00027 {"}"}
      </Code>
    </div>
  );
}

export default InterPyTwo;
