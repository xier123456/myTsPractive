
import {  useSelector } from "react-redux";
import type { RootState } from "../Store/store";
import Title from "../style/title";
import TechBackgroundNoGrid from "../style/Background";
import NotesCrad from "../style/NotesCard";

const StudyNotes= () => {

  const notes = useSelector((state: RootState) => state.notes).fristNotes;

  return (
    <TechBackgroundNoGrid>
      <section className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen ">
        <div className="max-w-5xl mx-auto mt-12">
          <Title>学习笔记</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 两列网格布局，小屏幕自动转为单列 */}
            {notes.map((note) => (
              <div  key={note.id}>
              <NotesCrad id={note.id} title={note.title} tags={note.tags}  page={note.page}/>
            </div>
            ))}
          </div>
        </div>
      </section>
    </TechBackgroundNoGrid>
  );
};

export default StudyNotes;
