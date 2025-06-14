"use client";
import { useState } from "react";
import PhoneInput from "./PhoneInput";

const OrderProductsCard = ({classes}: any) => {
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = () => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 11) {
      alert("номер введен правильно: " + cleaned);
    } else {
      alert("введите корректный номер");
    }
    setPhone("");
  };

  return (
    <div className={`bg-[#D9D9D9] rounded-[15px] p-4 text-black flex justify-between items-end  gap-6 flex-wrap ${classes}`}>
      <div className="flex flex-col gap-4 max-w-[600px] flex-1">
        <h4 className="text-4xl">Добавленные товары</h4>
        <ul>
          <li className="flex justify-between">
            <p className="">товар 1</p>
            <div className="flex justify-between gap-10">
              <p>x3</p> <p>3645₽</p>
            </div>
          </li>
          <li className="flex justify-between">
            <p className="">товар 2</p>
            <div className="flex justify-between gap-10">
              <p>x3</p> <p>3645₽</p>
            </div>
          </li>
        </ul>
        <PhoneInput phone={phone} setPhone={setPhone} />
      </div>
      <button
        className="max-h-[68px] py-3.5 px-8 text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none cursor-pointer"
        onClick={handleSubmit}
      >
        заказать
      </button>
    </div>
  );
};

export default OrderProductsCard;
