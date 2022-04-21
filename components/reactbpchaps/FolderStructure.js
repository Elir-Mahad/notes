import React from "react";
import {
  Chapter,
  Sentence,
  SubHeading,
  OsInput,
  OsName,
} from "../../styles/Styles";

function CheckList() {
  return (
    <div>
      <SubHeading>React checklist</SubHeading>

      <div>
        <OsInput onClick={showFullJk} type="checkbox" />
        <OsName>One liner</OsName>
      </div>
    </div>
  );
}

export default CheckList;
