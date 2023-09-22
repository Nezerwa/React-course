import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 1;
  useState(-1)
  return (
    <div>
      <h1 className="font-bold text-3xl">List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="w-96">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index ? "bg-blue-500" : "border p-4 bg-gray-100"
            }
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
