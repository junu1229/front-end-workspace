import { useState, useEffect } from "react";
import propTypes from "prop-types";

const Button = ({click, text}) => {
  return <button onClick={click}>{text}</button>
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  click: propTypes.func.isRequired
}

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const plusCount = () => {
      setCounter(counter + 1);
    }
    const minusCount = () => {
      setCounter(counter - 1);
    }

    console.log("always~~");

    useEffect(() => {
      console.log("useEffect~")
    }, []);

    useEffect(() => {
      console.log("counter change~~")
    }, [counter]);

    return (
      <div>
          <h1 style={{backgroundColor: "pink", color: "skyblue"}}>Total clicks: {counter}</h1>
          <Button click={plusCount} text="+1"/>
          <Button click={minusCount} text="-1"/>
          {/* <button onClick={plusCount}>+1</button>    
          <button onClick={minusCount}>-1</button>     */}
      </div>
    );
};

export default Counter;
