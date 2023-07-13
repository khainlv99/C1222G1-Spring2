import { Link } from "react-router-dom";

function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/">Trang chủ</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/about"}>
            Về chúng tôi
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/gallery/page-1"}>
            Phòng tập
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/schedule/monday"}>
            Lịch tập
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/blog"}>
            Blog
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/pricing"}>
            Bảng giá
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/classes"}>
            Các lớp học
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} to={"/contact"}>
            Liên hệ
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
