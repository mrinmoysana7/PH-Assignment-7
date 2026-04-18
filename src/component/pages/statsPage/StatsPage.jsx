import { useContext } from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import { TimeLineContext } from "../../../context/TimeLineContext";
import { Link } from "react-router";

const StatsPage = () => {
  const { timelineData } = useContext(TimeLineContext);

  const callCount = timelineData.filter((item) => item.type === "call").length;
  const textCount = timelineData.filter((item) => item.type === "text").length;
  const videoCount = timelineData.filter(
    (item) => item.type === "video",
  ).length;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];

  //   Empty State
  if (timelineData.length === 0) {
    return (
      <div className="container mx-auto p-10">
        <h2 className="text-4xl font-bold mb-6">Friendship Analytics</h2>

        <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486754.png"
            className="w-40 mb-6 opacity-70"
          />

          <h3 className="text-2xl font-semibold mb-2">No Data to Analyze</h3>

          <p className="text-gray-500 mb-6">
            Start interacting with your friends to see analytics here 📊
          </p>

          <Link
            to="/"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  //   Main Data
  return (
    <div className="container mx-auto p-10">
      <h2 className="font-bold text-[48px] ">Friendship Analytics</h2>

      <div className="bg-white p-6 rounded-lg mt-6 shadow-lg">
        <h2 className="text-[20px] text-[#244D3F] font-medium mb-4">By Interaction Type</h2>

        <PieChart width={400} className="mx-auto" height={300}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={80}
            outerRadius={100}
            paddingAngle={5}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default StatsPage;
