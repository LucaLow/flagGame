import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Option({ option, flag }) {
  return (
    <table className="tablet">
      <tr>
        <td>
          <button>{option}</button>
        </td>
        <td className="flag">{flag}</td>
      </tr>
    </table>
  );
}

function App() {
  const [taxesOption, setTaxesOption] = useState("");
  const [tunesOption, setTunesOption] = useState("");
  const [muffOption, setMuffOption] = useState("");
  const [scranOption, setScranOption] = useState("");
  const [bevsOption, setBevsOption] = useState("");

  return (
    <>
      <h1>Flag Game</h1>

      <div className="body">
        <div className="options-container">
          <Option option="Taxes" flag={taxesOption} />
          <Option option="Tunes" flag={tunesOption} />
          <Option option="Muff" flag={muffOption} />
          <Option option="Scran" flag={scranOption} />
          <Option option="Bevs" flag={bevsOption} />
        </div>
      </div>
    </>
  );
}

export default App;
