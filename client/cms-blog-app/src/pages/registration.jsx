import { useState } from "react";
import { registration } from "../Api/api";


export function Registration() {

  const [form, setForm] = useState({name: "", email: "", password: "", role:""})
  
  
      const formSubmitting=async(e)=>{
          e.preventDefault();
            await registration(form)
            console.log("form submitted")
      }
      





  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-slate-100 to-blue-200 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a]/60 shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2 backdrop-blur-md">

        {/* Left Visual / Info Panel */}
        <div className="hidden md:flex flex-col justify-center items-center p-10 bg-blue-600 text-white dark:bg-blue-800">
          <h2 className="text-4xl font-bold mb-4">Welcome</h2>
          <p className="text-lg text-center">Join the community and unlock your full potential with us.</p>
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="Illustration"
            className="mt-6 w-3/4"
          />
        </div>

        {/* Right Form */}
        <div className="w-full p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Sign Up</h2>
          <p className="text-gray-500 dark:text-gray-300 text-center mb-6 text-sm">
            Create your account to get started.
          </p>

          <form className="space-y-6" onSubmit={formSubmitting}>
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={(e)=>{setForm({...form, name:e.target.value})}}
                placeholder=" "
                className="peer p-4 w-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="fullName"
                className="absolute left-3 top-3 text-gray-500  dark:text-gray-300 text-sm transition-all 
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                
                onChange={(e)=>{setForm({...form, email:e.target.value})}}
                className="peer w-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-gray-500 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Email
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                
                onChange={(e)=>{setForm({...form, password:e.target.value})}}
                className="peer w-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-3 text-gray-500 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Password
              </label>
            </div>

            {/* Role Select */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1"
              >
                Join as
              </label>
              <select
                id="role"
                name="role"
                
                onChange={(e)=>{setForm({...form, role:e.target.value})}}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="user">User</option>
                <option value="writer">Writer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
