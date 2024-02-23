import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollBar() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div
                className="top-0 bottom-0 fixed origin-top right-0 me-44 hidden lg:block w-px z-40 bg-[#ba953e]"
                style={{ scaleY }}
            />
            <div className="fixed top-0 bottom-0 right-0 me-44 hidden lg:block w-px bg-zinc-200 text-white flex items-center justify-center z-30">
            </div>
        </>
    );
}

export default ScrollBar;
