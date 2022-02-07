import React from "react";
import { PostResources, PsHeading, Resource, UrlLink } from "../styles/Styles";

function Resources({ topic, firstLink, secondLink, thirdLink }) {
  return (
    <PostResources>
      <PsHeading>Resources about {topic} </PsHeading>
      <Resource>
        1: <UrlLink>{firstLink}</UrlLink>
      </Resource>
      <Resource>
        2: <UrlLink>{secondLink}</UrlLink>
      </Resource>
      <Resource>
        3: <UrlLink>{thirdLink}</UrlLink>
      </Resource>
    </PostResources>
  );
}

export default Resources;
