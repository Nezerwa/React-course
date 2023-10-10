import { useEffect, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export function loader() {
  return "this is my page";
}


function Vans() {
  
const loaderData = useLoaderData();
console.log(loaderData);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((response) => setData(response.vans));
  }, []);
  const [SearchParams, setSearchParams] = useSearchParams();
  const typeFilter = SearchParams.get("type");
  const displayFiltered = typeFilter
    ? data.filter((car) => car.type === typeFilter)
    : data;

  const vansElement = displayFiltered.map((van) => (
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
      <button
        onClick={() => setSearchParams({ type: "simple" })}
        className="van-type simple"
      >
        Simple
      </button>
      <button
        onClick={() => setSearchParams({ type: "luxury" })}
        className="van-type luxury"
      >
        Luxury
      </button>
      <button
        onClick={() => setSearchParams({ type: "rugged" })}
        className="van-type rugged"
      >
        Rugged
      </button>
      <button
        onClick={() => setSearchParams({})}
        className="van-type clear-filters"
      >
        Clear filter
      </button>
      <div className="van-list">{vansElement}</div>
    </div>
  );
}
export default Vans;
