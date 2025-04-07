import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Web Hackathon Helper</h1>
        <div className="space-x-4">
          <Link to="/home" className="hover:text-indigo-200 transition duration-300">
            Home
          </Link>
          <Link to="/profile" className="hover:text-indigo-200 transition duration-300">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;