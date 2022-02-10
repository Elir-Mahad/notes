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
                C1: How to make a plot with two lists.
              </PmOption>
            </Link>
            <Link to="chap1.2" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to make a scatter plot with two lists.
              </PmOption>
            </Link>
            <Link to="chap1.3" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: What are histograms ?
              </PmOption>
            </Link>
            <Link to="chap1.4" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to make a histogram ?
              </PmOption>
            </Link>
            <Link to="chap1.5" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: Population pyramid with age, gender, and population.
              </PmOption>
            </Link>
            <Link to="chap1.6" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to add axis labels and plot title.
              </PmOption>
            </Link>
            <Link to="chap1.7" spy={true} smooth={true}>
              <PmOption onClick={hideContent} className={style.pmitem}>
                C1: How to add ticks (custom axis values) and historical data.
              </PmOption>
            </Link>
          </ol>
        </PmOptions>
      )}
    </PostMenuBox>
  );
}

export default InterPythonToc;
