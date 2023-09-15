import { useState } from "react";
const Input = ({valChange, val, dis, pl}) => {
    return <input type="number" placeholder={pl} onChange={valChange} value={val} disabled={dis}></input>
};

const Converter = () => {
    
    const [minuteDisable, setminuteDisable] = useState(false);
    const [hourDisable, sethourDisable] = useState(true);
    const [minute, setMinute] = useState("");
    const [hour, setHour] = useState("");
    const inputMinute = ((e) => {
        setMinute(e.target.value);
        setHour(Math.floor(e.target.value/60));
        console.log(minute);
        console.log(hour);
    });
    const inputhour = ((e) => {
        setHour(e.target.value);
        setMinute(e.target.value*60);
        console.log(minute);
        console.log(hour);
    });
    
    const invert = (() => {
        if(minuteDisable===true) {
            setminuteDisable(false);
            sethourDisable(true);
        } else {
            setminuteDisable(true);
            sethourDisable(false);
        }
        setMinute("");
        setHour("");

    }); 

    const reset = (() => {
        setMinute("");
        setHour("");
    }); 

    return (
        <div>
            <h1>Time Converter</h1>
            Minutes <Input pl="minute" valChange={inputMinute} val={minute} dis={minuteDisable}/><br/>
            Hours <Input pl="hour" valChange={inputhour} val={hour} dis={hourDisable}/><br/>
            <button onClick={reset}>Reset</button><button onClick={invert}>Invert</button>
        </div>
      );
    };
    
export default Converter;