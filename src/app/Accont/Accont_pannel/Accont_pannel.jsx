"use client";
import Link from "next/link";
import { useState } from "react";
export default function Accont_Pannel_meno() {
  const [item_meno, set_item_meno] = useState([
    {
      porofile: "Jimmy smith",
      img: "/svgs/profile-circle.svg",
      class: "text-black  font-bold",
      click_go_page: "/personal",
      contain: false,
    },
    {
      porofile: "Personal Data ",
      img: "/svgs/user-edit.svg",
      class: "text-gray-700 hover:text-blue-500",
      click_go_page: "#",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Payment & Instalments",
      img: "/svgs/dollar-circle.svg",
      class: "text-gray-700 hover:text-blue-500",
      click_go_page: "#",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Orders",
      img: "/svgs/bag.svg",
      class: "text-gray-700 hover:text-blue-500",
      click_go_page: "#",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Wish list",
      img: "/svgs/heart.svg",
      class: "text-gray-700 hover:text-blue-500",
      click_go_page: "#",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Discounts",
      img: "/svgs/gift.svg",
      class: "text-gray-700 hover:text-blue-500",
      click_go_page: "#",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Security & access",
      img: "/svgs/security-safe.svg",
      class: "text-gray-700 hover:text-blue-500",
      click_go_page: "#",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Notification",
      img: "/svgs/notification.svg",
      class: "text-gray-700 hover:text-blue-500 ",
      click_go_page: "#",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Contact us",
      img: "/svgs/24-support.svg",
      class: "text-gray-700 hover:text-blue-500",
      click_go_page: "#",
      contain: false,
      class2: "text-blue-500 ",
    },
    {
      porofile: "Log out",
      img: "/svgs/logout.svg",
      class: "text-red-600",
      click_go_page: "#",
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
                  console.log(i);
                  new_item[i] = { ...item, contain: true };
                } else {
                  new_item[i] = { ...item, contain: false };
                }
              });
              set_item_meno(() => new_item);
              console.log(new_item);
            }}
            key={index}
            className={
              item.contain === false
                ? "flex justify-start items-center h-[50px] gap-3 pl-2 ml-3 "
                : "flex justify-start items-center h-[50px] gap-3  pl-2 ml-3 border border-[0px] border-l-[3px] rounded-[5px]  border-l-blue-900"
            }
          >
            <img src={item.img} />
            <Link href={item.click_go_page}>
              <span className={!item.contain ? item.class : item.class2}>
                {item.porofile}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
