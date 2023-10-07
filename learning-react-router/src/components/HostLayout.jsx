import { Link, Outlet } from "react-router-dom";
function HostLayout() {
  return (
    <div>
      <nav className="host-nav">
        <Link to="/host/dashboard">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
        <Outlet />
      </nav>
    </div>
  );
}
export default HostLayout;
