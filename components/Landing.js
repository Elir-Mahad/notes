import style from "../styles/Home.module.css";
import {
  LandingPage,
  LpPic,
  LprContent,
  LpRow,
  LprTag,
  LpText,
  LpTopBox,
  LpTwoNamesBar,
  NickName,
  RealName,
} from "../styles/Styles";
import Image from "next/image";
//
const myLoader = ({ src, width, quality }) => {
  return `https://raw.githubusercontent.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function Landing() {
  return (
    <div>
      <LandingPage>
        <LpText>
          <LpTopBox>
            <Image
              loader={myLoader}
              src="Elir-Mahad/notes/main/public/favicon.ico"
              alt="Picture of the author"
              width={80}
              height={50}
            />
            <LpTwoNamesBar>
              <NickName>Pattern seeker</NickName>
              <RealName>Mohamood, Mahad</RealName>
              {/* barcode image */}
            </LpTwoNamesBar>
          </LpTopBox>

          <LpRow>
            <LprTag>Citizenship:</LprTag>
            <LprContent>Canada </LprContent>
          </LpRow>
          {/*  */}
          <LpRow>
            <LprTag>Gender:</LprTag>
            <LprContent>Male </LprContent>
          </LpRow>
          {/*  */}
          <LpRow>
            <LprTag>Occupation:</LprTag>
            <LprContent>Web developer </LprContent>
          </LpRow>
          {/*  */}
          {/* <LpRow>
            <LprTag>Powers:</LprTag>
            <LprContent>Reading minds, seeking ghosts </LprContent>
          </LpRow> */}
          {/*  */}
          <LpRow>
            <LprTag>Currently learning:</LprTag>
            <LprContent>Data science with python </LprContent>
          </LpRow>
          {/*  */}
          <LpRow>
            {/* <LprTag>Space: </LprTag> */}
            {/* <LprContent> */}
            <div className={style.description}>
              <p className={style.oneLiner}>
                This is my personal blog. I write about
              </p>
              <div className={style.words}>
                <span className={style.word}>Front-end: Javascript, React</span>
                <span className={style.word}>Backend: Mongdb, firebase</span>
                <span className={style.word}>Data science: Python</span>
                <span className={style.word}>Competitive programming</span>
                <span className={style.word}>Philosophy + tech </span>
              </div>
            </div>
          </LpRow>
          {/*  */}
        </LpText>
        <LpPic>
          <Image
            loader={myLoader}
            src="Elir-Mahad/notes/main/assets/cropchess.jpeg"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </LpPic>
      </LandingPage>
    </div>
  );
}

export default Landing;
