import { useState, useEffect } from "react";

const HomeTitle = ({ title }) => {
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [showCursor, setShowCursor] = useState(!true);

    useEffect(() => {
        if (typeof title === 'string' && title !== '') {
            let currentIndex = 0;

            const interval = setInterval(() => {
                if (currentIndex <= title.length) {
                    setDisplayedTitle(title.substring(0, currentIndex));
                    currentIndex++
                } else {
                    clearInterval(interval);
                }
            }, 100);

            return () => clearInterval(interval);
        };
    }, [title]);

    return (
        <div>
            <h1>{displayedTitle}</h1>
        </div>
    )
}

export default HomeTitle;
