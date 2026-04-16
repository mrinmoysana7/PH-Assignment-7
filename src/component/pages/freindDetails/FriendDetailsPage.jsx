import { MoonLoader } from "react-spinners";
import useFriends from "../../../hooks/useFriends";
import { useParams } from "react-router-dom";

const FriendDetailsPage = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const expectedFriends = friends.find((friend) => friend.id === Number(id));
  console.log(expectedFriends, "Expected Friends");

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <MoonLoader color="green" />
      </div>
    );
  }

  return (
    <div className=" grid lg:grid-cols-2 container mx-auto pt-20">
      <div className="left-side-details mr-6 space-y-4">
        <div className="shadow-lg flex flex-col justify-center items-center text-center">
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
          <span className="">{expectedFriends.status}</span>
        </div>
        <div>
          <div className="flex flex-col space-y-2">
            <button className="btn">Snooze 2 weeks</button>
            <button className="btn">Archive</button>
            <button className="btn">Delete</button>
          </div>
        </div>
      </div>
      <div className="right-side-details">
        {/* Stats */}
        <div className="stat-card grid grid-cols-3 gap-6 mb-6">
          <div className="text-center text-[#275a49e0] rounded-md space-y-2 shadow-sm hover:shadow-xl p-8">
            <h2 className="font-semibold text-[32px]">36</h2>
            <p>Total Friends</p>
          </div>
          <div className="text-center text-[#275a49e0] rounded-md space-y-2 shadow-sm hover:shadow-xl p-8">
            <h2 className="font-semibold text-[32px]">12</h2>
            <p>On Track</p>
          </div>
          <div className="text-center text-[#275a49e0] rounded-md space-y-2 shadow-sm hover:shadow-xl p-8">
            <h2 className="font-semibold text-[32px]">4</h2>
            <p>Need Attention</p>
          </div>
        </div>
        {/* Relationship goal */}
        <div className="shadow-sm p-6">
          <div className="flex justify-between items-center space-y-4 ">
            <h2>Relationship Goal</h2>
            <button className="btn">Edit</button>
          </div>
          <p>
            Connect every <span>30 days</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
