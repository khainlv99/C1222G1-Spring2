import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../Pages/Schedule/AuthContext";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password); // Call the login function from AuthService
      navigate("/"); // Replace with the path to your dashboard/home page
    } catch (error) {
      console.log(error);
    }
  };


  return (
      <>
        <Navbar />
        <section className="login-section">
          <div className="login-banner relative justify-center flex">
            <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
              Đăng nhập
            </h1>
          </div>
          {/* form  */}
          <div className="page-padding py-[10rem] flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
            >
              <label className="text-[2rem] text-white mb-3 font-medium ">
                Username
              </label>
              <input
                  className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
                  placeholder="gymate"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
              ></input>
              <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
                Mật khẩu
              </label>
              <input
                  className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
                  placeholder="Abcd1234!"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
              ></input>

              <button
                  type="submit"
                  className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
              >
                Đăng nhập
              </button>
              <div className="flex gap-4 items-center mt-16 min450:flex-col">
                <p className="text-white text-[1.5rem]">Bạn mới sử dụng Gymate?</p>
                <Link
                    to="/signup"
                    className="text-[#ff0336] font-bold text-[1.5rem]"
                >
                  Đăng ký
                </Link>
              </div>
              <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
                <span className="text-[#ff0336]">Tài khoản để test</span> -
                gymate@gymail.com <span className="text-[#ff0336]"> / </span>
                testpassword123
              </p>
            </form>
          </div>
          <Footer />
        </section>
      </>
  );
}

export default Login;
