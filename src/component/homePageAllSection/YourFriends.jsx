import { MoonLoader } from "react-spinners";
import FriendsCard from "../../ui/FriendsCard";
import useFriends from "../../hooks/useFriends";

const YourFriends = () => {
  const { friends, loading } = useFriends();
  // console.log(friends, loading)

  return (
    <div className="container mx-auto pb-20">
      <h1 className="font-semibold text-[24px] mb-10">Your Friends</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <MoonLoader color="green"/>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.map((friend, index) => {
            return <FriendsCard friend={friend} key={index}></FriendsCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default YourFriends;
