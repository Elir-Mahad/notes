import React from "react";
import { SubHeading, Code, Sentence, UrlLink } from "../../styles/Styles";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://raw.githubusercontent.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function InterPyOne() {
  return (
    <div>
      <SubHeading>How to make a plot with two lists. </SubHeading>

      <Code>
        import matplotlib.pyplot as plt <br />
        # import matplotlib <br />
        year = [1950, 1970, 1990, 2010] <br />
        # the variable year contains a list of years <br />
        pop = [2.519, 3.692, 5.263, 6.972] <br /># the variable pop contains a
        list of populations
      </Code>
      <Code>
        plt.plot(year, pop) <br />
        # make a plot <br />
        # x-axis values = year <br />
        y-axis values= population <br />
        plt.show() <br /># show the plot
      </Code>

      <Image
        id="chap1.2"
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/regular-plot.png"
        alt="A line graph, with years on x-axis, and population on y-axis."
        width={550}
        height={400}
      />
      {/*  */}

      <SubHeading> How to make a scatter plot with two lists. </SubHeading>

      <Code>
        import matplotlib.pyplot as plt <br />
        # import matplotlib <br />
        year = [1950, 1970, 1990, 2010] <br />
        # the variable year contains a list of years <br />
        pop = [2.519, 3.692, 5.263, 6.972] <br /># the variable pop contains a
        list of populations
      </Code>

      <Code>
        plt.scatter(year, pop) <br />
        # make a scatter plot <br />
        # x-axis values = year <br />
        #y-axis values= population <br />
        plt.show() <br /># show the scatter plot
      </Code>

      <Image
        id="chap1.3"
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/scatter-plot.png"
        alt="A scatter graph with years on x-axis, population on y-axis."
        width={550}
        height={400}
      />
      {/*  */}

      <SubHeading> What are histograms ? </SubHeading>

      <Sentence>
        {" "}
        Histograms are useful for identifying the distribution of the data. In
        other words, are the data points equally distributed or are the data
        points clustered in one part of the graph. A histogram groups the number
        of data points based on the bin (which is a range), so you will see how
        the data points are distributed over the x-axis.{" "}
      </Sentence>

      <Sentence>
        In the below example, althought both plots have the similar data, you
        can see that the data distribution is much more clear in the histogram:
      </Sentence>

      <Image
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/histogram-explanation.png"
        alt="A comaprison between two graphs. One one graph, 
        there is a x-axis with data points distributed on the x-axis. 
        The other graph is a histogram plot with three bins, 
        4 data points in the left bin, 6 data points in the middle bin, 
        2 data points in the right bin."
        width={550}
        height={400}
      />

      <Sentence id="chap1.4">
        {" "}
        For more information: check out this{" "}
        <UrlLink href="https://corporatefinanceinsttute.com/resources/excel/study/histogram/">
          blog
        </UrlLink>
      </Sentence>

      <SubHeading> How to make a histogram ? </SubHeading>

      <Code>
        import matplotlib.pyplot as plt <br />
        # import matplotlib <br />
        values = [0, 0.6, 1.4, 1.6, 2.2, 2.5, 2.6, 3.2, 3.5, 3.9, 4.2,6] <br />
        # the variable values contains a list of numbers <br />
        plt.hist(values, bins=3) <br />
        # make a histogram plot with all the values inserted in 3 bins <br />
        plt.show() <br /># show the histogram plot
      </Code>

      <Image
        id="chap1.5"
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/histogram-example.png"
        alt="A histogram plot with three bins, 
        4 data points in the left bin, 
        6 data points in the middle bin, 
        2 data points in the right bin."
        width={550}
        height={400}
      />
      {/*  */}

      <SubHeading>
        Population pyramid with age, gender, and population.
      </SubHeading>

      <Sentence>
        The population pyramid below is made of two histograms. In the right
        histogram, the x-axis is the population in millions and the y-axis is
        the age range of women. In the left histogram, the x-axis is the
        population in millions, and the y-axis age range of the men.
        Individually, these histograms are fairly interesting. Additionally, by
        placing them next to each other, we're able to see the similarities and
        differences between the men and the women; such as the fact that, the
        largest population for both groups are in the age range of 40 to 44.
      </Sentence>
      <Image
        id="chap1.6"
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/pop-pyramid.png"
        alt="Two histogram plots placed next to each other. 
        In the right histogram,the x-axis is the population in millions and the y-axis is
        the age range of women. In the left histogram, the x-axis is the
        population in millions, and the y-axis age range of the men."
        width={550}
        height={400}
      />
      {/*  */}

      <SubHeading>How to add axis labels and plot title.</SubHeading>

      <Code>
        import matplotlib.pyplot as plt <br />
        # import matplotlib <br />
        year = [1950, 1951, 1952… 2100] <br />
        # the variable year contains a list of years <br />
        pop = [2.538, 2.57, 2.62, ..., 10.85] <br />
        # the variable pop contains a list of populations <br />
        plt.plot(year, pop) <br />
        # make a plot <br />
        # x-axis values = year <br />
        #y-axis values= population
      </Code>

      <Code>
        plt.xlabel('Year') <br />
        # add x-axis label <br />
        plt.ylabel('Population') <br />
        # add y-axis label <br />
        plt.title('World Population Projections') <br />
        # add plot title <br />
        plt.show() <br /># show the plot
      </Code>

      <Image
        id="chap1.7"
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/axis-label-title.png"
        alt="A line graph, with years on x-axis, and population on y-axis, axis labels, and a title."
        width={550}
        height={400}
      />
      {/*  */}

      <SubHeading>
        How to add ticks (custom axis values) and historical data.
      </SubHeading>

      <Sentence>
        {" "}
        Ticks are custom labels for the axis values. For example: if the first
        value in your y-axis is 10, then you can use ticks to replace 10 with
        ‘10books’.{" "}
      </Sentence>

      <Code>
        import matplotlib.pyplot as plt <br />
        # import matplotlib <br />
        year = [1950, 1951, 1952… 2100] <br />
        # the variable year contains a list of years <br />
        pop = [2.538, 2.57, 2.62, ..., 10.85] <br /># the variable pop contains
        a list of populations
      </Code>

      <Code>
        year = [1800, 1850, 1900] + year <br />
        # add more data to the list years <br />
        pop = [1.0, 1.262, 1.650] + pop <br /># add more data to the list pop
      </Code>

      <Code>
        plt.plot(year, pop) <br />
        # make a plot <br />
        # x-axis values = year, y-axis values= population <br />
        plt.xlabel('Year') <br />
        # add x-axis label <br />
        plt.ylabel('Population') <br />
        # add y axis label <br />
        plt.title('World Population Projections') <br /># add plot title
      </Code>

      <Code>
        plt.yticks( <br />
        [0, 2, 4, 6, 8, 10], <br />
        ['0', '2B', '4B', '6B', '8B', '10B'] <br />
        ) # add y-axis ticks <br />
        # the value 2 in the y-axis <br />
        will be replaced by 2B and so on <br />
        plt.show() <br /># show the plot
      </Code>

      <Image
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/ticks-historical-data.png"
        alt="A line graph, with years on x-axis (1800 to 2100), and population on y-axis (0 TO 10Billion), axis labels, and a title. The"
        width={550}
        height={400}
      />
    </div>
  );
}

export default InterPyOne;
