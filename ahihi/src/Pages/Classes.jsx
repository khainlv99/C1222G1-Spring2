import {useEffect, useState} from "react";
import ClassesBox from "../components/ClassesBox/ClassesBox";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";
import axios from "axios";

function Classes() {
  const [classes, setClasses] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/auth/class");
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <>
        <Navbar />
        <section className="login-section text-center ">
          <div className="login-banner relative justify-center flex">
            <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
              Lớp Học
            </h1>
          </div>

          {/* Khối hộp 1 */}
          <div
              className={`container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-3 text-left ${
                  load ? "grid" : "hidden"
              }`}
          >
            {classes.map((cls) => (
                <ClassesBox
                    key={cls.id}
                    bgImg={cls.image} // Replace "default-image" with a default image URL or class name
                    title={cls.name}
                    trainer={cls.trainer}
                    date={`${cls.dayOfWeek}: ${cls.startTime} - ${cls.endTime}`}
                />
            ))}
          </div>
          <div
              className={`container gap-12 page-padding py-[10rem] grid-cols-3 md1000:grid-cols-2 min620:grid-cols-1  grid-rows-3 text-left  ${
                  load ? "hidden" : "grid"
              }`}
          >
            <ClassesBox
                bgImg="cycling-bg"
                title="Xe Đạp"
                trainer="Dorian Yate"
                date="Thứ Tư: 9:00 sáng"
            />
            <ClassesBox
                bgImg="meditaion-bg"
                title="Thiền"
                trainer="Maria Mich"
                date="Thứ Sáu: 1:00 chiều"
            />
            <ClassesBox
                bgImg="mma-bg"
                title="Đấm Bốc"
                trainer="John Flex"
                date="Thứ Ba: 4:00 chiều"
            />
            <ClassesBox
                bgImg="karate-bg"
                title="Karate"
                trainer="David Rich"
                date="Thứ Bảy: 9:00 sáng"
            />
            <ClassesBox
                bgImg="powerlift-bg"
                title="Power Lifting"
                trainer="Larry Wheels"
                date="Thứ Hai: 8:00 tối"
            />
            <ClassesBox
                bgImg="workout-bg"
                title="Tập Gym"
                trainer="Shawn Ray"
                date="Chủ Nhật: 10:00 sáng"
            />
            <ClassesBox
                bgImg="crossfit-bg"
                title="Crossfit"
                trainer="Jenifer Alex"
                date="Thứ Tư: 9:00 tối"
            />
            <ClassesBox
                bgImg="running-bg"
                title="Chạy Bộ"
                trainer="Zinia Zessy"
                date="Thứ Năm: 12:00 đêm"
            />
            <ClassesBox
                bgImg="bodybuilding-bg"
                title="Xây Dựng Cơ Bắp"
                trainer="Jake Paul"
                date="Thứ Hai: 8:00 tối"
            />
            <ClassesBox
                bgImg="box-bg"
                title="Môn Mma"
                trainer="Becky Lynch"
                date="Thứ Sáu: 6:00 sáng"
            />
            <ClassesBox
                bgImg="yoga-bg"
                title="Yoga"
                trainer="Marta Mich"
                date="Thứ Tư: 8:00 sáng"
            />
            <ClassesBox
                bgImg="fitness-bg"
                title="Thể Lực"
                trainer="Mia Malkova"
                date="Chủ Nhật: 5:00 chiều"
            />
          </div>

          <button
              className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
              onClick={() => {
                loadMore();
                goTop();
              }}
          >
            {load ? "xem thêm" : "rút gọn"}
          </button>

          <Footer />
        </section>
      </>
  );
}

export default Classes;
