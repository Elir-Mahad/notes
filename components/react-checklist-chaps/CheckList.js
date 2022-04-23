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
          <CheckListMarkTitle>
            <CheckListCheckMark type="checkbox" />
            <CheckListItemTitle>{item.title}</CheckListItemTitle>
          </CheckListMarkTitle>
          <p>{item.tag}</p>
          <CheckListItemDescription>
            {item.description}
          </CheckListItemDescription>
          <CheckListItemImages>
            <CheckListItemBadImage>
              <p>Bad</p>
              <Gist id={item.gistBadId} />
            </CheckListItemBadImage>
            <CheckListItemGoodImage>
              <p>Good</p>
              <Gist id={item.gistGoodId} />
            </CheckListItemGoodImage>
          </CheckListItemImages>
        </CheckListBox>
      ))}
    </div>
  );
}

export default CheckList;
