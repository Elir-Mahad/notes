import React from "react";
import { Code, PicBorder, Sentence, SubHeading } from "../../styles/Styles";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://raw.githubusercontent.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function InterPyTwo() {
  return (
    <div>
      {/* section 1 below */}
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

      {/* section 2 below  */}

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

      {/* section 3 below */}

      <SubHeading>
        How to add new key / value pair to an existing list ?
      </SubHeading>

      <Code>
        world = {"{"} <br />
        "afghanistan": 30.55, <br />
        "albania": 2.77, <br />
        "Algeria": 39.21, <br />
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
        "sealand": 0.00027 {"}"}
      </Code>

      {/* section 4 below */}

      <SubHeading>How to update the value of a key ? </SubHeading>

      <Code>
        world = {"{"} <br />
        "afghanistan": 30.55, <br />
        "albania": 2.77, <br />
        "Algeria": 39.21, <br />
        "sealand": 0.00027 {"}"} <br />
        # the dictionary world has the following key value pairs <br />
      </Code>

      <Code>
        world ["sealand"] = 2 <br />
        # update the value of the key sealand <br />
      </Code>

      <Code>
        print(world) <br />
        # print the dictionary <br />
        {"{"} "afghanistan': 30.55, <br />
        "albania": 2.77, <br />
        "Algeria": 39.21, <br />
        "sealand": 2 {"}"} <br /># output - sealands value has been updated
      </Code>

      {/* section 5 below */}

      <SubHeading> How to delete a key value pair in a dictionary ?</SubHeading>

      <Code>
        europe = {"{"} <br />
        "spain" : "madrid", <br />
        "france" : 'paris", <br />
        "italy :'rome", <br />
        "poland" : 'warsaw", <br />
        "australia" : "vienna" {"}"} <br /># the dictionary Europe has the
        following key value pairs
      </Code>

      <Code>
        del(europe["australia"]) <br />
        #delete key australia and its values <br />
      </Code>

      <Code>
        print(europe) <br />
        # print the dictionary <br />
        {"{"} "spain" : "madrid", <br />
        "france" : "paris", <br />
        "italy" : "rome", <br />
        "poland" : "warsaw" {"}"} <br /># output - Australia has been deleted
      </Code>

      {/* section 6 below */}

      <SubHeading>
        {" "}
        Creating sub-dictionaries: dictionaries within dictionaries
      </SubHeading>

      <Sentence>
        Lists can contain other lists. Similarly, dictionaries can contain key :
        value pairs, where the values are again dictionaries. These are called
        sub-dictionaries. For example:{" "}
      </Sentence>

      <PicBorder>
        <Image
          id=""
          loader={myLoader}
          src="Elir-Mahad/notes/main/assets/interpygraphs/sub-dictionaries.png"
          alt="A dictionary containing 4 sub dictionaries. 
        Each sub dictionary is a country containing that countries capital and population. "
          width={550}
          height={433}
        />
      </PicBorder>

      {/* section 7 below */}

      <SubHeading>How to target a key that’s in a sub-dictionary ?</SubHeading>

      <Sentence>
        {" "}
        In the below example, you are working with a dictionary that contains
        data about Europe. For each country, you have the keys capital and
        population. Let’s look at the data now:
      </Sentence>

      <PicBorder>
        <Image
          id=""
          loader={myLoader}
          src="Elir-Mahad/notes/main/assets/interpygraphs/sub-dictionaries.png"
          alt="A dictionary containing 4 sub dictionaries. 
        Each sub dictionary is a country containing that countries capital and population. "
          width={550}
          height={433}
        />
      </PicBorder>

      <Sentence>
        If we want to print the capital of france, then we can do it like this:
      </Sentence>

      <Code>
        print(europe['france']['capital']) <br />
        # print the value of the sub-dictionary: france and key: capital <br />
        paris <br /># output
      </Code>

      {/* section 8 below */}

      <SubHeading>
        Two methods to add a sub-dictionary to a dictionary ?
      </SubHeading>

      <Sentence>
        {" "}
        In the below example, you are working with a dictionary that contains
        data about Europe. For each country, you have the keys capital and
        population. Let’s look at the data now:
      </Sentence>

      <PicBorder>
        <Image
          id=""
          loader={myLoader}
          src="Elir-Mahad/notes/main/assets/interpygraphs/sub-dictionaries.png"
          alt="A dictionary containing 4 sub dictionaries. 
        Each sub dictionary is a country containing that countries capital and population. "
          width={550}
          height={433}
        />
      </PicBorder>

      <Sentence>
        {" "}
        Now we want to add a new sub-dictionary with information about Italy. We
        can do this via two methods:{" "}
      </Sentence>

      <Sentence>
        {" "}
        In the first method simultaneously: <br />
        - create the sub-dictionary key / values <br />
        - add it to the larger dictionary. <br />
      </Sentence>

      <Code>
        europe["italy"] = {"{"} <br />
        'capital' : 'rome', <br />
        'population' : 59.83 {"}"} <br />
        # simultaneously create and add <br /># the sub-dictionary key / value
        pair to the larger dictionary
      </Code>

      <PicBorder>
        <Image
          id=""
          loader={myLoader}
          src="Elir-Mahad/notes/main/assets/interpygraphs/add-sub-dictionary.png"
          alt="A dictionary containing 5 sub dictionaries. 
        Each sub dictionary is a country containing that countries capital and population. "
          width={550}
          height={254}
        />
      </PicBorder>

      <Sentence>
        In the second method first store the sub-dictionary values in a variable
        then simultaneously: <br />
        - set that variable as the value of the sub-dictionary key <br />
        - add the key value pair to the larger dictionary <br />
      </Sentence>

      <Code>
        data = {"{"}
        'capital' : 'rome', <br />
        'population':59.83
        {"}"} <br />
        # create sub-dictionary data that contains data about italy <br />
        europe["italy"] = data <br />
        # add the sub-dictionary data <br />
        as the value of the key italy
      </Code>

      <PicBorder>
        <Image
          id=""
          loader={myLoader}
          src="Elir-Mahad/notes/main/assets/interpygraphs/add-sub-dictionary.png"
          alt="A dictionary containing 5 sub dictionaries. 
        Each sub dictionary is a country containing that countries capital and population. "
          width={550}
          height={254}
        />
      </PicBorder>

      {/* section 9 below */}

      <SubHeading>Comparison between lists and dictionaries </SubHeading>

      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/lists-dictionaries.png"
        alt="Table containing comparisons between lists and dictionaries."
        width={550}
        height={259}
      />

      {/* section 10 below */}

      <SubHeading>What is the Pandas package?</SubHeading>

      <Sentence>
        {" "}
        2d numpy arrays are usually good for one data type. Most datasets are
        made of multiple datatypes. For example, a table dataset might have
        capital names as strings and populations as floats. In these type of
        situations you should use the pandas package.
      </Sentence>

      <Sentence>
        Pandas is a data manipulation tool that was built on numpy. In pandas,
        we store the tabular data (I.e, data from a table) in an object called
        the DataFrame.
      </Sentence>
    </div>
  );
}

export default InterPyTwo;
