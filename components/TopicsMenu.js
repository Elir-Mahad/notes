import React, { useState } from "react";
import {
  TopicName,
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
function TopicsMenu() {
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
            {/*  */}
            <Link
              //
              href="/"
              as={process.env.BACKEND_URL + "/"}
            >
              <TopicName onClick={hideContent}>About me</TopicName>
            </Link>
            {/*  */}
            <Link href="https://mahad.codes/">
              <TopicName onClick={hideContent}>Portfolio</TopicName>
            </Link>
            {/*  */}
            <Link
              //
              href="/add-remote-url-to-local-repo"
              as={process.env.BACKEND_URL + "/add-remote-url-to-local-repo"}
            >
              <TopicName onClick={hideContent}>
                How to add a remote url to your local repository
              </TopicName>
            </Link>
            {/*  */}
            <Link
              //
              href="/coding-with-others"
              as={process.env.BACKEND_URL + "/coding-with-others"}
            >
              <TopicName onClick={hideContent}>
                How to code with other people
              </TopicName>
            </Link>
            {/*  */}
            <Link
              //
              href="/connect-github-account-to-computer"
              as={
                process.env.BACKEND_URL + "/connect-github-account-to-computer"
              }
            >
              <TopicName onClick={hideContent}>
                How to connect your github account to your computer
              </TopicName>
            </Link>
            {/*  */}
            <Link
              //
              href="/deploy-netlify"
              as={process.env.BACKEND_URL + "/deploy-netlify"}
            >
              <TopicName onClick={hideContent}>
                How to deploy a site on Netlify.
              </TopicName>
            </Link>
            {/*  */}
            <Link
              //
              href="/deploy-react-github-pages"
              as={process.env.BACKEND_URL + "/deploy-react-github-pages"}
            >
              <TopicName onClick={hideContent}>
                How to deploy a react site on github pages.
              </TopicName>
            </Link>
            {/*  */}
            <Link
              //
              href="/writing-commits"
              as={process.env.BACKEND_URL + "/writing-commits"}
            >
              <TopicName onClick={hideContent}>How to write commits</TopicName>
            </Link>
          </BlogsMenu>
        )}
      </BlogMenuBox>
    </CustomMenu>
  );
}

export default TopicsMenu;
