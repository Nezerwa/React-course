import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((response) => setData(response.vans));
  }, []);
  const [SearchParams] = useSearchParams();
  const typeFilter = SearchParams.get("type");
  const diplayFiltered = typeFilter
    ? data.filter((car) => (car.type.toLowerCase = typeFilter))
    : data;

  console.log(data.map((obj) => obj.type));

  const vansElement = diplayFiltered.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt="van" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>{van.price}</p>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vansElement}</div>
      <Link to="?type=simple">Simple</Link>
      <Link to="?type=luxury">Simple</Link>
      <Link to="?type=rugged">Simple</Link>
      <Link to=".">Clear</Link>
    </div>
  );
}
export default Vans;
