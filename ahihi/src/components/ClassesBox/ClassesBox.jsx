import MainButton from "../MainButton";

function ClassesBox({ bgImg, title, trainer, date }) {
  const imageUrl = bgImg.replace("http://localhost:8080/api/images/", "");

  const boxStyle = {
    backgroundImage: `url("https://tophinhanhdep.com/wp-content/uploads/2021/11/Gym-Desktop-Wallpapers.jpg")`,
  };
  return (
    <>
      <div
        className={`rounded-3xl shadow-2xl flex flex-col h-[46rem] relative p-[40px]`}
        style={boxStyle}
      >
        <span className="bg-[#0000004a] rounded-3xl w-full h-full absolute top-0 left-0"></span>

        <div className="flex flex-col align-text-bottom h-full w-full z-[2] justify-end">
          <p className="text-white font-bold text-[2.7rem] mb-3">{title}</p>

          <span className="bg-[#ff0336] w-[50px] h-[4px]"></span>

          <div className="flex gap-6 mb-14 mt-6 text-[#ffffffe1] text-[1.6rem] font-medium">
            <p>
              <i className="fa-regular fa-user"></i> {trainer}
            </p>
            <p>
              <i className="fa-regular fa-clock"></i> {date}
            </p>
          </div>

          <MainButton
            color={`text-black`}
            bg={`bg-white`}
            text="Tham gia ngay"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default ClassesBox;
