import Accont_Pannel_meno from "./Accont_pannel/Accont_pannel";

export default function Accont_Home() {
  return (
    <>
      <div className="w-[100%] h-[90%] absolute bottom-0 flex justify-center  ">
        <div className="w-[88%] h-[100%] flex relative justify-center items-start bottom-0 ">
          {" "}
          <div className="absolute left-0 inline-flex">
            {" "}
            <Accont_Pannel_meno></Accont_Pannel_meno>
          </div>
        </div>
      </div>
    </>
  );
}
