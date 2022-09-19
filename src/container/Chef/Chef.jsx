import React from 'react';
import images from "../../constants/images";
import { SubHeading } from "../../components";

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quas!
          </p>
        </div>

        <p className="p__opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores doloremque, voluptates voluptas eum iste aperiam error, placeat pariatur autem facilis perspiciatis itaque nesciunt vel praesentium delectus. Maxime cum quibusdam enim fuga natus.
        </p>

      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">chef & Founder</p>
        <img src={images.sign} alt="Signature" />
      </div>

    </div>
  </div>
);

export default Chef;
