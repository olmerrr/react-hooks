import React, {useEffect,useState} from "react";

function App() {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);


    if (visible){
        return(
            <div>
                <button onClick={() => setValue(v => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>hide</button>
                <HookCounter value={value}/>
            </div>
        )
    }else {
        return <button onClick={() => setVisible(true)}>show</button>
    }

};
const HookCounter = ({value}) => {
    useEffect(() => {
        console.log('mount');
        return () => console.log('unmount');
    },[]);
    useEffect(() => console.log('update'));
    return <p>{value}</p>
};
    export default App;
