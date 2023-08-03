import TitleRed from "../../images/who-we-are/title-bg.svg";
import MainButton from "../MainButton";

function Featured() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
      <>
        <section id="featured" className="page-padding py-[12.5rem] bg-white">
          <div className="container">
            {/* title */}
            <div className="flex flex-col text-center items-center relative ">
              <p className="font-semibold text-white text-[15px] relative uppercase z-10 ">
                Lớp học nỗi bật
              </p>
              <img
                  src={TitleRed}
                  alt="text_bg"
                  className="w-[24rem] absolute -top-[10px]"
              />
              <h2 className="text-[3.6rem] text-black font-bold my-10">
                Chúng tôi đang cung cấp các lớp học linh hoạt tốt nhất
              </h2>
            </div>
            {/* grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 md1000:flex md1000:flex-col">
              <div className="item-0-div relative">
                <div className="item-0 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">Đạp xe</p>
                  <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                    Thứ Tư: 9:00 sáng-10:00 sáng
                  </p>
                </div>
              </div>

              <div className="item-1-div relative">
                <div className="item-1 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">Karate</p>
                  <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                    Thứ Sáu: 10:00 sáng-11:00 sáng
                  </p>
                </div>
              </div>

              <div className="item-2-div relative">
                <div className="item-2 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">Cử tạ</p>
                  <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                    Thứ Bảy: 9:00 sáng-10:00 sáng
                  </p>
                </div>
              </div>

              <div className="item-3-div relative">
                <div className="item-3 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">Thiền</p>
                  <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                    Thứ Sáu: 7:00 sáng-8:00 sáng
                  </p>
                </div>
              </div>

              <div className="item-4-div relative">
                <div className="item-4 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">Võ thuật</p>
                  <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                    Chủ nhật: 18:00 chiều-19:00 tối
                  </p>
                </div>
              </div>

              <div className="item-5-div relative">
                <div className="item-5 ease-in duration-[0.4s] p-6"></div>
                <div className="absolute z-10 bottom-10 left-10">
                  <p className="text-white text-[3rem] font-bold">Tập thể dục</p>
                  <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                    Thứ Hai: 16:00 chiều-17:00 chiều
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* featured cta */}
        <div className="featured-cta flex justify-center text-left items-center md1000:bg-none md1000:bg-[#ff0336] ">
          <div className="container page-padding ">
            <div className="flex items-center md1000:flex-col md1000:gap-12  md1000:text-center">
              <h2 className="text-white font-bold text-[3.7rem] md1000:text-[3rem] max-w-6xl px-7 leading-[1.2] min450:text-[2.4rem] ">
                Chúng Tôi Luôn Mang Đến Dịch Vụ Thể Hình Tốt Nhất Cho Bạn
              </h2>
              <MainButton
                  color={`text-black`}
                  bg={`bg-white`}
                  text="Tham gia ngay"
                  arrowColor={`text-black`}
                  goTo="/contact"
              />
            </div>
          </div>
        </div>
      </>
  );
}

export default Featured;