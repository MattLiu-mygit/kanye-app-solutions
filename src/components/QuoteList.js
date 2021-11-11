import React from "react";
import Quote from "./Quote";

const QuoteList = (props) => {
  return (
    <div>
      {props.quotes.map((quote) => (
        <div key={quote}>
          <Quote quote={quote} />
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
