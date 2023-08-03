import MainButton from "../MainButton";

function BlogBox({ img, title }) {
  return (
    <>
      <div>
        <img src={img} alt="blog_img" />
        <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
          <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
          &nbsp; By <b>Admin</b> | March 11, 2022 | Yoga
        </p>
        <h2 className="text-[3rem] font-bold mb-6">{title}</h2>
        <p className="font-medium text-[16px] text-[#646464] mb-24">
          Phổ biến một cách có thẩm quyền liên kết toàn bộ dựa trên đa phương tiện thông qua
          phương pháp định hướng thị trườngLiên tục chuyển đổi kết quả tích hợp
          so với sản xuất đa ngành Thúc đẩy một cách thích hợp
          đổi mới được nghiên cứu đầy đủ hơn là cung cấp phụ trợ. khi một ẩn số
          máy in mất một galley.
        </p>
        <MainButton
          color={`!text-white`}
          bg={`bg-[#ff0336]`}
          text="Đăng ký ngay"
          arrowColor={`!text-white`}
          cN="pricing-cta blog-cta"
        />
      </div>
    </>
  );
}

export default BlogBox;
