import style from "../styles/Home.module.css";
import { LandingPage, LprContent, LpRow, LprTag } from "../styles/Styles";
import Image from "next/image";
//
const myLoader = ({ src, width, quality }) => {
  return `https://raw.githubusercontent.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};
function Featured() {
  return (
    <div>
      <LandingPage>
        <LpRow>
          <LprTag>Name:</LprTag>
          <LprContent>Mahad Mohamood </LprContent>
        </LpRow>
        {/*  */}
        <LpRow>
          <LprTag>Title:</LprTag>
          <LprContent>Front-end developer</LprContent>
        </LpRow>
        {/*  */}
        <LpRow>
          <LprTag>Space: </LprTag>
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
        <LpRow>
          <LprContent style={{ width: "100%" }}>
            “Today’s process of transition allows us to perceive what we are
            losing and what we are gaining- this perception will become
            impossible the moment we fully embrace, and feel fully at home in,
            the new technologies. In short, we have the privilege of occupying
            the place of ‘vanishing mediators’.”[plague of fantasies, zizek,
            pg.166]
          </LprContent>
        </LpRow>
        {/* <Image src={test} /> */}
        <Image
          loader={myLoader}
          src="Elir-Mahad/huawei-clone/master/assets/photos/airport.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </LandingPage>
    </div>
  );
}

export default Featured;
