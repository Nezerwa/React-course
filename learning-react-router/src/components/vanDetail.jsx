import { useLoaderData } from "react-router-dom";
import { getVans } from "../api";
export function loader({ params }) {
  return getVans(params.id);
}
function Details() {
  const response = useLoaderData;
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
