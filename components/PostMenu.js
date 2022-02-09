import React from "react";
import { PostMenuBox, PmIcon, PmOption } from "../styles/Styles";

function PostMenu() {
  return (
    <PostMenuBox>
      <PmIcon>Post menu</PmIcon>
      <PmOption>Overview of numpy package </PmOption>
      <PmOption>Convert a list into a numpy array</PmOption>
      <PmOption>Print out the mean of a numpy array</PmOption>
      <PmOption>Print out the median of a numpy array</PmOption>
      <PmOption>Overview of 2d numpy arrays</PmOption>
      <PmOption>Print out the shape of a 2dnumpy array</PmOption>
      <PmOption>Print out a specific index of a 2dnumpy array</PmOption>
      <PmOption>Print out columns of a 2dnumpy array</PmOption>
      <PmOption>Print out a row of a 2dnumpy array</PmOption>
      <PmOption>Print out a column of a 2dnumpy array</PmOption>
      <PmOption>Print out the mean of a 2d numpy array</PmOption>
      <PmOption>Print out the median of a 2d numpy array</PmOption>
      <PmOption>
        Print out out the ‘correlation coefficient matrix’ of a 2d numpy array
      </PmOption>
    </PostMenuBox>
  );
}

export default PostMenu;
