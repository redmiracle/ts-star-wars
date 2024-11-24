import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {SWContext} from "./utils/context.ts";
import {characters, defaultsHero} from "./utils/constants.ts";



function App() {
    const [headerName, setHeaderName] = useState<string>(characters[defaultsHero].name);

    return (
        <SWContext.Provider value={{headerName,setHeaderName}}>
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
        </SWContext.Provider>
    )
}

export default App
