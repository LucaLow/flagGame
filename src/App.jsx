import { useState, useEffect } from "react";
import { Tooltip } from "antd";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountryRatings from "./CountryRatings.json";

function Option({
  option,
  flag,
  action,
  currentFlag,
  setCurrentFlag,
  setFlagsRevealed,
  flagsRevealed,
}) {
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
    setFlagsRevealed(flagsRevealed + 1);
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
  const [flagsRevealed, setFlagsRevealed] = useState(0);
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
          {flagsRevealed < 5 ? (
            <Tooltip
              title={currentFlag.name}
              overlayInnerStyle={{ backgroundColor: "#00008b", color: "#fff" }}
            >
              <div className="flagDisplay">{currentFlag.flag}</div>
            </Tooltip>
          ) : (
            <></>
          )}

          <Option
            option="Taxes"
            flag={taxesOption}
            action={setTaxesOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
          />
          <Option
            option="Tunes"
            flag={tunesOption}
            action={setTunesOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
          />
          <Option
            option="Muff"
            flag={muffOption}
            action={setMuffOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
          />
          <Option
            option="Scran"
            flag={scranOption}
            action={setScranOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
          />
          <Option
            option="Bevs"
            flag={bevsOption}
            action={setBevsOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
          />
        </div>
      </div>
    </>
  );
}

export default App;
