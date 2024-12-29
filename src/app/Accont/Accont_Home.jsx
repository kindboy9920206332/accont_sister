"use client";
import { createContext, useEffect, useState } from "react";
import Accont_Pannel_meno from "./Accont_pannel/Accont_pannel";
import Personal_Accont from "./Accont_personall/personall";
import Payment_Instalments from "./Payment_Instalments/Payment";
export const PanelContext = createContext();
export default function Accont_Home() {
  const [width_window, set_width_window] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [secen_pennel, set_secen_pannel] = useState();
  const secen_pannels_name = [
    {
      id: 1,
      name_pannel: "Personal Data",
      component: <Personal_Accont></Personal_Accont>,
    },
    {
      id: 2,

      name_pannel: "Payment & Instalments",
      component: <Payment_Instalments></Payment_Instalments>,
    },
    {
      id: 3,
      name_pannel: "Orders",
      component: <Personal_Accont></Personal_Accont>,
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      set_width_window(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <PanelContext.Provider
        value={{
          FU_set_pannel: (name_pannel) => {
            set_secen_pannel(name_pannel);
          },
        }}
      >
        <div className="w-[100%] h-[86%] absolute bottom-0 flex justify-center  ">
          <div className="  h-[100%] w-[100%] md:w-[88%]  flex relative justify-between items-start bottom-0 ">
            <div className="inline-flex md:bg-gray-100 rounded-[7px] w-[100%] h-[100%] md:py-[20px] md:px-[2px] md:w-[250px] md:h-[530px]">
              <Accont_Pannel_meno></Accont_Pannel_meno>
            </div>
            {width_window > 600 ? (
              <div className="w-[74%] h-[100%] relative">
                {secen_pannels_name.map((item, index) => {
                  if (item.name_pannel === secen_pennel) {
                    return <div key={index}>{item.component}</div>;
                  } else {
                    return null;
                  }
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </PanelContext.Provider>
    </>
  );
}
