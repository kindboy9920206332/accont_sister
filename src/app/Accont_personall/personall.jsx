export default function Personal_Accont() {
  const inputs = [
    {
      text_span: "full name",
      placeholder: "Jimmy Smith",
      img: "/svgs/user.svg",
    },
    {
      text_span: "E-mail Address",
      placeholder: "Jimmy.smith1996@gmail.com",
      img: "/svgs/direct.svg",
    },
    {
      text_span: "Phone number",
      placeholder: "+12345678910",
      img: "/svgs/call.svg",
    },

    {
      text_span: "Password",
      placeholder: "*********",
      img: "/svgs/key.svg",
    },
    {
      text_span: "Address",
      placeholder: "HubSpot, 25 First Street, Cambridge...",
      img: "/svgs/home-2.svg",
    },
    {
      text_span: "postal",
      placeholder: "Postal code",
      img: "/svgs/signpost.svg",
    },
  ];
  return (
    <>
      <div className="w-[150px]  relative left-[20px] top-[60px]">
        <p className="text-black text-[16px] font-bold">Identification</p>
        <p className="text-gray-600 text-[12px]">Verify your identity</p>
      </div>
      <div className="w-[740px] h-[250px] flex justify-start items-start flex-wrap gap-5  relative left-[10px] top-[100px]">
        {inputs.map((item, index) => (
          <div className="w-[300px] h-[50px] rounded-[3px] bg-[#F6F6F6] relative rounded-[5px]">
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
              className="w-[250px] absolute left-[30px] h-[45px] top-auto bottom-auto rounded-[5px] inline-block bg-[#F6F6F6] placeholder:text-gray-400 placeholder:text-[12px] pl-[5px] focus:outline-none"
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
