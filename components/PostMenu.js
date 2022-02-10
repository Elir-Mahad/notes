import React, { useState } from "react";
import {
  PostMenuBox,
  PmOptions,
  PmIcon,
  PmOption,
  PmOtitle,
} from "../styles/Styles";
import style from "../styles/Home.module.css";
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
            {/* Chapter one below 3 parts */}

            <Link to="chap1.1" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to declare variables/constants in python
              </PmOption>
            </Link>

            <Link to="chap1.2" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How many data types does Python have{" "}
              </PmOption>
            </Link>

            <Link to="chap1.3" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                Adding different data types
              </PmOption>
            </Link>

            {/* Chapter two below 7 parts */}

            <Link to="chap2.1" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>What is a List </PmOption>
            </Link>

            <Link to="chap2.2" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to select elements in a list{" "}
              </PmOption>
            </Link>

            <Link to="chap2.3" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                Can Lists can contain other lists{" "}
              </PmOption>
            </Link>

            <Link to="chap2.4" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to select a range of elements in a list
              </PmOption>
            </Link>

            <Link to="chap2.5" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to change the value of a list element{" "}
              </PmOption>
            </Link>

            <Link to="chap2.6" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to add and remove elements{" "}
              </PmOption>
            </Link>

            <Link to="chap2.7" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to copy elements in a list into another list, and only make
                changes to the 2nd list
              </PmOption>
            </Link>

            {/* Chapter three below 4 parts */}

            <Link to="chap3.1" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to get info about different functions using python
              </PmOption>
            </Link>

            <Link to="chap3.2" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                Overview of the max, count, and replace functions
              </PmOption>
            </Link>

            <Link to="chap3.3" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to install python packages{" "}
              </PmOption>
            </Link>

            <Link to="chap3.4" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to import packages and modules
              </PmOption>
            </Link>

            {/* Chapter four below 13 parts */}

            <Link to="chap4.1" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                Overview of numpy package{" "}
              </PmOption>
            </Link>

            <Link to="chap4.2" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to convert a list into a numpy array{" "}
              </PmOption>
            </Link>

            <Link to="chap4.3" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to print out the mean of a numpy array{" "}
              </PmOption>
            </Link>

            <Link to="chap4.4" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to print out the median of a numpy array
              </PmOption>
            </Link>

            <Link to="chap4.5" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                What are 2d numpy arrays
              </PmOption>
            </Link>

            <Link to="chap4.6" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to print out the shape of a 2dnumpy array
              </PmOption>
            </Link>

            <Link to="chap4.7" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                {" "}
                How to use range to print out a specific index of a 2dnumpy
                array
              </PmOption>
            </Link>

            <Link to="chap4.8" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                {" "}
                How to use range to print out columns of a 2dnumpy array
              </PmOption>
            </Link>

            <Link to="chap4.9" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to use range to print out a row of a 2dnumpy array
              </PmOption>
            </Link>

            <Link to="chap4.10" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to use range to print out a column of a 2dnumpy array
              </PmOption>
            </Link>

            <Link to="chap4.11" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to print out the mean of a 2d numpy array
              </PmOption>
            </Link>

            <Link to="chap4.12" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
                How to print out the median of a 2d numpy array
              </PmOption>
            </Link>

            <Link to="chap4.13" spy={true} smooth={true}>
              <PmOption className={style.pmitem}>
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
