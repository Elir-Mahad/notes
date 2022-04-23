import React, { useState } from "react";
import { useToggle } from "../../../hooks/useToggle";
import { BsInfoCircle } from "react-icons/bs";
import { CgCloseR } from "react-icons/cg";
//
const Expandable = ({
  //
  startYear,
  endYear,
  showType,
  numOfEpisodes,
  episodeLength,
  averageRating,
  shortSynopsis,
  totalTime,
  slugName,
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

  const streamUrl = `https://gogoanime.fi/category/${slugName}`;

  return (
    <div className="expandable-box">
      <div className="expandable-buttons">
        {plusIcon && (
          <button onClick={showGrades}>
            <BsInfoCircle />
          </button>
        )}
        {minusIcon && (
          <button onClick={hideGrades}>
            <CgCloseR />
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
