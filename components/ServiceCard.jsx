import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="w-full md:w-[250px]" tiltMaxAngleX="10" tiltMaxAngleY="10">
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full green-pink-gradient p-[1px] rounded-[14px] md:rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-[14px] md:rounded-[20px] py-4 px-2 min-h-[118px] xs:min-h-[132px] md:py-5 md:px-12 md:min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-16 md:h-16 object-contain relative">{icon}</div>
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[11px] xs:text-[12px] sm:text-[14px] md:text-[20px] leading-tight font-bold text-center w-full md:w-[80%] break-words">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
