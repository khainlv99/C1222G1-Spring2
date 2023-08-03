import BlogBox from "../components/BlogBox/BlogBox";
import Footer from "../components/Footer/Footer";
import Img1 from "../images/blogpage/1.jpg";
import Img2 from "../images/blogpage/2.jpg";
import Img3 from "../images/blogpage/3.jpg";
import Img4 from "../images/blogpage/4.jpg";
import Img5 from "../images/blogpage/5.jpg";
import Img6 from "../images/blogpage/6.jpg";
import Img7 from "../images/blogpage/7.jpg";
import Recent1 from "../images/blogpage/recent1.jpg";
import Recent2 from "../images/blogpage/recent2.jpg";
import Recent3 from "../images/blogpage/recent3.jpg";
import Recent4 from "../images/blogpage/recent4.jpg";
import Recent5 from "../images/blogpage/recent5.jpg";
import Recent6 from "../images/blogpage/recent6.jpg";
import Navbar from "../components/Nav/Navbar";

function Blog() {
  return (
      <>
        <Navbar />
        <section>
          <div className="login-banner relative justify-center flex">
            <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
              Blog
            </h1>
          </div>
          {/* blog */}
          <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
            {/* blog */}
            <div className="flex flex-col gap-28">
              <BlogBox img={Img1} title="Yoga Cho Mọi Người vào năm 2022" />
              <BlogBox
                  img={Img2}
                  title="Trở Lại Với CrossFit Sau Kỳ Nghỉ"
              />
              <BlogBox img={Img3} title="Gặp Gỡ Đại Sứ Fitness Grace" />
              <BlogBox img={Img4} title="Những Gì Tốt Nhất Đến Từ Chuyên Gia Địa Châu Âu" />
              <BlogBox
                  img={Img5}
                  title="Nâng Cao Thể Lực Với Thách Thức Phòng Tập Mới Của Chúng Tôi"
              />
              <BlogBox
                  img={Img6}
                  title="Cách Giữ Cho Trẻ Em Của Bạn Chuyển Động Trong Mùa Hè"
              />
              <BlogBox
                  img={Img7}
                  title="Nâng Cao Thể Lực Với Thử Thách Phòng Tập Mới Của Chúng Tôi"
              />
            </div>

            {/* sidebar */}
            <div>
              {/* form */}
              <form className="flex">
                <input
                    className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
                    type="search"
                    placeholder="Tìm kiếm..."
                ></input>
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass bg-[#ff0336] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]"></i>
                </button>
              </form>

              {/* categories */}
              <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
                <p className="text-[18px] text-black font-bold mb-5">
                  Danh mục
                </p>
                <span className="w-[40px] h-[3.5px] bg-[#ff0336]"></span>
                <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
                  <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                    <p>
                      <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                      &nbsp; Xây dựng Cơ thể
                    </p>
                    <span>(4)</span>
                  </li>

                  <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                    <p>
                      <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                      &nbsp; Boxing
                    </p>
                    <span>(4)</span>
                  </li>

                  <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                    <p>
                      <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                      &nbsp; Crossfit
                    </p>
                    <span>(4)</span>
                  </li>

                  <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                    <p>
                      <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                      &nbsp; Thể lực
                    </p>
                    <span>(4)</span>
                  </li>

                  <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                    <p>
                      <i className="text-[13px] fa-solid fa-chevron-right"></i>
                      &nbsp; Thiền
                    </p>
                    <span>(4)</span>
                  </li>

                  <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                    <p>
                      <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                      &nbsp; Yoga
                    </p>
                    <span>(4)</span>
                  </li>
                </ul>
              </div>
              {/* recent posts */}
              <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
                <p className="text-[18px] text-black font-bold mb-5">
                  Bài viết gần đây
                </p>
                <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
                <div className="flex flex-col gap-7">
                  {/*  */}
                  <div className="flex gap-8">
                    <img src={Recent1} alt="recent_img" className="w-[10rem]" />
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="text-[14px] text-[#646464] font-medium">
                        Ngày 22 tháng 3 năm 2022
                      </p>
                      <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                        Yoga Cho Mọi Người vào năm 2022
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex gap-8">
                    <img src={Recent2} alt="recent_img" className="w-[10rem]" />
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="text-[14px] text-[#646464] font-medium">
                        Ngày 22 tháng 3 năm 2022
                      </p>
                      <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                        Trở Lại Với CrossFit Sau Kỳ Nghỉ
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex gap-8">
                    <img src={Recent3} alt="recent_img" className="w-[10rem]" />
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="text-[14px] text-[#646464] font-medium">
                        Ngày 22 tháng 3 năm 2022
                      </p>
                      <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                        Gặp Gỡ Đại Sứ Fitness Grace
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex gap-8">
                    <img src={Recent4} alt="recent_img" className="w-[10rem]" />
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="text-[14px] text-[#646464] font-medium">
                        Ngày 22 tháng 3 năm 2022
                      </p>
                      <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                        Những Gì Tốt Nhất Đến Từ Chuyên Gia Thiền Âu
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex gap-8">
                    <img src={Recent5} alt="recent_img" className="w-[10rem]" />
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="text-[14px] text-[#646464] font-medium">
                        Ngày 22 tháng 3 năm 2022
                      </p>
                      <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                        Học Boxing Với Huấn Luyện Viên John Của Chúng Tôi
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex gap-8">
                    <img src={Recent6} alt="recent_img" className="w-[10rem]" />
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="text-[14px] text-[#646464] font-medium">
                        Ngày 22 tháng 3 năm 2022
                      </p>
                      <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                        Cách Giữ Cho Trẻ Em Của Bạn Trong Mùa Hè
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* popular tags */}
              <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
                <p className="text-[18px] text-black font-bold mb-5">
                  Tags Phổ Biến
                </p>
                <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
                <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                  <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                    #Crossfit
                  </p>
                  <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                    #Thể lực
                  </p>
                  <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                    #Phòng tập Gym
                  </p>
                  <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                    #Thiền
                  </p>
                  <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                    #Chạy bộ
                  </p>
                  <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                    #Tập luyện
                  </p>
                  <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                    #Yoga
                  </p>
                  <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                    #Boxing
                  </p>
                </div>
              </div>
              {/* banner */}
              <div className="blog-banner w-full h-[56rem] relative">
                <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
                  gymat
                </p>
                <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[18rem] h-[60px]"></span>
                <div className="text-white flex flex-col absolute top-[10rem] left-10">
                  <p className="text-[64px] font-bold">34%</p>
                  <p className="text-[20px] font-bold -mt-[10px]">
                    Giảm giá phẳng
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </>
  );
}

export default Blog;
