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
    <div>
      <h1>Topics menu</h1>
    </div>
  );
}

export default TopicsMenu;
