import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainerVariants, itemVariants } from "../../utils/animationVariants";
import Header from "../../components/Header/Header.jsx";
import "./Home.scss"

export default function Home() {
    return (
        <div className="page--home">
            <Header />

            <main className="home">
                <div className="home__container">
                    <motion.div
                        className="home__wrapper"
                        variants={staggerContainerVariants}
                        initial="initial"
                        animate="animate">
                        <div className="home__hero">
                            <motion.span variants={itemVariants} className="home__hero-subtitle">SO YOU WANT TO TRAVEL TO</motion.span>

                            <motion.h1 variants={itemVariants} className="home__hero-title">SPACE</motion.h1>

                            <motion.p variants={itemVariants} className="home__hero-text">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</motion.p>
                        </div>

                        <motion.div variants={itemVariants} className="home__explore">
                            <Link to="/destination">
                                <button className="home__explore-button">EXPLORE</button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </main>
        </div>
    )
}