import React from "react";
import { SubHeading, Code } from "../../styles/Styles";
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
        pop = [2.519, 3.692, 5.263, 6.972] <br />
        # the variable pop contains a list of populations <br />
        plt.plot(year, pop) <br />
        # make a plot <br />
        # x-axis values = year, y-axis values= population <br />
        plt.show() <br /># show the plot
      </Code>

      <Image
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/regular-plot.png"
        alt="graph with years on x-axis, population on y-axis"
        width={400}
        height={400}
      />
    </div>
  );
}

export default InterPyOne;
