import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainerBox from "./TrainerBox";

function Trainers() {
  return (
      <>
        <section id="team" className="trainers-section">
          <div className="container page-padding py-[12rem]">
            {/* title div -- */}
            <div className="flex flex-col items-center text-center relative">
              <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
                huấn luyện viên
              </p>
              <img
                  src={TitleRed}
                  alt="text_bg"
                  className="w-[21rem] absolute -top-[6px]"
              />

              <h2 className="text-[3.4rem] font-bold mb-4">
                Đội ngũ huấn luyện viên chuyên gia
              </h2>
              <p className="text-[#646464] font-medium text-[15px] ">
                Đội ngũ huấn luyện viên chuyên gia giúp bạn thành công trong mọi mục tiêu,
                <br /> hướng dẫn cá nhân hóa và động viên!
              </p>
            </div>

            {/* trainers div -- */}
            <div className="flex mt-20 ">
              <TrainerBox />
            </div>
          </div>
        </section>
      </>
  );
}

export default Trainers;
