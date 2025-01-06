import { useState, useEffect } from "react";
import { Tooltip } from "antd";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountryRatings from "./CountryRatings.json";

function Option({ option, flag, action, currentFlag, setCurrentFlag }) {
  function nextFlag() {
    setCurrentFlag(
      CountryRatings.countries[
        Math.floor(Math.random() * CountryRatings.countries.length)
      ]
    );
  }

  function select() {
    if (flag.name != undefined) return;
    action(currentFlag);
    nextFlag();
  }

  return (
    <table className="tablet">
      <tr>
        <td>
          <button
            onClick={() => {
              select(currentFlag);
            }}
          >
            {option}
          </button>
        </td>
        {flag.name != undefined ? (
          <td className="flag">
            <Tooltip
              placement="right"
              overlayInnerStyle={{ backgroundColor: "#00008b", color: "#fff" }}
              title={`${flag.name}, ${flag.ratings[option.toLowerCase()]}`}
            >
              <span>{flag.flag}</span>
            </Tooltip>
          </td>
        ) : (
          <span />
        )}
      </tr>
    </table>
  );
}

function App() {
  const [taxesOption, setTaxesOption] = useState({});
  const [tunesOption, setTunesOption] = useState({});
  const [muffOption, setMuffOption] = useState({});
  const [scranOption, setScranOption] = useState({});
  const [bevsOption, setBevsOption] = useState({});

  const [currentFlag, setCurrentFlag] = useState({});
  useEffect(() => {
    setCurrentFlag(
      CountryRatings.countries[
        Math.floor(Math.random() * CountryRatings.countries.length)
      ]
    );
  }, []);

  return (
    <>
      <h1>Flag Game</h1>

      <div className="body">
        <div className="options-container" setFlag={setCurrentFlag}>
          <Tooltip
            title={currentFlag.name}
            overlayInnerStyle={{ backgroundColor: "#00008b", color: "#fff" }}
          >
            <div className="flagDisplay">{currentFlag.flag}</div>
          </Tooltip>
          <Option
            option="Taxes"
            flag={taxesOption}
            action={setTaxesOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
          />
          <Option
            option="Tunes"
            flag={tunesOption}
            action={setTunesOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
          />
          <Option
            option="Muff"
            flag={muffOption}
            action={setMuffOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
          />
          <Option
            option="Scran"
            flag={scranOption}
            action={setScranOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
          />
          <Option
            option="Bevs"
            flag={bevsOption}
            action={setBevsOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
          />
        </div>
      </div>
    </>
  );
}

export default App;
