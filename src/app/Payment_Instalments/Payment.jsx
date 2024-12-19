import Link from "next/link";
export default function Payment_Instalments() {
  const inputs_pay = [
    {
      placeholder: "Credit or Debit cards",
      imgs: [
        "./svgs/american express.svg",
        "./svgs/master card.svg",
        "./svgs/visa.svg",
      ],
    },
    {
      placeholder: "PayPal",
      imgs: ["./svgs/paypal.svg"],
    },
  ];
  return (
    <>
      <div className="absolute top-[150px] md:top-[10px]   left-4 md:left-3">
        <div>
          <p className="font-bold text-[20px] md:text-[16px] mb-3">Cards</p>
        </div>
        <div>
          <p className="text-gray-400 text-[16px] md:text-[14px]">
            manage payment methods
          </p>
        </div>
      </div>
      <div className=" h-[200px] w-[100%] md:w-[550px] md:h-[150px] absolute left-4 md:left-3 top-[250px] md:top-[80px] flex justify-end flex-wrap gap-[60px] md:gap-[5px]">
        {inputs_pay.map((item, index) => (
          <div
            key={index}
            className="w-[100%] md:w-[500px] flex items-center relative  flex-wrap justify-start gap-3"
          >
            {" "}
            <div className="w-[93%]  md:w-[300px] bg-[#F6F6F6] flex justify-between items-center rounded-[7px] h-[70px] md:h-[45px] ">
              {" "}
              <input
                type="text"
                placeholder={item.placeholder}
                className="w-[300px] h-[60px] text-[20px] md:text-[18px] md:w-[250px] left-[30px] md:h-[45px]  rounded-[5px] inline-block bg-[#F6F6F6] placeholder:text-gray-400 placeholder:text-[18px] placeholder:md:text-[14px] pl-[5px] focus:outline-none"
                required
              />{" "}
              <div>
                <img
                  src="./svgs/edit.svg"
                  className=" w-[40px] h-[40px] md:w-[25px] md:h-[25px]"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 absolute top-[80px] right-[22px] md:relative md:top-0 md:right-0">
              {item.imgs.map((item_img, index_img) => (
                <img key={index_img} src={item_img} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" absolute  top-[500px] md:top-[250px] left-2 md:left-3">
        <div>
          <p className="font-bold text-[20px] md:text-[16px] mb-3">
            {" "}
            Instalments
          </p>
        </div>
        <div className="w-[200px]">
          <Link href={"#"}>
            <span className="text-blue-600 text-[16px] md:text-[14px]">
              Manage your instalment{" "}
            </span>{" "}
            <img src="./svgs/arrow-right.svg" className="inline-block" />
          </Link>
        </div>
      </div>
    </>
  );
}
