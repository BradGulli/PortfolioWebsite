'use client';
import React from "react";
import { AnimationDefinition, motion } from "framer-motion";
import { useAnimationContext } from './context/animation';


export default function Home() {

  const {isFirstMount, setIsFirstMount}= useAnimationContext();

  const onAnimationComplete = () => {
    setIsFirstMount(false);
  }

  return (
    <motion.section exit={{opacity: 0}}>
      {isFirstMount && <InitialTransition onAnimationComplete={onAnimationComplete}/>}
      <div className='flex flex-col  bg-slate-700'>
        <main className='pl-4 text-gray-300 pb-10'>
          <p className='flex justify-center items-center text-center px-8 md:px-16 font-merriweather font-bold text-xs md:text-lg'>
            Hello!  My name is Bradley, and I am a passionate and dedicated software engineer with a strong technical background and a drive for innovation. With several years of experience in the industry, I have developed a diverse skill set and a deep understanding of various programming languages and frameworks.
            I thrive in both front-end and back-end development, making me a versatile full-stack engineer. From designing and implementing captivating user interfaces using React and Vue.js to building scalable and efficient back-end systems running on AWS, I have a solid foundation in creating robust and seamless software solutions.
            What sets me apart is my problem-solving mindset and my commitment to delivering high-quality work. I enjoy tackling complex challenges head-on, finding innovative solutions, and continuously seeking opportunities for improvement. Whether it&apos;s optimizing performance, implementing new functionalities, or streamlining processes, I am always eager to make a positive impact.
            Throughout my career, I have embraced a collaborative approach, working closely with cross-functional teams to achieve shared goals. I find great joy in mentoring junior engineers and sharing my knowledge with colleagues, fostering a supportive and growth-oriented environment.
          </p>
        </main>
      </div>
    </motion.section>
  )
}

const blackBox = {
  initial: {
    bottom: 0,
  },
  animate: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
    },
    transitionEnd: {
      display: "none",
    }
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 200,
    transition: {
      duration: 2.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = (props: {onAnimationComplete: () => void}) => {
  React.useState(() => {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  });

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black h-screen"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() => {
        document.body.classList.remove("overflow-hidden")
        props.onAnimationComplete()
      }
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex w-full">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width="750"
          height="800"
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Brad Gulli
        </text>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="80%"
          style={{ fill: "url(#pattern)" }}
        >
          Software Engineer
        </text>
      </motion.svg>
    </motion.div>
  );
};
