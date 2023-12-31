import React from "react";
import { ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const dispatch = useDispatch();

  const { items } = props;
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
          data-testid="foodItems"
        >
          <div className="flex flex-col">
            <div className="my-4">
              <span className="p-4"> {item.card.info.name} </span>
              <span className="p-4">
                ₨
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs p-4">{item.card.info.description}</p>
          </div>
          <div className="relative">
            <img
              src={ITEM_URL + item.card.info.imageId}
              className="object-contain w-20 h-20"
            />
            <button
              className="p-1 bg-white shadow-lg  m-auto"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
            <button
              className="p-1 bg-white shadow-lg  m-auto"
              onClick={() => handleRemoveItem(item.card.info.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
