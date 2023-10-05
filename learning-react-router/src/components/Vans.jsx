import { useEffect } from "react";

function Vans(){
    useEffect(()=>{
        fetch("/api/vans").then((response)=> response.json()).then((response)=> console.log(response));
    })
    return (
      <div>
        <h1>Vans page goes here 🚐</h1>
      </div>
    );
}
export default Vans