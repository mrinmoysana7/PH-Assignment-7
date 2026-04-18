import { useContext } from "react";
import callImage from "../../../assets/images/call.png";
import textImage from "../../../assets/images/text.png";
import videoImage from "../../../assets/images/video.png";
import { TimeLineContext } from "../../../context/TimeLineContext";
import { useNavigate } from "react-router-dom";

const TimelinePage = () => {
  const { timelineData } = useContext(TimeLineContext);
  const navigate = useNavigate();
  //   console.log(contextData);

  return (
    <div className="container mx-auto space-y-6 py-5 md:py-10 px-10 md:px-5">
      <div>
        <h2 className="font-bold text-[30px] md:text-[48px]">Timeline</h2>
        {/* <input
          className="border border-gray-200 px-4 py-2 rounded-md mt-2"
          type="text"
          placeholder="Filter timeline"
        /> */}

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-2 border-white
           md:w-80 m-1"
          >
            Filter timeline
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>call</a>
            </li>
            <li>
              <a>text</a>
            </li>
            <li>
              <a>video</a>
            </li>
          </ul>
        </div>
      </div>
      {timelineData.length === 0 ? (
        <div className="flex bg-white rounded-lg shadow-lg flex-col items-center justify-center text-center py-12 mb-5 md:mb-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="empty"
            className="w-32 mb-6 opacity-70"
          />

          <h2 className="text-2xl font-bold mb-2">No interactions yet</h2>

          <p className="text-gray-500 mb-6 max-w-md">
            Start building your timeline by adding your first interaction with a
            friend.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Go home
          </button>
        </div>
      ) : (
        timelineData.map((friend, index) => {
          return (
            <div
              key={index}
              className="flex gap-2 items-center bg-white p-4 rounded-lg"
            >
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
        })
      )}
    </div>
  );
};

export default TimelinePage;
