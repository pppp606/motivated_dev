import { useRouter } from "next/router";
import React from "react";
import { Logo } from "../presenters/logo";

export const Header: React.FC = () => {
  const router = useRouter();

  const goSignup = () => {
    router.push("/signup");
  };

  const goLogin = () => {
    router.push("/login");
  };

  return (
    <nav className="fixed w-full h-16 top-0 z-50 p-4 bg-[#f3f4f5]">
      <div className="max-w-4xl mx-auto px-0 md:px-4 flex items-center justify-between flex-wrap">
        <Logo />
        <div className="flex-grow flex items-center w-auto">
          <div className="flex-grow"></div>
          <div>
            <a
              href="#"
              onClick={goLogin}
              className="inline-block text-sm px-4 py-2 leading-none border rounded border-red text-red mt-4 mr-2 lg:mt-0"
            >
              Log in
            </a>
            <a
              href="#"
              onClick={goSignup}
              className="inline-block text-sm px-4 py-2 leading-none border rounded bg-red border-red  text-white mt-4 lg:mt-0"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
