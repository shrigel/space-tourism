export const slideVariants = {
    initial: ({ direction, axis = "x" }) => ({
        opacity: 0,
        scale: .9,
        [axis]: direction > 0 ? 100 : -100,
    }),
    animate: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: ({ direction, axis = "x" }) => ({
        opacity: 0,
        scale: .9,
        [axis]: direction < 0 ? 100 : -100,
        transition: { duration: 0.2, ease: "easeIn" }
    })
};

export const fadeVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

export const staggerContainerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

export const itemVariants = {
    initial: {
        opacity: 0,
        y: 25
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};