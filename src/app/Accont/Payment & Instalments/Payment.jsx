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
      <div className="absolute top-[10px] left-3">
        <div>
          <p className="font-bold text-[16px] mb-3">Cards</p>
        </div>
        <div>
          <p className="text-gray-400 text-[14px]">manage payment methods</p>
        </div>
      </div>
      <div className="w-[550px] h-[150px] absolute left-3 top-[80px] flex justify-start flex-wrap gap-[5px]">
        {inputs_pay.map((item, index) => (
          <div
            key={index}
            className="w-[500px] flex items-center justify-start gap-3"
          >
            {" "}
            <div className=" bg-[#F6F6F6] flex justify-start rounded-[7px]">
              {" "}
              <input
                type="text"
                placeholder={item.placeholder}
                className="w-[250px] left-[30px] h-[45px] rounded-[5px] inline-block bg-[#F6F6F6] placeholder:text-gray-400 placeholder:text-[12px] pl-[5px] focus:outline-none"
                required
              />{" "}
              <img src="./svgs/edit.svg" alt="" />
            </div>
            <div className="flex justify-center items-center gap-2">
              {item.imgs.map((item_img, index_img) => (
                <img key={index_img} src={item_img} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" absolute top-[250px] left-3">
        <div>
          <p className="font-bold text-[16px] mb-3"> Instalments</p>
        </div>
        <div className="w-[200px]">
          <Link href={"#"}>
            <span className="text-blue-600 text-[14px]">
              Manage your instalment{" "}
            </span>{" "}
            <img src="./svgs/arrow-right.svg" className="inline-block" />
          </Link>
        </div>
      </div>
    </>
  );
}
