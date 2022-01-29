import "./App.css";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [data, setData] = useState({ text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleEnter = (e) => {
    const { key } = e;
    if (key == "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    if (data.text) {
      const text = data.text;
      setData({ text: "" });
      setList((prevList) => {
        return [...prevList, text];
      });
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-area">
        <input
          type="text"
          name="text"
          placeholder="Digite aqui sua tarefa..."
          onChange={handleChange}
          onKeyPress={handleEnter}
          value={data.text}
          className="text"
        />
        <input
          type="button"
          value="Adicionar Tarefa"
          onClick={handleSubmit}
          className="btn"
        />
      </div>
      <div className="list-area">
        <div className="content">
          <h2>Lista</h2>
          <ul>
            {list.map((listItem, key) => (
              <>
                <li key={key}>{listItem}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
