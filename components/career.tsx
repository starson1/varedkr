import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import Link from "next/link";

interface Card {
  id: number;
  img: string;
  category: string;
  subcategory: string;
  name: string;
  detail: string;
  date: string;
  link: string;
}

const Career = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [groupedCards, setGroupedCards] = useState<{ [key: string]: Card[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/career");
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
  }, []);

  return (
    <div className="flex flex-col justify-center py-10 m-12 space-y-20">
      <div className="text-5xl font-extrabold">Career</div>
      <div className="flex flex-col lg:flex-row justify-between w-full lg:space-x-3">
        {Object.entries(groupedCards).reverse().map(([category, cards]) => (
          <div className="w-full flex flex-col justify-between" key={category}>
            <div
              className="p-8 bg-white rounded-xl shadow-md flex justify-between w-full overflow-auto mb-4"
              style={{ height: "600px" }}
            >
              <div className="">
                {cards.reverse().map((card) => (
                  <div
                    className="w-full flex space-x-4"
                    style={{ height: "250px" }}
                    key={card.id}
                  >
                    <div className="">
                      <div className="flex-col items-center">
                        {card.category === "scholar" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="2.5em"
                            viewBox="0 0 448 512"
                            fill="#ff4b61"
                          >
                            <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="2.5em"
                            viewBox="0 0 384 512"
                            fill="#ff4b61"
                          >
                            <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z" />
                          </svg>
                        )}
                        <div className="flex items-center my-[10px] mx-[14px] w-0.5 h-[190px] bg-[#ff4b61]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 font-semibold">
                        [{card.subcategory}]
                      </div>
                      <div className="text-gray-500">{card.date}</div>
                      <div className="text-2xl font-bold py-1">{card.name}</div>
                      <div className="">{card.detail}</div>
                      {card.link === "" ? "" : (
                        <div className="py-4">
                          <a
                            href={card.link}
                            className="bg-gray-400 rounded-full text-white p-2"
                          >
                            More
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
