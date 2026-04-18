import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#EAF4EF] px-6 text-center">

      {/* Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
        alt="error"
        className="w-48 md:w-64 mb-6 opacity-80"
      />

      {/* Title */}
      <h1 className="text-5xl font-bold text-[#244D3F] mb-3">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-6">
        The page you are looking for doesn’t exist or has been moved.
        Let’s get you back on track 🌱
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        
        <Link
          to="/"
          className="bg-[#2F6F57] text-white px-6 py-2 rounded-lg hover:bg-[#245946] transition"
        >
          Go Home
        </Link>

        <Link
          to="/timeline"
          className="border border-[#2F6F57] text-[#2F6F57] px-6 py-2 rounded-lg hover:bg-[#2F6F57] hover:text-white transition"
        >
          View Timeline
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;