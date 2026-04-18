import { Link } from "react-router-dom";

const FriendsCard = ({ friend }) => {
  return (
    <Link
      to={`/friendDetails/${friend.id}`}
      className="p-6 flex-1 shadow-lg rounded-xl hover:shadow-2xl bg-white"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <img src={friend.picture} className="rounded-[100px] mb-3" alt="" />
        <h2 className="font-semibold text-[20px]">{friend.name}</h2>
        <p className="mt-2 text-[#64748B]">{friend.days_since_contact}</p>
        <span className="px-3 my-2 py-1 rounded-full font-medium bg-[#CBFADB] text-[#244D3F]">
          {friend.tags}
        </span>
        <span className={`px-3 py-1 rounded-full text-sm font-medium
    ${
      friend.status === "on-track"
        ? "bg-green-500 text-green-50"
        : friend.status === "overdue"
        ? "bg-red-100 text-red-700"
        : "bg-yellow-100 text-yellow-700"
    }
  `}>{friend.status}</span>
      </div>
    </Link>
  );
};

export default FriendsCard;
