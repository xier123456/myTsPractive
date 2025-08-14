import type React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "../compoent/Header";
import Footer from "../compoent/Footer";
import Home from "../pages/Home";
import Friend from "../pages/Friend ";
import StudyNotes from "../pages/StudyNotes";
import Notestitle from "../pages/page/Notestitle";
import NotePage from "../pages/page/NotePage";

const NavOut: React.FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const NavOutNoHeader = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

const AppRoter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<NavOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/Notes" element={<StudyNotes />} />
            <Route path="/Friend" element={<Friend />} />
          </Route>
          <Route element={<NavOutNoHeader />}>
            <Route path="/Notes/:id" element={<Notestitle />} />
            <Route path="/Notes/:id/:uid" element={<NotePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoter;
