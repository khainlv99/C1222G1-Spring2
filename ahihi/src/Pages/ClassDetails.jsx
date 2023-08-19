import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import MainButton from "../components/MainButton";

const ClassDetails = () => {
    const { name } = useParams();
    const [scheduleData, setScheduleData] = useState([]);
    useEffect(() => {
        // Fetch schedule data based on the class name
        fetchScheduleData(name);
    }, [name]);

    const fetchScheduleData = async (className) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/auth/class/${className}`
            );
            setScheduleData(response.data);
        } catch (error) {
            console.error("Error fetching schedule data:", error);
        }
    };

    console.log(scheduleData);

    return (
        <>
            <Navbar />
            <section>
                <div className="login-banner relative justify-center flex">
                    <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
                        Chi tiết lớp học
                    </h1>
                </div>
                {scheduleData.map((scheduleItem, index) => (
                    <div
                        key={index}
                        className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1"
                    >
                        {/* first col */}
                        <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
                            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
                                {name}
                            </h2>
                            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
                                {scheduleItem.schedule}
                            </p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
                                <div className="flex flex-col relative">
                                    <h3 className="text-[2rem] font-bold mb-10">Ngày học</h3>
                                    <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                                    <p className="text-[15px] font-medium text-[#646464]" style={{marginBottom: 40}}>
                                        {scheduleItem.dayOfWeek}
                                    </p>
                                </div>
                                {/*  */}
                                <div className="flex flex-col relative">
                                    <h3 className="text-[2rem] font-bold mb-10">Thời gian học</h3>
                                    <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                                    <div className="text-[15px] font-medium text-[#646464]" style={{marginBottom: 40}}>
                                        <p>Thời gian bắt đầu: {scheduleItem.startTime}</p>
                                        <p>Thời gian kết thúc: {scheduleItem.endTime}</p>
                                    </div>
                                    <MainButton
                                        color={`!text-white`}
                                        bg={`bg-[#3f3f3f]`}
                                        cN="about-cta"
                                        arrowColor={`!text-white`}
                                        hover={`hover:bg-[#FF0336]`}
                                        text="Tham gia"
                                        goTo="/classes"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* second col ---*/}
                        <form
                            className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full"
                            style={{
                                backgroundImage: `url(${scheduleItem.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "500px"
                            }}
                        >
                            {/* Các phần tử trong form */}
                        </form>
                    </div>
                ))}
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

export default ClassDetails;
