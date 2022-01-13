// import CodingWithOthers from "../pages/coding-with-others";
import style from "../styles/Home.module.css";
//
function Featured() {
  return (
    <div>
      {/* <CodingWithOthers /> */}
      <div className={style.description}>
        <p className={style.oneLiner}>
          I write about
          <div className={style.words}>
            <span className={style.word}>react</span>
            <span className={style.word}>javascript</span>
            <span className={style.word}>python</span>
            <span className={style.word}>data</span>
            <span className={style.word}>drawing</span>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Featured;
