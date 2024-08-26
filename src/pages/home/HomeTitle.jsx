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

            const cursorInterval = setInterval(() => {
                setShowCursor(prev => !prev);
            }, 500); 
        
                return () => {  //evita vazamento de memória, após o component ser desmontado
                    clearInterval(interval);
                    clearInterval(cursorInterval); 
                };
        };
    }, [title]);

    return (
            <h1 className="initial-text">
                {displayedTitle}
                {showCursor && <span>|</span>}
            </h1>
    )
}

export default HomeTitle;
