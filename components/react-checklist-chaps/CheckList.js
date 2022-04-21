import React from "react";
import {
  Sentence,
  SubHeading,
  CheckMark,
  CheckListItemTitle,
} from "../../styles/Styles";

function CheckList() {
  return (
    <div>
      <SubHeading>React checklist</SubHeading>
      <div>
        <CheckMark type="checkbox" />
        <CheckListItemTitle>One liner</CheckListItemTitle>
      </div>
    </div>
  );
}

export default CheckList;
