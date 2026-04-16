const FriendsCard = ({ friend }) => {
  return (
    <div className="p-6 flex-1 shadow-sm rounded-xl hover:shadow-xl">
      <div className="flex flex-col justify-center items-center text-center">
        <img src={friend.picture} className="rounded-[100px] mb-3" alt="" />
        <h2 className="font-semibold text-[20px]">{friend.name}</h2>
        <p className="mt-2 text-[#64748B]">{friend.days_since_contact}</p>
        <span className="px-2 my-2 py-1.5 rounded-full font-medium bg-[#CBFADB] text-[#244D3F]">
          {friend.tags}
        </span>
        <span className="">{friend.status}</span>
      </div>
    </div>
  );
};

export default FriendsCard;
