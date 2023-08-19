import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import Test from "./Test";
import AuthService from "./Schedule/AuthContext";
function CartPage() {
    const API_URL = "http://localhost:8080/api/auth/";
    const [cartItems, setCartItems] = useState([]);
    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {
        if (currentUser) {
            getCartItems(currentUser.id);
        }
    }, [currentUser]);

    const getCartItems = async (customerId) => {
        try {
            const response = await axios.get(`${API_URL}${customerId}`, {
                withCredentials: true,
            });
            console.log('response data:', response.data); // Check the structure of the response data
            setCartItems(response.data);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách giỏ hàng:', error);
        }
    };

    const removeFromCart = async (cartItemId) => {
        console.log('cartItemId:', cartItemId);
        try {
            await axios.delete(`http://localhost:8080/api/auth/${cartItemId}`, {
                withCredentials: true,
            });
            // After successful removal, update the cart items
            getCartItems();
        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:', error);
        }
    };

    const getTotalPrice = () => {
        const totalPrice = cartItems.reduce((accumulator, item) => {
            return accumulator + item.price;
        }, 0);
        return totalPrice.toFixed(2);
    };

    // Xử lý phản hồi từ PayPal IPN
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paymentSuccess = urlParams.get('payment_success'); // Thay 'payment_success' bằng tham số trong URL để xác định thanh toán thành công

        if (paymentSuccess === 'true') {
            // Nếu thanh toán thành công, gọi API để xóa giỏ hàng
            handleCartCheckout();
        }
    }, []);

    // Hàm xử lý khi thanh toán thành công
    const handleCartCheckout = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/checkout', {
                customerId: 1, // Thay đổi customerId thành giá trị thích hợp
                totalAmount: parseFloat(getTotalPrice()),
            }, {
                withCredentials: true,
            });

            // Kiểm tra kết quả từ server và cập nhật trạng thái thanh toán thành công
            if (response.data === "Cart checked out successfully") {
                // Xóa giỏ hàng thành công, có thể thực hiện các hành động khác tại đây
                alert("Thanh toán thành công!");
                getCartItems(); // Cập nhật lại danh sách giỏ hàng sau khi thanh toán thành công
            } else {
                console.error('Lỗi khi thanh toán:', response.data);
            }
        } catch (error) {
            console.error('Lỗi khi gọi API thanh toán:', error);
        }
    };
    return (
        <>
            <div>
                <Navbar />
                <section>
                    <div className="login-banner relative justify-center flex">
                        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
                            Giỏ hàng
                        </h1>
                    </div>

                    <div className="card" style={{
                        margin: 'auto',
                        maxWidth: '950px',
                        width: '90%',
                        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '1rem',
                        border: 'transparent',
                        marginTop: "30px",
                        marginBottom: "30px"
                    }}>
                        {cartItems.length === 0 ? (
                            <p style={{ fontSize: "40px", color: "red" }}>Không có sản phẩm trong giỏ hàng.</p>
                        ) : (
                            <div className="row" style={{ margin: 0 }}>
                                <div className="col-md-8 cart" style={{
                                    backgroundColor: '#fff',
                                    padding: '4vh 5vh',
                                    borderBottomLeftRadius: '1rem',
                                    borderTopLeftRadius: '1rem'
                                }}>
                                    <div className="title" style={{ marginBottom: "5vh" }}>
                                        <div className="row" style={{ margin: 0 }}>
                                            <div className="col">
                                                <h4>
                                                    <h1 style={{ fontSize: "20px", textAlign: "center" }}>Giỏ hàng</h1>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    {cartItems.map((item) => (
                                        <div
                                            className="row border-top border-bottom"
                                            style={{ margin: 0 }}
                                            key={item.cartItemId}
                                        >
                                            <div
                                                className="row main align-items-center"
                                                style={{
                                                    margin: 0,
                                                    padding: "2vh 0",
                                                    width: "100%",
                                                }}
                                            >
                                                <div className="col-2" style={{ padding: 0 }}>
                                                    <img
                                                        className="img-fluid"
                                                        src="https://atfitness.com.vn/wp-content/uploads/2022/10/khoa-tap-gym-online-1024x576.jpg"
                                                        style={{ width: "100px", margin: "0 auto" }}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="col">
                                                    <div className="row text-muted" style={{ fontSize: 15, margin: "0 auto", textAlign: "center" }}>
                                                        Nâng cấp hạng tháng
                                                    </div>
                                                    <div className="row" style={{ fontSize: 15, margin: "0 auto", textAlign: "center" }}>
                                                        Mã khách hàng: {item.customerId}
                                                    </div>
                                                </div>
                                                <div className="col" style={{ fontSize: 15, margin: "0 auto", textAlign: "center" }}>
                                                    <a href="#" style={{ padding: "0 1vh" }}>
                                                        -
                                                    </a>
                                                    <a href="#" className="border" style={{ padding: "0 1vh" }}>
                                                        {item.quantity}
                                                    </a>
                                                    <a href="#" style={{ padding: "0 1vh" }}>
                                                        +
                                                    </a>
                                                </div>
                                                <div className="col" style={{ fontSize: 15, margin: "0 auto", textAlign: "center" }}>
                                                    {item.price.toFixed(2)}{" "} Tr/VND
                                                    <span
                                                        className="close"
                                                        style={{ marginLeft: "auto", fontSize: "0.7rem" }}
                                                        onClick={() => removeFromCart(item.cartItemId)}
                                                    >
                                                            ✕
                                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="back-to-shop">
                                        <Link to='/pricing' style={{ padding: "0 1vh" }}>←</Link>
                                        <span className="text-muted">Trở về</span>
                                    </div>
                                </div>
                                <div className="col-md-4 summary" style={{
                                    backgroundColor: '#ddd',
                                    borderTopRightRadius: '1rem',
                                    borderBottomRightRadius: '1rem',
                                    padding: '4vh',
                                    color: 'rgb(65, 65, 65)',
                                }}>
                                    <div>
                                        <h5 style={{ fontSize: 20 }}>
                                            <b>Thanh toán</b>
                                        </h5>
                                    </div>
                                    <hr />
                                    <div className="row" style={{ margin: 0 }}>
                                        <div className="col text-right" style={{ fontSize: 20 }}> {getTotalPrice()} Tr/VND</div>
                                    </div>
                                    <form>
                                        <p style={{ fontSize: 15 }}>Giao hàng</p>
                                        {/* ... Your existing code ... */}
                                    </form>
                                    <div
                                        className="row" style={{ margin: 0 }}
                                        style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
                                    >
                                        <div className="col">Tổng tiền</div>
                                        <div className="col text-right" style={{ fontSize: 20 }}> {getTotalPrice()} Tr/VND</div>
                                    </div>
                                    <button className="btn" style={{
                                        backgroundColor: 'red',
                                        borderColor: '#000',
                                        color: 'white',
                                        width: '100%',
                                        fontSize: '20px ',
                                        marginTop: '4vh',
                                        padding: '1vh',
                                        borderRadius: '0',
                                    }}>Thanh Toán</button>
                                    <Test totalPrice={getTotalPrice()} /> {/* Pass the total price as a prop to the Test component */}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
                        allowFullScreen=""
                        loading="lazy"
                        samesite="Strict"
                        title="map"
                        style={{ width: "100%", height: "45rem", border: "0px" }}
                    ></iframe>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default CartPage;
