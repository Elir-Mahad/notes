import React from "react";
import { Sentence, SubHeading, OsInput, OsName } from "../../styles/Styles";

function CheckList() {
  return (
    <div>
      <SubHeading>React checklist</SubHeading>
      <div>
        <OsInput type="checkbox" />
        <OsName>One liner</OsName>
      </div>
    </div>
  );
}

export default CheckList;
