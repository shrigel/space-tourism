import { useState } from "react";

export function useTabNavigation(list = [], initialIndex = 0) {
    const [[currentIndex, direction], setPage] = useState([initialIndex, 0]);
    const currentItem = list[currentIndex] || {};

    const paginate = (newDirection) => {
        const nextIndex = (currentIndex + newDirection + list.length) % list.length;

        setPage([nextIndex, newDirection]);
    }

    const goToTab = (targetIndex) => {
        if (targetIndex === currentIndex) return;

        const newDirection = targetIndex > currentIndex ? 1 : -1;

        setPage([targetIndex, newDirection]);
    }

    return {
        currentIndex,
        direction,
        currentItem,
        paginate,
        goToTab
    };
}