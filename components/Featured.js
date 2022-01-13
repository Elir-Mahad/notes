import style from "../styles/Home.module.css";
//
function Featured() {
  return (
    <div>
      <div style={{ border: "1px solid black", padding: "1rem" }}>
        <p>Name : Mahad Mohamood</p>
        <p>Title: Front-end developer</p>
        <p>
          Space: This is my personal blog. I write about things that i learn,
          things that i want to remember, and things that i want to teach.
        </p>
        <p>Focus: </p>
        <p>
          “Today’s process of transition allows us to perceive what we are
          losing and what we are gaining- this perception will become impossible
          the moment we fully embrace, and feel fully at home in, the new
          technologies. In short, we have the privilege of occupying the place
          of ‘vanishing mediators’.”[plague of fantasies, zizek, pg.166]
        </p>
        <div className={style.description}>
          <p className={style.oneLiner}>I write about</p>
          <div className={style.words}>
            <span className={style.word}>react</span>
            <span className={style.word}>javascript</span>
            <span className={style.word}>python</span>
            <span className={style.word}>data</span>
            <span className={style.word}>drawing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
