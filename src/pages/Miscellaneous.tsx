
import { useSelector } from "react-redux";
import type { RootState } from "../Store/store";
import TechBackgroundNoGrid from "../style/Background";
import Title from "../style/title";


const Miscellaneous = () => {
  const MisceUp=useSelector((state:RootState)=>state.Misce).fristMiscellaneous

  return (
    <TechBackgroundNoGrid>
    <div className="pb-16 min-h-screen  p-4 md:p-8">
      {/* 标题区 */}
      <header className="mt-12">
      <Title>
        ~ 简简单单的心里话 ~
      </Title>
      </header>

      {/* 时间线容器 */}
      <div className="max-w-4xl mx-auto">
        <ul className="timeline timeline-vertical relative">
          {/* 中间连接线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2 z-0"></div>
          
          {MisceUp.map((mis, index) => (
            <li key={mis.MisceUid} className="relative z-10 mb-10 md:mb-16 last:mb-0">
              {/* 左右交替的内容卡片 */}
              <div 
                className={`timeline-${index % 2 === 0 ? 'start' : 'end'} pr-8 md:pr-12 pl-4 md:pl-0`}
              >
                <div 
                  className={`p-6 md:p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md 
                             ${index % 2 === 0 
                               ? 'bg-white border-l-4 border-blue-400 hover:translate-x-1' 
                               : 'bg-white border-r-4 border-blue-300 hover:-translate-x-1'
                             }`}
                >
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {mis.content}
                  </p>
                  
                  {/* 小日期标识（可选） */}
                  <div className={`mt-4 text-xs text-gray-500 ${index % 2 === 0 ? 'text-blue-500' : 'text-blue-400'}`}>
                    记录于 {mis.date} 
                  </div>
                </div>
              </div>
              
              {/* 中间节点 */}
              <div className="timeline-middle">
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center shadow-md
                  ${index % 2 === 0 ? 'bg-blue-400' : 'bg-blue-300'}
                  transition-transform duration-300 hover:scale-125
                `}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </TechBackgroundNoGrid>
  );
};

export default Miscellaneous;