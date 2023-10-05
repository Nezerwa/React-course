import { useEffect, useState } from "react";

function Vans() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("log");
    fetch("/api/vans")
      .then((response) => response.json())
      .then((response) => setData(response.vans));
  }, []);
  console.log(data);
  const vansElement = data.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} alt="van" />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>{van.price}</p>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vansElement}</div>
    </div>
  );
}
export default Vans;
