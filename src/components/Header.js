import React from 'react';
import { MdAccountBalance } from "react-icons/md";
 const Header=()=> {
    return (
        <div className="header">
            
            <h1><MdAccountBalance size={70}/> NYT-Best Selling Books List <MdAccountBalance size={70}/></h1>
        </div>
    )
}
export default Header;