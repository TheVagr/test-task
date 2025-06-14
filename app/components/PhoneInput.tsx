import { InputMask } from "@react-input/mask";

const PhoneInput = ({phone, setPhone}: any) => {

  return (
    // <div className="flex gap-4 mt-6">
      <InputMask
        mask="+7 (___) ___-__-__"
        replacement={{ _: /\d/ }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+7 (___) ___-__-__"
        className="w-full py-3.5 px-5 text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none max-w-[440px] min-w-[260px] outline-none"
        type="tel"
      />
    // {/* </div> */}
  );
};

export default PhoneInput;
