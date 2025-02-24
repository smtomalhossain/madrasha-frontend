"use client";

import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Menubar from "./Menubar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full bg-green-600 relative px-2 pt-5 pb-10">
        <div
          id="_rht_toaster"
          style={{
            position: "fixed",
            zIndex: 9999,
            top: "16px",
            left: "16px",
            right: "16px",
            bottom: "16px",
            pointerEvents: "none",
          }}
        >
          {" "}
        </div>
        <div className="max-w-6xl mx-auto px-3">
          <div className="w-full flex flex-col md:flex-row justify-center items-end gap-7">
            <div className="text-center w-full md:w-auto justify-center md:justify-end md:text-right flex flex-col gap-2 order-2 md:order-none">
              <h1 className="text-2xl md:text-3xl font-bold text-green-100 whitespace-nowrap">
                AT-Tahfiz International Madrasha
              </h1>
              <p className="text-green-200"> Kshiani Bazar Up, Kashiani</p>
            </div>

            <Image
              className="mx-auto bg-green-300 rounded-full "
              src="/logo.webp"
              alt=""
              width={150}
              height={150}
            />
            <div className="text-center md:flex  hidden  md:text-left  flex-col gap-2 order-3 md:order-none">
              <h1 className="text-lg md:text-3xl font-bold text-green-100 whitespace-nowrap">
              আত-তাহফিজ ইন্টারন্যাশনাল মাদ্রাসা
              </h1>
              <p className="text-green-200">কাশিয়ানি বাজার, কাশিয়ানি</p>
            </div>
          </div>
          <div className="flex text-green-50 justify-center items-center p-2 text-center">
            আল্লাহ ভীরু, সৎ, যোগ্য ও দেশপ্রেমিক নাগরিক তৈরীর অঙ্গীকার
          </div>
        </div>
        <div className="container left-[50%] translate-x-[-50%] mx-auto bg-white rounded-md px-3 p-1 flex justify-between items-center shadow-md absolute -bottom-7 z-50">
          <div className="flex justify-start gap-3 items-center">
            <button className="block md:hidden text-2xl text-primary">
              <GiHamburgerMenu className="text-green-500 text-3xl" />
            </button>
            <Image src="/logo.webp" alt="" width={50} height={50} />
          </div>
          <Menubar />
          <div className="bg-green-500 rounded-md">
            <Link
              href="/admission"
              className="px-3 flex justify-center items-center gap-3 p-2 rounded-md bg-primary hover:bg-hover font-medium text-white"
              aria-label="Go to online admission page"
            >
              অনলাইন ভর্তি
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Header;
