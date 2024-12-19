"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { PanelContext } from "../Accont/Accont_Home";
import { useRouter } from "next/navigation";
export default function Accont_Pannel_meno() {
  const route = useRouter();
  const { FU_set_pannel } = useContext(PanelContext);
  const [width_window, set_width_window] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [item_meno, set_item_meno] = useState([
    {
      porofile: "Jimmy smith",
      img: "/svgs/profile-circle.svg",
      class: "text-black font-bold",
      contain: false,
      Link: "/Accont_pannel",
    },
    {
      porofile: "Personal Data",
      img: "/svgs/user-edit.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "personal",
      contain: false,
      Link: "/Accont_personall",
      class2: "text-blue-500 ",
    },
    {
      porofile: "Payment & Instalments",
      img: "/svgs/dollar-circle.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Payment",
      contain: false,
      Link: "/Payment_Instalments",
      class2: "text-blue-500 ",
    },
    {
      porofile: "Orders",
      img: "/svgs/bag.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Orders",
      contain: false,
      Link: "/Accont_pannel",
      class2: "text-blue-500 ",
    },
    {
      porofile: "Wish list",
      img: "/svgs/heart.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer ",
      click_go_page: "Wish list",
      contain: false,
      Link: "/Accont_pannel",
      class2: "text-blue-500 ",
    },
    {
      porofile: "Discounts",
      img: "/svgs/gift.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Discounts",
      contain: false,
      Link: "/Accont_pannel",
      class2: "text-blue-500 ",
    },
    {
      porofile: "Security & access",
      img: "/svgs/security-safe.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Security",
      contain: false,
      Link: "/Accont_pannel",
      class2: "text-blue-500 ",
    },
    {
      porofile: "Notification",
      img: "/svgs/notification.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer ",
      click_go_page: "Notification",
      contain: false,
      Link: "/Accont_pannel",
      class2: "text-blue-500 ",
    },
    {
      porofile: "Contact us",
      img: "/svgs/24-support.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Contact",
      contain: false,
      Link: "/Accont_pannel",
      class2: "text-blue-500 ",
    },
    {
      porofile: "Log out",
      img: "/svgs/logout.svg",
      class: "text-red-600",
      click_go_page: "Log_out",
      contain: false,
      Link: "/Accont_pannel",
    },
  ]);
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
      <div className="w-[100%]">
        {item_meno.map((item, index) => (
          <div
            onClick={() => {
              const new_item = [...item_meno];
              new_item.map((item, i) => {
                if (index === i && index != 0 && index != new_item.length - 1) {
                  new_item[i] = { ...item, contain: true };
                } else {
                  new_item[i] = { ...item, contain: false };
                }
              });
              set_item_meno(() => new_item);
            }}
            key={index}
            className={
              item.contain === false
                ? item.porofile === "Jimmy smith"
                  ? "flex justify-start items-center h-[70px] md:h-[50px] gap-3 pl-4 md:pl-2 relative  border border-b-[1px] border-b-gray-400  bg-gray-200 md:border-[0px] md:bg-inherit "
                  : "flex justify-start items-center h-[70px] md:h-[50px] gap-3 pl-4 md:pl-2 relative  border border-b-[1px] border-b-gray-400  md:border-[0px]"
                : "flex justify-start items-center h-[70px] md:h-[50px] gap-3 pl-4 md:pl-1   relative border-l-[3px] rounded-[5px]  md:border-l-blue-900"
            }
          >
            <img src={item.img} />
            <span
              onClick={() => {
                if (width_window > 600) {
                  FU_set_pannel(item.porofile);
                } else {
                  route.push(item.Link);
                }
              }}
              className={!item.contain ? item.class : item.class2}
            >
              {item.porofile}
            </span>
            {width_window < 600 && item.porofile != "Jimmy smith" ? (
              <img
                src="./svgs/arrow-circle-right.svg"
                className="absolute right-2 bottom-[20px]"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
}
