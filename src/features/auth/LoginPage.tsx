import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../../shared/assets/icons/Google';
import InstagramIcon from '../../shared/assets/icons/Instagram';
import { useAuth } from '../../shared/hooks/useAuth';

const LoginPage = () => {
  const [token, setToken] = useState("");
  const {login, isLoading} = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(token.trim()){
      login(token);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500220621438-7f1c548f639a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="flex flex-col justify-between p-8 h-full">
          <div>
            <h1 className="text-4xl font-bold">AMU</h1>
            <p className="text-xl mt-4">Your Memories, Your Stories</p>
          </div>
          <div className="flex space-x-2">
            <span className="bg-gray-700 w-4 h-4 rounded-full"></span>
            <span className="bg-gray-700 w-4 h-4 rounded-full"></span>
            <span className="bg-purple-500 w-4 h-4 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Log in</h1>
        <form className="space-y-6 w-full max-w-md">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 transition duration-300 focus:outline-none"
          />

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 transition duration-300 focus:outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <Link to="#" className="text-purple-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300 transform hover:scale-105"
          >
            Log in
          </button>

          {/* Social Login */}
          <div className="mt-4 text-center text-sm">
            Or log in with
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="flex items-center space-x-2 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              <GoogleIcon width={24} height={24} />
              <span>Google</span>
            </button>
            <button className="flex items-center space-x-2 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              <InstagramIcon width={24} height={24} />
              <span>Instagram</span>
            </button>
          </div>
        </form>

        {/* Don't have an account? */}
        <div className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;