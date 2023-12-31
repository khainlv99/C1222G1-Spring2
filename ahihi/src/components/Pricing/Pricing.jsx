import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";
import {useEffect, useState} from "react";
import axios from "axios";

function Pricing() {
  return (
      <>
        <section id="pricing" className="pricing-section relative">
          <div className="container page-padding py-[12rem] ">
            <img src={BgText} className="left-0 absolute" alt="bg_img" />
            {/* title div -- */}
            <div className="flex flex-col text-center relative items-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
                BẢNG GIÁ
              </p>
              <img
                  src={TitleRed}
                  alt="text_bg"
                  className="w-[23rem] absolute -top-[10px] "
              />

              <h2 className="text-[3.4rem] font-bold mb-4">
                Gói Giá Độc Quyền
              </h2>
              <p className="text-[#646464] font-medium text-[15px] ">
                Gymat đã sử dụng một trích đoạn văn bản bất kỳ và làm lộn xộn
                <br /> một cuốn sách mẫu kiểu.
              </p>
            </div>
            {/* pricing boxes */}
            <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
              <PricingBox img={Img1} price="1" />
            </div>
            <img
                src={BgDumbell}
                alt="bg_icon"
                className="right-0 bottom-0 absolute z-[1]"
            />
          </div>
        </section>
      </>
  );
}

export default Pricing;
