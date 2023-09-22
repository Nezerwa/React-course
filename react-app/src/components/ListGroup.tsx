function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
const message = items.length === 0 ? <p>No items Found</p> : null;
  return (
    <div>
      <h1 className="font-bold text-3xl">List</h1>
      {message}
      <ul className="w-96">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
