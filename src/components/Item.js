import React from "react";

export default function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button
          onClick={() => {
            onDeleteItems(item.id);
          }}
        >
          ❌
        </button>
      </span>
    </li>
  );
}
