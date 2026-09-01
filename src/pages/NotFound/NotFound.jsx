import { motion } from "framer-motion";
import { staggerContainerVariants, itemVariants } from "../../utils/animationVariants";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
    return (
        <main className="not-found">
            <motion.div
                className="not-found__container"
                variants={staggerContainerVariants}
                initial="initial"
                animate="animate"
            >
                <motion.h2 variants={itemVariants}>Lost in Space? The page you are looking for does not exist.</motion.h2>

                <motion.div variants={itemVariants}>
                    <Link to="/" className="button__home">Back to Home</Link>
                </motion.div>

            </motion.div>
        </main>
    )
}