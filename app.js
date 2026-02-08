/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import React, { useState } from "https://esm.sh/react@18.2.0";

const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance, pookie?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me, I'm fragile",
];

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = noClicks * 20 + 16;

  const firstImg =
    "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg =
    "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

  const handleNo = () => setNoClicks((prev) => prev + 1);
  const handleYes = () => setIsValentine(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {!isValentine ? (
        <>
          <img src={firstImg} alt="cute bear" />
          <h1>Will you be my Valentine? 💘</h1>
          <div>
            <button
              onClick={handleYes}
              style={{
                fontSize: `${yesButtonSize}px`,
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Yes
            </button>

            <button
              onClick={handleNo}
              style={{
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {noClicks === 0
                ? "No"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={secondImg} alt="kisses bear" />
          <h1 style={{ color: "pink" }}>Yay!!! 💖🎉</h1>
        </>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

