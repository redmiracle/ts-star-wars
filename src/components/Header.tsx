import Navigation from "./Navigation.tsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {characters, defaultsHero, navItems} from "../utils/constants.ts";
import {Hero} from "../utils/types";

const Header = () => {
    const [headerName, setHeaderName] = useState<string>("");
    const {pathname}=useLocation()


    useEffect(() => {
        const charParams:string[]=pathname.split("/");
        const check:number=charParams.indexOf(navItems[1].path)

        if(check!==-1){
            const actChar:Hero= characters[charParams[2]]
            if(actChar) {
                setHeaderName(actChar.name);
            }else {
                setHeaderName (characters[defaultsHero].name)}
        }else setHeaderName("Star Wars");

    }, [pathname]);

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{headerName}</h1>
        </header>
    );
};

export default Header;