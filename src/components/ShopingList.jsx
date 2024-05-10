import React from "react";
import ShopingItems from "./shopingItems";
import clearanceSales from "/src/assets/clearance_sales/Artboard_1.png";
import HomeEssentials from "/src/assets/clearance_sales/Artboard_1_copy.png";
import SpecialOffers from "/src/assets/clearance_sales/Artboard_1_copy_13.png";
import PhonesAndTablets from "/src/assets/clearance_sales/Artboard_1_copy_2.png";
import ComputingDeals from "/src/assets/clearance_sales/Artboard_1_copy_3.png";
import GroceriesDeals from "/src/assets/clearance_sales/Artboard_1_copy_4.png";
import Televisions from "/src/assets/clearance_sales/Artboard_1_copy_5.png";
import FashionDeals from "/src/assets/clearance_sales/Artboard_1_copy_6.png";
import MobileAccessories from "/src/assets/clearance_sales/Artboard_1_copy_7.png";
import Generators from "/src/assets/clearance_sales/Artboard_1_copy_8.png";
import Refregrator from "/src/assets/clearance_sales/Artboard_1_copy_9.png";
import MadeInNigeria from "/src/assets/clearance_sales/Made-in-naija.jpg";

// flash sales
import PowerBank1 from "/src/assets/screen_shot/1 (1).jpg";
import HandGlove2 from "/src/assets/screen_shot/1 (10).jpg";
import BottleWater from "/src/assets/screen_shot/1 (11).jpg";
import PowerBank2 from "/src/assets/screen_shot/1 (2).jpg";
import PowerBank3 from "/src/assets/screen_shot/1 (3).jpg";
import PowerBank4 from "/src/assets/screen_shot/1 (4).jpg";
import PowerBank5 from "/src/assets/screen_shot/1 (5).jpg";
import Clock from "/src/assets/screen_shot/1 (6).jpg";
import Touch from "/src/assets/screen_shot/1 (7).jpg";
import DigitalPowerBank from "/src/assets/screen_shot/1 (8).jpg";
import HandGlove1 from "/src/assets/screen_shot/1 (9).jpg";
import StarLink from "/src/assets/screen_shot/1.jpg";

// top saling
import fullTouchScreen from "/src/assets/top_selling/1.jpg";
import SunKingSolarFan from "/src/assets/top_selling/2.jpg";
import XiomiRedmi from "/src/assets/top_selling/3.jpg";
import MensLargeSize from "/src/assets/top_selling/4.jpg";
import ItelPowerBank from "/src/assets/top_selling/5.jpg";
import GuixiaTws from "/src/assets/top_selling/6.jpg";

// magic deals
import leftbanner from "/src/assets/magic_deals_banner/Desktop_Double_banner_572X250-1.jpg";
import rightbanner from "/src/assets/magic_deals_banner/Desktop_Double_banner_572X250.jpg";

// limited stock deals
// import ;

const magicDealsBanner = [
  { id: 1, productImg: leftbanner },
  { id: 2, productImg: rightbanner },
];

const topSelling = [
  { id: 1, productImg: fullTouchScreen, name: "Full Touch Screen Smart Watch" },
  { id: 2, productImg: SunKingSolarFan, name: "SunKing Solar Fan" },
  { id: 3, productImg: XiomiRedmi, name: "Xiomi redmi 13c 6.74" },
  { id: 4, productImg: MensLargeSize, name: "Men's Large Size Love Pams" },
  { id: 5, productImg: ItelPowerBank, name: "Itel 20000Mah Power Bank" },
  { id: 6, productImg: GuixiaTws, name: "Guixia TWS Bluetooth" },
];
// flash sales
const flashSale = [
  { id: 1, productImg: PowerBank1, name: "Power Bank" },
  { id: 2, productImg: PowerBank2, name: "Power Bank" },
  { id: 3, productImg: PowerBank3, name: "Power Bank" },
  { id: 4, productImg: PowerBank4, name: "Power Bank" },
  { id: 5, productImg: PowerBank5, name: "Power Bank" },
  { id: 6, productImg: Clock, name: "Clock" },
  { id: 7, productImg: Touch, name: "Touch" },
  { id: 8, productImg: DigitalPowerBank, name: "Digital Power Bank" },
  { id: 9, productImg: HandGlove1, name: "Hand glove" },
  { id: 10, productImg: HandGlove2, name: "Hand Glove" },
  { id: 11, productImg: BottleWater, name: "Bottle Water" },
  { id: 12, productImg: StarLink, name: "StarLink" },
];
// clearance sales
const products = [
  { id: 1, productImg: clearanceSales, name: "clearance sale" },
  { id: 2, productImg: SpecialOffers, name: "Special Offers" },
  { id: 3, productImg: PhonesAndTablets, name: "Phones And Tablet" },
  { id: 4, productImg: Televisions, name: "Television" },
  { id: 5, productImg: FashionDeals, name: "Fashion Deals" },
  { id: 6, productImg: Refregrator, name: "Refregrator" },
  { id: 7, productImg: GroceriesDeals, name: "Gloceries Deals" },
  { id: 8, productImg: ComputingDeals, name: "Computing deals" },
  { id: 9, productImg: MobileAccessories, name: "Mobile Accessories" },
  { id: 10, productImg: Generators, name: "Generators" },
  { id: 11, productImg: HomeEssentials, name: "Home Essentials" },
  { id: 12, productImg: MadeInNigeria, name: "Made in Nigeria" },
];
export default function ShopingList() {
  return (
    <div className="products">
      
      <div className="clearance-sales">
        {/* clearance sale   */}
        {products.map((product) => {
          return <ShopingItems Key={product.id} items={product} />;
        })}
      </div>

      <div className="top-selling">
        {/* top salling */}
        {topSelling.map((product) => (
          <ShopingItems Key={product.id} items={product} />
        ))}
      </div>
      <div className="flash-sales">
        {/* flash sale */}
        {flashSale.map((product) => (
          <ShopingItems key={product.id} items={product} />
        ))}
      </div>
      <div className="magic-deals-banner">
        {/* magic deals banner */}
        {magicDealsBanner.map((product) => (
          <ShopingItems key={product.id} items={product} />
        ))}
      </div>
    </div>
  );
}
