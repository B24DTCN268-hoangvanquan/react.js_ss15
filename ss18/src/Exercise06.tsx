import { useReducer } from "react";

interface State {
  selectedGender: string;
}

type Action = {
  type: "SET_GENDER";
  payload: string;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_GENDER":
      return {
        ...state,
        selectedGender: action.payload,
      };
    default:
      return state;
  }
}

const genderOptions = [
  { id: "male", label: "Nam" },
  { id: "female", label: "Nữ" },
  { id: "other", label: "Khác" },
];

function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { selectedGender: "male" });

  return (
    <>
      <h2>Chọn giới tính</h2>
      {genderOptions.map((option) => (
        <label key={option.id} style={{ display: "block", marginBottom: "8px" }}>
          <input
            type="radio"
            name="gender"
            value={option.id}
            checked={state.selectedGender === option.id}
            onChange={() =>
              dispatch({ type: "SET_GENDER", payload: option.id })
            }
          />
          {option.label}
        </label>
      ))}
      <p>
        <strong>Selected gender:</strong>{" "}
        {genderOptions.find((g) => g.id === state.selectedGender)?.label}
      </p>
    </>
  );
}

export default InputRadio;