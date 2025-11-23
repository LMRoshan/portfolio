import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FaUserShield, FaLock, FaFlagCheckered, FaFootballBall } from "react-icons/fa";

const Login = () => {

  const navigate = useNavigate()
  
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async(values, action) => {
    
       const { username, password } = values;
        try {
          const response = await fetch("http://localhost:3070/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });

          const json = await response.json();
          if (json.success) {
            localStorage.setItem("authToken", json.authToken);
            navigate("/admin");
          } else {
            alert("Invalid credentials");
            action.resetForm();
          }
        } catch (error) {
          console.log("Network Error", error);
        }
    },
  });

  const getInputBorderColor = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return "border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20";
    }
    if (formik.touched[field] && !formik.errors[field]) {
      return "border-green-500 focus:border-green-400 focus:ring-2 focus:ring-green-500/20";
    }
    return "border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden p-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-white animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-red-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-white animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            Array.from({ length: 8 }).map((_, j) => (
              <div
                key={`${i}-${j}`}
                className={`absolute w-4 h-4 ${(i + j) % 2 === 0 ? 'bg-white' : 'bg-black'}`}
                style={{ top: i * 4, left: j * 4 }}
              />
            ))
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        {/* Rugby Ball Patterns */}
        <div className="absolute top-20 left-20 w-16 h-8 bg-white rounded-full rotate-45 opacity-20"></div>
        <div className="absolute bottom-32 right-32 w-12 h-6 bg-white rounded-full rotate-12 opacity-20"></div>
        <div className="absolute top-40 right-40 w-20 h-10 bg-white rounded-full -rotate-45 opacity-20"></div>
        
        {/* Jersey Stripes */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-white opacity-10"></div>
        <div className="absolute top-0 left-3/4 w-2 h-full bg-white opacity-10"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Login Card */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl w-full max-w-md relative z-10 transform hover:scale-105 transition-all duration-300">
        
        {/* F1 Racing Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            {/* F1 Car Icon */}
            <div className="text-red-500 text-2xl">
              🏎️
            </div>
            <h1 className="text-3xl font-bold text-white">Login Portal</h1>
            {/* Rugby Ball Icon */}
            <div className="text-green-500 text-2xl">
              🏉
            </div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-cyan-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-400">Secure Access Required</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-white font-medium mb-2">
              <div className="flex items-center gap-2">
                <FaUserShield className="text-cyan-400" />
                Username
              </div>
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className={`w-full bg-gray-700/50 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${getInputBorderColor(
                "username"
              )}`}
              placeholder="Enter Login username"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                <span>⚠️</span>
                {formik.errors.username}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-white font-medium mb-2">
              <div className="flex items-center gap-2">
                <FaLock className="text-purple-400" />
                Password
              </div>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full bg-gray-700/50 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${getInputBorderColor(
                "password"
              )}`}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                <span>⚠️</span>
                {formik.errors.password}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={`w-full py-4 rounded-xl font-bold text-lg transform transition-all duration-300 flex items-center justify-center gap-3 border-2 ${
              formik.isSubmitting
                ? "bg-gray-700 text-gray-400 border-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-red-600 to-cyan-600 hover:from-red-500 hover:to-cyan-500 text-white border-red-500/30 hover:scale-105 hover:shadow-2xl"
            }`}
          >
            {formik.isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Authenticating...
              </>
            ) : (
              <>
                <FaFlagCheckered className="text-white" />
                Access Dashboard
                <FaFootballBall className="text-white" />
              </>
            )}
          </button>

          {/* Security Notice */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              🔒 Secure Login access only
            </p>
          </div>
        </form>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-8 h-8 bg-red-500 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-10 left-10 w-6 h-6 bg-cyan-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Login;