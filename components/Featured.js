import style from "../styles/Home.module.css";
import { LandingPage, LprContent, LpRow, LprTag } from "../styles/Styles";
//
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
              <span className={style.word}>react</span>
              <span className={style.word}>javascript</span>
              <span className={style.word}>python</span>
              <span className={style.word}>data</span>
              <span className={style.word}>drawing</span>
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
      </LandingPage>
    </div>
  );
}

export default Featured;
