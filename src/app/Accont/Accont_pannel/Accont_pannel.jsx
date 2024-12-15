"use client";
import { useContext, useState } from "react";
import { PanelContext } from "../Accont_Home";
export default function Accont_Pannel_meno() {
  const { FU_set_pannel } = useContext(PanelContext);
  const [item_meno, set_item_meno] = useState([
    {
      porofile: "Jimmy smith",
      img: "/svgs/profile-circle.svg",
      class: "text-black  font-bold",
      contain: false,
    },
    {
      porofile: "Personal Data",
      img: "/svgs/user-edit.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "personal",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Payment & Instalments",
      img: "/svgs/dollar-circle.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Payment",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Orders",
      img: "/svgs/bag.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Orders",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Wish list",
      img: "/svgs/heart.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Wish list",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Discounts",
      img: "/svgs/gift.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Discounts",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Security & access",
      img: "/svgs/security-safe.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Security",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Notification",
      img: "/svgs/notification.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer ",
      click_go_page: "Notification",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Contact us",
      img: "/svgs/24-support.svg",
      class: "text-gray-700 hover:text-blue-500 cursor-pointer",
      click_go_page: "Contact",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Log out",
      img: "/svgs/logout.svg",
      class: "text-red-600",
      click_go_page: "Log_out",
      contain: false,
    },
  ]);

  return (
    <>
      <div>
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
                ? "flex justify-start items-center h-[50px] gap-3 pl-2 ml-3 "
                : "flex justify-start items-center h-[50px] gap-3  pl-2 ml-3 border border-[0px] border-l-[3px] rounded-[5px]  border-l-blue-900"
            }
          >
            <img src={item.img} />
            <span
              onClick={() => FU_set_pannel(item.porofile)}
              className={!item.contain ? item.class : item.class2}
            >
              {item.porofile}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
