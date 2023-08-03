import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";

function Schedule() {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Lịch trình theo ngày
          </h1>
        </div>
        {/* schedule */}
        <div className="container page-padding py-[10rem]">
          <Outlet />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Schedule;
