import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Details() {
  const params = useParams();
  // console.log(params);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    console.log("run log");
    fetch(`/api/vans/${params.id}`)
      .then((data) => data.json())
      .then((data) => setResponse(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {response ? (
        <div className="van-detail">
          <img src={response.imageUrl} alt="this is the pic" />
          <i className={`van-type ${response.type} selected`}>
            {response.type}
          </i>
          <h2>{response.name}</h2>
          <p className="van-price">
            <span>${response.price}</span>/day
          </p>
          <p>{response.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}
export default Details;
