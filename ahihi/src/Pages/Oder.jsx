import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import AuthService from "../Pages/Schedule/AuthContext"; // Import the AuthService directly

const OrderHistory = () => {
    const user = AuthService.getCurrentUser();
    const [orderHistory, setOrderHistory] = useState([]);
    useEffect(() => {
        fetchOrderHistory();
    }, [user.id]);
    const fetchOrderHistory = async () => {
        try {
            const parsedCustomerId = parseInt(user.id);
            if (isNaN(parsedCustomerId)) {
                console.error('Invalid customerId:', user.id);
                return;
            }
            const response = await AuthService.getOrderHistory(parsedCustomerId);
            setOrderHistory(response.data);
        } catch (error) {
            console.error('Error fetching order history:', error);
        }
    };
    console.log(orderHistory)
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return orderHistory.slice(startIndex, endIndex);
    };
    const totalPages = Math.ceil(orderHistory.length / itemsPerPage);
    return (
        <>
            <Navbar />
            <section>
                <div className="login-banner relative justify-center flex">
                    <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
                        Lịch sử đặt gói
                    </h1>
                </div>

                {/* contact */}
                {orderHistory.length === 0 ? (
                    <p>No order history found for this customer.</p>
                ) : (
                    <div className="container p-3 my-5 border border-primary" style={{marginTop: "30px",marginBottom: "30px",background: "white",borderRadius: "10px", height:"30vh"}}>
                        {/* DataTable Code starts */}
                        <table
                            id="example"
                            className="table table-striped nowrap"
                            style={{ width: "100%", borderRadius: "10px" }}
                        >
                            <thead style={{background: "red"}}>
                            <tr style={{color:"white",textAlign: "center",fontSize:"15px"}}>
                                <th>STT</th>
                                <th>Mã khách hàng</th>
                                <th>Order</th>
                                <th>Ngày đặt hàng</th>
                                <th>Trạng thái</th>
                                <th>Gía</th>
                            </tr>
                            </thead>
                            <tbody>
                            {getCurrentPageData().map((order, index) => (
                                <tr key={index} style={{ color: "black",textAlign: "center",fontSize:"15px" }}>
                                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                    <td>{order.customer.id}</td>
                                    <td>{order.order.orderId}</td>
                                    <td>{order.order.orderDate}</td>
                                    <td>{order.order.status=="Pending"|| "Completed"?"Completed":"Null"}</td>
                                    <td>{order.totalAmount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="pagination-container" style={{textAlign: "center"}}>
                            <button
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}

                            >
                               <p style={{fontSize:"18px", marginRight:"10px",color:"red"}}>Trước</p>
                            </button>
                            <span style={{fontSize:"18px",marginRight:"10px",color:"red"}}>{currentPage}</span>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                <p style={{fontSize:"18px",color:"red"}}>Sau</p>
                            </button>
                        </div>
                    </div>
                )}

                {/* map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
                    allowFullScreen=""
                    loading="lazy"
                    samesite="Strict"
                    title="map"
                    style={{ width: "100%", height: "45rem", border: "0px" }}
                ></iframe>
                <Footer />
            </section>
        </>
    );
};

export default OrderHistory;
