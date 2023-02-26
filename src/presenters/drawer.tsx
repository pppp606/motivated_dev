import React, { ReactNode, useLayoutEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Drawer: React.FC<Props> = ({
  isOpen = false,
  children,
  setIsOpenDrawer,
}) => {
  const [className, setClassName] = useState<string>("");

  useLayoutEffect(() => {
    let className =
      "fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform bg-white w-1/3 dark:bg-gray-800";
    if (isOpen) {
      className += " transform-none";
    } else {
      className += " translate-x-full";
    }
    setClassName(className);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent drawer-bg"
          onClick={() => setIsOpenDrawer(false)}
        />
      )}
      <div className={className}>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white transform-none"
          onClick={() => setIsOpenDrawer(false)}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </>
  );
};
