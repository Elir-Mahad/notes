import style from "../styles/Home.module.css";
import {
  LandingBox,
  LandingPage,
  LpAnimBox,
  LpPic,
  LprContent,
  LpRow,
  LprTag,
  LpText,
  LpTopBox,
  LpTbTwoNamesBar,
  NickName,
  RealName,
  LpTbLogo,
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
    <LandingPage>
      <LandingBox>
        <LpText>
          <LpTopBox>
            <LpTbLogo>
              <Image
                loader={myLoader}
                src="Elir-Mahad/notes/main/assets/logo.png"
                alt="Picture of the author"
                width={80}
                height={120}
              />
            </LpTbLogo>
            <LpTbTwoNamesBar>
              <NickName>Pattern seeker</NickName>
              <RealName>Mohamood, Mahad</RealName>
              <Image
                loader={myLoader}
                src="Elir-Mahad/notes/main/assets/barcode.png"
                alt="Picture of the author"
                width={160}
                height={30}
              />
            </LpTbTwoNamesBar>
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
          <LpRow>
            <LprTag>powers:</LprTag>
            <LprContent>Javascript, python </LprContent>
          </LpRow>
          {/*  */}
          <LpRow>
            <LprTag>Currently learning:</LprTag>
            <LprContent>Data science with python </LprContent>
          </LpRow>
          {/*  */}
          <LpAnimBox>
            <p> You will find here a record of my notes.</p>
            <div className={style.description}>
              <p className={style.oneLiner}>I write about</p>
              <div className={style.words}>
                <span className={style.word}>Front-end: Javascript, React</span>
                <span className={style.word}>Backend: Mongdb, firebase</span>
                <span className={style.word}>Data science: Python</span>
                <span className={style.word}>Competitive programming</span>
                <span className={style.word}>Philosophy + tech </span>
              </div>
            </div>
          </LpAnimBox>
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
      </LandingBox>
    </LandingPage>
  );
}

export default Landing;
