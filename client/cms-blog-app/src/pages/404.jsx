import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f4f4f4] dark:bg-slate-800 px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        404
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-2xl bg-gray-800 text-white dark:bg-gray-200 dark:text-slate-900 font-medium shadow-md hover:scale-105 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
