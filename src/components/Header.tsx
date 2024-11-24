import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";


const Header = () => {
    const {headerName} = useContext(SWContext);
    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{headerName}</h1>
        </header>
    );
};

export default Header;