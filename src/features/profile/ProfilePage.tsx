const ProfilePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-700">Your Profile</h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Name:</span>
            <span className="text-teal-600 font-semibold">John Doe</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Email:</span>
            <span className="text-teal-600 font-semibold">john.doe@example.com</span>
          </div>
        </div>
        <button className="mt-6 w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;