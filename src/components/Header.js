import React from "react";

function Header( { onDarkModeClick , mode } ){
    function handleClick(){
        onDarkModeClick(mode)
    }
    return (
        <div className={"App " + (mode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={handleClick}>
            {mode ? "Dark" : "Light"} Mode
          </button>
        </header>
      </div>
    );
}



export default Header;