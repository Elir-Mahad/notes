import React from "react";
import { PostResources, PsHeading, Resource, RLink } from "../styles/Styles";

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
        Video: <RLink href={firstLink}>{firstResTitle}</RLink>
      </Resource>
      <Resource>
        Video: <RLink href={secondLink}>{secondResTitle}</RLink>
      </Resource>
      <Resource>
        Video: <RLink href={thirdLink}>{thirdResTitle}</RLink>
      </Resource>
    </PostResources>
  );
}

export default Resources;
