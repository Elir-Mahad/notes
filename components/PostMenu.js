import React, { useState } from "react";
import {
  PostMenuBox,
  PmOptions,
  PmIcon,
  PmOption,
  PmOtitle,
} from "../styles/Styles";
import { CgMenuGridO } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";
//
function PostMenu() {
  //
  const [openIcon, setOpenIcon] = useState(true);

  const [closeIcon, setCloseIcon] = useState(false);

  const [menuContent, setMenuContent] = useState(false);

  const showContent = () => {
    setMenuContent(true);
    setOpenIcon(false);
    setCloseIcon(true);
  };

  const hideContent = () => {
    setMenuContent(false);
    setOpenIcon(true);
    setCloseIcon(false);
  };
  return (
    <PostMenuBox>
      {openIcon && (
        <PmIcon onClick={showContent}>
          <CgMenuGridO />
        </PmIcon>
      )}
      {closeIcon && (
        <PmIcon onClick={hideContent}>
          <CgMenuMotion />
        </PmIcon>
      )}
      {menuContent && (
        <PmOptions>
          <PmOtitle>Table of contents</PmOtitle>
          <ol>
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
              Print out out the ‘correlation coefficient matrix’ of a 2d numpy
              array
            </PmOption>
          </ol>
        </PmOptions>
      )}
    </PostMenuBox>
  );
}

export default PostMenu;
