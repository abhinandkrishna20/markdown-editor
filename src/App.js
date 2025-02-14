import React, { useState } from "react";
import './App.css';
import './style.css';
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

function App() {
  const [markdown, setMarkdown] = useState(""); // <-- Define State Here

  return (
    <div className="App">
    <Navbar />
    <div className="container">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />

    </div>
    <Footer />
    </div>
  );
}

export default App;
