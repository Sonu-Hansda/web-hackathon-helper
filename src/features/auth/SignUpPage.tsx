import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../../shared/assets/icons/Google';
import InstagramIcon from '../../shared/assets/icons/Instagram';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541275055241-329bbdf9a191?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="flex flex-col justify-between p-8 h-full">
          <div>
            <h1 className="text-4xl font-bold">AMU</h1>
            <p className="text-xl mt-4">Capturing Moments, Creating Memories</p>
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
        <h1 className="text-3xl font-bold mb-8">Create an account</h1>
        <form className="space-y-6 w-full max-w-md">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 transition duration-300 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 transition duration-300 focus:outline-none"
            />
          </div>

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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 transition duration-300 focus:outline-none"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2 accent-purple-500"
            />
            <label className="text-sm">
              I agree to the{' '}
              <a href="#" className="text-purple-500 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300 transform hover:scale-105"
          >
            Create account
          </button>

          {/* Social Login */}
          <div className="mt-4 text-center text-sm">
            Or register with
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

        {/* Already have an account? */}
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-500 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;