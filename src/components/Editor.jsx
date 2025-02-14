import React from "react";

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <div className="editor-container">
      <h3>Markdown Editor</h3>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your Markdown here..."
      />
    </div>
  );
};

export default Editor;
