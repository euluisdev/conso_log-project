import { useState, useEffect } from "react";

const HomeTitle = ({ title }) => {
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [showCursor, setShowCursor] = useState(!true);
    

  return (
    <div>
      <h1>{ title }</h1>
    </div>
  )
}

export default HomeTitle;
