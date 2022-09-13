import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTWBreakpoints } from "../../../hooks/use-tw-breakpoints";

export const SectionUseCase: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const cardOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const { sm, md, lg, xl } = useTWBreakpoints();

    return (
        // Scroll animated container
        <motion.div
            ref={ref}
            className="h-auto lg:h-screen lg:max-h-[550px] bg-white -mt-px"
        >
            {/* Scroll animated section */}
            <motion.div className="h-auto lg:h-screen lg:max-h-[550px] w-screen top-0 left-0 relative lg:sticky pt-16 flex flex-col items-center justify-end gap-24 lg:gap-0">
                <div className="flex-1 flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row max-w-7xl mx-auto w-full items-center justify-center px-7 md:px-10 lg:px-16 xl:px-24 ">
                    <div className="flex-1">
                        <div className="font-montserrat text-[#1890FF] text-[36px] leading-[36px] lg:text-[42px] lg:leading-[42px] mb-9">
                            <div className="font-extrabold">SHARE</div>
                            <div className="font-medium">YOUR USECASE</div>
                            <div className="font-medium">
                                <strong className="font-bold">INSPIRE</strong>{" "}
                                OTHERS
                            </div>
                        </div>
                        <div className="font-montserrat text-[21px] leading-[32px] tracking-tight text-[#2A2A42] mb-9">
                            <p>
                                We are very happy to see how people are building
                                great things with{" "}
                                <strong className="text-bold">refine</strong>.
                            </p>
                            <p>
                                Share your use-case to get listed on the
                                showcase page and receive{" "}
                                <strong className="text-bold">
                                    $100 Amazon Gift card
                                </strong>
                                .
                            </p>
                        </div>
                        <div className="flex lg:block justify-center">
                            <button
                                type="button"
                                style={{
                                    boxShadow:
                                        "6px 8px 16px 0 rgba(42, 42, 66, 0.4)",
                                }}
                                className="appearance-none font-bold font-montserrat text-xl leading-[24px] py-3 w-60 text-white text-center bg-gradient-to-l from-[#1890FF] to-[#47EBF5] border-0 rounded-lg cursor-pointer"
                            >
                                ADD YOURS <span className="font-normal">&</span>{" "}
                                WIN
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 w-full lg:w-auto flex">
                        <motion.div
                            className="flex-1 w-full lg:w-auto flex flex-col justify-end items-center lg:items-end relative"
                            whileInView={!lg ? { scale: [0, 1] } : undefined}
                            viewport={{
                                margin: "20px",
                            }}
                        >
                            <motion.img
                                src="landing/giftcard.png"
                                className="w-full max-w-screen md:max-w-[400px] lg:max-w-[440px] absolute top-0"
                                style={
                                    lg
                                        ? {
                                              opacity: cardOpacity,
                                          }
                                        : {}
                                }
                                animate={{
                                    translateY: ["20px", "0px"],
                                    rotate: ["-3deg", "0deg"],
                                    ...(!lg ? { opacity: [1, 1] } : {}),
                                }}
                                transition={{
                                    duration: 5,
                                    ease: "easeInOut",
                                    yoyo: Infinity,
                                }}
                            />
                            <div className="w-full max-w-screen md:max-w-[400px] min-h-[calc(100vw-56px)] md:min-h-[400px] lg:max-w-[440px] flex justify-center items-end lg:min-h-[400px]">
                                <motion.div
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        maxWidth: "200px",
                                        height: "200px",
                                        borderRadius: "999px",
                                        rotateX: "88deg",
                                        background: "#2A2A42",
                                        filter: "blur(50px)",
                                    }}
                                    animate={{
                                        opacity: [0.75, 0.2],
                                        width: ["200px", "300px"],
                                        height: ["200px", "300px"],
                                        bottom: ["-80px", "-130px"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        ease: "easeInOut",
                                        yoyo: Infinity,
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            {/* Scroll snap alignment */}
            <div className="hidden lg:block snap-start h-screen lg:max-h-[550px]" />
        </motion.div>
    );
};
