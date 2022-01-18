import { WholeApp } from "../styles/Styles";
import Menu from "./Menu";

function Layout({ children }) {
  return (
    <WholeApp>
      <Menu />
      <div>{children}</div>
    </WholeApp>
  );
}

export default Layout;
