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
        <div className="anime-details">
          <div className="firstrow">
            <p>
              {showType} . {numOfEpisodes} Ep
            </p>
            <p>{episodeLength} minutes per Ep</p>
          </div>
          <div className="secondrow">
            <p>
              Playing <br />
              {startYear} - {endYear}
            </p>
            <p>
              score: <br />
              {averageRating}
            </p>
          </div>
          <p style={{ marginBottom: "0.5rem" }}>
            Total time: {totalTime} minutes
          </p>

          <p className="description">{shortSynopsis}</p>
          <a href={streamUrl} target="_blank">
            Watch
          </a>
        </div>
      )}
    </div>
  );
};

export default Expandable;
