import { getImageUrl } from "../../utils/imageHelper";
import { useTabNavigation } from "../../hooks/useTabNavigation";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants, fadeVariants, itemVariants } from "../../utils/animationVariants";
import "./Destination.scss"
import data from "../../assets/data.json"

export default function Destination() {
    const {
        currentIndex: destinationIndex,
        direction,
        currentItem: currentDestination,
        paginate,
        goToTab
    } = useTabNavigation(data.destinations);


    return (
        <main className="destination">
            <motion.div
                className="destination__title"
                variants={itemVariants}
                initial="initial"
                animate="animate"
            >
                <span className="destination__title-number">01</span>
                <span className="destination__title-text">PICK YOUR DESTINATION</span>
            </motion.div>

            <div className="destination__container" role="tabpanel" aria-label={currentDestination.name}>
                <div className="destination__image">
                    <AnimatePresence mode="wait" custom={{ direction, axis: "x" }}>
                        <motion.div
                            key={currentDestination.name}
                            custom={{ direction, axis: "x" }}
                            variants={slideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipeThreshold = 50;
                                if (offset.x < -swipeThreshold || velocity.x < -500) {
                                    paginate(1);
                                } else if (offset.x > swipeThreshold || velocity.x > 500) {
                                    paginate(-1);
                                }
                            }}
                            style={{ cursor: "grab" }}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <img src={getImageUrl(currentDestination.images.webp)} alt="" draggable="false" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="destination__wrapper">
                    <div className="destination__navigation">
                        {data.destinations.map((destination, index) => {
                            const isActive = destinationIndex === index;

                            return (
                                <div
                                    key={destination.name}
                                    className={`destination__navigation-item ${isActive ? "active" : ""}`}
                                >
                                    <button
                                        role="tab"
                                        aria-selected={destinationIndex === index}
                                        aria-label={`Slide ${index + 1}: ${destination.name}`}
                                        onClick={() => goToTab(index)}
                                        className="destination__navigation-button"
                                    >
                                        {destination.name}
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentDestination.name}
                            variants={fadeVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <div className="destination__explanation">
                                <h2 className="destination__name">{currentDestination.name}</h2>

                                <p className="destination__description">{currentDestination.description}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="destination__line" aria-hidden="true" />

                    <div className="destination__data">
                        <div className="destination__data-item">
                            <span>AVG. DISTANCE</span>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentDestination.name}
                                    variants={fadeVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="destination__wrapper"
                                >
                                    <span>{currentDestination.distance}</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="destination__data-item">
                            <span>EST. TRAVEL TIME</span>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentDestination.name}
                                    variants={fadeVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    <span>{currentDestination.travel}</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}