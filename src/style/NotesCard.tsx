import {setNotesInitialStat} from '../Store/slice/NotesSlice/NotsSlice'
import type { NotesInterface } from "../Store/slice/NotesSlice/NotsSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const NotesCard = ({ id, title, date, content, tags }: NotesInterface) => {
  
    const navigate= useNavigate()
    const dispatch = useDispatch()


    const handleNotesID = (id:number) => {
        dispatch(setNotesInitialStat(id))
        navigate(`/Notes/${id}`)    
  };

  return (
    <article
      key={id}
      onClick={() => handleNotesID(id)}
      className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default NotesCard;
