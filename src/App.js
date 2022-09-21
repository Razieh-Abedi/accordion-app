import "./App.css";
import Question from "./Question";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icon.css";
import React from "react";
import questionData from "./questionData";

function App() {
  return (
    <main className="container">
      <h1 className="my-5 text-center">Questions about log in:</h1>
      <div className="container my-5">
        {questionData.map((item) => {
          return <Question key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div className="text-center py-2">
          <a
            href="https://raziwebdeveloper.com/"
            className="text-decoration-none text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed with ❤ by raziwebdeveloper.com
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
