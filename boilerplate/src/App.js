import { useState, useRef } from "react";

function App() {
  const [randomInput, setRandomInput] = useState("");

  const renders = 0;

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders = renders+1;
  };

  return (
    <main className="App">
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>Renders: {renders}</p>
      <br />
      <br />
      <br />
      <br />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
