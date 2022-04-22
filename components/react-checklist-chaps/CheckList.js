import React from "react";
import {
  Sentence,
  SubHeading,
  CheckListItemTitle,
  CheckListBox,
  CheckListCheckMark,
  CheckListItemDescription,
  CheckListMarkTitle,
  CheckListItemImages,
  CheckListItemBadImage,
  CheckListItemGoodImage,
} from "../../styles/Styles";
//

function CheckList() {
  return (
    <div>
      <SubHeading>React checklist</SubHeading>
      <Sentence>
        React is very unopinionated about how things should be structured. This
        is exactly why it’s our responsibility to keep our projects clean and
        maintainable. Today, we will talk about some best practices to follow to
        improve your React application’s health. These rules are widely
        accepted. As such, having this knowledge is imperative.
      </Sentence>
      {/*  */}
      <CheckListBox>
        <CheckListMarkTitle>
          <CheckListCheckMark type="checkbox" />
          <CheckListItemTitle>Use JSX shorthand</CheckListItemTitle>
        </CheckListMarkTitle>
        <CheckListItemDescription>
          Try to use JSX shorthand for passing boolean variables. Let’s say you
          want to control the title visibility of a Navbar component.
        </CheckListItemDescription>
        <CheckListItemImages>
          <CheckListItemBadImage>{/*  */}</CheckListItemBadImage>
          <CheckListItemGoodImage>{/*  */}</CheckListItemGoodImage>
        </CheckListItemImages>
      </CheckListBox>
    </div>
  );
}

export default CheckList;
