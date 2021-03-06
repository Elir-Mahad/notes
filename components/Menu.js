import React, { useState } from "react";
import {
  BlogName,
  BlogsMenu,
  TopBlogsMenu,
  BlogMenuBox,
  TbMheading,
  TbMicon,
  CustomMenu,
} from "../styles/Styles.js";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
//
function Menu() {
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
  //
  return (
    <CustomMenu>
      <BlogMenuBox>
        <TopBlogsMenu>
          {openIcon && (
            <TbMicon onClick={showContent}>
              <GrMenu />
            </TbMicon>
          )}
          {closeIcon && (
            <TbMicon onClick={hideContent}>
              <MdClose />
            </TbMicon>
          )}
          <TbMheading>Mahad's notes</TbMheading>
        </TopBlogsMenu>

        {menuContent && (
          <BlogsMenu>
            <Link href="/" as={process.env.BACKEND_URL + "/"}>
              <BlogName onClick={hideContent}>About me</BlogName>
            </Link>
            <Link href="https://mahad.codes/">
              <BlogName onClick={hideContent}>Portfolio</BlogName>
            </Link>
            {/*  */}
            <Link
              href="/react-bp-checklist"
              as={process.env.BACKEND_URL + "/react-bp-checklist"}
            >
              <BlogName onClick={hideContent}>React best practices</BlogName>
            </Link>
            <Link
              href="/add-remote-url-to-local-repo"
              as={process.env.BACKEND_URL + "/add-remote-url-to-local-repo"}
            >
              <BlogName onClick={hideContent}>
                How to add a remote url to your local project folder
              </BlogName>
            </Link>
            {/*  */}
            <Link
              href="/writing-commits-messages"
              as={process.env.BACKEND_URL + "/writing-commit-messages"}
            >
              <BlogName onClick={hideContent}>
                How to write a conventional commit with scope
              </BlogName>
            </Link>
            {/*  */}
            <Link
              href="/intro-to-python"
              as={process.env.BACKEND_URL + "/intro-to-python"}
            >
              <BlogName onClick={hideContent}>Intro to python</BlogName>
            </Link>
            {/*  */}
            <Link
              href="/intermediate-python"
              as={process.env.BACKEND_URL + "/intermediate-python"}
            >
              <BlogName onClick={hideContent}>Intermediate python</BlogName>
            </Link>
            {/*  */}
            {/* <Link
              href="/coding-with-other-people"
              as={process.env.BACKEND_URL + "/coding-with-other-people"}
            >
              <BlogName onClick={hideContent}>
                How to code with other people
              </BlogName>
            </Link> */}

            {/* <Link
              href="/connect-github-account-to-computer"
              as={
                process.env.BACKEND_URL + "/connect-github-account-to-computer"
              }
            >
              <BlogName onClick={hideContent}>
                How to connect your github account to your computer
              </BlogName>
            </Link> */}

            {/* <Link
              href="/deploy-netlify"
              as={process.env.BACKEND_URL + "/deploy-netlify"}
            >
              <BlogName onClick={hideContent}>
                How to deploy a site on Netlify.
              </BlogName>
            </Link> */}

            {/* <Link
              //
              href="/deploy-react-github-pages"
              as={process.env.BACKEND_URL + "/deploy-react-github-pages"}
            >
              <BlogName onClick={hideContent}>
                How to deploy a react site on github pages.
              </BlogName>
            </Link> */}
          </BlogsMenu>
        )}
      </BlogMenuBox>
    </CustomMenu>
  );
}

export default Menu;
