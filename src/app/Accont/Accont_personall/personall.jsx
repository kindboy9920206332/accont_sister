export default function Personal_Accont() {
  const inputs = [
    {
      text_span: "نام کامل",
      placeholder: "جیمی اسمیت",
      img: "/svgs/user.svg",
    },
    {
      text_span: "ایمیل",
      placeholder: "Jimmy.smith1996@gmail.com",
      img: "/svgs/direct.svg",
    },
    {
      text_span: "شماره تلفن",
      placeholder: "+12345678910",
      img: "/svgs/call.svg",
    },

    {
      text_span: "رمز عبور",
      placeholder: "*********",
      img: "/svgs/key.svg",
    },
    {
      text_span: "آدرس",
      placeholder: "تهران،اندیشه،خیابان باهنر،کوچه ایران،پلاک 63",
      img: "/svgs/home-2.svg",
    },
    {
      text_span: "کد پستی",
      placeholder: "کد پستی",
      img: "/svgs/signpost.svg",
    },
  ];
  return (
    <>
      <div className="w-[150px]  relative left-[20px] top-[100px] md:top-[60px]">
        <p className="text-black text-[16px] font-bold">صفحه اطلاعات</p>
        <p className="text-gray-600 text-[12px]">اطلاعات خود را کامل کنید</p>
      </div>
      <div className=" w-[100%] h-[550px] md:w-[740px] md:h-[250px] flex justify-center md:justify-start items-center mb-[40px] md:items-start flex-wrap gap-[35px] md:gap-5  relative top-[150px] bottom-[0px] md:left-[10px] md:top-[100px] ">
        {inputs.map((item, index) => (
          <div className="w-[90%] md:w-[300px] h-[60px] md:h-[50px] rounded-[3px]  bg-[#F6F6F6] relative rounded-[5px]">
            <span className="text-gray-400 text-[12px] absolute top-[-23px]">
              {item.text_span}
            </span>
            <div className="h-[100%] inline-flex items-center justify-center">
              <img
                src={item.img}
                className=" absolute left-[3px] top-auto bottom-auto"
              />
            </div>
            <input
              className="w-[250px] h-[55px]  absolute left-[30px]  md:h-[45px] top-auto bottom-auto rounded-[5px] inline-block bg-[#F6F6F6] placeholder:text-gray-400 placeholder:text-[12px] pl-[5px] focus:outline-none"
              type="text"
              placeholder={item.placeholder}
              required
            />
            <div className="h-[100%] inline-flex items-center justify-center">
              {" "}
              <img
                src="./svgs/edit.svg"
                alt=""
                className="inline-flex absolute right-[5px] "
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
