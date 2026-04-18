import { MoonLoader } from "react-spinners";
import useFriends from "../../../hooks/useFriends";
import { useParams } from "react-router-dom";
import { LuMessageSquareText, LuPhoneCall } from "react-icons/lu";
import { FiVideo } from "react-icons/fi";
import { useContext } from "react";
import { TimeLineContext } from "../../../context/TimeLineContext";
import { toast } from "react-toastify";

const FriendDetailsPage = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const expectedFriends = friends.find((friend) => friend.id === Number(id));
  console.log(expectedFriends, "Expected Friends");

  const { addInteraction } = useContext(TimeLineContext);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] justify-center items-center">
        <MoonLoader color="green" />
      </div>
    );
  }

  const handleInteraction = (type) => {
    const newData = {
      id: Date.now(),
      type: type,
      name: expectedFriends.name,
      date: new Date().toLocaleString(),
    };

    addInteraction(newData);
    if (type === "call") {
      toast.success(`Call with ${expectedFriends.name} `);
    }
    if (type === "text") {
      toast.success(`Text with ${expectedFriends.name} `);
    }
    if (type === "video") {
      toast.success(`Video call with ${expectedFriends.name} `);
    }
  };

  return (
    <div className=" grid lg:grid-cols-2 container mx-auto py-10 md:py-20">
      <div className="left-side-details lg:mr-6 w-full space-y-6 px-10 md:px-5">
        <div className="shadow-sm bg-white flex flex-col justify-center p-6 items-center text-center rounded-lg">
          <img
            src={expectedFriends.picture}
            className="rounded-[100px] mb-3"
            alt=""
          />
          <h2 className="font-semibold text-[20px]">{expectedFriends.name}</h2>
          <p className="mt-2 text-[#64748B]">
            {expectedFriends.days_since_contact}
          </p>
          <span className="px-3 my-2 py-1 rounded-full font-medium bg-[#CBFADB] text-[#244D3F]">
            {expectedFriends.tags}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium
    ${
      expectedFriends.status === "on-track"
        ? "bg-green-500 text-green-50"
        : expectedFriends.status === "overdue"
          ? "bg-red-100 text-red-700"
          : "bg-yellow-100 text-yellow-700"
    }
  `}
          >
            {expectedFriends.status}
          </span>
        </div>
        <div>
          <div className="flex flex-col space-y-2">
            <button className="btn rounded-lg hover:shadow-md bg-white">
              Snooze 2 weeks
            </button>
            <button className="btn rounded-lg hover:shadow-md bg-white">
              Archive
            </button>
            <button className="btn rounded-lg hover:shadow-md bg-white">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="right-side-details mt-8 lg:mt-0 lg:ml-5 px-10 md:px-5 ">
        {/* Stats */}
        <div className="stat-card grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center bg-white text-[#275a49e0] rounded-lg space-y-2 shadow-sm hover:shadow-xl p-4 xl:p-8">
            <h2 className="font-semibold text-[18px] lg:text-[20px] xl:text-[28px]">
              {expectedFriends.days_since_contact}
            </h2>
            <p>Days Since Contact</p>
          </div>
          <div className="text-center bg-white text-[#275a49e0] rounded-lg space-y-2 shadow-sm hover:shadow-xl p-4 xl:p-8">
            <h2 className="font-semibold text-[18px] lg:text-[20px] xl:text-[28px]">
              {expectedFriends.goal}
            </h2>
            <p>Goal (Days)</p>
          </div>
          <div className="text-center bg-white text-[#275a49e0] rounded-lg space-y-2 shadow-sm hover:shadow-xl p-4 xl:p-8">
            <h2 className="font-semibold text-[18px] lg:text-[20px] xl:text-[28px]">
              {expectedFriends.next_due_date}
            </h2>
            <p>Next Due</p>
          </div>
        </div>
        {/* Relationship goal */}
        <div className="shadow-sm p-6 bg-white rounded-lg">
          <div className="flex justify-between items-center space-y-4 ">
            <h2 className="font-medium text-xl text-[#244D3F]">
              Relationship Goal
            </h2>
            <button className="btn hover:shadow-md bg-transparent btn-ghost border-amber-400">
              Edit
            </button>
          </div>
          <p>
            Connect every <span className="font-bold text-lg">30 days</span>
          </p>
        </div>
        {/* Function Button */}
        <div className="bg-white mt-6 p-6 rounded-lg">
          <h2 className="font-medium text-xl text-[#244D3F]">Quick Check-In</h2>
          <div className="stat-card grid md:grid-cols-3 gap-6 mt-4">
            <button
              onClick={() => handleInteraction("call")}
              className="text-center bg-[#e9e9e956] flex flex-col justify-center items-center text-[#275a49e0] rounded-lg space-y-2 hover:shadow-xl p-8"
            >
              <h2 className="font-semibold text-[32px]">
                <LuPhoneCall />
              </h2>
              <p>Call</p>
            </button>
            <button
              onClick={() => handleInteraction("text")}
              className="text-cente bg-[#e9e9e956] flex flex-col justify-center items-center text-[#275a49e0] rounded-lg space-y-2 hover:shadow-xl p-8"
            >
              <h2 className="font-semibold text-[32px]">
                <LuMessageSquareText />
              </h2>
              <p>Text</p>
            </button>
            <button
              onClick={() => handleInteraction("video")}
              className="text-center bg-[#e9e9e956] flex flex-col justify-center items-center text-[#275a49e0] rounded-lg space-y-2 hover:shadow-xl p-8"
            >
              <h2 className="font-semibold text-[32px]">
                <FiVideo />
              </h2>
              <p>Video</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
