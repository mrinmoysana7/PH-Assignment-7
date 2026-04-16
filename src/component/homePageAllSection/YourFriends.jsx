import { MoonLoader } from "react-spinners";
import UseFriends from "../../hooks/UseFriends";
import FriendsCard from "../../ui/FriendsCard";

const YourFriends = () => {
  const { friends, loading } = UseFriends();
  // console.log(friends, loading)

  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-[24px] mb-10">Your Friends</h1>
      {loading ? (
        <div>
          <MoonLoader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.slice(0, 12).map((friend, index) => {
            return <FriendsCard friend={friend} key={index}></FriendsCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default YourFriends;
