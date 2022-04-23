import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import {
  CheckListItemDescription,
  CheckListItemImages,
  CheckListItemGist,
  CheckListGistType,
  ExpandableButtons,
  ExpandableButton,
  ExpandableBox,
  ExpandableContent,
} from "../../styles/Styles";
import Gist from "react-gist";
//
const Expandable = ({
  //
  item,
}) => {
  //
  const [isToggled, toggle] = useToggle(false);

  const showGrades = () => {
    setPlusIcon(false);
    setMinusIcon(true);
    toggle();
  };

  const hideGrades = () => {
    setPlusIcon(true);
    setMinusIcon(false);
    toggle();
  };
  const [plusIcon, setPlusIcon] = useState(true);
  const [minusIcon, setMinusIcon] = useState(false);

  return (
    <ExpandableBox>
      <ExpandableButtons>
        {plusIcon && (
          <ExpandableButton onClick={showGrades}>
            <GoTriangleDown />
          </ExpandableButton>
        )}
        {minusIcon && (
          <ExpandableButton onClick={hideGrades}>
            <GoTriangleUp />
          </ExpandableButton>
        )}
      </ExpandableButtons>
      {isToggled && (
        <ExpandableContent>
          <CheckListItemDescription>
            {item.description}
          </CheckListItemDescription>
          <CheckListItemImages>
            <CheckListItemGist>
              <CheckListGistType>Bad</CheckListGistType>
              <Gist id={item.gistBadId} />
            </CheckListItemGist>
            <CheckListItemGist>
              <CheckListGistType>Good</CheckListGistType>
              <Gist id={item.gistGoodId} />
            </CheckListItemGist>
          </CheckListItemImages>
        </ExpandableContent>
      )}
    </ExpandableBox>
  );
};

export default Expandable;
