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
            <Link href="https://mahad.codes/">
              <BlogName onClick={hideContent}>About me</BlogName>
            </Link>
            {/*  */}
            <Link
              href="/add-remote-url-to-local-repo"
              as={process.env.BACKEND_URL + "/add-remote-url-to-local-repo"}
            >
              <BlogName onClick={hideContent}>
                Add remote url to local repo
              </BlogName>
            </Link>
            {/*  */}
            <Link href="/coding-with-others">
              <BlogName onClick={hideContent}>
                Coding with other people on github
              </BlogName>
            </Link>
            {/*  */}
            <Link href="/connect-github-account-to-computer">
              <BlogName onClick={hideContent}>
                Connect github account to computer
              </BlogName>
            </Link>
            {/*  */}
            <Link href="/deploy-netlify">
              <BlogName onClick={hideContent}>
                Deploy a site on Netlify.
              </BlogName>
            </Link>
            {/*  */}
            <Link href="/deploy-react-github-pages">
              <BlogName onClick={hideContent}>
                Deploy a react site on github pages.
              </BlogName>
            </Link>
            {/*  */}
            <Link href="/writing-commits">
              <BlogName onClick={hideContent}>Writing commits</BlogName>
            </Link>
          </BlogsMenu>
        )}
      </BlogMenuBox>
    </CustomMenu>
  );
}

export default Menu;
