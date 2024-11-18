import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {navItems} from "../utils/constants.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {Route, Routes} from "react-router-dom";

const Main = () => {
    const {page} = useContext(SWContext);

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={`/${navItems[0]}`} element={<Home/>}/>
            <Route path={`/${navItems[1]}`} element={<AboutMe/>}/>
            <Route path={`/${navItems[2]}`} element={<StarWars/>}/>
            <Route path={`/${navItems[3]}`} element={<Contact/>}/>
        </Routes>
    )

    // switch (page) {
    //     case navItems[1]:
    //         return <AboutMe/>;
    //     case navItems[2]:
    //         return <StarWars/>;
    //     case navItems[3]:
    //         return <Contact/>;
    //     default:
    //         return <Home/>;
    // }
}

export default Main;