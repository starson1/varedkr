import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import Link from "next/link";

interface Card {
  id: string;
  category: string;
  name: string;
  subname: string;
  organization: string;
  grade: string;
  certid: string;
  acquisition: string;
  url: string;
  file: string;
}

const Certificate = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [groupedCards, setGroupedCards] = useState<{ [key: string]: Card[] }>(
    {}
  );
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/certificate");
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
    <div className="flex justify-center py-10 flex-col m-12 space-y-20">
      <div className="grid gap-4">
        <div className="text-5xl font-extrabold">Certificate</div>
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
                const color = "gray"; // Generate random color
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
                      {card.subname ? (
                        <span className="pl-1">{card.subname}</span>
                      ) : (
                        <span className="pl-1">{card.name}</span>
                      )}
                    </div>
                    <div className="h-1/5">
                      {card.subname ? (
                        <span className="pl-1 text-gray-400">{card.name}</span>
                          
                        ) : null}
                    </div>
                    <span className="pl-1 text-gray-400">ISSUER : {card.organization}</span>
                    <div className="">
                      {card.certid ? (
                        <span className="pl-1 text-gray-400">
                          ID : {card.certid}
                        </span>
                      ) : null}
                    </div>
                    <div className="h-1/5">
                      {card.acquisition ? (
                        <span className="pl-1 text-gray-400">
                          DATE : {card.acquisition}
                        </span>
                      ) : null}
                    </div>
                    <div className="flex">
                      <div className="py-2 bottom-1">
                        <Link legacyBehavior href={card.url}>
                          <a className="">
                            <button
                              type="button"
                              className=" flex justify-center items-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
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
                              More
                            </button>
                          </a>
                        </Link>
                      </div>
                      {card.grade ? (
                        <div
                          className={`text-xs inline-flex items-center font-bold h-2/5 leading-sm uppercase px-3 py-1 rounded-full bg-${color}-200 text-${color}-700 my-3 mx-2`}
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
                          {card.grade}
                        </div>
                      ) : null}
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

export default Certificate;
