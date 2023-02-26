import React, { ReactNode, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { Logo } from "../presenters/logo";
import { useAuth } from "../containers/authContextProvider";

interface Props {
  children: ReactNode;
}

export const UserTwoColumn: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { user, signOut } = useAuth();

  // useLayoutEffect(() => {
  //   if (!user) {
  //     router.push("/");
  //   }
  // }, [router, user]);

  const signOutAndRedirect = () => {
    signOut();
    router.push("/");
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="m-2 mb-8">
            <Logo />
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                onClick={() => {
                  router.push("/dashboard");
                }}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined w-6 h-6 text-red">
                  monitoring
                </span>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  router.push("/settings");
                }}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined w-6 h-6 text-red">
                  settings
                </span>
                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={signOutAndRedirect}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined w-6 h-6 text-red">
                  logout
                </span>
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};
