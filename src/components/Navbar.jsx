import React from "react";
import { IoMdPerson, IoMdLock, IoMdCart, IoMdSearch } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const menuList = ["red", "green", "blue", "purple"];
  const navigate = useNavigate();

  return (
    <>
      {/* 개인정보 */}
      <div className="flex justify-end">
        <div className="flex m-2.5 items-center gap-1 cursor-pointer">
          <IoMdPerson />
          <div>MY PAGE</div>
        </div>
        <div className="flex m-2.5 items-center gap-1 cursor-pointer">
          <IoMdCart />
          <div>SHOPPING BAG</div>
        </div>
        <div className="flex m-2.5 items-center gap-1 cursor-pointer">
          <IoMdLock />
          <Link to="/login">LOGIN</Link>
        </div>
      </div>

      {/* 로고 */}
      <div className="flex justify-center">
        <img
          src="https://ifdalivestorage.blob.core.windows.net/user-uploads/profile/2638/00000000-0000-0000-0000-000000000000/logo_906e95183c6d0bce2753aa5a1a0f2154ac7434e4.png"
          alt="murthehelp"
          width={100}
        />
      </div>

      {/* 메뉴, 검색 */}
      <div className="flex justify-between items-center">
        <ul className="flex justify-center flex-grow">
          {menuList.map((item, index) => (
            <li key={index} className="p-2.5">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center border-b-2 border-solid border-stone-300 absolute right-5 p-1">
          <IoMdSearch />
          <input type="text" placeholder="search..." className="ml-1" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
