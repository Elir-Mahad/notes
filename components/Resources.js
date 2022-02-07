import React from "react";

function Resources({ topic, firstLink, secondLink, thirdLink }) {
  return (
    <div>
      <p>Resources about {topic} </p>
      <a>{firstLink}</a>
      <a>{secondLink}</a>
      <a>{thirdLink}</a>
    </div>
  );
}

export default Resources;
