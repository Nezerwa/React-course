function ListGroup() {
  const name = "Eligrand";
  return (
    <ul className="w-96">
      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
        An item
      </li>
      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
        A second item
      </li>
      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
        A third item
      </li>
      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
        A fourth item
      </li>
      <li className="w-full py-4">And a fifth one</li>
    </ul>
  );
}

export default ListGroup ;
