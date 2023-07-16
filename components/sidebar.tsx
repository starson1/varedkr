import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const Sidebar = () => {
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
        <div className="px-4 py-4 font-bold text-xl text-white">
          <ScrollLink
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={smoothScrollToTop}
          >
            VAREDKR
          </ScrollLink>
        </div>
        <div className="font-bold flex flex-col text-white">
          <ScrollLink
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="hover:text-[#f2d271]"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="hover:text-[#f2d271]"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="career"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="hover:text-[#f2d271]"
          >
            Career
          </ScrollLink>
          <ScrollLink
            to="interest"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="hover:text-[#f2d271]"
          >
            Interest
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="hover:text-[#f2d271]"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="papers"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="hover:text-[#f2d271]"
          >
            Papers
          </ScrollLink>
          <ScrollLink
            to="achievement"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="hover:text-[#f2d271]"
          >
            Achievements
          </ScrollLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Sidebar;