import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddToCartPage() {
  const [customerId, setCustomerId] = useState(1); // Replace with the correct customerId
  const [packageId, setPackageId] = useState(''); // You can set the packageId based on your logic
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getAllPackages();
  }, []);

  const getAllPackages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/auth/packages", {
        withCredentials: true,
      });
      setPackages(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách gói hàng:", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (!packageId) {
        alert('Vui lòng chọn gói hàng trước khi mua.'); // Handle if the user hasn't selected a package
        return;
      }

      // Find the selected package based on the packageId
      const selectedPackage = packages.find((packageItem) => packageItem.id === packageId);

      if (!selectedPackage) {
        alert('Gói hàng không tồn tại.'); // Handle if the selected package is not found
        return;
      }

      const cartItemDto = {
        customerId: customerId,
        packageId: selectedPackage.id,
        quantity: quantity,
        price: selectedPackage.price, // Use the price from the selected package
      };

      const response = await axios.post('http://localhost:8080/api/auth/add', cartItemDto, {
        withCredentials: true,
      });

      if (response.status === 200) {
        alert('Đã thêm vào giỏ hàng'); // Show a notification when added to cart successfully
      } else {
        alert('Lỗi khi thêm vào giỏ hàng');
      }
    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
  };

  return (
      <>
        {packages.map((packageItem) => (
            <div
                key={packageItem.id}
                className={`flex flex-col w-1/3 md1000:w-[40rem] bg-white shadow-xl relative min540:w-[100%]`}
                onClick={() => {
                  setPackageId(packageItem.id);
                  setPrice(packageItem.price);
                }}
            >
              <div
                  style={{ transition: "all 0.3s" }}
                  className="relative grayscale hover:grayscale-0"
              >
                {/* Display your pricing image here */}
              </div>
              <div className="flex flex-col items-center pt-[20px] pb-[50px]">
                <div className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">
              Đ
            </span>
                  <p style={{ fontSize: "30px" }}>{packageItem.price}</p>
                  <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[6rem]">
              tr/th
            </span>
                </div>
                <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#646464] ">
                  <p>Tập thể dục miễn phí</p>
                  <p>Gym Fitness</p>
                  <p>Giảm cân</p>
                  <p>HLV cá nhân</p>
                  <p>Đạp xe</p>
                </div>
                <button
                    className="pricing-cta"
                    style={{ color: "white", backgroundColor: "#ff0336" }}
                    onClick={handleAddToCart}
                >
                  Mua ngay
                </button>
              </div>
            </div>
        ))}
      </>
  );
}

export default AddToCartPage;
