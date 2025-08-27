import { useReducer } from "react";

interface State {
  text: string;
}

type Action = {
  type: "SET_TEXT";
  payload: string;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
}

function InputText() {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  return (
    <>
      <h2>Input change</h2>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "SET_TEXT", payload: e.target.value })
        }
      />
      <p>{state.text}</p>
    </>
  );
}

export default InputText;