import { getImageUrl } from "../../utils/imageHelper";
import { useTabNavigation } from "../../hooks/useTabNavigation";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants, fadeVariants, itemVariants } from "../../utils/animationVariants";
import "./Crew.scss";
import data from "../../assets/data.json"

export default function Crew() {
    const {
        currentIndex: crewIndex,
        direction,
        currentItem: currentCrew,
        paginate,
        goToTab
    } = useTabNavigation(data.crew);

    return (
        <main className="crew">
            <motion.div
                className="crew__title"
                variants={itemVariants}
                initial="initial"
                animate="animate"
            >
                <span className="crew__title-number">02</span>
                <span className="crew__title-text">MEET YOUR CREW</span>
            </motion.div>

            <div className="crew__container" role="tabpanel" aria-label={currentCrew.name}>
                <div className="crew__content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentCrew.name}
                            variants={fadeVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="crew__explanation"
                        >
                            <div className="crew__info">
                                <span className="crew__role">{currentCrew.role}</span>
                                <span className="crew__name">{currentCrew.name}</span>
                            </div>

                            <p className="crew__bio">{currentCrew.bio}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="crew__pagination" role="tablist" aria-label="Crew member list">
                        {data.crew.map((member, index) => {
                            const isActive = crewIndex === index;

                            return (
                                <button key={member.name}
                                    role="tab"
                                    aria-selected={crewIndex === index}
                                    aria-label={`Slide ${index + 1}: ${member.name}`}
                                    className={`crew__pagination-dot ${isActive ? "active" : ""}`}
                                    onClick={() => goToTab(index)}>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="crew__image">
                    <AnimatePresence mode="wait" custom={{ direction, axis: "x" }}>
                        <motion.div
                            key={currentCrew.name}
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
                            <img src={getImageUrl(currentCrew.images.webp)} alt="" draggable="false" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </main>
    )
}