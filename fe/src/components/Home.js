import { useEffect, useState } from "react"
import productService from "../service/login/product/productService"
import {  useNavigate } from "react-router-dom"
export default function Home() {
    const [productSaleList, setProductSaleList] = useState([])
    
    const getProductSaleList = async () => {
        try {
            const res = await productService.productSaleList()
            console.log(res);
            setProductSaleList(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProductSaleList()
        document.title = "Trang Chủ";
    }, [])

    const navigate = useNavigate()
    const handleDetailProduct = (id)=>{
        navigate('/product/detail/' + id)
    }
    console.log(productSaleList);
    return (
        <>
            <div style={{ marginTop: 117 }}>
                {/* Carousel */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to={0}
                            className="active"
                        />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://cache.marriott.com/marriottassets/marriott/SELCY/selcy-fitness-1030-hor-feat.jpg"
                                alt="New York"
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />


                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://cdn.trendir.com/wp-content/uploads/2016/11/Fitness-room-concept-900x498.jpg"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />

                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.pinimg.com/originals/b6/f1/f8/b6f1f89c7ab884620f891143bef991b0.jpg"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>
            </div>
            <section className="service-policy-area section-space container">
                <div className='container mt-5'>
                    <div className="d-flex">
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_1.jpg?v=1609"
                                    className="d-block w-100  h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_2.jpg?v=1609"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_3.jpg?v=1609"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_4.jpg?v=1609"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_7.jpg?v=1609"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-policy-area section-space container">
                <div ><h2 className='text-center bg-home text-secondary py-3'>SẢN PHẨM KHUYẾN MÃI</h2></div>
                <div className='container'>
                    <div id="carouselExampleControls" className="carousel carousel-dark slide " data-bs-ride="carousel">
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <div className="row d-flex justify-content-center mt-3">
                                    {
                                        productSaleList.slice(0,4).map((element, index) => (
                                            <div className="col-lg-2 mx-4 px-0" key={index}>
                                                <div type='button' onClick={()=>handleDetailProduct(element.id)} className="card-1" >
                                                    <img src={element.imageName} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div>{
                                                            element.name.length > 20 ? <h6>{element.name.slice(0, 20)}...</h6> : <h6>{element.name}</h6>
                                                        }</div>
                                                        <p>
                                                                <span className='text-decoration-line-through'>{
                                                                    +element.capacityProductPrice === 0 ? "": 
                                                                    (+element.capacityProductPrice).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                                <span className='text-danger fs-6 float-end fw-bold'>{
                                                                    (+element.capacityProductPriceSale).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center mt-3">
                                {
                                        productSaleList.slice(4).map((element, index) => (
                                            <div className="col-lg-2 mx-4 px-0" key={index}>
                                                <div type='button' onClick={()=>handleDetailProduct(element.id)} className="card-1" >
                                                    <img src={element.imageName} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div>{
                                                            element.name.length > 20 ? <h6>{element.name.slice(0, 20)}...</h6> : <h6>{element.name}</h6>
                                                        }</div>
                                                        <p>
                                                                <span className='text-decoration-line-through'>{
                                                                    +element.capacityProductPrice === 0 ? "": 
                                                                    (+element.capacityProductPrice).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                                <span className='text-danger fs-6 float-end fw-bold'>{
                                                                    (+element.capacityProductPriceSale).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <hr className='mx-5 hr-dieucosmetics' />

            <div className="container px-0 mt-5">
                <div className="row mx-0 mt-2 mb-5 ms-5">
                    <div className="col-4">
                        <h4 style={{ color: 'GrayText', marginTop: 20 }}>
                            Chúng tôi tự hào giới thiệu một bộ sưu tập đa dạng các dụng cụ tập gym chất lượng, từ máy móc đến phụ kiện, để giúp bạn đạt được mục tiêu tập luyện cá nhân.
                        </h4>
                    </div>
                    <div className="col-4">
                        <img
                            className="w-100 h-100 shadow"
                            src="https://goodfit.vn/wp-content/uploads/2020/07/Gang-tay-bao-tay-tap-gym-nam-nu-GoodFit-GF203G-11-1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-4">
                        <h4 style={{ textAlign: "center", color: 'GrayText', paddingTop: 20 }}>
                            Bao tay tập gym
                        </h4>
                        <h6 style={{
                            color: 'black',
                            lineHeight: 2,
                            fontFamily: '"Cormorant Infant", "serif"'
                        }}>
                            Với chất lượng hàng đầu và dịch vụ khách hàng tận tâm, chúng tôi cam kết mang đến cho bạn trải nghiệm mua sắm trực tuyến tốt nhất để nâng cao sức khỏe và sức mạnh của bạn. Hãy cùng chúng tôi khám phá và chọn lựa những công cụ tập gym phù hợp với nhu cầu của bạn ngay hôm nay!
                        </h6>
                    </div>
                </div>
                <div className="shadow-cosmetics-1">
                    <div className="row mx-0 bg-home text-white ">
                        <div className="row container mx-0 px-0">
                            <div className="column col-6 px-0 figure" id="zoomIn">
                                <img className="w-100 h-100 " src="https://cdn.chanhtuoi.com/uploads/2021/09/dung-cu-tap-gym-tai-nha-con-lan.jpg.webp" />
                            </div>
                            <div className="col-6 mt-2" style={{background: "white"}}>
                                <h3 style={{ textAlign: "center", color: 'GrayText', paddingTop: 30 }}>Con lăn tập bụng</h3>
                                <h6 style={{
                                    color: 'black',
                                    lineHeight: 2,
                                    paddingTop: 20,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontFamily: '"Cormorant Infant", "serif"',
                                    background: "white"
                                }}>
                                    Con lăn tập bụng là dụng cụ tập gym tại nhà lí tưởng để bạn luyện tập cơ cho các phần giữa cơ thể như bụng, hông, lưng dưới chắc khỏe. Khi tập, con lăn sẽ tác động cùng lúc lên vùng cơ bụng, xô và cơ liên sườn đồng thời có hiệu quả mạnh mẽ lên vùng lưng dưới và vai.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 ">
                        <div className="row container mx-0 px-0 ">
                            <div className="col-6 mt-2 px-0" >
                                <h3 style={{ textAlign: "center", color: 'GrayText', paddingTop: 30 }}>Dụng cụ chống đẩy</h3>
                                <h6 style={{
                                    color: 'black',
                                    lineHeight: 2,
                                    paddingTop: 10,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontFamily: '"Cormorant Infant", "serif"'
                                }}>
                                    Nếu bạn muốn luyện toàn bộ nhóm cơ trên cơ thể thì dụng cụ chống đẩy là lựa chọn tối ưu trong bộ dụng cụ tập gym tại nhà. Với dụng cụ chống đẩy, bạn có thể luyện cơ tay, chân, vai, ngực, hông...giúp cơ ngực nở nang và có lợi cho việc hô hấp.</h6>
                            </div>
                            <div className="col-6 px-0 column figure" id="zoomIn">
                                <img className="w-100 h-100 " src="https://cdn.chanhtuoi.com/uploads/21/09/dung-cu-tap-gym-tai-nha-ta-tay-5.jpg" style={{height: "100px!important"}}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='mx-5 hr-dieucosmetics mt-5' />

            <div className="container mt-5 py-5 mb-5" style={{background: "white"}}>
                <div className="row ">
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/free_shipping.png" alt=""/>
                            </div>
                            <div className="policy-terms">
                                <h5>Miễn Phí Giao Hàng</h5>
                                <p>Miễn phí giao hàng toàn quốc</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/support247.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Hỗ Trợ 24/7</h5>
                                <p>Hỗ trợ 24h trong 1 ngày</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/money_back.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Hoàn Trả Lại Tiền</h5>
                                <p>Hoàn trả lại tiền trong vòng 30 ngày</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/promotions.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Giảm Giá Đặt Hàng</h5>
                                <p>Giảm giá 5% trên mỗi đơn hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}