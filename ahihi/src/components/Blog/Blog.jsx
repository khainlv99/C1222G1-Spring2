import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";

function Blog() {
  return (
      <>
        <section id="blog" className="bg-white ">
          <div className="container page-padding py-[10rem]">
            {/* title div -- */}
            <div className="flex flex-col text-center relative items-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
                bài viết mới nhất
              </p>
              <img
                  src={TitleRed}
                  alt="text_bg"
                  className="w-[23rem] absolute -top-[10px]"
              />

              <h2 className="text-[3.4rem] font-bold mb-4">Thông Tin Mới Nhất</h2>
              <p className="text-[#646464] font-medium text-[15px] ">
                Gymat đã sử dụng một trích đoạn văn bản bất kỳ và làm lộn xộn
                <br /> một cuốn sách mẫu kiểu.
              </p>
            </div>

            {/* blog boxes */}
            <div className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap">
              <BlogBox
                  bgClass="box1Bg"
                  date="22.03.2022"
                  title="Yoga Cho Mọi Người vào năm 2023"
                  description="Chương trình này được thiết kế để biến việc tập yoga trở nên có lợi cho mọi người, không phân biệt tuổi tác, khả năng và nền tảng."
              />
              <BlogBox
                  bgClass="box2Bg"
                  date="13.09.2022"
                  title="Quay Trở Lại Với CrossFit Sau Kỳ Nghỉ"
                  description="Tìm hiểu cách dễ dàng quay trở lại lịch tập CrossFit sau kỳ nghỉ với những mẹo và chiến lược thành công."
              />
              <BlogBox
                  bgClass="box3Bg"
                  date="28.06.2022"
                  title="Gặp Gỡ Đại Sứ Thể Hình Grace"
                  description="Hiểu thêm về Grace, một người đam mê thể hình và là đại sứ tận tụy, nhiệt huyết với việc giúp đỡ người khác đạt được mục tiêu thể hình của họ."
              />
            </div>
          </div>
        </section>
      </>
  );
}

export default Blog;
