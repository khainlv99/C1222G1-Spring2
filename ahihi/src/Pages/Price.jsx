import Footer from "../components/Footer/Footer";
import Pricing from "../components/Pricing/Pricing";
import Navbar from "../components/Nav/Navbar";

function Price() {
  return (
    <>
      <Navbar />
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Gói tập
          </h1>
        </div>
        <Pricing />
        <Footer />
      </section>
    </>
  );
}

export default Price;
