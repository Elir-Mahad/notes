import React, { useState } from "react";
import {
  TopicName,
  BlogsMenu,
  TopBlogsMenu,
  BlogMenuBox,
  TbMheading,
  TbMicon,
  CustomMenu,
  PostCount,
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
                Git-Github
                <PostCount>1</PostCount>
              </TopicName>
            </Link>
            {/*  */}
            {/* <Link
              //
              href="/coding-with-others"
              as={process.env.BACKEND_URL + "/coding-with-others"}
            >
              <TopicName onClick={hideContent}>
                React
                <PostCount>1</PostCount>
              </TopicName>
            </Link> */}
            {/*  */}
            {/* <Link
              //
              href="/connect-github-account-to-computer"
              as={
                process.env.BACKEND_URL + "/connect-github-account-to-computer"
              }
            >
              <TopicName onClick={hideContent}>
                JavaScript and python
                <PostCount>1</PostCount>
              </TopicName>
            </Link> */}
            {/*  */}
            {/* <Link
              //
              href="/deploy-react-github-pages"
              as={process.env.BACKEND_URL + "/deploy-react-github-pages"}
            >
              <TopicName onClick={hideContent}>
                Competitive programming
                <PostCount>1</PostCount>
              </TopicName>
            </Link> */}
            {/*  */}
            {/* <Link
              //
              href="/writing-commits"
              as={process.env.BACKEND_URL + "/writing-commits"}
            >
              <TopicName onClick={hideContent}>
                Tech Theory
                <PostCount>1</PostCount>
              </TopicName>
            </Link> */}
          </BlogsMenu>
        )}
      </BlogMenuBox>
    </CustomMenu>
  );
}

export default TopicsMenu;
