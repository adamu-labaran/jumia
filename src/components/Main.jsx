import React from "react";
import "./Main.css";
import ShopingList from "./ShopingList";
import centerBanner from "/src/assets/screen_shot/Desktop_Homepage_Slider__712x384-.jpg";
import sideBanner from "/src/assets/screen_shot/right-side-bar.png";

// const products = [
//     {id: 1, productImg: MadeInNigeria, name: "made in nigeria"}
// ]

export default function Main() {
  return (
    <div className="container">
      <div className="welcome-banner">
        {/* left side banner */}
        <div className="left-side-bar">
          <img src={sideBanner} alt="" />
        </div>
        {/* end of left side banner */}

        {/* center banner */}
        <div className="center-banner">
          <img src={centerBanner} alt="" />
        </div>
        {/* end of center banner */}

        {/* right side banner */}
        <div className="right-side-bar">
          <div className="top-banner">
            <img
              src="../src/assets/screen_shot/right-top-side-banner.png"
              alt=""
            />
          </div>
          <div className="buttom-banner">
            <img src="../src/assets/screen_shot/shop_earn.png" alt="" />
          </div>
        </div>
        {/* end of  right side banner */}
      </div>
      <ShopingList className="clearance-items" />
    </div>
  );
}
