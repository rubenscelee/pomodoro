import Timer from "../Forms/Timer";
import Navbar from "./Navbar";
import FormSettingsModel from "./FormSettingsModel";
import { useState } from "react";

const Container = () => {
    const [pomodoro, setPomodoro] = useState(25);
    const [descansoCurto, setDescansoCurto] = useState(5);
    const [descansoLongo, setDescansoLongo] = useState(10);
    const [intervaloDescansoLongo, setIntervaloDescansoLongo] = useState(4);

    return (
        <div className="row">
            <Navbar/>
            <Timer pomodoro={pomodoro} descansoCurto={descansoCurto} descansoLongo={descansoLongo}/>
            <FormSettingsModel 
                pomodoro={pomodoro} 
                descansoCurto={descansoCurto} 
                descansoLongo={descansoLongo} 
                intervaloDescansoLongo={intervaloDescansoLongo} 
                setPomodoro={setPomodoro} 
                setDescansoCurto={setDescansoCurto} 
                setDescansoLongo={setDescansoLongo} 
                setIntervaloDescansoLongo={setIntervaloDescansoLongo}/>
        </div>
        
    );
}

export default Container;
