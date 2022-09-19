import React from "react";
import images from "../../constants/images";
import data from "../../constants/data";
import { SubHeading, MenuItem } from "../../components";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu">
      <SubHeading title="Menu That Fit Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">Wine and Beer</p>
        <div className="app__speciaMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="Menu Img" />
      </div>

      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__speciaMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
