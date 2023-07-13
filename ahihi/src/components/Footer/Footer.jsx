import FooterLogo from "../../images/logo/logo-footer.svg";

function Footer() {
    return (
        <>
            <footer className="bg-white">
                <div className="container page-padding py-[10rem]">
                    {/* footer div all */}
                    <div
                        className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
                        {/* logo side */}
                        <div className="flex flex-col w-1/3 gap-8">
                            <img src={FooterLogo} alt="footer_logo" className="w-[18rem]"/>
                            <p className="text-[15px] font-medium text-[#646464]">
                                Nâng sức khỏe và cơ thể của bạn lên một tầm cao mới với chương trình toàn diện của chúng
                                tôi được thiết kế để giúp bạn đạt được mục tiêu tập thể dục của mình.
                            </p>
                            {/* socials */}
                            <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                                <i
                                    style={{transition: "all 0.3s"}}
                                    className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                                ></i>
                                <i
                                    style={{transition: "all 0.3s"}}
                                    className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                                ></i>
                                <i
                                    style={{transition: "all 0.3s"}}
                                    className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                                ></i>
                                <i
                                    style={{transition: "all 0.3s"}}
                                    className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                                ></i>
                            </div>
                            <p className="text-[16px] font-medium text-[#646464]">
                                Chính sách bảo mật | © {new Date().getFullYear()} Gymate <br/>{" "}
                                Thiết kế bởi{" "}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.radiustheme.com/"
                                >
                                    Nguyễn Lê Văn Khải
                                </a>
                            </p>
                        </div>

                        {/* middle div */}
                        <div className="flex flex-col gap-8 relative">
                            <p className="text-[22px] font-bold footer-main">Lớp học của chúng tôi</p>

                            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                Lớp học thể dục
                            </p>
                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                Lớp học thể dục nhịp điệu
                            </p>
                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                Yoga
                            </p>
                            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                Sức mạnh toàn thân
                            </p>
                        </div>

                        {/* right div */}
                        <div className="flex flex-col gap-8 relative">
                            <p className="text-[22px] font-bold footer-main">Giờ làm việc</p>

                            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

                            <p className="text-[16px]  text-[#646464] font-bold">
                                Thứ 2 - Thứ 6:
                            </p>
                            <p className="text-[16px] text-[#646464] font-medium">
                                7:00 sáng - 21:00 tối
                            </p>
                            <p className="text-[16px] text-[#646464] font-bold">Thứ 7:</p>
                            <p className="text-[16px] text-[#646464] font-medium">
                                7:00 sáng - 19:00 tối
                            </p>
                            <p className="text-[16px] text-[#646464] font-bold ">
                                Chủ nhật - Đóng cửa
                            </p>
                        </div>
                        <span></span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
