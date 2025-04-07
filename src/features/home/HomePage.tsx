const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Welcome to the Home Page!</h1>
      <p className="text-gray-700 text-lg mb-8">You are now logged in. Enjoy your stay!</p>
      <div className="space-x-4">
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
          Explore
        </button>
        <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300">
          Settings
        </button>
      </div>
    </div>
  );
};

export default HomePage;