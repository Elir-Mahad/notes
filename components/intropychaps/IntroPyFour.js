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

      <SubHeading>How to convert a list into a numpy array ?</SubHeading>

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

      {/*  */}
      <SubHeading>How to print out the mean of a numpy array ?</SubHeading>

      <Sentence>
        Mean is identified by adding up all the numbers, and then dividing the
        sum by the number of numbers.
      </Sentence>

      <Code>
        import numpy as np <br />
        # import the numpy package as np <br />
        arr = [20, 2, 7, 1, 34] <br />
        # the array and its values <br />
        np_arr = np.array(arr) <br />
        # convert the regular array to a numpy array <br />
      </Code>

      <Code>
        print(np.mean(np_arr)) <br />
        # print out the mean of the numpy array <br />
        12.8 <br /># output
      </Code>

      <Code>
        Math for calculating the mean: <br />
        20 + 2 + 7 + 1+ 34 = 64 <br />
        64 / 5 = 12.8 <br />
      </Code>

      <SubHeading>How to print out the median of a numpy array ?</SubHeading>

      <Sentence>
        Median is the middle value in a list of numbers. To find it, you first
        have to re-order the numbers from smallest to largest.
      </Sentence>

      <Code>
        import numpy as np <br />
        # import the numpy package as np <br />
        arr = [20, 2, 7, 1, 34] <br />
        # the array and its values <br />
        np_arr = np.array(arr) <br />
        # convert the regular array to a numpy array <br />
      </Code>

      <Code>
        print(np.median(np_arr)) <br />
        # print out the median of the numpy array <br />
        7.0 <br /># output
      </Code>

      <Code>
        Math for calculating the median: <br />
        First reorder them from lowest to highest: 1, 2, 7, 20, 34 . <br />
        There are 5 numbers and the middle number is 7.
      </Code>

      <SubHeading>What are 2d numpy arrays ?</SubHeading>

      <Sentence>
        2d numpy arrays are arrays that have rows and columns. Below is an
        example of a 2d numpy array:
      </Sentence>

      <Code>
        np_2d = np.array([ <br />
        [1.73, 1.68, 1.71, 1.89, 1.79], <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br />
        ])
      </Code>

      <SubHeading>
        How to print out the shape (i.e, number of rows and columns) of a
        2dnumpy array ?
      </SubHeading>

      <Code>
        Import numpy as np <br />
        # import the numpy package as np <br />
        np_2d = np.array([ <br />
        [1.73, 1.68, 1.71, 1.89, 1.79], <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br />
        ]) # write in our 2d numpy array <br />
      </Code>

      <Code>
        print(np_2d.shape) <br />
        # print the number of rows and columns of this 2d array in the format of
        (rows, columns) <br />
        (2, 5) <br /># output 2 rows, 5 columns
      </Code>

      <SubHeading>
        {" "}
        How to use range to print out a specific index of a 2dnumpy array?
      </SubHeading>

      <Code>
        Import numpy as np <br />
        # import the numpy package as np <br />
        np_2d = np.array([ <br />
        [1.73, 1.68, 1.71, 1.89, 1.79], <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br />
        ]) # write in our 2d numpy array <br />
      </Code>

      <Code>
        print(np_2d[0, 2]) <br />
        # print the item in this index (0 row, 2 column) <br />
        1.71 <br /># output
      </Code>

      <SubHeading>
        How to use range to print out columns of a 2dnumpy array?
      </SubHeading>

      <Code>
        Import numpy as np <br />
        # import the numpy package as np <br />
        np_2d = np.array([ <br />
        [1.73, 1.68, 1.71, 1.89, 1.79], <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br />
        ]) # write in our 2d numpy array <br />
      </Code>

      <Code>
        print(np_2d[:,1:3]) <br />
        # print the items in this range <br />
        # all rows because row is not specified <br />
        # column 1 and column 2 <br /># column 3 is excluded because of the
        range format
      </Code>

      <Code>
        array([ <br />
        [1.68, 1.71 ], <br />
        [ 59.2, 63.6 ] <br />
        ]) # output
      </Code>

      <SubHeading>
        How to use range to print out a row of a 2dnumpy array?
      </SubHeading>

      <Code>
        Import numpy as np <br />
        # import the numpy package as np <br />
        np_2d = np.array([ <br />
        [1.73, 1.68, 1.71, 1.89, 1.79], <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br />
        ]) # write in our 2d numpy array
      </Code>

      <Code>
        print(np_2d[1,:]) <br />
        # print the items in the index <br />
        # row 1 and all columns because column is not specified <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br /># output
      </Code>

      <SubHeading>
        How to use range to print out a column of a 2dnumpy array?
      </SubHeading>

      <Code>
        Import numpy as np <br />
        # import the numpy package as np <br />
        np_2d = np.array([ <br />
        [1.73, 1.68, 1.71, 1.89, 1.79], <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br />
        ]) # write in our 2d numpy array
      </Code>

      <Code>
        print(np_2d[:,0]) <br />
        # print the items in the index <br />
        # column 1 and all rows because row is not specified <br />
        [ 1.73, 65.4 ] <br /># output
      </Code>

      <SubHeading>How to print out the mean of a 2d numpy array ?</SubHeading>

      <Sentence>
        Mean is identified by adding up all the numbers, and then dividing the
        sum by the number of numbers.{" "}
      </Sentence>

      <Code>
        import numpy as np <br />
        # import the numpy package as np <br />
        np_2d = np.array([ <br />
        [1.73, 1.68, 1.71, 1.89, 1.79], <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br />
        ]) # write in our 2d numpy array
      </Code>

      <Code>
        print(np.mean(np_2d)) <br />
        # print out the mean <br />
        35.41 <br />
        #output
      </Code>

      <Code>
        Math to calculation the mean: <br />
        1.73 + 1.68 + 1.71 + 1.89 + 1.79 + 65.4 + 59.2 + 63.6 + 88.4 + 68.7 =
        354.1 <br />
        354.1 / 10 = 35.41 <br />
      </Code>

      <SubHeading>How to print out the median of a 2d numpy array ?</SubHeading>

      <Sentence>
        Median is the middle value in a list of numbers. To find it, you first
        have to re-order the numbers from smallest to largest.
      </Sentence>

      <Code>
        import numpy as np <br />
        # import the numpy package as np <br />
        np_2d = np.array([ <br />
        [1.73, 1.68, 1.71, 1.89, 1.79], <br />
        [65.4, 59.2, 63.6, 88.4, 68.7] <br />
        ]) # write in our 2d numpy array
      </Code>

      <Code>
        print(np.median(np_2d)) <br />
        # print out the median <br />
        30.545 <br /># output
      </Code>

      <Code>
        Math to calculate the median: <br />
        First reorder them from lowest to highest: <br />
        [1.68, 1.71, 1.73, 1.79, 1.89, 59.2, 63.6, 65.4, 68.7, 88.4] <br />
        There are a total of 10 numbers. <br />
        In this example, there is no "middle" number, because there are an even
        amount of numbers. <br />
        Because of this, the median of the list will be the mean (that is, the
        usual average) of the middle two values within the list. <br />
        1.89 + 59.2 = 61.09 <br />
        61.09 / 2 = 30.545
      </Code>

      <SubHeading>
        How to printout out the ‘correlation coefficient matrix’ of a 2d numpy
        array ?{" "}
      </SubHeading>

      <Sentence>
        Here we are calculating the relationship between different variables in
        the data set. For example: Below we have a data set for three peoples
        height and weight. A row contains one persons data (x, y) = (height,
        weight). So the first person has a height of 83 inches and weights 120
        pounds.
      </Sentence>

      <Code>
        bmi = np.array([ <br />
        [83,120], <br />
        [84,166], <br />
        [96,140], <br />
        ])
      </Code>

      <Sentence>
        We want to find the correlation coefficient between the height and the
        weight. To do this, we can use the python numpy correlation formula.
      </Sentence>

      <Code>
        print(np.corrcoef(bmi[:,0], bmi[:,1])) <br />
        # print out the correlation <br />
        # between the first column and the second column <br />
        [[ 1. -0.00599315] <br />
        [-0.00599315 1. ]] <br />
        # output <br />
      </Code>
    </div>
  );
}

export default IntroPyFour;
