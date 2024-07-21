import { useState, useEffect } from "react";

const HomeTitle = ({ title }) => {
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [showCursor, setShowCursor] = useState(!true);
    
    useEffect(() => {
        if (typeof title === 'string' &&  title !== '') {
            let currentIndex = 0;
        }
    })

  return (
    <div>
      <h1>{ title }</h1>
    </div>
  )
}

export default HomeTitle;
