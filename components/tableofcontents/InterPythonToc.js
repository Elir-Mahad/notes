import React, { useState } from "react";
import {
  PostMenuBox,
  PmOptions,
  PmIcon,
  PmOption,
  PmOtitle,
} from "../../styles/Styles";
import style from "../../styles/Home.module.css";
import { CgMenuGridO } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-scroll";
//
function InterPythonToc() {
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
        <PmIcon className={style.pmicon} onClick={showContent}>
          <CgMenuGridO />
        </PmIcon>
      )}
      {closeIcon && (
        <PmIcon className={style.pmicon} onClick={hideContent}>
          <CgMenuMotion />
        </PmIcon>
      )}
      {menuContent && (
        <PmOptions onMouseLeave={hideContent}>
          <PmOtitle>Table of contents</PmOtitle>
          <ol style={{ listStylePosition: "inside", padding: "0rem" }}>
            {/* Chapter one below 7 parts */}
            <Link to="chap1.1" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to make a plot with two lists
              </PmOption>
            </Link>
            <Link to="chap1.2" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to make a scatter plot with two lists
              </PmOption>
            </Link>
            <Link to="chap1.3" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: What are histograms
              </PmOption>
            </Link>
            <Link to="chap1.4" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to make a histogram
              </PmOption>
            </Link>
            <Link to="chap1.5" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: Population pyramid with age, gender, and population
              </PmOption>
            </Link>
            <Link to="chap1.6" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to add axis labels and plot title
              </PmOption>
            </Link>
            <Link to="chap1.7" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to add ticks (custom axis values) and historical data
              </PmOption>
            </Link>
            {/* chapter 2 below -28 sections */}
            <Link to="chap2.1" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: What are dictionaries
              </PmOption>
            </Link>
            <Link to="chap2.2" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: What happens if you assign two values to one key
              </PmOption>
            </Link>
            <Link to="chap2.3" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to add new key / value pair to an existing list
              </PmOption>
            </Link>
            <Link to="chap2.4" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to update the value of a key
              </PmOption>
            </Link>
            <Link to="chap2.5" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to delete a key value pair in a dictionary
              </PmOption>
            </Link>
            <Link to="chap2.6" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: Creating sub-dictionaries: dictionaries within dictionaries
              </PmOption>
            </Link>
            <Link to="chap2.7" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to target a key that’s in a sub-dictionary
              </PmOption>
            </Link>
            <Link to="chap2.8" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: Two methods to add a sub-dictionary to a dictionary
              </PmOption>
            </Link>
            <Link to="chap2.9" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: Comparison between lists and dictionaries
              </PmOption>
            </Link>
            <Link to="chap2.10" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: What is the Pandas package
              </PmOption>
            </Link>
            <Link to="chap2.11" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to create a data DataFrame (brics data)
              </PmOption>
            </Link>
            <Link to="chap2.12" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to create a DataFrame using (cars data)
              </PmOption>
            </Link>
            <Link to="chap2.13" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: Using square brackets to select rows and columns.
              </PmOption>
            </Link>
            <Link to="chap2.14" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use square brackets to print a pandas series with one
                selected column
              </PmOption>
            </Link>
            <Link to="chap2.15" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use square brackets to print a pandas DataFrame with
                one selected column
              </PmOption>
            </Link>
            <Link to="chap2.16" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use square brackets to print a pandas DataFrame with
                multiple selected columns
              </PmOption>
            </Link>
            <Link to="chap2.17" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use square brackets to print a pandas DataFrame with
                multiple selected rows
              </PmOption>
            </Link>
            <Link to="chap2.18" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: Using loc and iloc to select rows and columns.
              </PmOption>
            </Link>
            <Link to="chap2.19" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use loc to print a pandas series with one selected
                row
              </PmOption>
            </Link>
            <Link to="chap2.20" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use loc to print a pandas DataFrame with one selected
                row
              </PmOption>
            </Link>
            <Link to="chap2.21" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use iloc to print a pandas DataFrame with one
                selected row
              </PmOption>
            </Link>
            <Link to="chap2.22" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use loc to print a pandas DataFrame with two selected
                rows
              </PmOption>
            </Link>
            <Link to="chap2.23" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use iloc to print a pandas DataFrame with two
                selected rows
              </PmOption>
            </Link>
            <Link to="chap2.24" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use loc to print the value of a selected row and
                column
              </PmOption>
            </Link>
            <Link to="chap2.25" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use loc to print a pandas DataFrame, with two
                selected columns of two selected observations (rows)
              </PmOption>
            </Link>
            <Link to="chap2.26" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use loc to print a series with a selected column
              </PmOption>
            </Link>
            <Link to="chap2.27" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use loc to print a DataFrame with a selected column
              </PmOption>
            </Link>
            <Link to="chap2.28" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C2: How to use loc to print a DataFrame with two selected column
              </PmOption>
            </Link>
          </ol>
        </PmOptions>
      )}
    </PostMenuBox>
  );
}

export default InterPythonToc;
