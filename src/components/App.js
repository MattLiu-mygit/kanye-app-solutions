import kanye from "../images/kanye-west-kanye.gif";
import { useState } from "react";
import QuoteList from "./QuoteList";

function App() {
  const [kanyeQuotes, setKanyeQuotes] = useState([]);

  const generate = () => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => setKanyeQuotes([...kanyeQuotes, data.quote]));
  };

  return (
    <div className="app">
      <h1>Let's get some Kanye Quotes!</h1>
      <img src={kanye} alt="kanye" />
      <div onClick={generate} className="generate">
        Generate Quote
      </div>
      <QuoteList quotes={kanyeQuotes} />
    </div>
  );
}

export default App;
