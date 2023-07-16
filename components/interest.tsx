import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

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

        // Set the first category as the initially selected tab
        if (Object.keys(grouped).length > 0) {
          setSelectedTab(Object.keys(grouped)[0]);
        }
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

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTab(newValue);
  };

  const theme = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            fontWeight: "500", // Set the font weight to semi-bold
            "&$selected": {
              color: "#ff4a62", // Set the color of the selected tab
            },
          },
        },
      },
    },
    palette: {
      text: {
        primary: "#000000", // Set the color of the tabs that are not selected
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col justify-center py-10 m-12 space-y-20">
        <div className="text-5xl font-extrabold">Interest</div>
        <div className="grid gap-4">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {Object.keys(groupedCards).map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
          {Object.entries(groupedCards).map(([category, cards]) => (
            <div key={category} hidden={selectedTab !== category}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
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
                              {Array.from({ length: card.detail }).map(
                                (_, index) => (
                                  <span
                                    key={index}
                                    className="text-yellow-500 text-xl"
                                  >
                                    *
                                  </span>
                                )
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Interest;
