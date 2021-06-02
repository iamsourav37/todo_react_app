import React from "react";
import { FaCheckDouble } from "react-icons/fa";

function Todos({ todos, markComplete }) {
  return (
    <div className="mt-5">
      <ul className="list-group ">
        {todos.map((v) => (
          <li key={v.id} className="list-group-item">
            {v.title}
            <span className="float-right" onClick={() => markComplete(v.id)}>
              <button className="btn ms-5">
                <FaCheckDouble />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
