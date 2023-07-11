import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";



const datas = [
  {
    id: 0,
    category: "University",
    name: "Department of Cyber Defense, Korea Univ",
    position: "Undergraduate Student (B.S in Information Security)",
    date: "2019.03 ~ 2023.02",
    detail: "http://korea.ac.kr",
  },
  {
    id: 1,
    category: "Lab",
    name: "DFRC",
    position: "Undergraduate Researcher",
    date: "2021.01 ~ 2022.02",
    detail: "http://forensic.korea.ac.kr/",
  },
  {
    id: 2,
    category: "Internship",
    name: "PLAINBIT",
    position: "Assistant Analyst",
    date: "2022.02.01 ~ 2022.05.31",
    detail: "http://plainbit.co.kr/",
  },
];
 
function Card({id,name,category}){
    return(
        <li className={`card $`}
    );
}
export function careerList( {selectedId}){
    return(
        <ul>
            {items.map(cared =>(
                <Card key={cared.id} {...card} isSelected={cared.id ===selectedId} />
            ))}
        </ul>
    );
}

export function careerItem( {id }){
    const { category, name } = datas.find(item => item.id === id);
    return(
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            style={{ pointerEvents: "auto" }}
            className="overlay">
                <Link to="/" />
            </motion.div>
            <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{name}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            This will be other content
          </motion.div>
        </motion.div>
      </div>
        </>
    )
}

function Store({ match }) {
    let {id} = match.params;
    
    return (
        <>
            <careerList selectedId={id} />
            <AnimatePresence>
                {id <careerItem id={id} key="item"} />}
            </AnimatePresence>
        </>
    )
}

const Career = () => {

  return (
    <div>
        <AnimateSharedLayout type="crossfade">
            <Router>
                <Route path={["/:id","/"]} component={Store} />
            </Router>
        </AnimateSharedLayout>
    </div>
  );
};

export default Career;
