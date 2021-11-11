import { useState } from "react";

const Quote = (props) => {
  const [color, setColor] = useState("#f5f5f5");
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "5px",
        padding: "1rem",
        margin: "0.5rem",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        width: "75%",
      }}
      onMouseEnter={() => setColor("aliceblue")}
      onMouseLeave={() => setColor("#f5f5f5")}
    >
      {props.quote}
    </div>
  );
};

export default Quote;
