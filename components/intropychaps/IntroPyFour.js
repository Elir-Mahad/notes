import {
  //
  Chapter,
  Code,
  Litem,
  Sentence,
  SubHeading,
} from "../../styles/Styles.js";

function IntroPyFour() {
  return (
    <div>
      <Chapter> Chapter 4</Chapter>

      <SubHeading>Overview of numpy package </SubHeading>

      <Sentence>
        The Numpy package makes the process of making calculations on arrays a
        lot smoother and faster. Numpy arrays can contain only one type. If the
        list contains a float, a string and a boolean, the resulting array will
        just have strings. The float and boolean will be converted to strings.
      </Sentence>

      <SubHeading>How to converting a list into a numpy array ?</SubHeading>

      <Code>
        height = [1.73, 1.68, 1.71, 1.89, 1.79] <br /># The constant height
        stores this list
      </Code>

      <Code>
        Import numpy as np <br />
        # import the numpy package as np <br />
        np_height = np.array(height) <br />
        # The constant np_height stores a numpy array containing the items in
        the constant height <br />
        print(np_height) <br />
        # print the numpy array <br />
      </Code>

      <Code>
        ([1.73, 1.68, 1.71, 1.89, 1.79]) <br /># this is the output; the smooth
        brackets indicates that this is a numpy array.
      </Code>
    </div>
  );
}

export default IntroPyFour;
