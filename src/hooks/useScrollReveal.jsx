import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useScrollReveal = () => {
    const control = useAnimation()
    const {inView, ref,} = useInView()

    useEffect(() => {
        if(inView) {
            control.start('visible')
        }
    }, [inView, control]);
  return {control, ref};
};

export default useScrollReveal;
