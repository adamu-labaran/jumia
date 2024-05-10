import React from "react";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="header">
      {/* flexible header */}
      <div className="nav-bar">
        <span>sell on jumia</span>
        <span>jumia</span>
      </div>

      {/* sticky header */}
      <div className="sticky-bar">
        {/* logo div */}
        <div>
          <span>jumia logo</span>
        </div>

        {/* end of logo div */}

        {/* search bar and btn */}
        <div>
          <span>search bar</span>
          <span>search btn</span>
        </div>
        {/* end search bar and btn */}

        {/* account, help cart and their logos */}
        <div>
          <span>logo</span>
          <span>account</span>
          <span>logo</span>
          <span>help</span>
          <span>logo</span>
          <span>cart</span>
        </div>
        {/* end of account logo */}
      </div>
    </div>
  );
}
