"use client";
import { useState, useEffect } from "react";
import { faHouse,faMagnifyingGlass, faBell, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "vaul";
import Image from "next/image";
import avatar from "@/app/assets/photo.png";
import { AnimatedTabs } from "../ui/AnimatedTabs";
import LinkdenBanner from "../LinkdenBanner/LinkdenBanner";

function MainHeader() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <LinkdenBanner />
        <div className="sticky top-2 w-full z-[99999]">
      {/* LinkedIn Banner */}


      {/* Main Header */}
      <div
        className={`container mx-auto sm:px-[10%]`}
      >
        <div
          className={`flex justify-between items-center p-2 px-4 my-2 rounded-[100px] transition-all duration-300 ${
            isBlurred ? "backdrop-blur-lg bg-[#3c3c494d] shadow-lg" : ""
          }`}
        >
          <div className="flex text-white items-center justify-between w-full">
            <figure className="flex items-center gap-3">
              <Image
                src={avatar}
                alt="User profile picture of Mohamed, FullStack Developer"
                title="User Profile"
                className="w-10 h-10 rounded-full border-2 border-[#7777ef]"
                priority
              />
              <figcaption>
                <h1 className="text-sm font-semibold">Mohamed</h1>
                <p className="text-gray-400">FullStack Developer</p>
              </figcaption>
            </figure>
            <div className="flex items-center">
              {/* AnimatedTabs تظهر على الشاشات الأكبر */}
              <div className="hidden sm:flex">
                <AnimatedTabs
                  tabs={[
                    { label: "Home", link: "/#" },
                    { label: "About", link: "/#" },
                    { label: "Portfolio", link: "/#" },
                  ]}
                />
              </div>

              {/* فاصل عمودي */}
              <div className="hidden md:block h-1 w-1 rounded-full  bg-white dark:border-gray-700 mx-2 "></div>

              {/* زر التبديل للـ dark mode */}
              <button
                onClick={() => document.body.classList.toggle("dark")}
                className="h-10 w-10 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <svg
                  className="fill-violet-700 block dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  className="fill-yellow-500 hidden dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <Drawer.Root modal={false}>
            <Drawer.Trigger className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#3c3c494d] backdrop-blur-md text-white">
              <span className="text-xl">☰</span>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40 sm:hidden" />
              <Drawer.Content className="backdrop-blur-lg bg-[#16161ee0] z-[999999] shadow-lg flex flex-col rounded-t-[30px] mt-24 h-fit fixed bottom-0 left-0 right-0 sm:hidden">
                <div className="p-4">
                  <div className="mx-auto w-12 h-1.5 rounded-full bg-[#282832] mb-8" />
                  {[
                    { icon: faHouse, label: "Home" },
                    { icon: faMagnifyingGlass, label: "Explore" },
                    { icon: faBell, label: "Notifications" },
                    { icon: faEnvelope, label: "Messages" },
                  ].map((item, index) => (
                    <a href="#" key={index}>
                      <div className="p-3 text-[#a0a0aa] hover:bg-[#282832] hover:text-white rounded-md flex items-center gap-3 transition-colors duration-200">
                        <FontAwesomeIcon className="text-lg" icon={item.icon} />
                        <span className="text-base font-medium">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </div>
    </>

  );
}

export default MainHeader;
