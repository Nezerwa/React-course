import { NavLink, Outlet } from "react-router-dom";
function HostLayout() {
  return (
    <div>
      <nav className="host-nav">
        <NavLink to="/host">Dashboard</NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
export default HostLayout;
