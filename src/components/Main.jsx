import List from "./List";

function Main({ fill, fetchData, onHandleSubmit }) {
  return (
    <ul className="flex flex-wrap justify-between px-[30px]">
      {fetchData.map((items) => (
        <List key={items.id} items={items} fill={fill} onHandleSubmit={onHandleSubmit} />
      ))}
    </ul>
  );
}

export default Main;
