import Navigation from "./Navigation.tsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {characters, defaultsHero, navItems} from "../utils/constants.ts";

const Header = () => {
    const [headerName, setHeaderName] = useState<string>("");
    const pageLocation=useLocation()


    useEffect(() => {
        const charParams=pageLocation.pathname.split("/");
        if(charParams.indexOf(navItems[1].path)!==-1){
            if(characters[charParams[2]]) {
                setHeaderName(characters[charParams[2]].name);
            }else {
                setHeaderName (characters[defaultsHero].name)}
        }else setHeaderName("Star Wars");

    }, [pageLocation]);

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{headerName}</h1>
        </header>
    );
};

export default Header;