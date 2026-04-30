const ENTER_DURATION = 1;
const EXIT_DURATION = 0.5;

const ENTER_EASE = { duration: ENTER_DURATION, ease: [0.22, 1, 0.36, 1] };
const EXIT_EASE = { duration: EXIT_DURATION, ease: [0.64, 0, 0.78, 0] };
const EXIT_LINEAR = { duration: EXIT_DURATION };

export { ENTER_EASE, EXIT_EASE, EXIT_LINEAR, EXIT_DURATION };
