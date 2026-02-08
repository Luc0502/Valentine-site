import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

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

  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      },
    },
    !isValentine
      ? [
          React.createElement("img", { src: firstImg, key: "img1" }),
          React.createElement(
            "h1",
            { key: "h1" },
            "Will you be my Valentine? 💘"
          ),
          React.createElement(
            "div",
            { key: "buttons" },
            React.createElement(
              "button",
              {
                onClick: () => setIsValentine(true),
                style: {
                  fontSize: `${yesButtonSize}px`,
                  margin: "10px",
                  padding: "10px 20px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                },
              },
              "Yes"
            ),
            React.createElement(
              "button",
              {
                onClick: () => setNoClicks(noClicks + 1),
                style: {
                  margin: "10px",
                  padding: "10px 20px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                },
              },
              noClicks === 0
                ? "No"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]
            )
          ),
        ]
      : [
          React.createElement("img", { src: secondImg, key: "img2" }),
          React.createElement(
            "h1",
            { style: { color: "pink" }, key: "yay" },
            "Yay!!! 💖🎉"
          ),
        ]
  );
}

createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
