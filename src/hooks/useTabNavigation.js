import { useState } from "react";

export function useTabNavigation(list = [], initialIndex = 0) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const currentItem = list[currentIndex] || {};

    return {
        currentIndex,
        setCurrentIndex,
        currentItem
    };
}