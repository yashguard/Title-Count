import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const setValue = () => {
    setCount(++count);
    document.title = "count" + " " + `${count}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          color: "white",
          backgroundColor: "black",
          border: "none",
          padding: "12px 24px",
          borderRadius: "20px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "500",
          letterSpacing: "1px",
          marginBottom: "20px",
        }}
        onClick={() => setValue()}
      >
        click
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;