import React from "react";
import { PostResources, PsHeading, Resource, UrlLink } from "../styles/Styles";

function Resources({
  topic,
  firstResTitle,
  firstLink,
  secondResTitle,
  secondLink,
  thirdResTitle,
  thirdLink,
}) {
  return (
    <PostResources>
      <PsHeading>Resources about {topic} </PsHeading>
      <Resource>
        1: <UrlLink href={firstLink}>{firstResTitle}</UrlLink>
      </Resource>
      <Resource>
        2: <UrlLink href={secondLink}>{secondResTitle}</UrlLink>
      </Resource>
      <Resource>
        3: <UrlLink href={thirdLink}>{thirdResTitle}</UrlLink>
      </Resource>
    </PostResources>
  );
}

export default Resources;
