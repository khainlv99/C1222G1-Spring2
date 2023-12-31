import {useEffect, useState} from "react";
import Logo from "../../images/logo/logo.svg";
import NavList from "../Nav/NavList";
import {Link} from "react-router-dom";
import LogoSide from "../../images/logo/logo-footer.svg";
import SideImg1 from "../../images/sidebar/1.jpg";
import SideImg2 from "../../images/sidebar/2.jpg";
import SideImg3 from "../../images/sidebar/3.jpg";
import SideImg4 from "../../images/sidebar/4.jpg";
import SideImg5 from "../../images/sidebar/5.jpg";
import SideImg6 from "../../images/sidebar/6.jpg";
import AuthService from "../../Pages/Schedule/AuthContext";

function Navbar() {
    const [user, setUser] = useState(null);
    const [showUserSection, setShowUserSection] = useState(false);

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser) {
            console.log(currentUser)
            setUser(currentUser);
            setShowUserSection(true); // Set showUserSection to true when user is logged in
        } else {
            setShowUserSection(false); // Set showUserSection to false when user is logged out
        }
    }, []);

    // ... (other code)

    const handleLogout = () => {
        AuthService.logout();
        setUser(null);
        setShowUserSection(false); // Set showUserSection to false when user logs out
    };


    const [spin, setSpin] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [sidebar, setSideBar] = useState(false);
    const [hamburger, setHamburger] = useState(false);

    const joinSpin = () => {
        setSpin(true);
    };

    const stopSpin = () => {
        setSpin(false);
    };

    // sticky navbar - bg black
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    const handleUserIconClick = () => {
        setShowUserSection(!showUserSection);
    };

    window.addEventListener("scroll", handleScroll);

    // logo
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // sidebar
    const sideBar = () => {
        setSideBar(!sidebar);
    };

    // hamburger menu
    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    };

    return (
        <>
            <nav
                className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
                    sticky ? "shadow-xl !bg-black" : ""
                }`}
            >
                <Link to="/">
                    <img
                        src={Logo}
                        alt="logo_img"
                        onClick={goTop}
                        className="w-full h-auto"
                    />
                </Link>
                <div className="navlist-nav">
                    <NavList/>
                </div>
                <div className="flex items-center gap-10">
                    <div className="flex gap-10">
                        {/* mobile menu -------------- */}

                        {/* hamburger menu */}
                        <div
                            className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                                hamburger ? "left-0" : "-left-[100%]"
                            }`}
                        >
                            <i
                                onClick={hamburgerMenu}
                                className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
                            ></i>

                            {/* links */}
                            <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                                <li onClick={hamburgerMenu}>
                                    <a
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        href="/#home"
                                    >
                                        Trang chủ
                                    </a>
                                </li>
                                <li onClick={hamburgerMenu}>
                                    <Link
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        to="/about"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li onClick={hamburgerMenu}>
                                    <Link
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        to="/schedule/monday"
                                    >
                                        Lịch tập
                                    </Link>
                                </li>
                                <li onClick={hamburgerMenu}>
                                    <Link
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        to="/gallery/page-1"
                                    >
                                        Phòng trưng bày
                                    </Link>
                                </li>
                                <li onClick={hamburgerMenu}>
                                    <Link
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        to="/blog"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li onClick={hamburgerMenu}>
                                    <Link
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        to="/contact"
                                    >
                                        Liên hệ
                                    </Link>
                                </li>
                                <li onClick={hamburgerMenu}>
                                    <Link
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        to="/cart"
                                    >
                                        Giỏ hàng
                                    </Link>
                                </li>
                                <li onClick={hamburgerMenu}>
                                    <Link
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        to="/pricing"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li onClick={hamburgerMenu}>
                                    <Link
                                        onClick={() => window.top(0, 0)}
                                        className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                        to="/classes"
                                    >
                                        Classes
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* sidebar */}

                        <div>
                            <div
                                className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 left-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                                    sidebar ? "left-0" : "-left-[100%]"
                                }`}
                            >
                                {/* logo & X */}
                                <div className="flex justify-between items-center">
                                    <img src={LogoSide} alt="logo_img" className="w-[13rem]"/>
                                    <i
                                        onClick={sideBar}
                                        className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                                    ></i>
                                </div>
                                {/* about us */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-[2rem] font-bold">Về chúng tôi</h3>
                                    <p className="text-[1.6rem] font-medium text-[#000000b1]">
                                        Tìm hiểu xem chúng tôi là ai và điều gì khiến chúng tôi trở nên độc đáo. Chúng
                                        tôi là một phòng tập thể dục hướng đến cộng đồng, cam kết cung cấp trải nghiệm
                                        thể dục được cá nhân hóa cho những người đam mê thể dục ở mọi cấp độ trong một
                                        môi trường thân thiện và hỗ trợ.
                                    </p>
                                </div>
                                {/* gallery */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-[2rem] font-bold">Phòng tập</h3>
                                    <div className="grid grid-cols-3 grid-rows-2 gap-4">
                                        <img
                                            src={SideImg1}
                                            alt="sidebar_gallery"
                                            className="rounded-xl cursor-pointer "
                                        />
                                        <img
                                            src={SideImg2}
                                            alt="sidebar_gallery"
                                            className="rounded-xl cursor-pointer "
                                        />
                                        <img
                                            src={SideImg3}
                                            alt="sidebar_gallery"
                                            className="rounded-xl cursor-pointer "
                                        />
                                        <img
                                            src={SideImg4}
                                            alt="sidebar_gallery"
                                            className="rounded-xl cursor-pointer "
                                        />
                                        <img
                                            src={SideImg5}
                                            alt="sidebar_gallery"
                                            className="rounded-xl cursor-pointer "
                                        />
                                        <img
                                            src={SideImg6}
                                            alt="sidebar_gallery"
                                            className="rounded-xl cursor-pointer "
                                        />
                                    </div>
                                </div>
                                {/* contact */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-[2rem] font-bold">Liên hệ</h3>
                                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                                        <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
                                        &nbsp; 280 Trần Hưng Đạo, An Hải Tây, Sơn Trà, Đà Nẵng
                                    </p>
                                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                                        <i className="fa-solid fa-phone text-[#ff0336]"></i>&nbsp;
                                        0702750320
                                    </p>
                                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                                        <i className="fa-solid fa-envelope text-[#ff0336]"></i>
                                        &nbsp; khainguyenlevan@gmail.com
                                    </p>
                                </div>
                                {/* follow us */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-[2rem] font-bold">Theo dõi chúng tôi</h3>
                                    <div className="flex gap-5">
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                    </span>
                                        <span className="bg-[#ff0336] rounded-full py-[12px] px-[12px] cursor-pointer">
                      <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                    </span>
                                        <span className="bg-[#ff0336] rounded-full py-[10px] px-[13px] cursor-pointer">
                      <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* hamburger */}
                        <i
                            onClick={hamburgerMenu}
                            className="fa-bars fa-solid hidden text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
                        ></i>
                        {/* account */}
                        <Link to="/signup" title="signup_button" onClick={handleUserIconClick}>
                            <i className="fa-regular fa-user  text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"></i>
                        </Link>
                        {showUserSection && user ? ( // Check if showUserSection is true and user is logged in
                            <div className="flex items-center gap-4">
                                <span className="text-white text-lg font-medium" style={{fontSize: "16px"}}>
                            Xin chào, {user.username}
                            </span>
                                <button
                                    className="text-white text-lg font-medium hover:text-[#FF0336] cursor-pointer"
                                    onClick={handleLogout}
                                    style={{fontSize: "16px"}}
                                >
                                    Đăng xuất
                                </button>
                            </div>
                        ) : (

                            <div className="flex items-center gap-4">
                                <Link to="/login">
                                    <button className="text-white text-lg font-medium hover:text-[#FF0336] cursor-pointer" style={{fontSize: "16px"}}>
                                        Đăng nhập
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="text-white text-lg font-medium hover:text-[#FF0336] cursor-pointer" style={{fontSize: "16px"}}>
                                        Đăng ký
                                    </button>
                                </Link>
                            </div>
                        )}

                        {/* sidebar */}
                        <i
                            onClick={sideBar}
                            className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
                        ></i>
                    </div>
                    {/* spin box */}
                    <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
                        <Link
                            onClick={goTop}
                            to={"/contact"}
                            onMouseEnter={joinSpin}
                            onMouseLeave={stopSpin}
                            className="flex items-center "
                        >
                            <i
                                className={`fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${
                                    spin ? "nav-btn-hover" : ""
                                }`}
                            ></i>
                            <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                                Tham gia lớp học
                            </h3>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
