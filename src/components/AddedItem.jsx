import { useContext } from "react";
import { CartContext } from "../Context/Cart";

function AddedItem({ items }) {
  const { num, increaseItem, decreaseItem, handleDelete } =
    useContext(CartContext);

  const totalPrice = () => {
    if (items && num) {
      return ((num[items.id] > 0 ? num[items.id] : 1) * items.price).toFixed(2, 0);
    } else {
      return items.price.toFixed(2, 0);
    }
  };

  console.log(items.id);

  return (
    <div className="my-4 border px-3 py-3 shadow">
      <div className="flex justify-end">
        <button onClick={() => handleDelete(items.id)}>❌</button>
      </div>
      <div className="flex justify-between items-center">
        <img src={items.image} alt={items.title} className="max-w-[55px]" />
        <div>
          <p>{items.title.slice(0, 11)}</p>
          <p>${num[items.id] > 0 ? totalPrice() : items.price.toFixed(2)}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between gap-2" key={items.id}>
            <button
              className="border rounded-3xl px-2"
              onClick={() => decreaseItem(items.id)}
            >
              -
            </button>
            <span>{num[items.id] > 0 ? num[items.id] : 1}</span>
            <button
              className="border rounded-3xl px-[6px]"
              onClick={() => increaseItem(items.id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddedItem;
