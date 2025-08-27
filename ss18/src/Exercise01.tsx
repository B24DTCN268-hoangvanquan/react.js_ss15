import React, { useReducer } from "react";

type Action = { type: "INCREASE" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    default:
      return state;
  }
}

const Increase: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREASE" })}>
        Increase
      </button>
    </div>
  );
};

export default Increase;
