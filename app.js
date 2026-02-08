const { useState, createElement: h } = React;

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

  return h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      },
    },
    !isValentine
      ? [
          h("img", { src: firstImg, alt: "cute bear", key: "img1" }),
          h("h1", { key: "t" }, "Will you be my Valentine? 💘"),
          h(
            "div",
            { key: "btns" },
            h(
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
            h(
              "button",
              {
                onClick: () => setNoClicks((p) => p + 1),
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
          h("img", { src: secondImg, alt: "kisses bear", key: "img2" }),
          h(
            "h1",
            { style: { color: "pink" }, key: "yay" },
            "Yay!!! 💖🎉"
          ),
        ]
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
