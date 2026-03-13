import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { Link } from "react-router-dom";


export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, getExit] = useState("");
  const [loading, setloading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

  const onPress1 = async (e) => {
    const id = toast.loading('Registering your account...', {
      position: 'bottom-left'
    })
    setloading(true)
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/register`, {
        name: name,
        email: email,
        password: password
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      }

      )
      const data = response.data;
      if (data) {
        toast.update(id, { render: `${data.message}`, type: "success", isLoading: false });
      }
      getExit(data.token);
      localStorage.setItem("token", data.token);
      setloading(false);
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.response?.data?.message || err.message || "An error occurred during registration";
      toast.update(id, { render: errorMessage, type: "error", isLoading: false });
      setloading(false);
      console.log("some error has occured!", err);
    }
  }

  if (user) {
    return (
      <>
        {window.open("/dashboard", "_self")}
      </>
    )
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Card Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <div className="mx-auto h-16 w-16 bg-gradient-to-br from-customColor to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Create Your Account
              </h2>
              <p className="text-sm text-gray-500">
                Start tracking your job applications today
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onPress1} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    placeholder="John Doe"
                    className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customColor focus:border-transparent transition-all duration-200"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    placeholder="john@example.com"
                    className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customColor focus:border-transparent transition-all duration-200"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={password}
                    placeholder="••••••••"
                    className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customColor focus:border-transparent transition-all duration-200"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-customColor to-indigo-600 hover:from-indigo-600 hover:to-customColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customColor transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/signin" className="font-semibold text-customColor hover:text-indigo-600 transition-colors duration-200">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

