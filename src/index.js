import React from "react";
import ReactDOM from "react-dom";
import MarkdownEditor from "./MarkdownEditor";
import "./styles.css";

function App() {
  let mdEditor = null;
  const buttonOnClick = e => {
    e.preventDefault();
    console.log(mdEditor.value());
  };
  const toolbar = [
    "bold",
    "italic",
    "heading",
    "|",
    "ordered-list",
    "unordered-list",
    "table",
    "|",
    "link",
    "image",
    "|",
    "preview"
  ];

  return (
    <div className="App">
      <button onClick={buttonOnClick}>Submit MD</button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50%", marginLeft: "-1px" }}>
          <MarkdownEditor
            id="mdEditor"
            getMdeInstance={instance => (mdEditor = instance)}
            options={{
              toolbar
            }}
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
