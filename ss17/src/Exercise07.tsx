import { useState } from "react";

function SelectCity() {
  const [city, setCity] = useState("");

  const cities = [
    "-- Chọn thành phố --",
    "Hà Nội",
    "Hà Nam",
    "Ninh Bình",
    "Thanh Hóa",
    "Nghệ An", 
    "Hoà Bình",
    "Hà Tĩnh"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Thành phố:</h3>
      <select value={city} onChange={handleChange}>
        {cities.map((c, index) => (
          <option key={index} value={c === "-- Chọn thành phố --" ? "" : c}>
            {c}
          </option>
        ))}
      </select>

      {city && <p>Thành phố: {city}</p>}
    </div>
  );
}

export default SelectCity;
