/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/components/css/Calculator.css";

function Calculator(props) {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div>
        <h1>{props.title}</h1>
      </div>

      <div className="calculator">
        <div className="display-result">
          <input type="text" value={value} />
        </div>
        <div>
          <input type="button" value={"Clear"} onClick={() => setValue("")} />
          <input
            type="button"
            value={"Delete"}
            onClick={() => setValue(value.slice(0, -1))}
          />
          <input
            type="button"
            value={"."}
            onClick={() => setValue(value + ".")}
          />
          <input
            type="button"
            value={"/"}
            onClick={() => setValue(value + "/")}
          />
        </div>
        <div>
          <input
            type="button"
            value={"7"}
            onClick={() => setValue(value + "7")}
          />
          <input
            type="button"
            value={"8"}
            onClick={() => setValue(value + "8")}
          />
          <input
            type="button"
            value={"9"}
            onClick={() => setValue(value + "9")}
          />
          <input
            type="button"
            value={"*"}
            onClick={() => setValue(value + "*")}
          />
        </div>
        <div>
          <input
            type="button"
            value={"4"}
            onClick={() => setValue(value + "4")}
          />
          <input
            type="button"
            value={"5"}
            onClick={() => setValue(value + "5")}
          />
          <input
            type="button"
            value={"6"}
            onClick={() => setValue(value + "6")}
          />
          <input
            type="button"
            value={"+"}
            onClick={() => setValue(value + "+")}
          />
        </div>
        <div>
          <input
            type="button"
            value={"1"}
            onClick={() => setValue(value + "1")}
          />
          <input
            type="button"
            value={"2"}
            onClick={() => setValue(value + "2")}
          />
          <input
            type="button"
            value={"3"}
            onClick={() => setValue(value + "3")}
          />
          <input type="button" value={"-"} />
        </div>
        <div>
          <input
            type="button"
            value={"00"}
            onClick={() => setValue(value + "00")}
          />
          <input
            type="button"
            value={"0"}
            onClick={() => setValue(value + "0")}
          />
          <input
            type="button"
            value={"="}
            onClick={() => setValue(eval(value))}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
