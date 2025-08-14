import type { ReactNode } from "react";
import type React from "react";

interface Children{
  children:ReactNode
}

const TechBackgroundNoGrid:React.FC<Children> = ({children}) => {
  return (
    <div className="relativept-30   min-h-screen bg-gradient-to-br from-blue-50 to-white  ">
      {children}
 </div>
  );
};


export type{Children}

export default TechBackgroundNoGrid;
