const Banner = () => {
  return (
    <div className="banner container mx-auto ">
      <div className="banner-heading text-center">
        <h2 className="text-[48px] font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B] mt-4 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="font-semibold cursor-pointer hover:scale-110 shadow-sm text-white bg-[#275a49e0] px-4 py-3 rounded-md">
          Add a Friend
        </button>
      </div>

      <div className="">
        <div className="banner-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 ">
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
          <div className="text-center text-[#275a49e0] rounded-md space-y-2 shadow-sm hover:shadow-xl p-8">
            <h2 className="font-semibold text-[32px]">20</h2>
            <p>Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
