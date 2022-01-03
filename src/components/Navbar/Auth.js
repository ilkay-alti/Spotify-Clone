import { Menu } from "@headlessui/react";
import User from "../../icon/User.svg";
import Down from "../../icon/Down.svg";

const Auth = () => {
  //? Tailwind ui
  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`${open ? "bg-active" : "bg-black"} rounded-full`}
          >
            <div className="flex items-center gap-x-2 bg-black opacity-70 hover:bg-active rounded-full p-[3px] text-base">
              <div className="w-[28px] h-[28px]  bg-link opacity-70 justify-center flex rounded-full">
                <img src={User} alt="a" className="w-[16px] " />
              </div>
              <div className="text-[#fff] opacity-100 font-bold ">
                {" "}
                Username
              </div>
              <div className={open === true && "rotate-180"}>
                <img src={Down} alt="a" className="w-[16px] " />
              </div>
            </div>
          </Menu.Button>
          <Menu.Items className=" absolute top-full right-0   rounded translate-y-2  ">
            <Menu.Item className="flex items-center justify-start bg-active w-[188px] h-[40px] p-[12px] hover:bg-blue-300 hover:opacity-80 ">
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Account
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="flex items-center justify-start bg-active w-[188px] h-[40px] p-[12px] hover:bg-blue-300 hover:opacity-80 ">
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="flex items-center justify-start bg-active w-[188px] h-[40px] p-[12px] hover:bg-blue-300  hover:opacity-80">
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
