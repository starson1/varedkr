import React, { useState, useEffect, useRef } from "react";
import Contact from "@/components/contact";
import WhoamI from "@/components/whoami";
import Career from "@/components/career";
import Interest from "@/components/interest";
import Paper from "@/components/papers";
import Project from "@/components/projects";
import Achievement from "@/components/achievement";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/sidebar";

export default function Index() {
  const [currentText, setCurrentText] = useState(1);
  const [sidebarVisible, setSidebarVisible] = useState(true); // Show sidebar by default
  const [showSidebarPopup, setShowSidebarPopup] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSidebarVisible(true);
        setShowSidebarPopup(false);
      } else {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebarPopup(!showSidebarPopup);
  };

  const closeSidebarPopup = () => {
    setShowSidebarPopup(false);
  };

  const indexVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="w-full h-full flex relative">
      {sidebarVisible && (
        <div className="fixed left-0 top-0 h-screen overflow-y-auto w-64">
          <Sidebar />
        </div>
      )}
      <motion.div
        className={`${
          sidebarVisible ? "pl-64" : ""
        } w-full flex flex-col bg-[#f9f9fe]`}
        initial="hidden"
        animate="visible"
        variants={indexVariants}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`${
            sidebarVisible ? "" : ""
          } min-h-screen flex flex-col bg-[#363351]`}
        >
          <div className="section m-auto flex flex-col items-center">
            <img
              src="/img/mypic.jpg"
              alt="??"
              className="rounded-full w-32 h-32"
            />
            <span className="text-3xl font-bold py-2 text-white">
              SangHyuk An
            </span>
            <div className="flex text-white">
              <div>I'm a&nbsp;</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentText}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={textVariants}
                  transition={{ duration: 0.5 }}
                >
                  {currentText === 1 && "Digital Forensic Analyst"}
                  {currentText === 2 && "e-Discovery paralegal"}
                  {currentText === 3 && "Go-Getter"}
                  {currentText === 4 && "KBL Fan"}
                </motion.div>
              </AnimatePresence>
            </div>
            <Contact />
          </div>
        </div>

        <div id="About" className="section ">
          <WhoamI />
        </div>
        <div id="Career" className="section ">
          <Career />
        </div>
        <div id="Interest" className="section ">
          <Interest />
        </div>
        <div id="Projects" className="section">
          <Project />
        </div>
        <div id="Papers" className="section">
          <Paper />
        </div>
        <div id="Achievements" className="section">
          <Achievement />
        </div>
      </motion.div>

      {!sidebarVisible && !showSidebarPopup && (
        <button
          onClick={toggleSidebar}
          className="py-4 absolute top-4 left-4 text-white z-50"
          style={{ position: "fixed" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      )}

      {showSidebarPopup && (
        <div className="fixed left-0 top-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center">
          <div className="h-full" ref={sidebarRef}>
            <button
              onClick={closeSidebarPopup}
              className="absolute top-0 end-0 p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}
