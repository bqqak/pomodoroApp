import { FaCheckCircle } from "react-icons/fa";

function CountingSessions({ counter }) {
  const totalMinutes = 50 * counter;

  return (
    <div className="flex flex-wrap gap-4 mt-6 ml-10">
      {Array.from({ length: Number(counter) }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white/20 rounded-xl shadow-lg px-8 py-6 flex flex-col items-center min-w-[140px] transition-transform hover:scale-105"
        >
          <FaCheckCircle className="text-green-400 text-3xl mb-2 animate-bounce" />
          <div className="text-xl text-amber-200 font-semibold mb-1">
            Session {idx + 1}
          </div>
          <div className="text-green-200 font-bold">Done!</div>
        </div>
      ))}
      <div className="flex flex-col justify-center items-center min-w-[140px] bg-gradient-to-r from-amber-400 to-yellow-200 rounded-xl px-8 py-6 shadow-lg ml-4">
        <span className="text-gray-900 text-lg font-bold">Total Time</span>
        <span className="text-2xl text-gray-800 font-extrabold">{totalMinutes} min</span>
      </div>
    </div>
  );
}

export default CountingSessions;