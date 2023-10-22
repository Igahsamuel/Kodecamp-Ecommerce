import Cart from "./Cart";
import Star from "./Star";
import { useState } from "react";

function List({ items, fill, onHandleSubmit }) {
  return (
    <>
      <li className="border shadow flex flex-col px-4 my-4 w-[100%] md:w-[350px] lg:w-[280px] xl:w-[320px]">
        <div>
          <div className="flex items-center justify-center py-3 ">
            <img
              src={items.image}
              alt={items.title}
              className="max-w-[180px] w-[130px] h-[160px]"
            />
          </div>
          <div className="my-4">
            <p className="font-bold">
              {items.title.length <= 20
                ? items.title
                : items.title.slice(0, 21)}
            </p>
            <p>Price: ${items.price.toFixed(2, 0)}</p>
            <p>Rating: {Math.round(items.rating.rate)}</p>
          </div>
          {/* {console.log(Math.floor(items.rating.rate))} */}
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} index={i} rating={Math.round(items.rating.rate)} />
            ))}
          </div>
        </div>
        <button
          className="flex justify-end"
          onClick={() => onHandleSubmit(items)}
        >
          <div className="flex border-red-700 border-2 px-4 py-3 my-3 justify-center w-[100px] rounded-xl">
            <Cart fill="rgb(153 27 27" />{" "}
            <span className="text-red-700">Add</span>
          </div>
        </button>
      </li>
    </>
  );
}

export default List;
