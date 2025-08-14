import type React from "react";
import Title from "../style/title";

const Friend: React.FC = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 ">
      <div className="mt-24">
        <Title>友链</Title>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-[55vw] m-auto p-4">
        <div className="group bg-white rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.07)] hover:shadow-[0_12px_16px_rgba(59,130,246,0.12)] transition-all duration-300 overflow-hidden border border-[#EFF6FF]">
          <div className="p-6 sm:p-7 ">
            {/* 标题 - 主蓝色，hover时加深微妙层次 */}
            <h3 className="text-xl sm:text-2xl font-semibold  mb-3 group-hover:text-[#1D4ED8] transition-colors duration-300 leading-tight font-sans ">
              好友列表
            </h3>

            {/* 摘要 - 浅蓝灰，保持柔和对比 */}
            <p className="text-[#64748B] mb-5 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base leading-relaxed font-sans">
              空空如也.....
            </p>

            {/* 元数据区 - 淡蓝分隔，标签用主色浅变体 */}
            <div className="flex justify-between items-center text-xs sm:text-sm pt-3 border-t border-[#EFF6FF]">
              <span className="text-[#94A3B8]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
