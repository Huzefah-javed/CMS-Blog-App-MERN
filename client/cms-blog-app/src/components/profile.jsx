
export default function ProfilePage({profileData}) {
   
  
  const {
    name,
    email,
    role,
    isApprove,
    createdAt,
    commentedPosts,
    likePosts,
  } = profileData;
  
    
  if (!profileData) {
    return <div className="text-white">Loading profile...</div>;
  }
  
  
  if (profileData) {
  
  return (
    <div className="min-h-screen dark:bg-slate-800 text-white flex-1/2 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
            {name?.charAt(0)}
          </div>
          <h1 className="mt-4 text-2xl text-gray-700 dark:text-gray-400 font-semibold">{name}</h1>
          <p className="text-sm text-gray-700 dark:text-gray-400">{email}</p>
        </div>

        {/* User Info */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700 dark:text-gray-400">Role:</span>
            <span className="font-medium text-gray-700 dark:text-gray-400">{role}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Profile status:</span>
            <span
              className={`font-medium ${
                isApprove ? "text-green-400" : "text-yellow-400"
              }`}
            >
              {isApprove ? "Approved" : "Pending"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="dark:text-gray-400 text-gray-700">Joined:</span>
            <span className="font-medium dark:text-gray-400 text-gray-800">
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="dark:bg-slate-800 bg-[#f3f3f3] shadow-lg text-gray-700 rounded-xl p-4 text-center">
            <p className="text-lg font-bold">{commentedPosts?.length}</p>
            <p className="dark:text-gray-400 text-gray-700 text-sm">Comments Done</p>
          </div>
          <div className="dark:bg-slate-800 bg-[#f3f3f3] shadow-lg text-gray-700 rounded-xl p-4 text-center">
            <p className="text-lg font-bold">{likePosts?.length}</p>
            <p className="dark:text-gray-400 text-gray-700 text-sm">Likes done</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="w-1/2 bg-indigo-600 hover:bg-indigo-700 rounded-xl py-2 font-medium transition">
            Edit Profile
          </button>
          <button className="w-1/2 bg-red-600 hover:bg-red-700 rounded-xl py-2 font-medium transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

    }