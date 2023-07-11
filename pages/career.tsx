import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import Link from "next/link";

interface Card {
    id: number;
    img: string;
    category: string;
    name: string;
    date: string;
    detail: string;
    link: string;
}

const Cards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/career");
        const data = await response.json();
        setCards(data);
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

  const handleCardClick = (cardId: any) => {
    setSelectedCard(cardId);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const cardWidth = 300;
  const cardHeight = 220;
  const containerPadding = 20;

  return (
    <div className="flex justify-center py-10">
      <div
        className={`grid ${
          windowWidth <= cardWidth * 3 + containerPadding * 3
            ? windowWidth <= cardWidth * 2 + containerPadding * 2
              ? "grid-cols-1"
              : "grid-cols-2"
            : "grid-cols-3"
        } gap-4 `}
      >
        {cards.map((card) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            key={card.id}
            className="bg-white p-4 shadow cursor-pointer"
            onClick={() => handleCardClick(card.id)}
            whileHover={{ scale: 1.1 }}
            style={{
              width: cardWidth,
              height: cardHeight,
              backgroundImage: `url(${card.img})`,
              backgroundSize: "50%",
              backgroundPosition: "bottom 10px center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-base font-bold text-gray-400">
              <span className="w-full p-0.5 bg-gray-500 lg:w-1/3 "></span>
              <span className="pl-1">{card.category}</span>
            </div>

            <div className="text-lg font-bold py-1 whitespace-pre-line">{card.name}</div>
            <div className="absolute">
                <span className="text-gray-400">{card.date}</span>
            </div>
          </motion.div>
        ))}
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "
            onClick={handleClosePopup}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
              className="bg-white p-4 shadow w-1/3 h-1/3 rounded-lg"
            >
              <h2 className="text-lg font-bold flex justify-center">
                Detail
              </h2>
              <Divider />
              <div className="h-4/6">
                <div className="h-full whitespace-pre-line flex justify-center py-2">
                {cards.find((card) => card.id === selectedCard)?.detail}
                </div>
                <Link
                    className="flex justify-center" 
                    href={cards.find((card) => card.id === selectedCard)?.link ?? ""}>
                    <a>
                        <button
                          type="button"
                          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 640 512"
                            fill="currentColor"
                            className="pr-2"
                          >
                            <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                          </svg>
                          More Information
                        </button>
                    </a>
                    </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cards;