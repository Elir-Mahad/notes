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
  HighlightedSentence,
  UrlLink,
} from "../../styles/Styles";
import data from "./data.json";
import Expandable from "./Expandable";
//

function CheckList() {
  const bestPractices = data;
  return (
    <div>
      <SubHeading>React checklist</SubHeading>
      <HighlightedSentence>
        The content of this blog was taken from{" "}
        <UrlLink href="https://betterprogramming.pub/21-best-practices-for-a-clean-react-project-df788a682fb">
          Mohammad Faisal
        </UrlLink>
        . I've reproduced his best practices blog as a checklist for my personal
        usage.
      </HighlightedSentence>
      <Sentence>
        As a self-taught developer, i've had a solid share of haphazard
        development which only ever produced Spaghetti code. After refactoring a
        few of my projects, i began to see the value of following best practices
        at all times. I came across a few different react best practices blogs.
        Below is a react best practices checklist. I plan to add more things to
        it as i continue my research.
      </Sentence>
      {/*  */}
      {bestPractices.rules.map((item) => (
        <CheckListBox key={item.id}>
          <CheckListLine>
            <CheckListMarkTitle>
              <CheckListCheckMark type="checkbox" />
              <CheckListItemTitle>{item.title}</CheckListItemTitle>
            </CheckListMarkTitle>
            {/* <CheckListTag>#{item.tag}</CheckListTag> */}
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
