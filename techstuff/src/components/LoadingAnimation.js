/*Created following this tutorial https://www.youtube.com/watch?v=aHqTM0WFdpk*/
import React from "react";
import { motion } from "framer-motion";

export default function LoadingAnimation() {
  // variables
  let size = "3rem";
  let distanceApart = "11rem";
  let circleColor = "#4ecbd9";
  let stagger = 0.2;
  let duration = 0.5;

  // Sets styles for the container
  const loadingContainer = {
    margin: "0px auto",
    width: distanceApart,
    height: distanceApart,
    display: "flex",
    justifyContent: "space-around",
  };

  // Sets styles for circles
  const loadingCircle = {
    display: "block",
    width: size,
    height: size,
    backgroundColor: circleColor,
    borderRadius: "5rem",
  };

  // Spaces out when each ciircle with reviice the animation to stagger  them
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: stagger,
      },
    },
    end: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  // The two states the circles go between
  const loadingCircleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  // Sets animation properties
  const loadingCircleTransition = {
    duration: duration,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}
