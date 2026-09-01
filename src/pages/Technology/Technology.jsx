import { getImageUrl } from "../../utils/imageHelper";
import { useTabNavigation } from "../../hooks/useTabNavigation";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants, fadeVariants } from "../../utils/animationVariants";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "./Technology.scss";
import Header from "../../components/Header/Header";
import data from "../../assets/data.json";

export default function Technology() {
    const {
        currentIndex: technologyIndex,
        direction,
        currentItem: currentTechnology,
        paginate,
        goToTab
    } = useTabNavigation(data.technology);

    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const axis = isDesktop ? "y" : "x";

    return (
        <div className="page--technology">
            <Header />

            <main className="technology">
                <div className="technology__title">
                    <span className="technology__title-number">03</span>
                    <span className="technology__title-text">SPACE LAUNCH 101</span>
                </div>

                <div className="technology__container" role="tabpanel" aria-label={currentTechnology.name}>

                    <AnimatePresence mode="wait" custom={{ direction, axis }}>
                        <motion.div
                            key={currentTechnology.name}
                            custom={{ direction, axis }}
                            variants={slideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            drag={axis}
                            dragConstraints={isDesktop ? { top: 0, bottom: 0 } : { left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipeThreshold = 50;
                                const currentOffset = isDesktop ? offset.y : offset.x;
                                const currentVelocity = isDesktop ? velocity.y : velocity.x;
                                if (currentOffset < -swipeThreshold || currentVelocity < -500) {
                                    paginate(1);
                                } else if (currentOffset > swipeThreshold || currentVelocity > 500) {
                                    paginate(-1);
                                }
                            }}
                            style={{ cursor: "grab" }}
                            whileTap={{ cursor: "grabbing" }}
                            className="technology__image"
                        >
                            <picture>
                                <source media="(min-width: 1024px)" srcSet={getImageUrl(currentTechnology.images.portrait)} />
                                <img src={getImageUrl(currentTechnology.images.landscape)} alt="" draggable="false" />
                            </picture>
                        </motion.div>
                    </AnimatePresence>


                    <div className="technology__content">
                        <div className="technology__pagination">
                            {data.technology.map((technology, index) => {
                                const isActive = technologyIndex === index;

                                return (
                                    <button key={technology.name}
                                        role="tab"
                                        aria-selected={technologyIndex === index}
                                        aria-label={`Slide ${index + 1}: ${technology.name}`}
                                        className={`technology__pagination-number ${isActive ? "active" : ""}`}
                                        onClick={() => goToTab(index)}>
                                        {index + 1}
                                    </button>
                                )
                            })}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTechnology.name}
                                variants={fadeVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="technology__explanation"
                            >
                                <div className="technology__info">
                                    <span>THE TERMINOLOGY</span>
                                    <span className="technology__name">{currentTechnology.name}</span>
                                </div>

                                <p className="technology__description">{currentTechnology.description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    )
}