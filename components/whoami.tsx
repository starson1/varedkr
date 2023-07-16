import { motion } from "framer-motion";

const WhoamI = () => {
  return (
    <div className="m-12">
      <div className="text-5xl font-extrabold">About Me</div>
      <div className="flex flex-col-reverse md:flex-row px-4 my-20">
        <div className="w-full md:w-full mx-12 flex">
          <div className="p-8 bg-white rounded-xl shadow-md flex justify-between">
            <div className="w-1/2  break-words leading-10 font-light text-xl tracking-wider">
              <div className="flex flex-col h-full items-center">
                <div className="mb-auto whitespace-break-spaces">
                  I am SangHyuk An, Digital Forenic Researcher from Seoul, Republic of Korea.
                  I have skills in Incident Response and developing Forensic Tools.
                  Analyzing functions via Reverse Engineering is also available.
                  Nowadays I am studying e-Discovery and hope to make experiences.
                  For hobby, I also do Full Stack Development using NextJS & Typescript.
                </div>
                <div className="mt-6 p-3 w-48 bg-[#ff4b61] text-white text-center rounded-full font-bold">
                  <a href="">Download CV</a>
                </div>
              </div>
            </div>

            <div className=" w-[45%] space-y-8">
              <div className="space-y-2">
                <div className="justify-between flex">
                  <span className="font-semibold text-xl">
                    Digital Forensic
                  </span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#ff4b61] h-2.5 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="justify-between flex">
                  <span className="font-semibold text-xl">C, Python</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#ffd15b] h-2.5 rounded-full w-[95%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="justify-between flex">
                  <span className="font-semibold text-xl">
                    Reverse Engineering
                  </span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#6d6ce5] h-2.5 rounded-full w-[60%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="justify-between flex">
                  <span className="font-semibold text-xl">e-Discovery</span>
                  <span>10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#c09eee] h-2.5 rounded-full w-[10%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="justify-between flex">
                  <span className="font-semibold text-xl">Full Stack Dev</span>
                  <span>30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#74e86e] h-2.5 rounded-full w-[30%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:order-first flex justify-center">
          <div className="w-48 h-48 overflow-hidden">
            <img
              src="/img/mypic.jpg"
              alt="??"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoamI;
