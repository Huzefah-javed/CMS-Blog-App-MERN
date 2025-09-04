import { Link } from "react-router-dom";
import { logout } from "../Api/api";


export default function UserNotApproved() {
    const handleLogout =async()=>{
       const res = await logout()
       if (res.status=== 200) {
        localStorage.clear();
        window.location.href = "/";
    
       }
    
    }
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f4f4f4] dark:bg-slate-800 px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        400
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        Oops! you are not approved yet by admin
      </p>
      <button
        onClick={handleLogout}
        className="px-6 py-3 rounded-2xl bg-gray-800 text-white dark:bg-gray-200 dark:text-slate-900 font-medium shadow-md hover:scale-105 transition-all"
      >
        logout
      </button>
    </div>
  );
}
