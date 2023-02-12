import { useRouter } from 'next/router'
import React from "react";
import { useAuth } from "../containers/authContextProvider";

export const Header: React.FC = () => {
  const router = useRouter();
  const { user } = useAuth();

  const goSignup = () => {
    router.push("/signup");
  };

  const goLogin = () => {
    router.push("/login");
  };

  return (
    <nav className="fixed w-full h-16 top-0 z-50 p-4 bg-[#f3f4f5]">
      <div className="max-w-4xl mx-auto px-0 md:px-4 flex items-center justify-between flex-wrap">
        <h1 className="flex-shrink-0">
          <div className="inline-block relative w-6 h-7 mr-2">
            <svg className="w-6 top-2.5 absolute" viewBox="0 0 377 378" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M376.57 0.750122H61.9035L0.0701904 62.5835V335.417C0.0701904 358.425 0.0702076 377.25 0.0702076 377.25H314.737L376.57 315.417V0.750122Z" fill="#E7152D"/>
            </svg>
          </div>
          <span className="text-xl inline-block pt-2">motivated.dev</span>
        </h1>
        <div className="flex-grow flex items-center w-auto">
          <div className="flex-grow"></div>
          {user ? (  
            <div className="text-sm text-[#e7152d]">Welcome, {user?.fullname}</div>
          ) : (
            <div>
              <a href="#" onClick={goLogin} className="inline-block text-sm px-4 py-2 leading-none border rounded border-[#e7152d] text-[#e7152d] mt-4 mr-2 lg:mt-0">Log in</a>
              <a href="#" onClick={goSignup} className="inline-block text-sm px-4 py-2 leading-none border rounded bg-[#e7152d] border-[#e7152d]  text-white mt-4 lg:mt-0">Sign Up</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
