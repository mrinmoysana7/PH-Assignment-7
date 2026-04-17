import { useState } from "react";
import { TimeLineContext } from "./TimeLineContext.jsx";

const TimeLineProvider = ({ children }) => {
 
  const [timelineData, setTimelineData] = useState([])

  const addInteraction = (interaction) => {
     setTimelineData((prev) => [interaction, ...prev]);
  }

  return (
    <TimeLineContext.Provider value={{timelineData, addInteraction}}>{children}</TimeLineContext.Provider>
  );
};

export default TimeLineProvider;
