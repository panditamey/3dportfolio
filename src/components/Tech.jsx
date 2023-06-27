import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";



const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
    <p className={`${styles.sectionSubText} text-center`}>My Superpowers</p>
    <h2 className={`${styles.sectionHeadText} text-center`}>My Skills.</h2>
      <div className='flex flex-row flex-wrap justify-center mt-20  '>

        {technologies.map((technology) => (

            <div className='w-10 h-28  2xl:w-28 xl:w-28 lg:w-28 md:w-28  sm:w-10 m-5' key={technology.name}>
              {/* <BallCanvas icon={technology.icon} /> */}
              <img src={technology.icon} alt="..." className="shadow max-w-full h-auto align-middle border-none" />
            </div>
          
        ))}
      </div>
      </motion.div>
      </>
  );
};

export default SectionWrapper(Tech, "");
