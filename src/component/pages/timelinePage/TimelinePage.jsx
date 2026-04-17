import { useContext } from "react";
import { TimeLineContext } from "../../../context/TimeLineContext";

const TimelinePage = () => {
  const contextData = useContext(TimeLineContext);
  console.log(contextData);

  return <div></div>;
};

export default TimelinePage;
