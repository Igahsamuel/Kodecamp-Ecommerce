import Cart from "./Cart";
import { useState } from "react";
import SideBar from "./SideBar";

function Navbar({ fill, addItems }) {
  const [showSideBar, setShowSideBar] = useState(false);
  // const fill = "black";
  return (
    <>
      <div className="flex justify-between px-[9px] md:px-[40px] items-center py-[10px] shadow-xl relative">
        <div>
          <h3 className="text-blue-400 text-[14px] md:text-[30px] font-bold">
            KodeCamp E-commerce
          </h3>
        </div>

        <div className="flex items-center gap-[20px] md:text-[22px]">
          <p>Login</p>
          <p className="bg-blue-600 text-white rounded-lg py-1 px-3">
            Register
          </p>
          <Cart fill={fill} onClick={() => setShowSideBar(!showSideBar)} />
        </div>
      </div>
      {showSideBar && (
        <SideBar
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
          addItems={addItems}
        />
      )}
    </>
  );
}

export default Navbar;
