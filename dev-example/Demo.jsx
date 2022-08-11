import React, { useState } from "react";
import SwipeToDelete from "../src/SwipeToDelete";

const color = () => Math.ceil(Math.random() * 250);

const Demo = () => {
  const [items, setItems] = useState(() => [
    {
      content: "Item 1",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 2",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 3",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 4",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 5",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 6",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 7",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 8",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 9",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 10",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 11",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 12",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 13",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Item 14",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
  ]);

  return (
    <div>
      {items.map((item) => (
        <SwipeToDelete
          key={item.content}
          height={50}
          onDelete={() => setItems((items) => items.filter((i) => i.content !== item.content))}>
          <span className="item">
            <div className="dot" style={{ backgroundColor: item.color }} />
            <span>{item.content}</span>
          </span>
        </SwipeToDelete>
      ))}
    </div>
  );
};

export default Demo;
