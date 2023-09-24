import { useState } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, updateSelectedIndex] = useState(0);
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
            onClick={() => {
              updateSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
