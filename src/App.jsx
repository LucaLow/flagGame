import { useState, useEffect } from "react";
import { Tooltip, Modal, Card, Avatar } from "antd";
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
  setIsModalVisible,
}) {
  function nextFlag() {
    setCurrentFlag(
      CountryRatings.countries[
      Math.floor(Math.random() * CountryRatings.countries.length)
      ]
    );
  }

  function select() {
    if (flag.name != undefined) {
      return;
    }
    action(currentFlag);
    nextFlag();
    setFlagsRevealed(flagsRevealed + 1);
    if (flagsRevealed == 4) {
      setIsModalVisible(true);
    }
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

  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <Modal
          title="Country Info"
          open={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        >
          <div className="cardHolder">
            <Card title="Taxes" style={{ width: 150 }} className="card">
              <h4>{`${taxesOption.name} ${taxesOption.flag}`}</h4>
              <h5>{taxesOption.ratings?.taxes}</h5>
            </Card>
          </div>
        </Modal>

        <div className="options-container">
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
            setIsModalVisible={setIsModalVisible}
          />
          <Option
            option="Tunes"
            flag={tunesOption}
            action={setTunesOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
            setIsModalVisible={setIsModalVisible}
          />
          <Option
            option="Muff"
            flag={muffOption}
            action={setMuffOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
            setIsModalVisible={setIsModalVisible}
          />
          <Option
            option="Scran"
            flag={scranOption}
            action={setScranOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
            setIsModalVisible={setIsModalVisible}
          />
          <Option
            option="Bevs"
            flag={bevsOption}
            action={setBevsOption}
            currentFlag={currentFlag}
            setCurrentFlag={setCurrentFlag}
            setFlagsRevealed={setFlagsRevealed}
            flagsRevealed={flagsRevealed}
            setIsModalVisible={setIsModalVisible}
          />
        </div>
      </div>
    </>
  );
}

export default App;
