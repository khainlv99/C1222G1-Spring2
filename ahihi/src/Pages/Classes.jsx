import React, { useEffect, useState } from "react";
import ClassesBox from "../components/ClassesBox/ClassesBox";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Pages/style/syke.css";

function Classes() {
    const [classes, setClasses] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setCurrentPage(1);
        fetchData();
    }, [currentPage, searchQuery]);

    const fetchData = async () => {
        try {
            let url = "http://localhost:8080/api/auth/class";
            if (searchQuery) {
                url += `/${searchQuery}`;
            }
            url += `?page=${currentPage}&perPage=${itemsPerPage}`;
            const response = await axios.get(url);
            const sortedData = response.data.sort((a, b) => b.id - a.id);
            setClasses(sortedData);
            setTotalPages(Math.ceil(response.headers["x-total-count"] / itemsPerPage));
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setClasses([]);
                alert("Không tìm thấy");
            } else {
                console.error("Error fetching classes:", error);
            }
        }
    };
    console.log(classes)

    const handleSearch = () => {
        fetchData();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(); // Call handleSearch when the submit button is clicked
    };

    return (
        <>
            <Navbar />
            <section className="login-section text-center">
                <div className="login-banner relative justify-center flex">
                    <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
                        Lớp Học
                    </h1>
                </div>
                <div className="container h-100" style={{ marginTop: "20px" }}>
                    <div className="d-flex justify-content-center h-100">
                        <form onSubmit={handleSubmit}>
                            <div
                                className="search"
                                style={{
                                    marginBottom: "auto",
                                    marginTop: "auto",
                                    height: "70px",
                                    backgroundColor: "#fff",
                                    borderRadius: "40px",
                                    padding: "10px",
                                }}
                            >
                                <input
                                    className="search_input"
                                    type="text"
                                    name=""
                                    placeholder="Tìm kiếm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        color: "black",
                                        fontSize: "24px",
                                    }}
                                />

                                <button className="search_icon" type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1 grid-cols-3 grid-rows-3 text-left grid">
                    {classes.length === 0 ? (
                        <p style={{ color: "red", fontSize: "40px" }}>Danh sách trống.</p>
                    ) : (
                        classes.map((cls) => (
                            <Link to={`/classes/${cls.name}`} key={cls.id}>
                                <ClassesBox
                                    bgImg={cls.image}
                                    title={cls.name}
                                    trainer={cls.trainer}
                                    date={`${cls.dayOfWeek}: ${cls.startTime} - ${cls.endTime}`}
                                />
                            </Link>
                        ))
                    )}
                </div>
                <Footer />
            </section>
        </>
    );
}

export default Classes;
