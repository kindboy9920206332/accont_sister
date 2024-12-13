import Accont_Pannel_meno from "./Accont_pannel/Accont_pannel";
import Personal_Accont from "./Accont_personall/personall";

export default function Accont_Home() {
  return (
    <>
      <div className="w-[100%] h-[86%] absolute bottom-0 flex justify-center  ">
        <div className="w-[88%] h-[100%] flex relative justify-between items-start bottom-0 ">
          <div className=" inline-flex py-[20px] px-[2px] bg-gray-100 rounded-[7px] w-[250px] h-[550px]">
            <Accont_Pannel_meno></Accont_Pannel_meno>
          </div>
          <div className="w-[74%] h-[100%]">
            <Personal_Accont></Personal_Accont>
          </div>
        </div>
      </div>
    </>
  );
}
