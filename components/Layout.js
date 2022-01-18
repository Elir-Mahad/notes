import { WholeApp } from "../styles/Styles";
import AlphabeticalMenu from "./AlphabeticalMenu";

function Layout({ children }) {
  return (
    <WholeApp>
      <AlphabeticalMenu />
      <div>{children}</div>
    </WholeApp>
  );
}

export default Layout;
