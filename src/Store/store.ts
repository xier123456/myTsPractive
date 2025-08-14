import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './slice//NotesSlice/NotsSlice'
import TechReducer from './slice/TechnologySlice/TechnologySlice'
import MisceReducer from './slice/Miscellaneous/Miscellaneous'


export const store= configureStore({
    reducer:{
        notes:notesReducer,
        Tech:TechReducer,
        Misce:MisceReducer

    }
}) 

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
