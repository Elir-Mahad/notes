import styled from "styled-components";

export const WholeApp = styled.div`
  //
`;
//

export const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const LandingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 2rem;
  margin: 1rem;
  background-color: black;
  color: white;
  width: 60rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    margin: 0rem;
  }
  @media (max-width: 450px) {
    align-items: unset;
    padding: 0.5rem;
  }
`;

export const LpText = styled.div`
  text-transform: uppercase;
  // background-color: purple;
`;

export const LpTopBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 10px double white;
  // background-color: green;
`;

export const LpTbLogo = styled.div`
  //
  @media (max-width: 450px) {
    width: 4rem;
  }
`;

export const LpTbTwoNamesBar = styled.div`
  margin-left: 1rem;
  width: 100%;
  // background-color: red;
`;

export const NickName = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  // text-transform: uppercase;
  border-bottom: 2px solid white;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

export const RealName = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: grey;
  margin: 0;
  padding-bottom: 0.5rem;
  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const LpRow = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const LprTag = styled.p`
  padding-bottom: 0.2rem;
  margin-right: 1rem;
  color: grey;
  width: 7rem;
  // text-align: justify;
  @media (max-width: 450px) {
    margin-right: 0rem;
    width: 6rem;
    // background-color: green;
  }
`;

export const LprContent = styled.p`
  padding-bottom: 0.2rem;
  border-bottom: 2px solid white;
`;

export const LpAnimBox = styled.div`
  background-color: black;
  color: white;
`;

export const LpAnimHeading = styled.p`
  //
  @media (max-width: 450px) {
    text-align: center;
    font-size: 0.9rem;
  }
`;

export const LpPic = styled.div`
  margin-left: 2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

// Menu

export const CustomMenu = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  height: 3rem;
  background-color: #f6f6f6;
  padding-top: 0.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const BlogMenuBox = styled.div`
  background-color: #f6f6f6;
`;

export const TopBlogsMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TbMheading = styled.a`
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
`;

export const TbMicon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid black;
  padding-top: 0.5rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;

  background-color: white;
`;

export const BlogsMenu = styled.div`
  border: 1px solid black;
  overflow: auto;
  height: 15rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  background-color: #f6f6f6;
`;

export const BlogName = styled.p`
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem;
`;

export const TopicName = styled.p`
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem;
`;

// Individual blog

export const PostTitle = styled.h2`
  font-size: 2rem;
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: lightgrey;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: 500px) {
    font-size: 1.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const BlogBody = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const SubHeading = styled.h3`
  margin-bottom: 1rem;
  margin-top: 1rem;
  line-height: 2rem;
  color: darkblue;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-indent: 50px;
  line-height: 2rem;
`;

export const Sentence = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  line-height: 2rem;
`;

// export const HighlightedSentence = styled.p`
//   font-size: 1.4rem;
//   margin-bottom: 0.5rem;
//   line-height: 2rem;
// `;

// export const ListHeading = styled.h2`
//   font-size: 1.3rem;
//   margin-bottom: 0.5rem;
//   line-height: 2rem;
// `;

export const Litem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-left: 2.3rem;
  list-style-type: square;
  line-height: 2rem;
`;

export const LitemTwo = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-left: 3.2rem;
  list-style-type: circle;
  line-height: 2rem;
`;

export const Code = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  background-color: #f6f8fa;
  border-radius: 5px;
  line-height: 2rem;
  border: 1px solid grey;
`;

export const PicWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 50rem;
`;

export const UrlLink = styled.a`
  color: darkblue;
  border-bottom: 1px solid darkblue;
`;
