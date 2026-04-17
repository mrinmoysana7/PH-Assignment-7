import { useContext } from "react";
import callImage from "../../../assets/images/call.png";
import textImage from "../../../assets/images/text.png";
import videoImage from "../../../assets/images/video.png";
import { TimeLineContext } from "../../../context/TimeLineContext";


const TimelinePage = () => {
  const { timelineData } = useContext(TimeLineContext);
  //   console.log(contextData);

  return (
    <div className="container mx-auto space-y-6 py-20">
        <div>
            <h2 className="font-bold text-[48px]">Timeline</h2>
            <input className="border border-gray-200 px-4 py-2 rounded-md mt-2" type="text" placeholder="Filter timeline"/>
        </div>
      {timelineData.map((friend, index) => {
        return (
          <div key={index} className="flex gap-2 items-center bg-white p-4 rounded-lg">
            {/* icons */}
            <div>
              {friend.type === "call" && <img src={callImage}></img>}
              {friend.type === "text" && <img src={textImage}></img>}
              {friend.type === "video" && <img src={videoImage}></img>}
            </div>

            {/* Content */}
          <div>
            <h2 className="font-semibold capitalize">
              {friend.type} with {friend.name}
            </h2>
            <p className="text-sm text-gray-500">{friend.date}</p>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelinePage;
