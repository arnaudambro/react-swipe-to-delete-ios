import React, { useState } from "react";
import SwipeToDelete from "./SwipeToDelete";
import "./global.css";
import "./styles.css";

const color = () => Math.ceil(Math.random() * 250);

const App = () => {
  const [items, setItems] = useState(initItems);
  return (
    <div className="container">
      {items.map((item) => (
        <SwipeToDelete
          key={item.content}
          height={50}
          onDeleteConfirm={(onSuccess: Function, onCancel: Function) => {
            if (window.confirm("supprimer")) {
              onSuccess();
            } else {
              onCancel();
            }
          }}
          onDelete={() => setItems(items.filter((i) => i.content !== item.content))}>
          <span className="item">
            <div className="dot" style={{ backgroundColor: item.color }} />
            <span>{item.content}</span>
          </span>
        </SwipeToDelete>
      ))}
    </div>
  );
};

const initItems = [
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
];

export default App;
