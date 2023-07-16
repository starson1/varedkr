import { motion } from "framer-motion";

const WhoamI = () => {
  return (
    <div className="">
      <div className="text-3xl">WHOAMI</div>
      <div className="flex px-4">
        <img
          src="/img/mypic.png"
          alt="??"
          className="rounded-full w-32 h-32"
        />
        <div className="px-4">
          <div className="flex">
            
            <div className="p-3 bg-white rounded-lg shadow-md w-4/5 h-full">
              <span className="block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoamI;
