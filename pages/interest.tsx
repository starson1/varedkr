import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import Link from "next/link";

interface Card {
  id: number;
  img: string;
  category: string;
  name: string;
  detail: number;
}

const Interest = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [groupedCards, setGroupedCards] = useState<{ [key: string]: Card[] }>(
    {}
  );
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/interest");
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
    <div className="flex justify-center py-10">
      <div className="grid gap-4">
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
              {cards.map((card) => (
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
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "100%",
                    backgroundPosition: "bottom 10px center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="text-base font-bold text-black">
                    <span className="w-full p-0.5 bg-black lg:w-1/3 "></span>
                    <span className="pl-1">{card.name}</span>
                  </div>
                  <div>
                  <span className="">
                      {card.detail ? (
                        <div>
                          {Array.from({ length: card.detail }).map((_, index) => (
                            <span key={index} className="text-yellow-500 text-xl">*</span>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                  </span>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
