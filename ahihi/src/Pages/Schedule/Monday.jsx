import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Nav/Navbar";

function Monday() {
  return (
      <>
        <Navbar />
        {/* Các nút lọc */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
              to="/schedule/monday"
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#ff0336] ease-in duration-200 hover:shadow-2xl text-white "
          >
            Thứ Hai
          </Link>

          <Link
              to="/schedule/tuesday"
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
          >
            Thứ Ba
          </Link>

          <Link
              to="/schedule/wednesday"
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
          >
            Thứ Tư
          </Link>

          <Link
              to="/schedule/thursday"
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
          >
            Thứ Năm
          </Link>

          <Link
              to="/schedule/friday"
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
          >
            Thứ Sáu
          </Link>

          <Link
              to="/schedule/saturday"
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
          >
            Thứ Bảy
          </Link>

          <Link
              to="/schedule/sunday"
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
          >
            Chủ Nhật
          </Link>
        </div>

        {/* ---- */}

        {/* Các hộp */}
        <div className="mt-[5rem]">
          {/* Thứ Hai */}
          <div className="flex flex-col gap-3">
            {/* dòng */}
            <ul className="flex justify-between w-full min800:flex-col min800:text-center">
              {/* tên lớp */}
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Tên Lớp
                </p>
                <p className="text-[18px] text-black font-bold mt-3">Fitness</p>
              </li>
              {/* thời gian */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Thời Gian</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  9:00 sáng - 10:00 sáng
                </p>
              </li>
              {/* huấn luyện viên */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Huấn Luyện Viên</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  David Vila
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full  min800:justify-center items-center flex justify-end">
                <Link
                    onClick={() => window.top(0, 0)}
                    to="/contact"
                    className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200  "
                >
                  Tham Gia
                </Link>
              </li>
            </ul>
            {/* dòng */}
            <ul className="flex justify-between w-full min800:flex-col min800:text-center">
              {/* tên lớp */}
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Tên Lớp
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  Body Building
                </p>
              </li>
              {/* thời gian */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Thời Gian</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  10:00 tối - 11:00 tối
                </p>
              </li>
              {/* huấn luyện viên */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Huấn Luyện Viên</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  John Weights
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full min800:justify-center items-center flex justify-end">
                <Link
                    onClick={() => window.top(0, 0)}
                    to="/contact"
                    className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 "
                >
                  Tham Gia
                </Link>
              </li>
            </ul>
            {/* dòng */}
            <ul className="flex justify-between w-full min800:flex-col min800:text-center">
              {/* tên lớp */}
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Tên Lớp
                </p>
                <p className="text-[18px] text-black font-bold mt-3">Running</p>
              </li>
              {/* thời gian */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Thời Gian</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  4:00 chiều - 5:00 chiều
                </p>
              </li>
              {/* huấn luyện viên */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Huấn Luyện Viên</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  Junifor Jonas
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end min800:justify-center">
                <Link
                    onClick={() => window.top(0, 0)}
                    to="/contact"
                    className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 "
                >
                  Tham Gia
                </Link>
              </li>
            </ul>
            {/* dòng */}
            <ul className="flex justify-between w-full min800:flex-col min800:text-center">
              {/* tên lớp */}
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Tên Lớp
                </p>
                <p className="text-[18px] text-black font-bold mt-3">Cycling</p>
              </li>
              {/* thời gian */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Thời Gian</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  6:00 chiều - 7:00 chiều
                </p>
              </li>
              {/* huấn luyện viên */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Huấn Luyện Viên</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  Robert Louis
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end min800:justify-center">
                <Link
                    onClick={() => window.top(0, 0)}
                    to="/contact"
                    className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 "
                >
                  Tham Gia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
  );
}

export default Monday;
