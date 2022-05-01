import React, {useEffect} from "react";
import Routers from "./Routers";

function App() {
    useEffect(()=>{
        window.Buffer = window.Buffer || require("buffer").Buffer
    },[])
    return (
        <div>
            <Routers/>
        </div>
    );
}

export default App;
