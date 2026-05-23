import { Transition } from "framer-motion";

const ENTER_DURATION = 1;
const EXIT_DURATION = 0.5;
const MAIN_EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ENTER_EASE: Transition = {
   duration: ENTER_DURATION,
   ease: MAIN_EASING,
};
const EXIT_EASE: Transition = {
   duration: EXIT_DURATION,
   ease: [0.64, 0, 0.78, 0],
};
const EXIT_LINEAR: Transition = { duration: EXIT_DURATION };

export { ENTER_EASE, EXIT_EASE, EXIT_LINEAR, EXIT_DURATION, MAIN_EASING };
