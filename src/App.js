import "./css/style.css";
import { useState } from "react";
import Header from "./components/Header.js";
import Converter from "./components/Converter.js";
import Result from "./components/Result.js";

function App() {
  const [result, setResult] = useState(0);
  return (
    <div className='main-container'>
      <Header />
      <Converter setResult={setResult} />
      <Result result={result} />
    </div>
  );
}

export default App;
