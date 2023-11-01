import { useState, useEffect } from "react";
import Link from "next/link";

const Paper = () => {
  const [papers, setPapers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/paper");
        if (response.ok) {
          const data = await response.json();
          setPapers(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center py-10 m-12 space-y-20">
      <div className="text-5xl font-extrabold">Papers</div>
      <div>
        {papers.map((paper) => (
          <div key={paper.id} className="flex flex-col py-8 md:justify-between md:space-x-4 md:flex-row md:space-y-0 md:w-full ">
            <div className="w-full md:w-1/4">
              <img src={paper.img} alt=""
              className="w-full h-full"/>
            </div>
            
            <div className="flex flex-col w-full md:w-3/4 relative md:items-start items-center md:justify-between">
              <div className="justify-items-center">
                <div className="flex justify-center md:justify-start text-xl font-bold text-gray-500">[{paper.place}]</div>
                <div className="flex justify-center md:justify-start text-xl md:text-left text-center font-bold py-2">{paper.name}</div>
                <div className="flex justify-center md:justify-start md:text-left text-center">{paper.authors}</div>
              </div>
              
              <div className="justify-items-center">
                  <div className="space-x-2 py-4">
                    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-gray-200 p-10">{paper.date}</div>
                    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-yellow-200 p-10">{paper.position}</div>
                    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-green-200 p-10">{paper.category}</div>
                  </div>
      
                  <div className="flex md:justify-start justify-center">
                    <Link legacyBehavior href={paper.link}>
                      <a className="" target="_blank" >
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
                          Link
                        </button>
                      </a>
                    </Link>
                  </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paper;
