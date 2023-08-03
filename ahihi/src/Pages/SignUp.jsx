import React, { useState } from "react";
import AuthService from "../Pages/Schedule/AuthContext";
import {Link} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    AuthService.register(username, email, password)
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          setMessage("Đăng ký không thành công.");
        });
  };

  return (
    <>
      <Navbar />
      <section className="login-section ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Đăng ký
          </h1>
        </div>
        {/* form  */}
        <div className="py-[10rem] flex justify-center page-padding">
          <form
              onSubmit={handleSignup}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Username:
            </label>
            <input
                className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
                type="text"
                value={username} onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Email:
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="khainguyenlevan@gmail.com"
              type="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Mật khẩu:
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="Abcd1234!"
              type="password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Đăng ký
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Bạn đã có tài khoản ?</p>
              <Link
                to="/login"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Signup;
