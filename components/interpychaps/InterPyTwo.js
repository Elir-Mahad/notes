import React from "react";
import {
  Code,
  HighlightedSentence,
  HighlightedTitle,
  Litem,
  LitemTwo,
  PicBorder,
  Sentence,
  SubHeading,
  UrlLink,
} from "../../styles/Styles";
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
      {/* section 11 below */}
      <SubHeading> How to create a data DataFrame (brics data) ?</SubHeading>
      <Sentence>There are two ways for creating a DataFrame.</Sentence>
      <Sentence>
        First method: you can create a DataFrame manually by using a dictionary.
        In the dictionary, the keys are the column labels, and the values are
        the data. For example lets look at the following dictionary:
      </Sentence>
      <Code>
        dict = {"{"} <br />
        "country":["Brazil", "Russia", "India", "China", "South Africa"],
        <br />
        "capital":["Brasilia", "Moscow", "New Delhi", "Beijing", "Pretoria"],{" "}
        <br />
        "area":[8.516, 17.10, 3.286, 9.597, 1.221], <br />
        "population":[200.4, 143.5, 1252, 1357, 52.98] {"}"}
      </Code>
      <Sentence>
        In this dictionary, the keys are the the column labels, and the values
        are the data lists. We can convert this dictionary into a DataFrame like
        this:
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import the pandas package as pd <br />
        brics = pd.DataFrame(dict) <br /># the variable brics stores the
        DataFrame of the dictionary called dict <br />
      </Code>
      <Code>
        print(brics)
        <br /># print brics
      </Code>
      {/* INSERT BRICS-DATAFRAME */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/brics-dataframe.png"
        alt=""
        width={550}
        height={158}
      />
      <Sentence>
        In the above DataFrame, pandas automatically assigned the row labels 0
        to 4. We can replace these numbers with custom labels like this:
      </Sentence>
      <Code>
        brics.index = ["BR", "RU", "IN", "CH", "SA"] <br /># assign these list
        elements as the index of the brics DataFrame
      </Code>
      {/* INSERT BRICS-DATAFRAME-CUSTOM-INDEX */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/brics-dataframe-custom-index.png"
        alt=""
        width={550}
        height={158}
      />
      <Sentence>
        Second method: you can create a dataframe by importing data from a csv
        file. Csv stands for comma separated values. For example let's consider
        the following data from the csv file brics.csv
      </Sentence>
      <Code>
        ,country,capital,area,population <br />
        BR,Brazil,Brasilia,8.516,200.4 <br />
        RU,Russia,Moscow,17.10,143.5 <br />
        IN,India,New Delhi,3.286,1252 <br />
        CH,China,Beijing,9.597,1357 <br />
        SA,South Africa,Pretoria,1.221,52.98 <br />
      </Code>
      <Sentence>
        Now let's store this data in a variable and then print it.
      </Sentence>
      <Code>
        brics = pd.read_csv("path/to/brics.csv") <br />
        # the variable brics stores a process <br />
        # pandas will read the csv file through its path <br />
        print(brics) <br /># print brics
      </Code>
      {/* INSERT BRICS-DATAFRAME-CSV */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/brics-dataframe-csv.png"
        alt=""
        width={550}
        height={158}
      />
      <Sentence>
        In the above DataFrame, pandas assigned the row labels 0 to 4 as the
        index. It also interpreted our row labels (ru, in, etc) as the values of
        the first column (column 0). This is a wrong interpretation because we
        want our row lables to be the index. We can declare that the first
        column (row labels) should be the index, and then re-print our dataframe
        like this:
      </Sentence>
      <Code>
        brics = pd.read_csv("path/to/brics.csv", index_col = 0) <br />
        # the variable brics stores a process <br />
        # pandas will read the csv file through its path <br />
        # it will assign column 0 as the index <br />
        print(brics) <br /># print brics
      </Code>
      {/* INSERT BRICKS-DATAFRAME-CSV-CUSTOM-INDEX */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/brics-dataframe-csv-custom-index.png"
        alt=""
        width={550}
        height={193}
      />
      <Sentence>
        The pandas read.csv provides a lot of ways to customize your DataFrame.
        Read more about the package{" "}
        <UrlLink href="https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html">
          here
        </UrlLink>{" "}
        .
      </Sentence>
      {/* section 12 below  */}
      <SubHeading>How to create a DataFrame using (cars data) ? </SubHeading>
      <HighlightedTitle>Overview</HighlightedTitle>
      <Sentence>
        For this exercise, you will work with vehicle data from different
        countries. The data will contain country names, whether the people drive
        left or right, and the number of cars per 1000 people.
      </Sentence>
      <HighlightedTitle>Instructions</HighlightedTitle>
      <Sentence>
        Use pd.DataFrame() to print a DataFrame called cars. The country codes
        will be the row index. Each row will have the following country-specific
        data points:
      </Sentence>
      <Litem> Country names. </Litem>
      <Litem> Boolean (true if people drive right). </Litem>
      <Litem> The number of motor vehicles per 1000 people. </Litem>
      <Sentence>
        We will use two different methods to do this exercise.
      </Sentence>
      <HighlightedTitle>
        Method 1: create the DataFrame using a dictionary
      </HighlightedTitle>
      <Sentence>
        Our dictionary will contains the following three lists:
      </Sentence>
      <Litem> The variable called names contains all the country names.</Litem>
      <Litem> The variable called dr contains booleans. </Litem>
      <LitemTwo> True if people drive right. </LitemTwo>
      <LitemTwo> False if they drive left. </LitemTwo>
      <Litem>
        {" "}
        The variable cpc contains the number of motor vehicles per 1000 people.
      </Litem>
      <Code>
        names = ['United States', 'Australia', 'Japan', 'India', 'Russia',
        'Morocco', 'Egypt'] <br />
        dr = [True, False, False, False, True, True, True] <br />
        cpc = [809, 731, 588, 18, 200, 70, 45] <br />
        # add pre-defined lists <br />
      </Code>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        my_dict = {"{"} <br />
        "country" : names, <br />
        "drives_right" : dr, <br />
        "cars_per_cap" : cpc {"}"} <br /># create dictionary my_dict with three
        key:value pairs
      </Code>
      <Code>
        cars = pd.DataFrame(my_dict) <br />
        # the variable cars stores a process <br />
        # build the DataFrame with the dictionary my_dict <br />
        row_labels = ['US', 'AUS', 'JPN', 'IN', 'RU', 'MOR', 'EG'] <br />
        # add row labels <br />
        cars.index = row_labels <br /># assign row labels as the index of the
        dataframe
      </Code>
      <Code>
        print(cars) <br />
        # print cars <br />
      </Code>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />{" "}
      <p>
        <HighlightedTitle>
          Method 2: create the DataFrame from a csv.
        </HighlightedTitle>
      </p>
      <Sentence>
        Imagine that we already have a file in our folder called cars.csv and
        this file contains all the data. The path to the file is simply
        'cars.csv'{" "}
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        print(cars) <br /># print out cars
      </Code>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      {/* section 13 below */}
      <SubHeading>Using square brackets to select rows and columns.</SubHeading>
      <Sentence>
        You can index and select rows, column, observations from Pandas
        DataFrames in many different ways. The simplest, but not the most
        powerful way, is to use square brackets.
      </Sentence>
      {/* Section 14 below */}
      <SubHeading>
        How to use square brackets to print a pandas series with one selected
        column ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the country column in a series; so we will be
        using the single square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas package as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        print(cars['country']) <br /># print out country column as Pandas Series
      </Code>
      {/* INSERT ONE-COLUMN-SERIES */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/one-column-series.png"
        alt=""
        width={550}
        height={184}
      />
      {/* section 15 below */}
      <SubHeading>
        How to use square brackets to print a pandas DataFrame with one selected
        column ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the country column in a DataFrame; so we will
        be using the double square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        # print(cars[['country']]) <br /># print out country column as Pandas
        DataFrame
      </Code>
      {/* INSERT ONE-COLUMN-DATAFRAME */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/one-column-dataframe.png"
        alt=""
        width={550}
        height={184}
      />
      {/* section 16 below */}
      <SubHeading>
        How to use square brackets to print a pandas DataFrame with multiple
        selected columns ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the country and drives_right columns in a
        DataFrame; so we will be using the double square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        print(cars[['country', 'drives_right']]) <br /># print out a DataFrame
        with country and drives_right columns
      </Code>
      {/* INSERT TWO-COLUMNS-DATAFRAME */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/two-columns-dataframe.png"
        alt=""
        width={550}
        height={184}
      />
      {/* section 17 below */}
      <SubHeading>
        How to use square brackets to print a pandas DataFrame with multiple
        selected rows ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the first three rows (US,AUS,JPN) in a
        DataFrame; so we will be using the double square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        print(cars[0:3]) <br /># Print out first 3 rows / observations
      </Code>
      {/* INSERT THREE-ROWS-DATAFRAME */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/three-rows-dataframe.png"
        alt=""
        width={550}
        height={184}
      />
      {/* section 18 below */}
      <SubHeading>Using loc and iloc to select rows and columns.</SubHeading>
      <Sentence>
        With loc and iloc you can do practically any data selection operation on
        DataFrames you can think of. loc is label-based, which means that you
        have to specify rows and columns based on their row and column labels.
        iloc is integer index based, so you have to specify rows and columns by
        their integer index.
      </Sentence>
      {/* section 19 below */}
      <SubHeading>
        How to use loc to print a pandas series with one selected row ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the Russia row in a series; so we will be using
        the single square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        cars.loc['RU'] <br /># Print out observation that has the label RU
      </Code>
      {/* INSERT LOC-SERIES-ONE-ROW  */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-series-one-row.png"
        alt=""
        width={550}
        height={118}
      />
      {/* section 20 below */}
      <SubHeading>
        How to use loc to print a pandas DataFrame with one selected row ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the Russia row in a DataFrame; so we will be
        using the double square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        cars.loc[['RU']] <br /># print out observation that has the label RU
      </Code>
      {/* INSERT LOC-ILOC-DATAFRAME-ONE-ROW  */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-iloc-dataframe-one-row.png"
        alt=""
        width={550}
        height={73}
      />
      {/* section 21 below */}
      <SubHeading>
        How to use iloc to print a pandas DataFrame with one selected row ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the Russia row in a DataFrame; so we will be
        using the double square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        cars.iloc[[4]] <br /># print out observation that has the label RU
      </Code>
      {/* INSERT LOC-ILOC-DATAFRAME-ONE-ROW */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-iloc-dataframe-one-row.png"
        alt=""
        width={550}
        height={73}
      />
      {/* section 22 below */}
      <SubHeading>
        How to use loc to print a pandas DataFrame with two selected rows ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the Russia and australia rows in a DataFrame;
        so we will be using the double square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        cars.loc[['RU', 'AUS']] <br /># print out observation that has the label
        RU
      </Code>
      {/* INSERT LOC-ILOC-DATAFRAME-TWO-ROW  */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-iloc-dataframe-two-row.png"
        alt=""
        width={550}
        height={73}
      />
      {/* section 23 below */}
      <SubHeading>
        How to use iloc to print a pandas DataFrame with two selected rows ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the Russia and australia rows in a DataFrame;
        so we will be using the double square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        cars.iloc[[4,1]] <br /># print out observation that has the label RU
      </Code>
      {/* INSERT LOC-ILOC-DATAFRAME-TWO-ROW */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-iloc-dataframe-two-row.png"
        alt=""
        width={550}
        height={73}
      />
      {/* section 24 below */}
      <SubHeading>
        How to use loc to print the value of a selected row and column?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out drives_right value of Morocco. Since we are
        only printing one value, we will be using the single square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        print(cars.loc['MOR', 'drives_right']) <br /># print the drives_right
        value of Morocco
      </Code>
      {/* INSERT LOC-INTERSECTION-VALUE  */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-intersection-value.png"
        alt=""
        width={550}
        height={49}
      />
      {/* section 25 below */}
      <SubHeading>
        How to use loc to print a pandas DataFrame, with two selected columns of
        two selected observations (rows) ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the drives_right value of Russia and Morocco in
        a DataFrame; so we will be using the double square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        print(cars.loc[['RU','MOR'], ['country', 'drives_right']]) <br /># print
        out the drives_right value of Russia and Morocco
      </Code>
      {/* INSERT LOC-TWO-INTERSECTION-VALUES */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-two-intersection-values.png"
        alt=""
        width={550}
        height={81}
      />
      {/* section 26 below */}
      <SubHeading>
        How to use loc to print a series with a selected column ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the drives_right value of all
        observations(rows) in a pandas series; so we will be using the single
        square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        pring(cars.loc[:, 'drives_right']) <br /># print out the drives_right
        value of all observations
      </Code>
      {/* INSERT LOC-SERIES-ONE-COLUMN */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-series-one-column.png"
        alt=""
        width={550}
        height={185}
      />
      {/* section 27 below */}
      <SubHeading>
        How to use loc to print a DataFrame with a selected column ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the drives_right value of all
        observations(rows) in a pandas DataFrame; so we will be using the double
        square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        pring(cars.loc[:, ['drives_right']]) <br /># print out the drives_right
        value of all observations
      </Code>
      {/* INSERT LOC-DATAFRAME-ONE-COLUMN */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-dataframe-one-column.png"
        alt=""
        width={550}
        height={185}
      />
      {/* section 28 below  */}
      <SubHeading>
        How to use loc to print a DataFrame with two selected column ?
      </SubHeading>
      <Sentence>
        For this example, we are going to be using the cars.csv:
      </Sentence>
      {/* INSERT COUNTRIES-CARS-EXAMPLE */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/countries-cars-example.png"
        alt=""
        width={550}
        height={184}
      />
      <Sentence>
        Our goal is to print out the cars_per_cap and drives_right values of all
        observations(rows) in a pandas DataFrame; so we will be using the double
        square brackets.
      </Sentence>
      <Code>
        import pandas as pd <br />
        # import pandas as pd <br />
        cars = pd.read_csv('cars.csv', index_col = 0) <br /># import the
        cars.csv data: cars and the index is column 0
      </Code>
      <Code>
        print(cars.loc[:, ['cars_per_cap','drives_right']]) <br /># print out
        the cars_per_cap and drives_right value of all observations
      </Code>
      {/* INSERT LOC-DATAFRAME-TWO-COLUMN */}
      <Image
        id=""
        loader={myLoader}
        src="Elir-Mahad/notes/main/assets/interpygraphs/loc-dataframe-two-columns.png"
        alt=""
        width={550}
        height={185}
      />
    </div>
  );
}

export default InterPyTwo;
