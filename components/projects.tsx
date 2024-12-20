import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";

interface Card {
  id: string;
  category: string;
  name: string;
  company: string;
  position: string;
}

const Project = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [groupedCards, setGroupedCards] = useState<{ [key: string]: Card[] }>(
    {}
  );
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setCards(data);

        // Group the cards by category
        const grouped = data.reduce(
          (result: { [key: string]: Card[] }, card: Card) => {
            if (result[card.category]) {
              result[card.category].push(card);
            } else {
              result[card.category] = [card];
            }
            return result;
          },
          {}
        );
        setGroupedCards(grouped);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set the initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const cardWidth = 300;
  const cardHeight = 220;
  const containerPadding = 20;

  return (
    <div className="flex flex-col m-12 space-y-20 justify-center py-10">
      <div className="grid gap-4">
      <div className="text-5xl font-extrabold">Projects</div>
        {Object.entries(groupedCards).map(([category, cards]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold mt-6 py-2">{category}</h2>
            <Divider className="" />
            <div
              className={`grid ${
                windowWidth <= cardWidth * 3 + containerPadding * 3
                  ? windowWidth <= cardWidth * 2 + containerPadding * 2
                    ? "grid-cols-1"
                    : "grid-cols-2"
                  : "grid-cols-3"
              } gap-4 py-4`}
            >
              {cards.map((card) => {
                const color = "blue"; // Generate random color
                return (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    key={card.id}
                    className="bg-white p-4 shadow cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: cardWidth,
                      height: cardHeight,
                    }}
                  >
                    <div className="text-base font-bold text-black">
                      <span className="w-full p-0.5 bg-black lg:w-1/3 "></span>
                      {card.company ? (
                          <span className="pl-1">{card.company}</span>
                      ) : (<span className="pl-1">{card.name}</span>)}
                    </div>
                    <div className="h-3/5">
                    {card.company ? (
                          <span className="pl-1 text-gray-400">{card.name}</span>
                      ) : null }
                    </div>
                    <div
                      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-${color}-200 text-${color}-700`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-activity mr-2"
                      >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      {card.position}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
