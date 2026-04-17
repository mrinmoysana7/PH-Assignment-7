import { TimeLineContext } from "./TimeLineContext";

const TimeLineProvider = ({ children }) => {
  const data = {
    name: "Raju",
    Class: 10,
  };

  return (
    <TimeLineContext.Provider value={data}>{children}</TimeLineContext.Provider>
  );
};

export default TimeLineProvider;
