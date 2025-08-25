import { useContext, useState } from "react";
import { login } from "../Api/api";
import { AuthContext } from "../App";

export function Login() {

    const {authUser, setAuthUser} = useContext(AuthContext)
    const [form, setForm] = useState({email: "", password: "", role:""})


    const formSubmitting=async(e)=>{
        e.preventDefault();
         const userDetail = await login(form)
         setAuthUser(userDetail)
          console.log("form submitted")
    }


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-slate-100 to-blue-200 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a]/60 shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2 backdrop-blur-md">

        {/* Left Visual Section */}
        <div className="hidden md:flex flex-col justify-center items-center p-10 bg-blue-600 text-white dark:bg-blue-800">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg text-center">Login to your account and continue your journey with us.</p>
          <img
            src="login-img.png"
            alt="Illustration"
            className="mt-6 w-3/4 mix-blend-multiply"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Login</h2>
          <p className="text-gray-500 dark:text-gray-300 text-center mb-6 text-sm">
            Enter your credentials to access your account.
          </p>

          <form className="space-y-6" onSubmit={formSubmitting}>
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e)=>{setForm({...form, email:e.target.value})}}
                placeholder=" "
                className="peer w-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-gray-500 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Email
              </label>
            </div>

            {/* Password Field */}
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

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1"
              >
                Login as
              </label>
              <select
                id="role"
                name="role"
                onChange={(e)=>{setForm({...form, role: e.target.value})}}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">--Select Role--</option>
                <option value="user">User</option>
                <option value="writer">Writer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </form>
          <span className="text-gray-300 text-sm pt-4">
  New to this app:{" "}
  <a
    href="/registration"
    className="text-blue-400 hover:text-blue-500 underline font-medium transition-colors duration-200"
  >
    Register here
  </a>
</span>

        </div>
      </div>
    </div>
  );
}
