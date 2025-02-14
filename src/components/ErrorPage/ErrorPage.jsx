import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-50 via-purple-100 to-gray-50 text-gray-800 p-4">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you are looking for does not exist or an error has occurred.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none transition-all"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
