import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useEffect,useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const sections = ["Home", "About", "Career", "Interest", "Projects", "Papers", "Achievements"];

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionElement = document.getElementById(section);
        
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;

          if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScrollToTop = () => {
    scroll.scrollToTop();
  };

  const sidebarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.nav
      className="bg-[#363351] h-full"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 justify-between flex-row">
        <div className="px-4 py-10 font-bold text-2xl text-white">
          <ScrollLink
            to="Home"
            spy={true}
            duration={500}
            smooth={true}
            onClick={smoothScrollToTop}
            className="flex space-x-1"
          >
            <span>VARED</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="0.625em" viewBox="0 0 448 512" fill="#FF4B61"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"/></svg>
            <span>KR</span>
          </ScrollLink>
        </div>
        <div className=" py-20 font-bold flex flex-col text-white space-y-6 text-xl">
          <ScrollLink
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={smoothScrollToTop}
            className={`hover:text-[#f2d271]  px-4 items-center flex ${activeSection === "Home" ? "text-[#f2d271]" : ""}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="currentColor" className="px-3 flex items-center justify-center"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
            Home
          </ScrollLink>
          <ScrollLink
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            activeClass="active"
            className={`hover:text-[#f2d271]  px-4 items-center flex ${activeSection === "About" ? "text-[#f2d271]" : ""}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"fill="currentColor" className="px-3 flex items-center justify-center"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            About
          </ScrollLink>
          <ScrollLink
            to="Career"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            activeClass="active"
            className={`hover:text-[#f2d271]  px-4 items-center flex ${activeSection === "Career" ? "text-[#f2d271]" : ""}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"fill="currentColor" className="px-3 flex items-center justify-center"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
            Career
          </ScrollLink>
          <ScrollLink
            to="Interest"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            activeClass="active"
            className={`hover:text-[#f2d271]  px-4 items-center flex ${activeSection === "Interest" ? "text-[#f2d271]" : ""}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"fill="currentColor" className="px-3 flex items-center justify-center"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>
            Interest
          </ScrollLink>
          <ScrollLink
            to="Projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            activeClass="active"
            className={`hover:text-[#f2d271]  px-4 items-center flex ${activeSection === "Projects" ? "text-[#f2d271]" : ""}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"fill="currentColor" className="px-3 flex items-center justify-center"><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"/></svg>
            Projects
          </ScrollLink>
          <ScrollLink
            to="Papers"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            activeClass="active"
            className={`hover:text-[#f2d271]  px-4 items-center flex ${activeSection === "Papers" ? "text-[#f2d271]" : ""}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"fill="currentColor" className="px-3 flex items-center justify-center"><path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg>
            Papers
          </ScrollLink>
          <ScrollLink
            to="Achievement"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className={`hover:text-[#f2d271]  px-4 items-center flex ${activeSection === "Achievements" ? "text-[#f2d271]" : ""}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"fill="currentColor" className="px-3 flex items-center justify-center"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
            Achievements
          </ScrollLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Sidebar;