import { useEffect, useState } from "react";
import Message from "./components/Message";
import PictureDisplay from "./components/PictureDisplay";

function App() {
  const [size, setSize] = useState("s");
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [isBrown, setIsBrown] = useState(false);
  const [isLight_Brown, setIsLightBrown] = useState(false);
  const [isYellow, setIsYellow] = useState(false);

  const set = { isRed, isOrange, isBrown, isLight_Brown, isYellow };
  useEffect(() => {
    const colors = [];
    Object.entries(set).forEach(([key, value]) => {
      // console.log(key, value);
      if (value) {
        colors.push(key.slice(2).toLowerCase().replaceAll("_", "-"));
      }
    });
    setFeatherColors(colors);
  }, [isRed, isOrange, isBrown, isLight_Brown, isYellow]);

  return (
    <>
      <h1>Turkey Creator</h1>
      <h3 className="button-controls">Set the features of your turkey</h3>

      {/* User controls */}
      <div className="button-controls">
        Size:
        <button onClick={() => setSize("s")}>Small</button>
        <button onClick={() => setSize("m")}>Medium</button>
        <button onClick={() => setSize("l")}>Large</button>
        <button onClick={() => setSize("xl")}>X-Large</button>
      </div>
      <div className="button-controls">
        Feather Count:
        <input
          type="number"
          onChange={(e) => setFeatherCount(e.currentTarget.value)}
          defaultValue={0}
          min={0}
          max={10}
        />
      </div>
      <div className="button-controls">
        Feather Color(s):
        <label>
          <input
            type="checkbox"
            onChange={(e) => setIsRed(e.currentTarget.checked)}
          />
          Red
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setIsOrange(e.currentTarget.checked)}
          />
          Orange
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setIsBrown(e.currentTarget.checked)}
          />
          Brown
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setIsLightBrown(e.currentTarget.checked)}
          />
          Light Brown
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setIsYellow(e.currentTarget.checked)}
          />
          Golden Yellow
        </label>
      </div>

      {/* Generated display based on user selections above */}
      <h3 className="button-controls">Enjoy your turkey</h3>
      <PictureDisplay
        size={size}
        featherCount={featherCount}
        featherColors={featherColors}
      />
      <Message size={size} featherCount={featherCount} />
    </>
  );
}

export default App;
