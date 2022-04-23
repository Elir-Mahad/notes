import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import {
  CheckListItemDescription,
  CheckListItemImages,
  CheckListItemGist,
  CheckListGistType,
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
    <div>
      <div>
        {plusIcon && (
          <button onClick={showGrades}>
            <GoTriangleDown />
          </button>
        )}
        {minusIcon && (
          <button onClick={hideGrades}>
            <GoTriangleUp />
          </button>
        )}
      </div>
      {isToggled && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Expandable;
