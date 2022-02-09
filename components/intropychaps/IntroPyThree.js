import {
  //
  Chapter,
  Code,
  Litem,
  Sentence,
  SubHeading,
  UrlLink,
} from "../../styles/Styles.js";

function IntroPyThree() {
  return (
    <div>
      <Chapter> Chapter 3</Chapter>
      <SubHeading>
        How to get info about different functions using python ?
      </SubHeading>
      <Sentence>
        To learn about any function type into the console: help(function-name).
        For example:
      </Sentence>
      <Code>help(max), help(round) etc</Code>

      <SubHeading>Overview of the max, count, and replace functions</SubHeading>

      <Sentence>max() gets the largest number. For example:</Sentence>

      <Code>
        fam = [1.73, 1.68, 1.71, 1.89] <br />
        # the above variable fam has a list with floats <br />
        print(max(fam)) <br />
        # print the largest number <br />
        1.89 <br />
        #output
      </Code>

      <Sentence>
        count() will count how many times an item is repeated. For example:
      </Sentence>

      <Code>
        fam= [ "liz", 1.73, 1.68, "mom" , 1.71, "dad" , 1.89, "me", 1.79 ]{" "}
        <br />
        # the above variable fam has a list with strings and floats <br />
        print(count(1.73)) <br />
        # print the number of times the element 1.73 is repeated <br />
        1 <br /># output
      </Code>

      <Sentence>
        replace(a , b) takes two parameters, and the first is replaced with the
        second. For example:{" "}
      </Sentence>

      <Code>
        sister = ‘liz’ <br />
        # the variable sister stores the string liz <br />
        sister.replace(“z”, “sa”) <br />
        # grab the value that’s stored in the variable sister <br />
        # then replace z, with sa <br />
        print(sister) <br />
        # print out the element stored in the variable sister <br />
        lisa <br />
        #output
      </Code>

      <SubHeading> How to install python packages ?</SubHeading>

      <Sentence>
        Install package{" "}
        <UrlLink href="http://pip.readthedocs.org/en/stable/installing/">
          from here
        </UrlLink>{" "}
        <br />
        Download get-pip.py <br />
        In your computers Terminal type: python3 get-pip.py <br />
        In your computers Terminal type: pip3 install numpy
      </Sentence>

      <SubHeading>How to import packages and modules?</SubHeading>

      <Code>
        import numpy <br />
        # import the whole package <br />
        import numpy as np <br />
        # import a package and refer to it with a different name <br />
        from numpy import array <br />
        #import a specific module from a package
      </Code>
    </div>
  );
}

export default IntroPyThree;
