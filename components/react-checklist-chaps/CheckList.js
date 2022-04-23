import React from "react";
import {
  Sentence,
  SubHeading,
  CheckListItemTitle,
  CheckListBox,
  CheckListCheckMark,
  CheckListMarkTitle,
  CheckListLine,
  CheckListTag,
} from "../../styles/Styles";
import data from "./data.json";
import Expandable from "./Expandable";
//

function CheckList() {
  const bestPractices = data;
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
      {bestPractices.rules.map((item) => (
        <CheckListBox key={item.id}>
          <CheckListLine>
            <CheckListMarkTitle>
              <CheckListCheckMark type="checkbox" />
              <CheckListItemTitle>{item.title}</CheckListItemTitle>
            </CheckListMarkTitle>
            <CheckListTag>#{item.tag}</CheckListTag>
          </CheckListLine>
          <Expandable item={item} />
        </CheckListBox>
      ))}
    </div>
  );
}

export default CheckList;

// {
//   "id": "",
//   "title": "Reserverd prop Naming",
//   "tag": "naming",
//   "description": "",
//   "gistBadId": "f6b8b6cf72ab6bd6cfdf401ebfa0a6f4",
//   "gistGoodId": "3fa67af386f6bc395e4a15736aee4df9"
// },
