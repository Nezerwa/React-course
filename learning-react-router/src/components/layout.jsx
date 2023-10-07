import Header from "./Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Header/>
      <h1>This is the layout</h1>
      <Outlet />
    </div>
  );
}
export default Layout;
