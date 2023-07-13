import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgIcon from "../../images/gallery/bg-icon.png";

function Gallery() {
  return (
      <>
        <section id="gallery" className="relative min450:hidden">
          <img
              src={BgIcon}
              alt="bg_img"
              className="absolute top-[30px] right-0"
          />

          <div className="container page-padding py-[4rem]">
            {/* title div -- */}
            <div className="flex flex-col text-center relative items-center ">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-10">
                BỘ SƯU TẬP GYMAT
              </p>
              <img
                  src={TitleRed}
                  alt="text_bg"
                  className="w-[23rem] absolute -top-[10px]  "
              />

              <h2 className="text-[3.4rem] font-bold mb-4">
                Bộ sưu tập nơi làm việc của chúng tôi
              </h2>
              <p className="text-[#646464] font-medium text-[15px] ">
                Bộ sưu tập nơi làm việc của chúng tôi có những văn phòng hiện đại, sự cộng tác của đội ngũ và văn hóa làm việc vui vẻ.
                <br /> Thu hút nhân tài và thể hiện không khí làm việc của công ty.
              </p>
            </div>

            {/* gallery */}
            <div className="gallery-grid py-24 w-full h-auto relative ">
              <div id="item-0"></div>
              <div id="item-1"></div>
              <div id="item-2"></div>
              <div id="item-3"></div>
              <div id="item-4"></div>
            </div>
          </div>
        </section>
      </>
  );
}

export default Gallery;
