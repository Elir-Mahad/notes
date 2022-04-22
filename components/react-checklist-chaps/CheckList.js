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
import Gist from "react-gist";
import data from "./data.json";
//

function CheckList() {
  const data1 = data;
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
      {data1.students.map((item) => (
        <div>
          <div className="profile-box" key={item.id}>
            <h1 className="student-fullname">{item.firstName}</h1>
            <p> Email: {item.email} </p>
          </div>
        </div>
      ))}
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
          <CheckListItemBadImage>
            <Gist id="8a00c9b00870deb84a41788f1bfc5e1f" />
          </CheckListItemBadImage>
          <CheckListItemGoodImage>
            <Gist id="94e0f0f8fa8cb7e2d45d5801256259aa" />
          </CheckListItemGoodImage>
        </CheckListItemImages>
      </CheckListBox>
    </div>
  );
}

export default CheckList;
