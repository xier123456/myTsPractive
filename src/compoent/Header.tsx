import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header:React.FC = () => {

    interface btnInterface{
        id:number
        tlitle:string
        hrfe:string
    }

  const [HbtnStyle] = useState<btnInterface[]>([
    { id: 1, tlitle: "首页",hrfe: "/"},
    { id: 2, tlitle: "学习笔记", hrfe: "/Notes"},
    { id: 3, tlitle: "友链",hrfe: "/Friend",},
    { id: 4, tlitle: "说说",hrfe: "/",},
    { id: 5, tlitle: "个人发展图",hrfe: "/",},
    { id: 6, tlitle: "关于我",hrfe: "/",},
  ])

  const btnStyle =
    "text-[17px] z-10 btn p-4 btn-ghost btn-info mr-4 hover:text-white transition-all duration-500 ease-in-out";
  return (
    <div>
      <div className="navbar fixed  z-1000">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-100 mt-4"
            >
             {HbtnStyle.map(item=>(
              <li key={item.id}>
                <Link to={item.hrfe}>{item.tlitle}</Link>
              </li>
                ))}  
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">HaoWhite</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
             {HbtnStyle.map(item=>(
              <li key={item.id}>
                <Link to={item.hrfe} className={btnStyle}>{item.tlitle}</Link>
              </li>
                ))} 
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">建议</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
