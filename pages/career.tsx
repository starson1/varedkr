import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { items } from "@/pages/api/careerdata";

interface Itemprops {
  id: number;
  name: string;
  category: string;
  position: string;
  date: string;
  detail: string;
}

export default function App() {
  const Item = (id: number) => {
    const { category, name, position, date, detail } = items.find(
      (item) => item.id === id
    );

    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          className="overlay"
        >
          <Link href="/" />
        </motion.div>
        <div className="card-content-container open">
          <motion.div
            className="card-content"
            layoutId={`card-container-${id}`}
          >
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <img className="card-image" src={`images/${id}.jpg`} alt="" />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <span className="category">{category}</span>
              <h2>{name}</h2>
            </motion.div>
            <motion.div className="content-container" animate>
              {position}
              {date}
              {detail}
            </motion.div>
          </motion.div>
        </div>
      </>
    );
  };

  const List = ({ selectedId }: { selectedId: string }) => {
    return (
      <ul className="">
        {items.map((card) => (
          <Card
            key={String(card.id)}
            {...card}
            isSelected={String(card.id) === selectedId}
          />
        ))}
      </ul>
    );
  };

  const Card = ({
    id,
    name,
    category,
    position,
    date,
    detail,
  }: Itemprops & { isSelected: boolean }) => {
    return (
      <li className="">
        <div className="">
          <motion.div className="">
            <motion.div className="card-image-container">
              <img className="card-image" src={`/images/${id}.jpg`} alt="" />
            </motion.div>
            <motion.div className="title-container">
              <span className="category">{category}</span>
              <h2>{name}</h2>
            </motion.div>
          </motion.div>
        </div>
        <Link href={`/${id}`} passHref />
      </li>
    );
  };

  const Store = ({ match }: { match: { params: { id: number } } }) => {
    let { id } = match.params;

    return (
      <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && <Item id={id} key="item" />}
      </AnimatePresence>
      </>
    );
  };

  return (
    <div className="container">
      <List selectedId="" />
      <Store match={{ params: { id: 0 } }} />
    </div>
  );
}
