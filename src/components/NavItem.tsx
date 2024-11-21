import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {Item} from "../utils/types";
import {NavLink} from "react-router-dom";
interface Props {
    item:Item
}

const NavItem = ({item}:Props) => {

    return (
        <li>
         <NavLink to={`/${item.path}`}  className={`bg-red-color border-black border-2 rounded-[5px] px-3 py-2 cursor-pointer hover:text-white hover:bg-red-500`}>{item.title}</NavLink>
        </li>
    );
};

export default NavItem;
