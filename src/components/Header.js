import React from "react";
import NavBar from "./NavBar"
import SharkForm from "./SharkForm"

function Header() {



    return (
        <div>
            <h1>SharkAid</h1>
            <NavBar />
            {/* sort, search by name */}
            <SharkForm />
        </div>
    )
}
export default Header;