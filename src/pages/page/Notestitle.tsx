import {  useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../Store/store"
import { Link, useNavigate, useParams } from "react-router-dom"
import Title from "../../style/title"
import { setNotesInitialStat } from "../../Store/slice/NotesSlice/NotsSlice"
import TechBackgroundNoGrid from "../../style/Background"
// import { setNotesInitialStat } from "../../Store/slice/NotesSlice/NotsSlice"


const Notestitle = () => {
    const AllNote=useSelector((state:RootState)=>state.notes.fristNotes)
    const {id}= useParams<string>()
    const dispatch= useDispatch()

    const navigate= useNavigate()
    const notes=AllNote.find((n)=>n.id.toString()===id)




    const handleUid=(uid:number)=>{
        dispatch(setNotesInitialStat(uid))
        navigate(`/Notes/${id}/${uid}`)
    }
    
    
  


      if(!notes){
        return (
      <article >
        <TechBackgroundNoGrid>
        <header className=" sticky top-0 z-10 bg-white border-b border-[#EDEFF2] shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link
              to="/Notes"
              className="flex items-center text-[#8A94A6] hover:text-[#4A6FA5] transition-colors"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>返回列表</span>
            </Link>
          </div>
        </header>
        <main className="container mx-auto px-4 sm:px-6 py-8 max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">笔记未找到</h1>
          <p className="text-gray-600">找不到 ID 为 {id} 的笔记，请返回列表选择其他笔记!!。</p>
        </main>
        </TechBackgroundNoGrid>
      </article>
    );
     }
  return (
    <div className="">
        <TechBackgroundNoGrid>
          <div className="mb-5 container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link
              to="/Notes"
              className="flex items-center text-[#8A94A6] hover:text-[#4A6FA5] transition-colors"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>返回列表</span>
            </Link>
          </div>
        <Title>{notes.title}</Title>
        {notes.page.map(note=>(
            
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-[55vw] m-auto p-4" key={note.uid} onClick={()=>handleUid(note.uid)}  >
         
            <div 
             key={note.uid}
            className="group  rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.07)] hover:shadow-[0_12px_16px_rgba(59,130,246,0.12)] transition-all duration-300 overflow-hidden border border-[#EFF6FF]">
      <div className="p-6 sm:p-7">
        {/* 标题 - 主蓝色，hover时加深微妙层次 */}
        <h3 className=" text-xl sm:text-2xl font-semibold  mb-3 group-hover:text-[#1D4ED8] transition-colors duration-300 leading-tight font-sans">
          {note.title}
        </h3>
        
        {/* 摘要 - 浅蓝灰，保持柔和对比 */}
        <p className="text-[#64748B] mb-5 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base leading-relaxed font-sans">
        {note.text1}
        </p>
        
        {/* 元数据区 - 淡蓝分隔，标签用主色浅变体 */}
        <div className="flex justify-between items-center text-xs sm:text-sm pt-3 border-t border-[#EFF6FF]">
          <span className="text-[#94A3B8]">{note.dateEnd}</span>
          <span className="bg-[#EFF6FF] text-[#2563EB] px-2.5 py-0.5 rounded-full">学习笔记</span>
        </div>
      </div>
    </div>
         
        </div>

        ))}
        </TechBackgroundNoGrid>
    </div>
    
  )
}

export default Notestitle