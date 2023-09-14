import { useState } from "react";

const Button = ({click, text}) => {
  return <button onClick={click}>{text}</button>
};

const App = () => {

    const [counter, setCounter] = useState(0);
    const plusCount = () => {
      setCounter(counter + 1);
    }
    const minusCount = () => {
      setCounter(counter - 1);
    }

    return (
      <div>
          <h1>Total clicks: {counter}</h1>
          <Button click={plusCount} text="+1"/>
          <Button click={minusCount} text="-1"/>
          {/* <button onClick={plusCount}>+1</button>    
          <button onClick={minusCount}>-1</button>     */}
      </div>
    );
};

export default App;
