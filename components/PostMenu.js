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
import { Link } from "react-scroll";
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
            {/* Chapter one below */}

            <Link to="" spy={true} smooth={true}>
              <PmOption>How to declare variables/constants in python</PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>How many data types does Python have </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>
                Adding different data types leads to different behaviours.
              </PmOption>
            </Link>

            {/* Chapter two below */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>What is a List </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>How to select elements in a list </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>Can Lists can contain other lists </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>
                How to get select a range of elements in a list
              </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>How to change a list element </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>How to add and remove elements </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>
                How to copy elements in a list into another list, and only
                making changes to the 2nd list
              </PmOption>
            </Link>

            {/* Chapter three below */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>
                How to get info about different functions using python
              </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>How to install python packages </PmOption>
            </Link>

            <Link to="" spy={true} smooth={true}>
              <PmOption>How to import packages and modules</PmOption>
            </Link>

            {/* Chapter four below */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>Overview of numpy package </PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>How to convert a list into a numpy array </PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>How to print out the mean of a numpy array </PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>How to print out the median of a numpy array</PmOption>
            </Link>
            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>What are 2d numpy arrays</PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>How to print out the shape of a 2dnumpy array</PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>
                {" "}
                How to use range to print out a specific index of a 2dnumpy
                array
              </PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>
                {" "}
                How to use range to print out columns of a 2dnumpy array
              </PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>
                How to use range to print out a row of a 2dnumpy array
              </PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>
                How to use range to print out a column of a 2dnumpy array
              </PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>How to print out the mean of a 2d numpy array</PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>
                How to print out the median of a 2d numpy array
              </PmOption>
            </Link>

            {/*  */}
            <Link to="" spy={true} smooth={true}>
              <PmOption>
                How to print out out the ‘correlation coefficient matrix’ of a
                2d numpy array
              </PmOption>
            </Link>
          </ol>
        </PmOptions>
      )}
    </PostMenuBox>
  );
}

export default PostMenu;
